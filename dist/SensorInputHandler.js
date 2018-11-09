"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SensorInputHandler {
    constructor(element, initialConditions, transformProperties, zoomField, brightnessField) {
        this.element = element;
        this.transformProperties = transformProperties;
        this.prevConditions = initialConditions;
        this.startProperties = JSON.parse(JSON.stringify(transformProperties));
        this.zoomField = zoomField;
        this.brightnessField = brightnessField;
        this.pointerEvents = [];
    }
    setEventHandlers() {
        if (this.zoomField && this.zoomField.parentElement) {
            this.zoomField.parentElement.addEventListener("pointerdown", (e) => {
                this._resetProperties();
            });
        }
        if (this.brightnessField && this.brightnessField.parentElement) {
            this.brightnessField.parentElement.addEventListener("pointerdown", (e) => {
                this._resetProperties();
            });
        }
        if (this.element) {
            this.element.addEventListener("pointerenter", (event) => {
                this._resetConditions();
                const currEvent = event;
                currEvent.currX = event.clientX;
                currEvent.currY = event.clientY;
                this.pointerEvents.push(currEvent);
            });
            this.element.addEventListener("pointerleave", (event) => {
                this.pointerEvents = this.pointerEvents.filter((e) => e.pointerId !== event.pointerId);
            });
            this.element.addEventListener("pointermove", (event) => {
                let currEvent = event;
                this.pointerEvents.forEach((e) => {
                    if (e.pointerId === event.pointerId) {
                        currEvent = e;
                        return e;
                    }
                });
                if (currEvent) {
                    currEvent.prevX = currEvent.currX;
                    currEvent.prevY = currEvent.currY;
                    currEvent.currX = event.clientX;
                    currEvent.currY = event.clientY;
                    this._handlePointerMove(currEvent);
                }
            });
        }
    }
    _updateField(field, newCondition) {
        field.innerHTML = newCondition.toString();
    }
    _updateView() {
        this.element.style.transform = `translateX(${this.transformProperties.translateX}%) translateY(${this.transformProperties.translateY}%) scale(${this.transformProperties.scale})`;
        this.element.style.filter = `brightness(${this.transformProperties.brightness}%)`;
    }
    _updateProperty(property, value) {
        this.transformProperties[property] = +value;
        this._updateView();
    }
    _handlePointerMove(event) {
        event.preventDefault();
        if (this.pointerEvents.length === 1 && this.transformProperties.scale > 1.0) {
            this._calcChanges("translateX", event.clientX);
        }
        else if (this.pointerEvents.length === 2) {
            const event1 = this.pointerEvents[0];
            const event2 = this.pointerEvents[1];
            const currDestance = this._calcDistance(event1.currX, event1.currY, event2.currX, event2.currY);
            const prevDistance = this._calcDistance(event1.prevX, event1.prevY, event2.prevX, event2.prevY);
            this._handlePointerRotation(event1, event2);
            if (Math.abs(currDestance - prevDistance) > 1) {
                this._handleScaling(prevDistance, currDestance);
            }
            else {
                this._handlePointerRotation(event1, event2);
            }
        }
    }
    _calcDistance(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }
    _handleScaling(prevDistance, currDestance) {
        if (currDestance > prevDistance) {
            this._updateProperty("scale", this.transformProperties.scale + 0.05);
        }
        else if (currDestance < prevDistance && this.transformProperties.scale >= 1.05) {
            this._updateProperty("scale", this.transformProperties.scale - 0.05);
        }
        this._updateField(this.zoomField, (this.transformProperties.scale * 100).toPrecision(3));
    }
    _calcAngleFromTriangle(A, B, C) {
        return (Math.pow(A, 2) + Math.pow(B, 2) - Math.pow(C, 2)) / (2 * A * B);
    }
    _handlePointerRotation(point1, point2) {
        const circleCenter = {
            x: Math.round((point1.currX + point2.currX) / 2),
            y: Math.round((point1.currY + point2.currY) / 2),
        };
        const abscissaPoint = {
            x: circleCenter.x * 2,
            y: circleCenter.y,
        };
        const point1CurrAngle = this._calcAngleFromTriangle(circleCenter.x, // distance between center and point on abscissa axis
        this._calcDistance(circleCenter.x, circleCenter.y, point1.currX, point1.currY), this._calcDistance(abscissaPoint.x, abscissaPoint.y, point1.currX, point1.currY));
        const point1PrevAngle = this._calcAngleFromTriangle(circleCenter.x, // distance between center and point on abscissa axis
        this._calcDistance(circleCenter.x, circleCenter.y, point1.prevX, point1.prevY), this._calcDistance(abscissaPoint.x, abscissaPoint.y, point1.prevX, point1.prevY));
        const point2CurrAngle = this._calcAngleFromTriangle(circleCenter.x, // distance between center and point on abscissa axis
        this._calcDistance(circleCenter.x, circleCenter.y, point2.currX, point2.currY), this._calcDistance(abscissaPoint.x, abscissaPoint.y, point2.currX, point2.currY));
        const point2PrevAngle = this._calcAngleFromTriangle(circleCenter.x, // distance between center and point on abscissa axis
        this._calcDistance(circleCenter.x, circleCenter.y, point2.prevX, point2.prevY), this._calcDistance(abscissaPoint.x, abscissaPoint.y, point2.prevX, point2.prevY));
        if (point1.currY >= point2.currY) { // 1: I, 2:  OR 1: II, 2: IV
            if (point1CurrAngle >= point1PrevAngle && point2CurrAngle <= point2PrevAngle) {
                this._updateProperty("brightness", this.transformProperties.brightness - 1);
            }
            else {
                this._updateProperty("brightness", this.transformProperties.brightness + 1);
            }
        }
        else { // 1: III, 2: I OR 1: IV, 2: II
            if (point1CurrAngle <= point1PrevAngle && point2CurrAngle >= point2PrevAngle) {
                this._updateProperty("brightness", this.transformProperties.brightness - 1);
            }
            else {
                this._updateProperty("brightness", this.transformProperties.brightness + 1);
            }
        }
        this._updateField(this.brightnessField, this.transformProperties.brightness);
    }
    _calcChanges(conditionName, eventCondition) {
        if (!this.prevConditions[conditionName]) {
            this.prevConditions[conditionName] = eventCondition.toString();
            return;
        }
        if (Math.abs(eventCondition - +this.prevConditions[conditionName]) > 5) {
            const newConditionValue = (+this.prevConditions[conditionName] < eventCondition) ?
                this.transformProperties[conditionName] + 5 : this.transformProperties[conditionName] - 5;
            this._updateProperty(conditionName, newConditionValue);
            this.prevConditions[conditionName] = eventCondition.toString();
        }
    }
    _resetProperties() {
        this._updateField(this.zoomField, 100);
        this._updateField(this.brightnessField, 100);
        for (const prop in this.transformProperties) {
            this._updateProperty(prop, this.startProperties[prop]);
        }
    }
    _resetConditions() {
        for (const prop in this.prevConditions) {
            this.prevConditions[prop] = "";
        }
    }
}
exports.SensorInputHandler = SensorInputHandler;
