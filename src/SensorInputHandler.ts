import {IConditions, IPoinerEvent, ITransformProperties} from "./SensorInputInterfaces";

export class SensorInputHandler {
    private readonly _transformProperties: ITransformProperties;
    private readonly _prevConditions: IConditions;
    private readonly _startProperties: ITransformProperties;
    private readonly _brightnessField: HTMLElement;
    private readonly _zoomField: HTMLElement;
    private _pointerEvents: IPoinerEvent[];
    private _element: HTMLElement;

    constructor(element: HTMLElement, initialConditions: IConditions, transformProperties: ITransformProperties,
                zoomField: HTMLElement, brightnessField: HTMLElement) {

        this._element = element;
        this._transformProperties = transformProperties;
        this._prevConditions = initialConditions;
        this._startProperties = JSON.parse(JSON.stringify(transformProperties));
        this._zoomField = zoomField;
        this._brightnessField = brightnessField;
        this._pointerEvents = [];
    }

    public setEventHandlers(): void {

        if (this._zoomField.parentElement) {
            this._zoomField.parentElement.addEventListener("pointerdown", (e) => {
                this._resetProperties();
            });
        }

        if (this._brightnessField.parentElement) {
            this._brightnessField.parentElement.addEventListener("pointerdown", (e) => {
                this._resetProperties();
            });
        }

        this._element.addEventListener("pointerenter", (event) => {
            this._resetConditions();
            const currEvent: IPoinerEvent = event as IPoinerEvent;
            currEvent.currX = event.clientX;
            currEvent.currY = event.clientY;
            this._pointerEvents.push(currEvent);
        });
        this._element.addEventListener("pointerleave", (event) => {

            this._pointerEvents = this._pointerEvents.filter((e) => e.pointerId !== event.pointerId);
        });

        this._element.addEventListener("pointermove", (event) => {
            const currEvent = this._pointerEvents.find((e) => e.pointerId === event.pointerId);
            if (currEvent) {
                currEvent.prevX = currEvent.currX;
                currEvent.prevY = currEvent.currY;
                currEvent.currX = event.clientX;
                currEvent.currY = event.clientY;
                this._handlePointerMove(currEvent);
            }

        });

    }

    private _updateField(field: HTMLElement, newCondition: string | number): void {
        field.innerHTML = newCondition.toString();
    }

    private _updateView() {
        this._element.style.transform = `translateX(${this._transformProperties.translateX}%) translateY(${this._transformProperties.translateY}%) scale(${this._transformProperties.scale})`;
        this._element.style.filter = `brightness(${this._transformProperties.brightness}%)`;
    }

    private _updateProperty(property: string, value: number | string): void {

        this._transformProperties[property] = +value;
        this._updateView();
    }

    private _handlePointerMove(event: IPoinerEvent): void {

        event.preventDefault();
        if (this._pointerEvents.length === 1 && this._transformProperties.scale > 1.0) {
            this._calcChanges("translateX", event.clientX);
        } else if (this._pointerEvents.length === 2) {
            const event1 = this._pointerEvents[0];
            const event2 = this._pointerEvents[1];

            const currDestance = this._calcDistance(event1.currX, event1.currY, event2.currX, event2.currY);
            const prevDistance = this._calcDistance(event1.prevX, event1.prevY, event2.prevX, event2.prevY);

            this._handlePointerRotation(event1, event2);

            if (Math.abs(currDestance - prevDistance) > 1) {
                this._handleScaling(prevDistance, currDestance);
            } else {
                this._handlePointerRotation(event1, event2);
            }

        }

    }

    private _calcDistance(x1: number, y1: number, x2: number, y2: number): number {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }

    private _handleScaling(prevDistance: number, currDestance: number): void {

        if (currDestance > prevDistance) {
            this._updateProperty("scale", this._transformProperties.scale + 0.05);
        } else if (currDestance < prevDistance && this._transformProperties.scale >= 1.05) {
            this._updateProperty("scale", this._transformProperties.scale - 0.05);
        }
        this._updateField(this._zoomField, (this._transformProperties.scale * 100).toPrecision(3));
    }

    private _calcAngleFromTriangle(A: number, B: number, C: number): number {
        return (Math.pow(A, 2) + Math.pow(B, 2) - Math.pow(C, 2)) / (2 * A * B);
    }

    private _handlePointerRotation(point1: IPoinerEvent, point2: IPoinerEvent) {
        const circleCenter = {
            x: Math.round((point1.currX + point2.currX) / 2),
            y: Math.round((point1.currY + point2.currY) / 2),
        };
        const abscissaPoint = {
            x: circleCenter.x * 2,
            y: circleCenter.y,
        };

        const point1CurrAngle = this._calcAngleFromTriangle(
            circleCenter.x, // distance between center and point on abscissa axis
            this._calcDistance(circleCenter.x, circleCenter.y, point1.currX, point1.currY),
            this._calcDistance(abscissaPoint.x, abscissaPoint.y, point1.currX, point1.currY),
        );
        const point1PrevAngle = this._calcAngleFromTriangle(
            circleCenter.x, // distance between center and point on abscissa axis
            this._calcDistance(circleCenter.x, circleCenter.y, point1.prevX, point1.prevY),
            this._calcDistance(abscissaPoint.x, abscissaPoint.y, point1.prevX, point1.prevY),
        );

        const point2CurrAngle = this._calcAngleFromTriangle(
            circleCenter.x, // distance between center and point on abscissa axis
            this._calcDistance(circleCenter.x, circleCenter.y, point2.currX, point2.currY),
            this._calcDistance(abscissaPoint.x, abscissaPoint.y, point2.currX, point2.currY),
        );
        const point2PrevAngle = this._calcAngleFromTriangle(
            circleCenter.x, // distance between center and point on abscissa axis
            this._calcDistance(circleCenter.x, circleCenter.y, point2.prevX, point2.prevY),
            this._calcDistance(abscissaPoint.x, abscissaPoint.y, point2.prevX, point2.prevY),
        );

        if (point1.currY >= point2.currY) {// 1: I, 2:  OR 1: II, 2: IV

            if (point1CurrAngle >= point1PrevAngle && point2CurrAngle <= point2PrevAngle) {
                this._updateProperty("brightness", this._transformProperties.brightness - 1);
            } else {
                this._updateProperty("brightness", this._transformProperties.brightness + 1);
            }

        } else { // 1: III, 2: I OR 1: IV, 2: II
            if (point1CurrAngle <= point1PrevAngle && point2CurrAngle >= point2PrevAngle) {
                this._updateProperty("brightness", this._transformProperties.brightness - 1);
            } else {
                this._updateProperty("brightness", this._transformProperties.brightness + 1);
            }
        }
        this._updateField(this._brightnessField, this._transformProperties.brightness);
    }

    private _calcChanges(conditionName: string, eventCondition: number) {

        if (!this._prevConditions[conditionName]) {
            this._prevConditions[conditionName] = eventCondition.toString();
            return;
        }
        if (Math.abs(eventCondition - +this._prevConditions[conditionName]) > 5) {
            const newConditionValue = (+this._prevConditions[conditionName] < eventCondition) ?
                this._transformProperties[conditionName] + 5 : this._transformProperties[conditionName] - 5;

            this._updateProperty(conditionName, newConditionValue);
            this._prevConditions[conditionName] = eventCondition.toString();

        }
    }

    private _resetProperties() {
        this._updateField(this._zoomField, 100);
        this._updateField(this._brightnessField, 100);
        for (const prop in this._transformProperties) {
            this._updateProperty(prop, this._startProperties[prop]);
        }
    }

    private _resetConditions() {
        for (const prop in this._prevConditions) {
            this._prevConditions[prop] = "";
        }
    }
}
