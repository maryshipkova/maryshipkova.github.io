"use strict";
exports.__esModule = true;
var SensorInputHandler = /** @class */ (function () {
    function SensorInputHandler(element, initialConditions, transformProperties, zoomField, brightnessField) {
        this._element = element;
        this._transformProperties = transformProperties;
        this._prevConditions = initialConditions;
        this._startProperties = JSON.parse(JSON.stringify(transformProperties));
        this._zoomField = zoomField;
        this._brightnessField = brightnessField;
        this._pointerEvents = [];
    }
    SensorInputHandler.prototype.setEventHandlers = function () {
        var _this = this;
        if (this._zoomField.parentElement) {
            this._zoomField.parentElement.addEventListener("pointerdown", function (e) {
                _this._resetProperties();
            });
        }
        if (this._brightnessField.parentElement) {
            this._brightnessField.parentElement.addEventListener("pointerdown", function (e) {
                _this._resetProperties();
            });
        }
        this._element.addEventListener("pointerenter", function (event) {
            _this._resetConditions();
            var currEvent = event;
            currEvent.currX = event.clientX;
            currEvent.currY = event.clientY;
            _this._pointerEvents.push(currEvent);
        });
        this._element.addEventListener("pointerleave", function (event) {
            _this._pointerEvents = _this._pointerEvents.filter(function (e) { return e.pointerId !== event.pointerId; });
        });
        this._element.addEventListener("pointermove", function (event) {
            var currEvent = _this._pointerEvents.find(function (e) { return e.pointerId === event.pointerId; });
            if (currEvent) {
                currEvent.prevX = currEvent.currX;
                currEvent.prevY = currEvent.currY;
                currEvent.currX = event.clientX;
                currEvent.currY = event.clientY;
                _this._handlePointerMove(currEvent);
            }
        });
    };
    SensorInputHandler.prototype._updateField = function (field, newCondition) {
        field.innerHTML = newCondition.toString();
    };
    SensorInputHandler.prototype._updateView = function () {
        this._element.style.transform = "translateX(" + this._transformProperties.translateX + "%) translateY(" + this._transformProperties.translateY + "%) scale(" + this._transformProperties.scale + ")";
        this._element.style.filter = "brightness(" + this._transformProperties.brightness + "%)";
    };
    SensorInputHandler.prototype._updateProperty = function (property, value) {
        this._transformProperties[property] = +value;
        this._updateView();
    };
    SensorInputHandler.prototype._handlePointerMove = function (event) {
        event.preventDefault();
        if (this._pointerEvents.length === 1 && this._transformProperties.scale > 1.0) {
            this._calcChanges("translateX", event.clientX);
        }
        else if (this._pointerEvents.length === 2) {
            var event1 = this._pointerEvents[0];
            var event2 = this._pointerEvents[1];
            var currDestance = this._calcDistance(event1.currX, event1.currY, event2.currX, event2.currY);
            var prevDistance = this._calcDistance(event1.prevX, event1.prevY, event2.prevX, event2.prevY);
            this._handlePointerRotation(event1, event2);
            if (Math.abs(currDestance - prevDistance) > 1) {
                this._handleScaling(prevDistance, currDestance);
            }
            else {
                this._handlePointerRotation(event1, event2);
            }
        }
    };
    SensorInputHandler.prototype._calcDistance = function (x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    };
    SensorInputHandler.prototype._handleScaling = function (prevDistance, currDestance) {
        if (currDestance > prevDistance) {
            this._updateProperty("scale", this._transformProperties.scale + 0.05);
        }
        else if (currDestance < prevDistance && this._transformProperties.scale >= 1.05) {
            this._updateProperty("scale", this._transformProperties.scale - 0.05);
        }
        this._updateField(this._zoomField, (this._transformProperties.scale * 100).toPrecision(3));
    };
    SensorInputHandler.prototype._calcAngleFromTriangle = function (A, B, C) {
        return (Math.pow(A, 2) + Math.pow(B, 2) - Math.pow(C, 2)) / (2 * A * B);
    };
    SensorInputHandler.prototype._handlePointerRotation = function (point1, point2) {
        var circleCenter = {
            x: Math.round((point1.currX + point2.currX) / 2),
            y: Math.round((point1.currY + point2.currY) / 2)
        };
        var abscissaPoint = {
            x: circleCenter.x * 2,
            y: circleCenter.y
        };
        var point1CurrAngle = this._calcAngleFromTriangle(circleCenter.x, // distance between center and point on abscissa axis
        this._calcDistance(circleCenter.x, circleCenter.y, point1.currX, point1.currY), this._calcDistance(abscissaPoint.x, abscissaPoint.y, point1.currX, point1.currY));
        var point1PrevAngle = this._calcAngleFromTriangle(circleCenter.x, // distance between center and point on abscissa axis
        this._calcDistance(circleCenter.x, circleCenter.y, point1.prevX, point1.prevY), this._calcDistance(abscissaPoint.x, abscissaPoint.y, point1.prevX, point1.prevY));
        var point2CurrAngle = this._calcAngleFromTriangle(circleCenter.x, // distance between center and point on abscissa axis
        this._calcDistance(circleCenter.x, circleCenter.y, point2.currX, point2.currY), this._calcDistance(abscissaPoint.x, abscissaPoint.y, point2.currX, point2.currY));
        var point2PrevAngle = this._calcAngleFromTriangle(circleCenter.x, // distance between center and point on abscissa axis
        this._calcDistance(circleCenter.x, circleCenter.y, point2.prevX, point2.prevY), this._calcDistance(abscissaPoint.x, abscissaPoint.y, point2.prevX, point2.prevY));
        if (point1.currY >= point2.currY) { // 1: I, 2:  OR 1: II, 2: IV
            if (point1CurrAngle >= point1PrevAngle && point2CurrAngle <= point2PrevAngle) {
                this._updateProperty("brightness", this._transformProperties.brightness - 1);
            }
            else {
                this._updateProperty("brightness", this._transformProperties.brightness + 1);
            }
        }
        else { // 1: III, 2: I OR 1: IV, 2: II
            if (point1CurrAngle <= point1PrevAngle && point2CurrAngle >= point2PrevAngle) {
                this._updateProperty("brightness", this._transformProperties.brightness - 1);
            }
            else {
                this._updateProperty("brightness", this._transformProperties.brightness + 1);
            }
        }
        this._updateField(this._brightnessField, this._transformProperties.brightness);
    };
    SensorInputHandler.prototype._calcChanges = function (conditionName, eventCondition) {
        if (!this._prevConditions[conditionName]) {
            this._prevConditions[conditionName] = eventCondition.toString();
            return;
        }
        if (Math.abs(eventCondition - +this._prevConditions[conditionName]) > 5) {
            var newConditionValue = (+this._prevConditions[conditionName] < eventCondition) ?
                this._transformProperties[conditionName] + 5 : this._transformProperties[conditionName] - 5;
            this._updateProperty(conditionName, newConditionValue);
            this._prevConditions[conditionName] = eventCondition.toString();
        }
    };
    SensorInputHandler.prototype._resetProperties = function () {
        this._updateField(this._zoomField, 100);
        this._updateField(this._brightnessField, 100);
        for (var prop in this._transformProperties) {
            this._updateProperty(prop, this._startProperties[prop]);
        }
    };
    SensorInputHandler.prototype._resetConditions = function () {
        for (var prop in this._prevConditions) {
            this._prevConditions[prop] = "";
        }
    };
    return SensorInputHandler;
}());
exports.SensorInputHandler = SensorInputHandler;
