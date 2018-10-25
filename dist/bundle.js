(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
exports.__esModule = true;

},{}],2:[function(require,module,exports){
arguments[4][1][0].apply(exports,arguments)
},{"dup":1}],3:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var SensorInputHandler = /** @class */ (function () {
    function SensorInputHandler(element, initialConditions, transformProperties, zoomField, brightnessField) {
        this.element = element;
        this.transformProperties = transformProperties;
        this.prevConditions = initialConditions;
        this.startProperties = JSON.parse(JSON.stringify(transformProperties));
        this.zoomField = zoomField;
        this.brightnessField = brightnessField;
        this.pointerEvents = [];
    }
    SensorInputHandler.prototype.setEventHandlers = function () {
        var _this = this;
        if (this.zoomField && this.zoomField.parentElement) {
            this.zoomField.parentElement.addEventListener("pointerdown", function (e) {
                _this._resetProperties();
            });
        }
        if (this.brightnessField.parentElement) {
            this.brightnessField.parentElement.addEventListener("pointerdown", function (e) {
                _this._resetProperties();
            });
        }
        this.element.addEventListener("pointerenter", function (event) {
            _this._resetConditions();
            var currEvent = event;
            currEvent.currX = event.clientX;
            currEvent.currY = event.clientY;
            _this.pointerEvents.push(currEvent);
        });
        this.element.addEventListener("pointerleave", function (event) {
            _this.pointerEvents = _this.pointerEvents.filter(function (e) { return e.pointerId !== event.pointerId; });
        });
        this.element.addEventListener("pointermove", function (event) {
            var currEvent = event;
            _this.pointerEvents.forEach(function (e) {
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
                _this._handlePointerMove(currEvent);
            }
        });
    };
    SensorInputHandler.prototype._updateField = function (field, newCondition) {
        field.innerHTML = newCondition.toString();
    };
    SensorInputHandler.prototype._updateView = function () {
        this.element.style.transform = "translateX(" + this.transformProperties.translateX + "%) translateY(" + this.transformProperties.translateY + "%) scale(" + this.transformProperties.scale + ")";
        this.element.style.filter = "brightness(" + this.transformProperties.brightness + "%)";
    };
    SensorInputHandler.prototype._updateProperty = function (property, value) {
        this.transformProperties[property] = +value;
        this._updateView();
    };
    SensorInputHandler.prototype._handlePointerMove = function (event) {
        event.preventDefault();
        if (this.pointerEvents.length === 1 && this.transformProperties.scale > 1.0) {
            this._calcChanges("translateX", event.clientX);
        }
        else if (this.pointerEvents.length === 2) {
            var event1 = this.pointerEvents[0];
            var event2 = this.pointerEvents[1];
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
            this._updateProperty("scale", this.transformProperties.scale + 0.05);
        }
        else if (currDestance < prevDistance && this.transformProperties.scale >= 1.05) {
            this._updateProperty("scale", this.transformProperties.scale - 0.05);
        }
        this._updateField(this.zoomField, (this.transformProperties.scale * 100).toPrecision(3));
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
    };
    SensorInputHandler.prototype._calcChanges = function (conditionName, eventCondition) {
        if (!this.prevConditions[conditionName]) {
            this.prevConditions[conditionName] = eventCondition.toString();
            return;
        }
        if (Math.abs(eventCondition - +this.prevConditions[conditionName]) > 5) {
            var newConditionValue = (+this.prevConditions[conditionName] < eventCondition) ?
                this.transformProperties[conditionName] + 5 : this.transformProperties[conditionName] - 5;
            this._updateProperty(conditionName, newConditionValue);
            this.prevConditions[conditionName] = eventCondition.toString();
        }
    };
    SensorInputHandler.prototype._resetProperties = function () {
        this._updateField(this.zoomField, 100);
        this._updateField(this.brightnessField, 100);
        for (var prop in this.transformProperties) {
            this._updateProperty(prop, this.startProperties[prop]);
        }
    };
    SensorInputHandler.prototype._resetConditions = function () {
        for (var prop in this.prevConditions) {
            this.prevConditions[prop] = "";
        }
    };
    return SensorInputHandler;
}());
exports.SensorInputHandler = SensorInputHandler;

},{}],4:[function(require,module,exports){
arguments[4][1][0].apply(exports,arguments)
},{"dup":1}],5:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var TemplateFactory = /** @class */ (function () {
    function TemplateFactory(template, properties) {
        this._template = template ? template.content : new HTMLTemplateElement();
        this._properties = JSON.parse(JSON.stringify(properties));
        this._stringToReplace = "$meow";
        this._container = document.querySelector("#events");
    }
    TemplateFactory.prototype._initTemplate = function () {
        var template = document.importNode(this._template, true);
        this._properties.forEach(function (prop) {
            var element = template.querySelector(prop.selector);
            prop.element = element ? element : undefined;
        });
        return template;
    };
    TemplateFactory.prototype._removeItem = function (item) {
        if (item && item.parentElement) {
            item.parentElement.removeChild(item);
        }
    };
    TemplateFactory.prototype.renderEventData = function (event, dataNode) {
        var graph = dataNode.querySelector(".card__data__graph");
        var image = dataNode.querySelector(".card__data__image");
        var music = dataNode.querySelector(".card__data__music");
        var climate = dataNode.querySelector(".card__data__climate");
        var buttons = dataNode.querySelector(".card__data__buttons");
        if (event.data) {
            if (event.data.type === "graph" && graph) {
                graph.innerHTML = "  <img class=\"card__data__image--img\" src=\"" + "assets/RichData@2x-min.png" + "\" alt=\"" + "RichData@2x-min.png" + "\" touch-action=\"none\">";
            }
            else {
                this._removeItem(graph);
            }
            if (event.data.image && image) {
                image.innerHTML = "  <img class=\"card__data__image--img\" src=\"assets/" + event.data.image + "\" alt=\"" + event.data.image + "\" touch-action=\"none\">";
            }
            else {
                if (image) {
                    this._removeItem(image.parentElement);
                }
            }
            if (event.data.temperature && climate) {
                climate.innerHTML = "\n                    <div class=\"card__data__temperature\">\n                        <p class=\"card--data-climate\">\n                        \u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430: <span class=\"card--data-climate text--bold\">" + event.data.temperature + " \u0421</span>\n                        </p>\n                    </div>\n                    <div class=\"card__data__humidity\">\n                        <p class=\"card--data-climate\">\n                            \u0412\u043B\u0430\u0436\u043D\u043E\u0441\u0442\u044C: <span class=\"card--data-climate text--bold\">" + event.data.humidity + "%</span>\n                        </p>\n                    </div>";
            }
            else {
                this._removeItem(climate);
            }
            if (event.data.track && music) {
                music.innerHTML =
                    "  <div class=\"music__header\">\n                    <div class=\"card__data__albumcover\">\n                        <img class=\"card__data__albumcover--img\" src=\"" + event.data.albumcover + "\" alt=\"" + event.data.albumcover + "\">\n                    </div>\n\n                    <div class=\"music__main\">\n                        <div class=\"card__data__artist\">\n                            <p class=\"card--data-music-title\">\n                                " + event.data.artist + " - " + event.data.track.name + "\n                            </p>\n                        </div>\n                        <div class=\"music__track\">\n                            <input type=\"range\" class=\"music__track--range\">\n                            <div class=\"card__data__track--length music__track--length\">\n                                <p class=\"card--data-music\">\n                                    " + event.data.track.length + "\n                                </p>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n                <div class=\"music__player\">\n                    <div class=\"music__icons\">\n                        <div class=\"music__icons--item\">\n                            <svg class=\"icon--music\">\n                                <use xlink:href=\"assets/Prev.svg#Events\"></use>\n                            </svg>\n                        </div>\n                        <div class=\"music__icons--item\">\n                            <svg class=\"icon--music icon--rotated\">\n                                <use xlink:href=\"assets/Prev.svg#Events\"></use>\n                            </svg>\n                        </div>\n                    </div>\n\n                    <input type=\"range\" class=\"music__player--range\">\n                    <div class=\"card__data__volume\">\n                        <p class=\"card--data-music\">\n                            " + event.data.volume + "\n                        </p>\n                    </div>\n                </div>";
            }
            else {
                this._removeItem(music);
            }
            if (event.data.buttons && buttons) {
                event.data.buttons.forEach(function (btn) {
                    buttons.innerHTML += " <button class=\"card__data__buttons--btn\">\n                                            <span class=\"card--data-paragraph text--bold\">\n                                                " + btn + "\n                                            </span>\n                                        </button>";
                });
            }
            else {
                this._removeItem(buttons);
            }
        }
    };
    TemplateFactory.prototype.renderContent = function (dataToRender) {
        var _this = this;
        dataToRender.forEach(function (event) {
            var template = _this._initTemplate();
            _this._properties.forEach(function (prop) {
                if (!prop.children) {
                    var element = void 0;
                    var inputContent = void 0;
                    if (prop.neededChild) {
                        element = prop.element ? prop.element.children[0] : new HTMLElement();
                    }
                    else {
                        element = prop.element ? prop.element : new HTMLElement();
                    }
                    if (prop.innerHtml) {
                        inputContent = prop.innerHtml.replace(_this._stringToReplace, event[prop.name] !== undefined ? event[prop.name] : "");
                    }
                    else {
                        inputContent = event[prop.name] ? event[prop.name] : "";
                    }
                    if (prop.className && element) {
                        element.className = prop.className.replace(_this._stringToReplace, event[prop.name] !== undefined ? event[prop.name] : "");
                    }
                    else if (prop.optional && element) {
                        if (event[prop.name]) {
                            element.innerHTML = inputContent;
                        }
                        else {
                            if (prop.element) {
                                _this._removeItem(prop.element);
                            }
                        }
                    }
                    else {
                        if (element) {
                            element.innerHTML = inputContent;
                        }
                    }
                }
                else {
                    if (event[prop.name] && prop.element) {
                        _this.renderEventData(event, prop.element);
                    }
                    else {
                        if (prop.element) {
                            _this._removeItem(prop.element);
                        }
                    }
                }
            });
            if (_this._container) {
                _this._container.appendChild(template.cloneNode(true));
            }
        });
    };
    return TemplateFactory;
}());
exports.TemplateFactory = TemplateFactory;

},{}],6:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var SensorInputHandler_1 = require("./SensorInputHandler");
var element = document.querySelectorAll(".card__data__image--img")[1];
var zoomField = document.querySelectorAll(".settings--zoom")[1];
var brightnessField = document.querySelectorAll(".settings--brightness")[1];
var TRANSFORM_PROPERTIES = {
    translateX: 0,
    translateY: 0,
    scale: 1.0,
    brightness: 100
};
var INITIAL_CONDITIONS = {
    translateX: "",
    translateY: "",
    brightness: ""
};
var ImageSensorInputHandler = new SensorInputHandler_1.SensorInputHandler(element, INITIAL_CONDITIONS, TRANSFORM_PROPERTIES, zoomField, brightnessField);
ImageSensorInputHandler.setEventHandlers();

},{"./SensorInputHandler":3}],7:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var TemplateFactory_1 = require("./TemplateFactory");
var DATA = {
    events: [{
            type: "info",
            title: "Еженедельный отчет по расходам ресурсов",
            source: "Сенсоры потребления",
            time: "19:00, Сегодня",
            description: "Так держать! За последнюю неделю вы потратили на 10% меньше ресурсов, чем неделей ранее.",
            icon: "stats",
            data: {
                image: "Richdata.png"
            },
            size: "l"
        },
        {
            type: "info",
            title: "Дверь открыта",
            source: "Сенсор входной двери",
            time: "18:50, Сегодня",
            description: null,
            icon: "key",
            size: "s"
        },
        {
            type: "info",
            title: "Уборка закончена",
            source: "Пылесос",
            time: "18:45, Сегодня",
            description: null,
            icon: "robot-cleaner",
            size: "s"
        },
        {
            type: "info",
            title: "Новый пользователь",
            source: "Роутер",
            time: "18:45, Сегодня",
            description: null,
            icon: "router",
            size: "s"
        },
        {
            type: "info",
            title: "Изменен климатический режим",
            source: "Сенсор микроклимата",
            time: "18:30, Сегодня",
            description: "Установлен климатический режим «Фиджи»",
            icon: "thermal",
            size: "m",
            data: {
                temperature: 24,
                humidity: 80
            }
        },
        {
            type: "critical",
            title: "Невозможно включить кондиционер",
            source: "Кондиционер",
            time: "18:21, Сегодня",
            description: "В комнате открыто окно, закройте его и повторите попытку",
            icon: "ac",
            size: "m"
        },
        {
            type: "info",
            title: "Музыка включена",
            source: "Яндекс.Станция",
            time: "18:16, Сегодня",
            description: "Сейчас проигрывается:",
            icon: "music",
            size: "m",
            data: {
                albumcover: "https://avatars.yandex.net/get-music-content/193823/1820a43e.a.5517056-1/m1000x1000",
                artist: "Florence & The Machine",
                track: {
                    name: "Big God",
                    length: "4:31"
                },
                volume: 80
            }
        },
        {
            type: "info",
            title: "Заканчивается молоко",
            source: "Холодильник",
            time: "17:23, Сегодня",
            description: "Кажется, в холодильнике заканчивается молоко. Вы хотите добавить его в список покупок?",
            icon: "fridge",
            size: "m",
            data: {
                buttons: ["Да", "Нет"]
            }
        },
        {
            type: "info",
            title: "Зарядка завершена",
            source: "Оконный сенсор",
            time: "16:22, Сегодня",
            description: "Ура! Устройство «Оконный сенсор» снова в строю!",
            icon: "battery",
            size: "s"
        },
        {
            type: "critical",
            title: "Пылесос застрял",
            source: "Сенсор движения",
            time: "16:17, Сегодня",
            description: "Робопылесос не смог сменить свое местоположение в течение последних 3 минут. Похоже, ему нужна помощь.",
            icon: "cam",
            data: {
                image: "cleaner.jpg"
            },
            size: "l"
        },
        {
            type: "info",
            title: "Вода вскипела",
            source: "Чайник",
            time: "16:20, Сегодня",
            description: null,
            icon: "kettle",
            size: "s"
        },
    ]
};
var PROPERTIES = [
    {
        name: "size",
        selector: ".card",
        neededChild: false,
        className: "card card__$meow"
    },
    {
        name: "type",
        selector: ".card__type--top",
        neededChild: false,
        className: "card__type--top card__$meow"
    },
    {
        name: "info",
        selector: ".card__type--bottom",
        neededChild: true
    },
    {
        name: "title",
        selector: ".card__title",
        neededChild: true
    },
    {
        name: "source",
        selector: ".card__source",
        neededChild: true
    },
    {
        name: "time",
        selector: ".card__time",
        neededChild: true
    },
    {
        name: "description",
        selector: ".card__description",
        neededChild: false,
        optional: true,
        innerHtml: '<p class="card--paragraph">$meow</p>'
    },
    {
        name: "icon",
        selector: ".card__icon",
        neededChild: true,
        innerHtml: '<use xlink:href="assets/$meow.svg#Events"></use>'
    },
    {
        name: "data",
        selector: ".card__data",
        neededChild: true,
        optional: true,
        children: []
    },
];
var cardTemplate = document.querySelector("#card-template");
var cardTemplateFactory = new TemplateFactory_1.TemplateFactory(cardTemplate, PROPERTIES);
fetch("http://127.0.0.1:3000/api/events", {
    method: "POST",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ type: "info:critical" })
}).then(function (response) {
    // console.log(response.json());
    return response.json();
}).then(function (dataFromServer) {
    if (dataFromServer) {
        console.log("getting data from server");
        cardTemplateFactory.renderContent(dataFromServer.events);
    }
    else {
        console.log("getting data from local source, server is offline");
        cardTemplateFactory.renderContent(DATA.events);
    }
})["catch"](function (e) {
    console.log("getting data from local source, server is offline");
    cardTemplateFactory.renderContent(DATA.events);
});

},{"./TemplateFactory":5}]},{},[7,5,1,2,6,3,4]);
