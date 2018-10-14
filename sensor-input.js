const element = document.querySelectorAll('.card__data__image--img')[1];
const zoomField = document.querySelectorAll('.settings--zoom')[1];
const brightnessField = document.querySelectorAll('.settings--brightness')[1];
const translateTrack = document.querySelector('.settings--range');

const TRANSFORM_PROPERTIES = {
    'translateX': 0,
    'translateY': 0,
    'scale': 1.0,
    'brightness': 100
}
const INITIAL_CONDITIONS = {
    'translateX': "",
    'translateY': "",
    'brightness': "",
}
class sensorInputHandler {

    constructor(element, INITIAL_CONDITIONS, transformProperties, zoomField, brightnessField, translateTrack) {

        this._element = element;
        this._transformProperties = transformProperties;
        this._prevConditions = INITIAL_CONDITIONS;
        this._startProperties = JSON.parse(JSON.stringify(transformProperties));
        this._zoomField = zoomField;
        this._brightnessField = brightnessField;
        this._translateTrack = translateTrack;
        this._pointerEvents = [];
    }

    _updateTrack(newCondition) {

        this._translateTrack.value = parseInt(newCondition);
    }
    _updateField(field, newCondition) {

        field.innerHTML = newCondition;
    }
    
    _updateView() {
        this._element.style.transform = `translateX(${this._transformProperties.translateX}%) translateY(${this._transformProperties.translateY}%) scale(${this._transformProperties.scale})`;
        this._element.style.filter = `brightness(${this._transformProperties.brightness}%)`;
    }

    _updateProperty(property, value) {

        this._transformProperties[property] = value;
        this._updateView();
    }
    setEventHandlers() {

        this._zoomField.parentElement.addEventListener('pointerdown', e=>{
            this._resetProperties()
        });
        this._brightnessField.parentElement.addEventListener('pointerdown', e=>{
            this._resetProperties()
        });
        this._element.addEventListener('pointerenter', (event) => {
            this._resetConditions();
            event.currX = event.clientX;
            event.currY = event.clientY;
            this._pointerEvents.push(event);
        });
        this._element.addEventListener('pointerleave', (event) => {

            this._pointerEvents = this._pointerEvents.filter(e => e.pointerId !== event.pointerId);
        });

        this._element.addEventListener('pointermove', (event) => {
                let currEvent = this._pointerEvents.find(e => e.pointerId === event.pointerId);
                currEvent.prevX = currEvent.currX;
                currEvent.prevY = currEvent.currY;
                currEvent.currX = event.clientX;
                currEvent.currY = event.clientY;
                this._handlePointerMove(event);
            
        });

    }
    _handleTranslation(translationName, translationValue) {

        this._calcChanges(translationName, translationValue);
        this._updateTrack(this._transformProperties[translationName].toPrecision(3));
    }

    _handlePointerMove(event) {

        event.preventDefault();
        if (this._pointerEvents.length === 1 && this._transformProperties.scale > 1.0) {
            this._calcChanges('translateX', event.clientX);
        } else if (this._pointerEvents.length === 2) {
            let event1 = this._pointerEvents[0],
                event2 = this._pointerEvents[1];

            let currDestance = this._calcDistance(event1.currX, event1.currY, event2.currX, event2.currY),
                prevDistance = this._calcDistance(event1.prevX, event1.prevY, event2.prevX, event2.prevY);


            this._handlePointerRotation(event1, event2);


            if (Math.abs(currDestance - prevDistance) > 1) {
                this._handleScaling(prevDistance, currDestance);
            } else {
            this._handlePointerRotation(event1, event2);
            }

        }

    }
    _calcDistance(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }
    _handleScaling(prevDistance, currDestance) {

        if (currDestance > prevDistance) {
            this._updateProperty('scale', this._transformProperties.scale + 0.05);
        } else if (currDestance < prevDistance && this._transformProperties.scale >= 1.05) {
            this._updateProperty('scale', this._transformProperties.scale - 0.05);
        }
        this._updateField(this._zoomField, (this._transformProperties.scale * 100).toPrecision(3));
    }

    _calcAngleFromTriangle(A, B, C) {
        return (Math.pow(A, 2) + Math.pow(B, 2) - Math.pow(C, 2)) / (2 * A * B);
    }

    _handlePointerRotation(point1, point2) {
        let circleCenter = {
            'x': Math.round((point1.currX + point2.currX) / 2),
            'y': Math.round((point1.currY + point2.currY) / 2)
        }
        let abscissaPoint = {
            'x': circleCenter.x * 2,
            'y': circleCenter.y
        }

        let point1CurrAngle = this._calcAngleFromTriangle(
                circleCenter.x, // distance between center and point on abscissa axis
                this._calcDistance(circleCenter.x, circleCenter.y, point1.currX, point1.currY),
                this._calcDistance(abscissaPoint.x, abscissaPoint.y, point1.currX, point1.currY)
            ),
            point1PrevAngle = this._calcAngleFromTriangle(
                circleCenter.x, // distance between center and point on abscissa axis
                this._calcDistance(circleCenter.x, circleCenter.y, point1.prevX, point1.prevY),
                this._calcDistance(abscissaPoint.x, abscissaPoint.y, point1.prevX, point1.prevY),
            ),
            point2CurrAngle = this._calcAngleFromTriangle(
                circleCenter.x, // distance between center and point on abscissa axis
                this._calcDistance(circleCenter.x, circleCenter.y, point2.currX, point2.currY),
                this._calcDistance(abscissaPoint.x, abscissaPoint.y, point2.currX, point2.currY)
            ),
            point2PrevAngle = this._calcAngleFromTriangle(
                circleCenter.x, // distance between center and point on abscissa axis
                this._calcDistance(circleCenter.x, circleCenter.y, point2.prevX, point2.prevY),
                this._calcDistance(abscissaPoint.x, abscissaPoint.y, point2.prevX, point2.prevY),
            );


        if (point1.currY >= point2.currY) {//1: I, 2:  OR 1: II, 2: IV

            if(point1CurrAngle >= point1PrevAngle && point2CurrAngle <= point2PrevAngle){
                this._updateProperty('brightness', this._transformProperties.brightness-1);
            }else{
                this._updateProperty('brightness', this._transformProperties.brightness+1);
            }
          
        }else { //1: III, 2: I OR 1: IV, 2: II
            if(point1CurrAngle <= point1PrevAngle && point2CurrAngle >= point2PrevAngle){
                this._updateProperty('brightness', this._transformProperties.brightness-1);
            }else{
                this._updateProperty('brightness', this._transformProperties.brightness+1);
            }
        }
        this._updateField(this._brightnessField, this._transformProperties.brightness);
    }

    _calcChanges(conditionName, eventCondition) {

        if (!this._prevConditions[conditionName]) {
            this._prevConditions[conditionName] = eventCondition;
            return;
        }
        if (Math.abs(eventCondition - this._prevConditions[conditionName]) > 5) {
            let newConditionValue = (this._prevConditions[conditionName] < eventCondition) ? this._transformProperties[conditionName] + 5 : this._transformProperties[conditionName] - 5;

            this._updateProperty(conditionName, newConditionValue);
            this._prevConditions[conditionName] = eventCondition;

        }
    }

    _resetProperties() {
        this._updateField(this._zoomField, 100);
        this._updateField(this._brightnessField, 100);
        for (let prop in this._transformProperties) {
            this._updateProperty(prop, this._startProperties[prop]);
        }
    }
    _resetConditions() {

        for (let prop in this._prevConditions) {
            this._prevConditions[prop] = '';
        }
    }

    _handleTouchRotation(eventRotation) {

        this._calcChanges('brightness', eventRotation);
        this._updateField(this._brightnessField, this._transformProperties.brightness);

    }


}

let ImageSensorInputHandler = new sensorInputHandler(element, INITIAL_CONDITIONS, TRANSFORM_PROPERTIES, zoomField, brightnessField, translateTrack);
ImageSensorInputHandler.setEventHandlers();