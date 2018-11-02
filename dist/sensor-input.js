"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SensorInputHandler_1 = require("./SensorInputHandler");
const element = document.querySelectorAll(".card__data__image--img")[1];
const zoomField = document.querySelectorAll(".settings--zoom")[1];
const brightnessField = document.querySelectorAll(".settings--brightness")[1];
const TRANSFORM_PROPERTIES = {
    translateX: 0,
    translateY: 0,
    scale: 1.0,
    brightness: 100,
};
const INITIAL_CONDITIONS = {
    translateX: "",
    translateY: "",
    brightness: "",
};
const ImageSensorInputHandler = new SensorInputHandler_1.SensorInputHandler(element, INITIAL_CONDITIONS, TRANSFORM_PROPERTIES, zoomField, brightnessField);
ImageSensorInputHandler.setEventHandlers();
