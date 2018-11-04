"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SensorInputHandler_1 = require("./SensorInputHandler");
var element = document.querySelectorAll(".card__data__image--img")[1];
var zoomField = document.querySelectorAll(".settings--zoom")[1];
var brightnessField = document.querySelectorAll(".settings--brightness")[1];
var TRANSFORM_PROPERTIES = {
    translateX: 0,
    translateY: 0,
    scale: 1.0,
    brightness: 100,
};
var INITIAL_CONDITIONS = {
    translateX: "",
    translateY: "",
    brightness: "",
};
var ImageSensorInputHandler = new SensorInputHandler_1.SensorInputHandler(element, INITIAL_CONDITIONS, TRANSFORM_PROPERTIES, zoomField, brightnessField);
ImageSensorInputHandler.setEventHandlers();
