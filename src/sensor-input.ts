import {SensorInputHandler} from "./SensorInputHandler";
import {IConditions, ITransformProperties} from "./SensorInputInterfaces";

const element = document.querySelectorAll(".card__data__image--img")[1] as HTMLElement;
const zoomField = document.querySelectorAll(".settings--zoom")[1] as HTMLElement;
const brightnessField = document.querySelectorAll(".settings--brightness")[1] as HTMLElement;

const TRANSFORM_PROPERTIES: ITransformProperties = {
    translateX: 0,
    translateY: 0,
    scale: 1.0,
    brightness: 100,
};
const INITIAL_CONDITIONS: IConditions = {
    translateX: "",
    translateY: "",
    brightness: "",
};

const ImageSensorInputHandler = new SensorInputHandler(element, INITIAL_CONDITIONS, TRANSFORM_PROPERTIES, zoomField, brightnessField);
ImageSensorInputHandler.setEventHandlers();
