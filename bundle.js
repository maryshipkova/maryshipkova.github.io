(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],2:[function(require,module,exports){
arguments[4][1][0].apply(exports,arguments)
},{"dup":1}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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

},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
                image: "Richdata.png",
            },
            size: "l",
        },
        {
            type: "info",
            title: "Дверь открыта",
            source: "Сенсор входной двери",
            time: "18:50, Сегодня",
            description: null,
            icon: "key",
            size: "s",
        },
        {
            type: "info",
            title: "Уборка закончена",
            source: "Пылесос",
            time: "18:45, Сегодня",
            description: null,
            icon: "robot-cleaner",
            size: "s",
        },
        {
            type: "info",
            title: "Новый пользователь",
            source: "Роутер",
            time: "18:45, Сегодня",
            description: null,
            icon: "router",
            size: "s",
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
                humidity: 80,
            },
        },
        {
            type: "critical",
            title: "Невозможно включить кондиционер",
            source: "Кондиционер",
            time: "18:21, Сегодня",
            description: "В комнате открыто окно, закройте его и повторите попытку",
            icon: "ac",
            size: "m",
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
                    length: "4:31",
                },
                volume: 80,
            },
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
                buttons: ["Да", "Нет"],
            },
        },
        {
            type: "info",
            title: "Зарядка завершена",
            source: "Оконный сенсор",
            time: "16:22, Сегодня",
            description: "Ура! Устройство «Оконный сенсор» снова в строю!",
            icon: "battery",
            size: "s",
        },
        {
            type: "critical",
            title: "Пылесос застрял",
            source: "Сенсор движения",
            time: "16:17, Сегодня",
            description: "Робопылесос не смог сменить свое местоположение в течение последних 3 минут. Похоже, ему нужна помощь.",
            icon: "cam",
            data: {
                image: "cleaner.jpg",
            },
            size: "l",
        },
        {
            type: "info",
            title: "Вода вскипела",
            source: "Чайник",
            time: "16:20, Сегодня",
            description: null,
            icon: "kettle",
            size: "s",
        },
    ],
};
var PROPERTIES = [
    {
        name: "size",
        selector: ".card",
        neededChild: false,
        className: "card card__$meow",
    },
    {
        name: "type",
        selector: ".card__type--top",
        neededChild: false,
        className: "card__type--top card__$meow",
    },
    {
        name: "info",
        selector: ".card__type--bottom",
        neededChild: true,
    },
    {
        name: "title",
        selector: ".card__title",
        neededChild: true,
    },
    {
        name: "source",
        selector: ".card__source",
        neededChild: true,
    },
    {
        name: "time",
        selector: ".card__time",
        neededChild: true,
    },
    {
        name: "description",
        selector: ".card__description",
        neededChild: false,
        optional: true,
        innerHtml: '<p class="card--paragraph">$meow</p>',
    },
    {
        name: "icon",
        selector: ".card__icon",
        neededChild: true,
        innerHtml: '<use xlink:href="assets/$meow.svg#Events"></use>',
    },
    {
        name: "data",
        selector: ".card__data",
        neededChild: true,
        optional: true,
        children: [],
    },
];
var cardTemplate = document.querySelector("#card-template");
var cardTemplateFactory = new TemplateFactory_1.TemplateFactory(cardTemplate, PROPERTIES);
exports.cardTemplateFactory = cardTemplateFactory;
cardTemplateFactory.renderContent(DATA.events);
// fetch("http://127.0.0.1:3000/api/events", {
//     method: "POST",
//     headers: {
//         "Accept": "application/json",
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify({type: "info:critical"}),
//
// }).then((response) => {
//     // console.log(response.json());
//     return response.json();
// }).then((dataFromServer) => {
//     if (dataFromServer) {
//         console.log("getting data from server");
//         cardTemplateFactory.renderContent(dataFromServer.events);
//
//     } else {
//         console.log("getting data from local source, server is offline");
//         cardTemplateFactory.renderContent(DATA.events);
//     }
//
// }).catch((e) => {
//     console.log("getting data from local source, server is offline");
//     cardTemplateFactory.renderContent(DATA.events);
// });

},{"./TemplateFactory":3}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Action = /** @class */ (function () {
    function Action(type, id) {
        this.type = type;
        this.id = id;
    }
    return Action;
}());
exports.Action = Action;

},{}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Component = /** @class */ (function () {
    function Component(name, id, innerHtml) {
        this.name = name;
        this.id = id;
        this.innerHtml = innerHtml;
    }
    return Component;
}());
exports.Component = Component;

},{}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var store_1 = require("./store");
var view_1 = require("./view");
var Dispatcher = /** @class */ (function () {
    function Dispatcher() {
    }
    Dispatcher.prototype.registerEvent = function (event) {
        var element = event.srcElement;
        if (element)
            store_1.store.pushAction({
                type: 'get-page',
                id: element.getAttribute('id')
            });
    };
    Dispatcher.prototype.setEventHandlers = function (items) {
        var _this = this;
        items.forEach(function (element) {
            return element.addEventListener('click', _this.registerEvent);
        });
    };
    return Dispatcher;
}());
var dispatcher = new Dispatcher();
exports.dispatcher = dispatcher;
dispatcher.setEventHandlers(Array.from(view_1.view.navContainer.children));

},{"./store":9,"./view":10}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var components = [
    {
        name: "События",
        id: "page-events",
        innerHtml: "  <div class=\"events-page\">\n                        <div class=\"content__header\">\n                            <h1 class=\"heading--primary\">\n                                \u041B\u0435\u043D\u0442\u0430 \u0441\u043E\u0431\u044B\u0442\u0438\u0439\n                            </h1>\n                        </div>\n                        <section class=\"events\" id=\"events\">\n        \n                        </section>\n                    </div>"
    },
    {
        name: "Сводка",
        id: "page-summary",
        innerHtml: "<div class=\"summary-page\">\n                        <section class=\"main\">\n                                <div class=\"section-heading\">\n                                    <h3 class=\"heading-section\">\u0413\u043B\u0430\u0432\u043D\u043E\u0435</h3>\n                                </div>\n                                <div class=\"main__content\">\n                                    <div class=\"main__status\">\n                                        <div class=\"main__status--greeting\">\n                                            <h2 class=\"heading-greeting\">\u041F\u0440\u0438\u0432\u0435\u0442, \u0413\u0435\u043D\u043D\u0430\u0434\u0438\u0439!</h2>\n                                        </div>\n                                        <div class=\"main__status--house\">\n                                            <p class=\"paragraph-1\">\u0414\u0432\u0435\u0440\u0438 \u0438 \u043E\u043A\u043D\u0430 \u0437\u0430\u043A\u0440\u044B\u0442\u044B, \u0441\u0438\u0433\u043D\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u0430.</p>\n                                        </div>\n                                        <div class=\"main__status--temperature\">\n                \n                                            <div class=\"temperature--heading\">\n                                                <h4 class=\"heading--place\">\u0414\u043E\u043C\u0430</h4>\n                                            </div>\n                                            <div class=\"temperature--heading\">\n                                                <h4 class=\"heading--place\">\u0417\u0430 \u043E\u043A\u043D\u043E\u043C</h4>\n                                            </div>\n                \n                                            <div class=\"temperature--value\">\n                                                <h1 class=\"heading-temperature\">+23</h1>\n                                            </div>\n                                            <div class=\"temperature--value\">\n                                                <h1 class=\"heading-temperature\">+19\n                                                    <svg class=\"icon--cloud\">\n                                                        <use xlink:href=\"assets/cloud-drizzle.svg#Final\"></use>\n                                                    </svg>\n                                                </h1>\n                                            </div>\n                \n                                        </div>\n                                    </div>\n                                    <div class=\"main__schedule\" onscroll=\"changeMainSliderVisibility(event)\">\n                                        <a href=\"#popup-temperature\" class=\"card card__f card--main\">\n                                            <div class=\"card__icon\">\n                                                <svg class=\"icon--device\">\n                                                    <use xlink:href=\"assets/icon_temperature.svg#Final\"></use>\n                                                </svg>\n                                            </div>\n                                            <div class=\"card__title\">\n                                                <h5 class=\"heading-card\">Philips Cooler</h5>\n                                            </div>\n                                            <div class=\"card__text\">\n                                                <p class=\"paragraph-2\">\u041D\u0430\u0447\u043D\u0435\u0442 \u043E\u0445\u043B\u0430\u0436\u0434\u0430\u0442\u044C \u0432 16:30</p>\n                                            </div>\n                                        </a>\n                                        <a href=\"#popup-light\" class=\"card card__f card--main\">\n                                            <div class=\"card__icon\">\n                                                <svg class=\"icon--device\">\n                                                    <use xlink:href=\"assets/icon_sun.svg#Final\"></use>\n                                                </svg>\n                                            </div>\n                                            <div class=\"card__title\">\n                                                <h5 class=\"heading-card\">Xiaomi Yeelight LED Smart Bulb</h5>\n                                            </div>\n                                            <div class=\"card__text\">\n                                                <p class=\"paragraph-2\">\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u0441\u044F \u0432 17:00</p>\n                                            </div>\n                                        </a>\n                                        <a href=\"#popup-floor\" class=\"card card__f card--main\">\n                                            <div class=\"card__icon\">\n                                                <svg class=\"icon--device\">\n                                                    <use xlink:href=\"assets/icon_temperature_2.svg#Final\"></use>\n                                                </svg>\n                                            </div>\n                                            <div class=\"card__title\">\n                                                <h5 class=\"heading-card\">Xiaomi Warm Floor</h5>\n                                            </div>\n                                            <div class=\"card__text\">\n                                                <p class=\"paragraph-2\">\u0412\u043A\u043B\u044E\u0447\u0435\u043D\u043E</p>\n                                            </div>\n                                        </a>\n                                        <div class=\"main__schedule__slider\" id=\"schedule__slider\">\n                                            <img srcset=\"assets/Icons/Arrow_Double/M.png 1x, assets/Icons/Arrow_Double/M@2x.png 2x\" src=\"assets/Icons/Arrow_Double/M@2x.png\"\n                                                alt=\"slider\" class=\"icon--double-arrow\">\n                                        </div>\n                                    </div>\n                                </div>\n                            </section>\n                            <!-- /main -->\n                            <!-- scenarios -->\n                            <section class=\"scenarios\">\n                                <div class=\"scenarios__heading\">\n                                    <div class=\"section-heading\">\n                                        <h3 class=\"heading-section\">\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0438</h3>\n                                    </div>\n                                    <div class=\"scenarios__icons\">\n                                        <div class=\"nav-arrows\">\n                                            <div class=\"arrow arrow--left carousel__prev carousel__prev--scenarios\">\n                                                <svg class=\"icon--arrow\">\n                                                    <use xlink:href=\"assets/Icons/Arrow_Right/MCopy@1x.svg#icon_arrow-right_m\"></use>\n                                                </svg>\n                                            </div>\n                                            <div class=\"arrow arrow--right carousel__next carousel__next--scenarios\">\n                                                <svg class=\"icon--arrow\">\n                                                    <use xlink:href=\"assets/Icons/Arrow_Right/MCopy@1x.svg#icon_arrow-right_m\"></use>\n                                                </svg>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <!-- scenarios__heading -->\n                                <div class=\"carousel__wrap carousel__wrap--scenarios\">\n                                    <div class=\"scenarios__content carousel__container carousel__container--scenarios\">\n                                        <div class=\"card card__f card--scenarios\">\n                                            <div class=\"card__icon\">\n                                                <svg class=\"icon--device\">\n                                                    <use xlink:href=\"assets/icon_sun_2.svg#Final\"></use>\n                                                </svg>\n                                            </div>\n                                            <div class=\"card__title\">\n                                                <h5 class=\"heading-card\">\u0412\u044B\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0432\u0435\u0441\u044C \u0441\u0432\u0435\u0442 \u0432 \u0434\u043E\u043C\u0435 \u0438 \u0432\u043E \u0434\u0432\u043E\u0440\u0435</h5>\n                                            </div>\n                                        </div>\n                                        <div class=\"card  card__f card--scenarios\">\n                                            <div class=\"card__icon\">\n                                                <svg class=\"icon--device\">\n                                                    <use xlink:href=\"assets/icon_scheduled.svg#Final\"></use>\n                                                </svg>\n                                            </div>\n                                            <div class=\"card__title\">\n                                                <h5 class=\"heading-card\">\u042F \u0443\u0445\u043E\u0436\u0443</h5>\n                                            </div>\n                                        </div>\n                                        <div class=\"card card__f card--scenarios\">\n                                            <div class=\"card__icon\">\n                                                <svg class=\"icon--device\">\n                                                    <use xlink:href=\"assets/icon_sun_2.svg#Final\"></use>\n                                                </svg>\n                                            </div>\n                                            <div class=\"card__title\">\n                                                <h5 class=\"heading-card\">\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0441\u0432\u0435\u0442 \u0432 \u043A\u043E\u0440\u0438\u0434\u043E\u0440\u0435</h5>\n                                            </div>\n                                        </div>\n                                        <div class=\"card card__f card--scenarios\">\n                                            <div class=\"card__icon\">\n                                                <svg class=\"icon--device\">\n                                                    <use xlink:href=\"assets/icon_temperature_2.svg#Final\"></use>\n                                                </svg>\n                                            </div>\n                                            <div class=\"card__title\">\n                                                <h5 class=\"heading-card\">\u041D\u0430\u0431\u0440\u0430\u0442\u044C \u0433\u043E\u0440\u044F\u0447\u0443\u044E \u0432\u0430\u043D\u043D\u0443</h5>\n                                            </div>\n                                            <div class=\"card__text\">\n                                                <p class=\"paragraph-2\">\u041D\u0430\u0447\u043D\u0451\u0442\u0441\u044F \u0432 18:00</p>\n                                            </div>\n                                        </div>\n                                        <a href=\"#popup-floor\" class=\"card card__f card--scenarios\">\n                                            <div class=\"card__icon\">\n                                                <svg class=\"icon--device\">\n                                                    <use xlink:href=\"assets/icon_temperature_2.svg#Final\"></use>\n                                                </svg>\n                                            </div>\n                                            <div class=\"card__title\">\n                                                <h5 class=\"heading-card\">\u0421\u0434\u0435\u043B\u0430\u0442\u044C \u043F\u043E\u043B \u0442\u0451\u043F\u043B\u044B\u043C \u0432\u043E \u0432\u0441\u0435\u0439 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0435</h5>\n                                            </div>\n                                        </a>\n                                    </div>\n                                </div>\n                                <!-- scenarios__content -->\n                            </section>\n                            <!-- /scenarios -->\n                \n                            <!-- devices -->\n                            <section class=\"devices\">\n                                <div class=\"devices__header\">\n                                    <div class=\"section-heading\">\n                                        <h3 class=\"heading-section\">\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430</h3>\n                                    </div>\n                                    <div class=\"devices__filters\">\n                                        <div class=\" devices__filter filter-active\">\n                                            <label for=\"filter-toggle\">\n                                                <h5 class=\"heading--filter\">\u0412\u0441\u0435\n                                                    <svg class=\"icon--arrow-down\" viewBox=\"0 0 129 129\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                                                        enable-background=\"new 0 0 129 129\">\n                                                        <g>\n                                                            <path d=\"m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z\" />\n                                                        </g>\n                                                    </svg>\n                                                </h5>\n                                            </label>\n                                        </div>\n                                        <input type=\"checkbox\" class=\"devices__filters__checkbox\" id=\"filter-toggle\">\n                                        <div class=\"devices__filters__list\">\n                                            <div class=\"devices__filter\">\n                                                <h5 class=\"heading--filter\">\u041A\u0443\u0445\u043D\u044F</h5>\n                                            </div>\n                                            <div class=\"devices__filter\">\n                                                <h5 class=\"heading--filter\">\u0417\u0430\u043B</h5>\n                                            </div>\n                                            <div class=\"devices__filter\">\n                                                <h5 class=\"heading--filter\">\u041B\u0430\u043C\u043F\u043E\u0447\u043A\u0438</h5>\n                                            </div>\n                                            <div class=\"devices__filter\">\n                                                <h5 class=\"heading--filter\">\u041A\u0430\u043C\u0435\u0440\u044B</h5>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"devices__icons\">\n                                        <div class=\"nav-arrows\">\n                                            <div class=\"arrow arrow--left carousel__prev carousel__prev--devices\">\n                                                <svg class=\"icon--arrow\">\n                                                    <use xlink:href=\"assets/Icons/Arrow_Right/MCopy@1x.svg#icon_arrow-right_m\"></use>\n                                                </svg>\n                                            </div>\n                                            <div class=\"arrow arrow--right carousel__next carousel__next--devices\">\n                                                <svg class=\"icon--arrow\">\n                                                    <use xlink:href=\"assets/Icons/Arrow_Right/MCopy@1x.svg#icon_arrow-right_m\"></use>\n                                                </svg>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"carousel__wrap carousel__wrap--devices\">\n                                    <div class=\"devices__list carousel__container carousel__container--devices\">\n                                        <a href=\"#popup-light\" class=\"card card__f card--devices\">\n                                            <div class=\"card__icon\">\n                                                <svg class=\"icon--device\">\n                                                    <use xlink:href=\"assets/icon_sun_2.svg#Final\"></use>\n                                                </svg>\n                                            </div>\n                                            <div class=\"card__title\">\n                                                <h5 class=\"heading-card\">Xiaomi Yeelight LED Smart Bulb</h5>\n                                            </div>\n                                            <div class=\"card__text\">\n                                                <p class=\"paragraph-2\">\u0412\u043A\u043B\u044E\u0447\u0435\u043D\u043E</p>\n                                            </div>\n                                        </a>\n                                        <a href=\"#popup-light\" class=\"card card__f card--devices\">\n                                            <div class=\"card__icon\">\n                                                <svg class=\"icon--device\">\n                                                    <use xlink:href=\"assets/icon_sun.svg#Final\"></use>\n                                                </svg>\n                                            </div>\n                                            <div class=\"card__title\">\n                                                <h5 class=\"heading-card\">D-Link Omna 180 Cam</h5>\n                                            </div>\n                                            <div class=\"card__text\">\n                                                <p class=\"paragraph-2\">\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u0441\u044F \u0432 17:00</p>\n                                            </div>\n                                        </a>\n                                        <a href=\"#popup-temperature\" class=\"card card__f card--devices\">\n                                            <div class=\"card__icon\">\n                                                <svg class=\"icon--device\">\n                                                    <use xlink:href=\"assets/icon_temperature.svg#Final\"></use>\n                                                </svg>\n                                            </div>\n                                            <div class=\"card__title\">\n                                                <h5 class=\"heading-card\">Elgato Eve Degree Connected</h5>\n                                            </div>\n                                            <div class=\"card__text\">\n                                                <p class=\"paragraph-2\">\u0412\u044B\u043A\u043B\u044E\u0447\u0435\u043D\u043E \u0434\u043E 17:00</p>\n                                            </div>\n                                        </a>\n                                        <a href=\"#popup-light\" class=\"card card__f card--devices\">\n                                            <div class=\"card__icon\">\n                                                <svg class=\"icon--device\">\n                                                    <use xlink:href=\"assets/icon_sun.svg#Final\"></use>\n                                                </svg>\n                                            </div>\n                                            <div class=\"card__title\">\n                                                <h5 class=\"heading-card\">LIFX Mini Day & Dusk A60 E27</h5>\n                                            </div>\n                                            <div class=\"card__text\">\n                                                <p class=\"paragraph-2\">\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u0441\u044F \u0432 17:00</p>\n                                            </div>\n                                        </a>\n                                        <a href=\"#popup-light\" class=\"card card__f card--devices\">\n                                            <div class=\"card__icon\">\n                                                <svg class=\"icon--device\">\n                                                    <use xlink:href=\"assets/icon_sun_2.svg#Final\"></use>\n                                                </svg>\n                                            </div>\n                                            <div class=\"card__title\">\n                                                <h5 class=\"heading-card\">Xiaomi Mi Air Purifier 2S</h5>\n                                            </div>\n                                            <div class=\"card__text\">\n                                                <p class=\"paragraph-2\">\u0412\u043A\u043B\u044E\u0447\u0435\u043D\u043E</p>\n                                            </div>\n                                        </a>\n                                        <a href=\"#popup-light\" class=\"card card__f card--devices\">\n                                            <div class=\"card__icon\">\n                                                <svg class=\"icon--device\">\n                                                    <use xlink:href=\"assets/icon_sun.svg#Final\"></use>\n                                                </svg>\n                                            </div>\n                                            <div class=\"card__title\">\n                                                <h5 class=\"heading-card\">Philips Zhirui</h5>\n                                            </div>\n                                            <div class=\"card__text\">\n                                                <p class=\"paragraph-2\">\u0412\u044B\u043A\u043B\u044E\u0447\u0435\u043D\u043E</p>\n                                            </div>\n                                        </a>\n                                        <a href=\"#popup-light\" class=\"card card__f card--devices\">\n                                            <div class=\"card__icon\">\n                                                <svg class=\"icon--device\">\n                                                    <use xlink:href=\"assets/icon_sun_2.svg#Final\"></use>\n                                                </svg>\n                                            </div>\n                                            <div class=\"card__title\">\n                                                <h5 class=\"heading-card\">Xiaomi Mi Air Purifier 2S</h5>\n                                            </div>\n                                            <div class=\"card__text\">\n                                                <p class=\"paragraph-2\">\u0412\u043A\u043B\u044E\u0447\u0435\u043D\u043E</p>\n                                            </div>\n                                        </a>\n                                    </div>\n                                </div>\n                            </section>\n                            <!-- /devices -->\n                    </div>"
    },
    {
        name: "Видеонаблюдение",
        id: "page-sstv",
        innerHtml: "<div class=\"sstv-page\">\n                        <div class=\"content__header\">\n                            <h1 class=\"heading--primary\">\n                                \u0412\u0438\u0434\u0435\u043E\u043D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435\n                            </h1>\n                        </div>\n                        <section class=\"sstv\">\n                            <div class=\"sstv__row\">\n                                <div class=\"sstv__video__container\">\n                                    <video id=\"video-1\" class=\"sstv__video\" muted autoplay>\n                                    </video>\n                                    <a href=\"#popup-sstv\" class=\"sstv__btn-expand\">+</a>\n                                </div>\n                                <div class=\"sstv__video__container\">\n                                    <video id=\"video-2\" class=\"sstv__video\" muted autoplay></video>\n                                    <a href=\"#popup-sstv\" class=\"sstv__btn-expand\">+</a>\n                                </div>\n                                <div class=\"sstv__video__container\">\n                                    <video id=\"video-3\" class=\"sstv__video\" muted autoplay></video>\n                                    <a href=\"#popup-sstv\" class=\"sstv__btn-expand\">+</a>\n                                </div>\n                                <div class=\"sstv__video__container\">\n                                    <video id=\"video-4\" class=\"sstv__video\" muted autoplay></video>\n                                    <a href=\"#popup-sstv\" class=\"sstv__btn-expand\">+</a>\n                                </div>\n            \n                            </div>\n            \n                        </section>\n                </div>"
    }
];
exports.components = components;

},{}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var view_1 = require("./view");
//singleton
var Store = /** @class */ (function () {
    function Store() {
        this.actionQueue = [];
    }
    Object.defineProperty(Store, "Instance", {
        get: function () {
            return this._instance || (this._instance = new this());
        },
        enumerable: true,
        configurable: true
    });
    Store.prototype.pushAction = function (action) {
        this.actionQueue.push(action);
        if (action.type === 'get-page')
            view_1.view.renderPage(action.id);
    };
    Store.prototype.popAction = function (action) {
        this.actionQueue.shift();
    };
    Store.prototype.popActionById = function (id) {
        var actionToPop = this.actionQueue.find(function (action) { return action.id === id; });
        if (actionToPop)
            this.popAction(actionToPop);
    };
    return Store;
}());
var store = Store.Instance;
exports.store = store;

},{"./view":10}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var store_1 = require("./store");
var components = [
    {
        name: "События",
        id: "page-events",
        innerHtml: "  <div class=\"events-page\">\n                    <div class=\"content__header\">\n                        <h1 class=\"heading--primary\">\n                            \u041B\u0435\u043D\u0442\u0430 \u0441\u043E\u0431\u044B\u0442\u0438\u0439\n                        </h1>\n                    </div>\n                    <section class=\"events\" id=\"events\">\n\n                    \n        <div class=\"card card__l\">\n            <div class=\"card__hover-icon card__hover-icon--top\">\n                <svg class=\"icon--card__hover\">\n                    <use xlink:href=\"assets/cross.svg#Events\"></use>\n                </svg>\n            </div>\n            <div class=\"card__hover-icon  card__hover-icon--bottom\">\n                <svg class=\"icon--card__hover \">\n                    <use xlink:href=\"assets/Next.svg#Events\"></use>\n                </svg>\n            </div>\n            <div class=\"card__type--top card__info\">\n                <div class=\"card__header\">\n                    <div class=\"card__icon\">\n                        <svg class=\"icon--card\" viewBox=\"-10 -15 62 65\" preserveAspectRatio=\"xMinYMid\"><use xlink:href=\"assets/stats.svg#Events\"></use></svg>\n                    </div>\n                    <div class=\"card__title\">\n                        <h2 class=\"card--heading\">\u0415\u0436\u0435\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u044B\u0439 \u043E\u0442\u0447\u0435\u0442 \u043F\u043E \u0440\u0430\u0441\u0445\u043E\u0434\u0430\u043C \u0440\u0435\u0441\u0443\u0440\u0441\u043E\u0432</h2>\n                    </div>\n                </div>\n\n                <div class=\"card__source\">\n                    <h3 class=\"card--source-text\">\u0421\u0435\u043D\u0441\u043E\u0440\u044B \u043F\u043E\u0442\u0440\u0435\u0431\u043B\u0435\u043D\u0438\u044F</h3>\n                </div>\n                <div class=\"card__time\">\n                    <h3 class=\"card--time-text\">19:00, \u0421\u0435\u0433\u043E\u0434\u043D\u044F</h3>\n                </div>\n            </div>\n            <div class=\"card__type--bottom card__info\">\n\n                <div class=\"card__description\"><p class=\"card--paragraph\">\u0422\u0430\u043A \u0434\u0435\u0440\u0436\u0430\u0442\u044C! \u0417\u0430 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u044E\u044E \u043D\u0435\u0434\u0435\u043B\u044E \u0432\u044B \u043F\u043E\u0442\u0440\u0430\u0442\u0438\u043B\u0438 \u043D\u0430 10% \u043C\u0435\u043D\u044C\u0448\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u043E\u0432, \u0447\u0435\u043C \u043D\u0435\u0434\u0435\u043B\u0435\u0439 \u0440\u0430\u043D\u0435\u0435.</p></div>\n                <div class=\"card__data\">\n                    \n\n                    <div class=\"card__data__image-box\">\n                        <div class=\"card__data__image\">  <img class=\"card__data__image--img\" src=\"assets/Richdata.png\" alt=\"Richdata.png\" touch-action=\"none\"></div>\n                        <div class=\"card__data__image__settings\">\n                            <div class=\"card__data__image__settings--zoom\">\n                                <span class=\"card--image-settings\">\u041F\u0440\u0438\u0431\u043B\u0438\u0436\u0435\u043D\u0438\u0435: <span class=\"settings--zoom\">100</span>%</span>\n                            </div>\n                            <div class=\"card__data__image__settings--brightness\">\n                                <span class=\"card--image-settings\">\u042F\u0440\u043A\u043E\u0441\u0442\u044C: <span class=\"settings--brightness\">100</span>%</span>\n                            </div>\n                            <input type=\"range\" class=\"music__track--range settings--range\" min=\"-100\" max=\"100\" value=\"0\">\n                        </div>\n                    </div>\n\n                    \n\n\n                    \n\n                    \n\n                </div>\n            </div> <!-- bottom -->\n\n        </div>\n    \n        <div class=\"card card__s\">\n            <div class=\"card__hover-icon card__hover-icon--top\">\n                <svg class=\"icon--card__hover\">\n                    <use xlink:href=\"assets/cross.svg#Events\"></use>\n                </svg>\n            </div>\n            <div class=\"card__hover-icon  card__hover-icon--bottom\">\n                <svg class=\"icon--card__hover \">\n                    <use xlink:href=\"assets/Next.svg#Events\"></use>\n                </svg>\n            </div>\n            <div class=\"card__type--top card__info\">\n                <div class=\"card__header\">\n                    <div class=\"card__icon\">\n                        <svg class=\"icon--card\" viewBox=\"-10 -15 62 65\" preserveAspectRatio=\"xMinYMid\"><use xlink:href=\"assets/key.svg#Events\"></use></svg>\n                    </div>\n                    <div class=\"card__title\">\n                        <h2 class=\"card--heading\">\u0414\u0432\u0435\u0440\u044C \u043E\u0442\u043A\u0440\u044B\u0442\u0430</h2>\n                    </div>\n                </div>\n\n                <div class=\"card__source\">\n                    <h3 class=\"card--source-text\">\u0421\u0435\u043D\u0441\u043E\u0440 \u0432\u0445\u043E\u0434\u043D\u043E\u0439 \u0434\u0432\u0435\u0440\u0438</h3>\n                </div>\n                <div class=\"card__time\">\n                    <h3 class=\"card--time-text\">18:50, \u0421\u0435\u0433\u043E\u0434\u043D\u044F</h3>\n                </div>\n            </div>\n            <div class=\"card__type--bottom card__info\">\n\n                \n                \n            </div> <!-- bottom -->\n\n        </div>\n    \n        <div class=\"card card__s\">\n            <div class=\"card__hover-icon card__hover-icon--top\">\n                <svg class=\"icon--card__hover\">\n                    <use xlink:href=\"assets/cross.svg#Events\"></use>\n                </svg>\n            </div>\n            <div class=\"card__hover-icon  card__hover-icon--bottom\">\n                <svg class=\"icon--card__hover \">\n                    <use xlink:href=\"assets/Next.svg#Events\"></use>\n                </svg>\n            </div>\n            <div class=\"card__type--top card__info\">\n                <div class=\"card__header\">\n                    <div class=\"card__icon\">\n                        <svg class=\"icon--card\" viewBox=\"-10 -15 62 65\" preserveAspectRatio=\"xMinYMid\"><use xlink:href=\"assets/robot-cleaner.svg#Events\"></use></svg>\n                    </div>\n                    <div class=\"card__title\">\n                        <h2 class=\"card--heading\">\u0423\u0431\u043E\u0440\u043A\u0430 \u0437\u0430\u043A\u043E\u043D\u0447\u0435\u043D\u0430</h2>\n                    </div>\n                </div>\n\n                <div class=\"card__source\">\n                    <h3 class=\"card--source-text\">\u041F\u044B\u043B\u0435\u0441\u043E\u0441</h3>\n                </div>\n                <div class=\"card__time\">\n                    <h3 class=\"card--time-text\">18:45, \u0421\u0435\u0433\u043E\u0434\u043D\u044F</h3>\n                </div>\n            </div>\n            <div class=\"card__type--bottom card__info\">\n\n                \n                \n            </div> <!-- bottom -->\n\n        </div>\n    \n        <div class=\"card card__s\">\n            <div class=\"card__hover-icon card__hover-icon--top\">\n                <svg class=\"icon--card__hover\">\n                    <use xlink:href=\"assets/cross.svg#Events\"></use>\n                </svg>\n            </div>\n            <div class=\"card__hover-icon  card__hover-icon--bottom\">\n                <svg class=\"icon--card__hover \">\n                    <use xlink:href=\"assets/Next.svg#Events\"></use>\n                </svg>\n            </div>\n            <div class=\"card__type--top card__info\">\n                <div class=\"card__header\">\n                    <div class=\"card__icon\">\n                        <svg class=\"icon--card\" viewBox=\"-10 -15 62 65\" preserveAspectRatio=\"xMinYMid\"><use xlink:href=\"assets/router.svg#Events\"></use></svg>\n                    </div>\n                    <div class=\"card__title\">\n                        <h2 class=\"card--heading\">\u041D\u043E\u0432\u044B\u0439 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C</h2>\n                    </div>\n                </div>\n\n                <div class=\"card__source\">\n                    <h3 class=\"card--source-text\">\u0420\u043E\u0443\u0442\u0435\u0440</h3>\n                </div>\n                <div class=\"card__time\">\n                    <h3 class=\"card--time-text\">18:45, \u0421\u0435\u0433\u043E\u0434\u043D\u044F</h3>\n                </div>\n            </div>\n            <div class=\"card__type--bottom card__info\">\n\n                \n                \n            </div> <!-- bottom -->\n\n        </div>\n    \n        <div class=\"card card__m\">\n            <div class=\"card__hover-icon card__hover-icon--top\">\n                <svg class=\"icon--card__hover\">\n                    <use xlink:href=\"assets/cross.svg#Events\"></use>\n                </svg>\n            </div>\n            <div class=\"card__hover-icon  card__hover-icon--bottom\">\n                <svg class=\"icon--card__hover \">\n                    <use xlink:href=\"assets/Next.svg#Events\"></use>\n                </svg>\n            </div>\n            <div class=\"card__type--top card__info\">\n                <div class=\"card__header\">\n                    <div class=\"card__icon\">\n                        <svg class=\"icon--card\" viewBox=\"-10 -15 62 65\" preserveAspectRatio=\"xMinYMid\"><use xlink:href=\"assets/thermal.svg#Events\"></use></svg>\n                    </div>\n                    <div class=\"card__title\">\n                        <h2 class=\"card--heading\">\u0418\u0437\u043C\u0435\u043D\u0435\u043D \u043A\u043B\u0438\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0440\u0435\u0436\u0438\u043C</h2>\n                    </div>\n                </div>\n\n                <div class=\"card__source\">\n                    <h3 class=\"card--source-text\">\u0421\u0435\u043D\u0441\u043E\u0440 \u043C\u0438\u043A\u0440\u043E\u043A\u043B\u0438\u043C\u0430\u0442\u0430</h3>\n                </div>\n                <div class=\"card__time\">\n                    <h3 class=\"card--time-text\">18:30, \u0421\u0435\u0433\u043E\u0434\u043D\u044F</h3>\n                </div>\n            </div>\n            <div class=\"card__type--bottom card__info\">\n\n                <div class=\"card__description\"><p class=\"card--paragraph\">\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D \u043A\u043B\u0438\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0440\u0435\u0436\u0438\u043C \u00AB\u0424\u0438\u0434\u0436\u0438\u00BB</p></div>\n                <div class=\"card__data\">\n                    \n\n                    \n\n                    <div class=\"card__data__climate\">\n                    <div class=\"card__data__temperature\">\n                        <p class=\"card--data-climate\">\n                        \u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430: <span class=\"card--data-climate text--bold\">24 \u0421</span>\n                        </p>\n                    </div>\n                    <div class=\"card__data__humidity\">\n                        <p class=\"card--data-climate\">\n                            \u0412\u043B\u0430\u0436\u043D\u043E\u0441\u0442\u044C: <span class=\"card--data-climate text--bold\">80%</span>\n                        </p>\n                    </div></div>\n\n\n                    \n\n                    \n\n                </div>\n            </div> <!-- bottom -->\n\n        </div>\n    \n        <div class=\"card card__m\">\n            <div class=\"card__hover-icon card__hover-icon--top\">\n                <svg class=\"icon--card__hover\">\n                    <use xlink:href=\"assets/cross.svg#Events\"></use>\n                </svg>\n            </div>\n            <div class=\"card__hover-icon  card__hover-icon--bottom\">\n                <svg class=\"icon--card__hover \">\n                    <use xlink:href=\"assets/Next.svg#Events\"></use>\n                </svg>\n            </div>\n            <div class=\"card__type--top card__critical\">\n                <div class=\"card__header\">\n                    <div class=\"card__icon\">\n                        <svg class=\"icon--card\" viewBox=\"-10 -15 62 65\" preserveAspectRatio=\"xMinYMid\"><use xlink:href=\"assets/ac.svg#Events\"></use></svg>\n                    </div>\n                    <div class=\"card__title\">\n                        <h2 class=\"card--heading\">\u041D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0432\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u043A\u043E\u043D\u0434\u0438\u0446\u0438\u043E\u043D\u0435\u0440</h2>\n                    </div>\n                </div>\n\n                <div class=\"card__source\">\n                    <h3 class=\"card--source-text\">\u041A\u043E\u043D\u0434\u0438\u0446\u0438\u043E\u043D\u0435\u0440</h3>\n                </div>\n                <div class=\"card__time\">\n                    <h3 class=\"card--time-text\">18:21, \u0421\u0435\u0433\u043E\u0434\u043D\u044F</h3>\n                </div>\n            </div>\n            <div class=\"card__type--bottom card__info\">\n\n                <div class=\"card__description\"><p class=\"card--paragraph\">\u0412 \u043A\u043E\u043C\u043D\u0430\u0442\u0435 \u043E\u0442\u043A\u0440\u044B\u0442\u043E \u043E\u043A\u043D\u043E, \u0437\u0430\u043A\u0440\u043E\u0439\u0442\u0435 \u0435\u0433\u043E \u0438 \u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u043E\u043F\u044B\u0442\u043A\u0443</p></div>\n                \n            </div> <!-- bottom -->\n\n        </div>\n    \n        <div class=\"card card__m\">\n            <div class=\"card__hover-icon card__hover-icon--top\">\n                <svg class=\"icon--card__hover\">\n                    <use xlink:href=\"assets/cross.svg#Events\"></use>\n                </svg>\n            </div>\n            <div class=\"card__hover-icon  card__hover-icon--bottom\">\n                <svg class=\"icon--card__hover \">\n                    <use xlink:href=\"assets/Next.svg#Events\"></use>\n                </svg>\n            </div>\n            <div class=\"card__type--top card__info\">\n                <div class=\"card__header\">\n                    <div class=\"card__icon\">\n                        <svg class=\"icon--card\" viewBox=\"-10 -15 62 65\" preserveAspectRatio=\"xMinYMid\"><use xlink:href=\"assets/music.svg#Events\"></use></svg>\n                    </div>\n                    <div class=\"card__title\">\n                        <h2 class=\"card--heading\">\u041C\u0443\u0437\u044B\u043A\u0430 \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u0430</h2>\n                    </div>\n                </div>\n\n                <div class=\"card__source\">\n                    <h3 class=\"card--source-text\">\u042F\u043D\u0434\u0435\u043A\u0441.\u0421\u0442\u0430\u043D\u0446\u0438\u044F</h3>\n                </div>\n                <div class=\"card__time\">\n                    <h3 class=\"card--time-text\">18:16, \u0421\u0435\u0433\u043E\u0434\u043D\u044F</h3>\n                </div>\n            </div>\n            <div class=\"card__type--bottom card__info\">\n\n                <div class=\"card__description\"><p class=\"card--paragraph\">\u0421\u0435\u0439\u0447\u0430\u0441 \u043F\u0440\u043E\u0438\u0433\u0440\u044B\u0432\u0430\u0435\u0442\u0441\u044F:</p></div>\n                <div class=\"card__data\">\n                    \n\n                    \n\n                    \n\n\n                    \n\n                    <div class=\"card__data__music\">  <div class=\"music__header\">\n                    <div class=\"card__data__albumcover\">\n                        <img class=\"card__data__albumcover--img\" src=\"https://avatars.yandex.net/get-music-content/193823/1820a43e.a.5517056-1/m1000x1000\" alt=\"https://avatars.yandex.net/get-music-content/193823/1820a43e.a.5517056-1/m1000x1000\">\n                    </div>\n\n                    <div class=\"music__main\">\n                        <div class=\"card__data__artist\">\n                            <p class=\"card--data-music-title\">\n                                Florence &amp; The Machine - Big God\n                            </p>\n                        </div>\n                        <div class=\"music__track\">\n                            <input type=\"range\" class=\"music__track--range\">\n                            <div class=\"card__data__track--length music__track--length\">\n                                <p class=\"card--data-music\">\n                                    4:31\n                                </p>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n                <div class=\"music__player\">\n                    <div class=\"music__icons\">\n                        <div class=\"music__icons--item\">\n                            <svg class=\"icon--music\">\n                                <use xlink:href=\"assets/Prev.svg#Events\"></use>\n                            </svg>\n                        </div>\n                        <div class=\"music__icons--item\">\n                            <svg class=\"icon--music icon--rotated\">\n                                <use xlink:href=\"assets/Prev.svg#Events\"></use>\n                            </svg>\n                        </div>\n                    </div>\n\n                    <input type=\"range\" class=\"music__player--range\">\n                    <div class=\"card__data__volume\">\n                        <p class=\"card--data-music\">\n                            80\n                        </p>\n                    </div>\n                </div></div>\n\n                </div>\n            </div> <!-- bottom -->\n\n        </div>\n    \n        <div class=\"card card__m\">\n            <div class=\"card__hover-icon card__hover-icon--top\">\n                <svg class=\"icon--card__hover\">\n                    <use xlink:href=\"assets/cross.svg#Events\"></use>\n                </svg>\n            </div>\n            <div class=\"card__hover-icon  card__hover-icon--bottom\">\n                <svg class=\"icon--card__hover \">\n                    <use xlink:href=\"assets/Next.svg#Events\"></use>\n                </svg>\n            </div>\n            <div class=\"card__type--top card__info\">\n                <div class=\"card__header\">\n                    <div class=\"card__icon\">\n                        <svg class=\"icon--card\" viewBox=\"-10 -15 62 65\" preserveAspectRatio=\"xMinYMid\"><use xlink:href=\"assets/fridge.svg#Events\"></use></svg>\n                    </div>\n                    <div class=\"card__title\">\n                        <h2 class=\"card--heading\">\u0417\u0430\u043A\u0430\u043D\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u043C\u043E\u043B\u043E\u043A\u043E</h2>\n                    </div>\n                </div>\n\n                <div class=\"card__source\">\n                    <h3 class=\"card--source-text\">\u0425\u043E\u043B\u043E\u0434\u0438\u043B\u044C\u043D\u0438\u043A</h3>\n                </div>\n                <div class=\"card__time\">\n                    <h3 class=\"card--time-text\">17:23, \u0421\u0435\u0433\u043E\u0434\u043D\u044F</h3>\n                </div>\n            </div>\n            <div class=\"card__type--bottom card__info\">\n\n                <div class=\"card__description\"><p class=\"card--paragraph\">\u041A\u0430\u0436\u0435\u0442\u0441\u044F, \u0432 \u0445\u043E\u043B\u043E\u0434\u0438\u043B\u044C\u043D\u0438\u043A\u0435 \u0437\u0430\u043A\u0430\u043D\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u043C\u043E\u043B\u043E\u043A\u043E. \u0412\u044B \u0445\u043E\u0442\u0438\u0442\u0435 \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0435\u0433\u043E \u0432 \u0441\u043F\u0438\u0441\u043E\u043A \u043F\u043E\u043A\u0443\u043F\u043E\u043A?</p></div>\n                <div class=\"card__data\">\n                    \n\n                    \n\n                    \n\n\n                    <div class=\"card__data__buttons\">\n                     <button class=\"card__data__buttons--btn\">\n                                            <span class=\"card--data-paragraph text--bold\">\n                                                \u0414\u0430\n                                            </span>\n                                        </button> <button class=\"card__data__buttons--btn\">\n                                            <span class=\"card--data-paragraph text--bold\">\n                                                \u041D\u0435\u0442\n                                            </span>\n                                        </button></div>\n\n                    \n\n                </div>\n            </div> <!-- bottom -->\n\n        </div>\n    \n        <div class=\"card card__s\">\n            <div class=\"card__hover-icon card__hover-icon--top\">\n                <svg class=\"icon--card__hover\">\n                    <use xlink:href=\"assets/cross.svg#Events\"></use>\n                </svg>\n            </div>\n            <div class=\"card__hover-icon  card__hover-icon--bottom\">\n                <svg class=\"icon--card__hover \">\n                    <use xlink:href=\"assets/Next.svg#Events\"></use>\n                </svg>\n            </div>\n            <div class=\"card__type--top card__info\">\n                <div class=\"card__header\">\n                    <div class=\"card__icon\">\n                        <svg class=\"icon--card\" viewBox=\"-10 -15 62 65\" preserveAspectRatio=\"xMinYMid\"><use xlink:href=\"assets/battery.svg#Events\"></use></svg>\n                    </div>\n                    <div class=\"card__title\">\n                        <h2 class=\"card--heading\">\u0417\u0430\u0440\u044F\u0434\u043A\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0430</h2>\n                    </div>\n                </div>\n\n                <div class=\"card__source\">\n                    <h3 class=\"card--source-text\">\u041E\u043A\u043E\u043D\u043D\u044B\u0439 \u0441\u0435\u043D\u0441\u043E\u0440</h3>\n                </div>\n                <div class=\"card__time\">\n                    <h3 class=\"card--time-text\">16:22, \u0421\u0435\u0433\u043E\u0434\u043D\u044F</h3>\n                </div>\n            </div>\n            <div class=\"card__type--bottom card__info\">\n\n                <div class=\"card__description\"><p class=\"card--paragraph\">\u0423\u0440\u0430! \u0423\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E \u00AB\u041E\u043A\u043E\u043D\u043D\u044B\u0439 \u0441\u0435\u043D\u0441\u043E\u0440\u00BB \u0441\u043D\u043E\u0432\u0430 \u0432 \u0441\u0442\u0440\u043E\u044E!</p></div>\n                \n            </div> <!-- bottom -->\n\n        </div>\n    \n        <div class=\"card card__l\">\n            <div class=\"card__hover-icon card__hover-icon--top\">\n                <svg class=\"icon--card__hover\">\n                    <use xlink:href=\"assets/cross.svg#Events\"></use>\n                </svg>\n            </div>\n            <div class=\"card__hover-icon  card__hover-icon--bottom\">\n                <svg class=\"icon--card__hover \">\n                    <use xlink:href=\"assets/Next.svg#Events\"></use>\n                </svg>\n            </div>\n            <div class=\"card__type--top card__critical\">\n                <div class=\"card__header\">\n                    <div class=\"card__icon\">\n                        <svg class=\"icon--card\" viewBox=\"-10 -15 62 65\" preserveAspectRatio=\"xMinYMid\"><use xlink:href=\"assets/cam.svg#Events\"></use></svg>\n                    </div>\n                    <div class=\"card__title\">\n                        <h2 class=\"card--heading\">\u041F\u044B\u043B\u0435\u0441\u043E\u0441 \u0437\u0430\u0441\u0442\u0440\u044F\u043B</h2>\n                    </div>\n                </div>\n\n                <div class=\"card__source\">\n                    <h3 class=\"card--source-text\">\u0421\u0435\u043D\u0441\u043E\u0440 \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u044F</h3>\n                </div>\n                <div class=\"card__time\">\n                    <h3 class=\"card--time-text\">16:17, \u0421\u0435\u0433\u043E\u0434\u043D\u044F</h3>\n                </div>\n            </div>\n            <div class=\"card__type--bottom card__info\">\n\n                <div class=\"card__description\"><p class=\"card--paragraph\">\u0420\u043E\u0431\u043E\u043F\u044B\u043B\u0435\u0441\u043E\u0441 \u043D\u0435 \u0441\u043C\u043E\u0433 \u0441\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u0432\u043E\u0435 \u043C\u0435\u0441\u0442\u043E\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0445 3 \u043C\u0438\u043D\u0443\u0442. \u041F\u043E\u0445\u043E\u0436\u0435, \u0435\u043C\u0443 \u043D\u0443\u0436\u043D\u0430 \u043F\u043E\u043C\u043E\u0449\u044C.</p></div>\n                <div class=\"card__data\">\n                    \n\n                    <div class=\"card__data__image-box\">\n                        <div class=\"card__data__image\">  <img class=\"card__data__image--img\" src=\"assets/cleaner.jpg\" alt=\"cleaner.jpg\" touch-action=\"none\"></div>\n                        <div class=\"card__data__image__settings\">\n                            <div class=\"card__data__image__settings--zoom\">\n                                <span class=\"card--image-settings\">\u041F\u0440\u0438\u0431\u043B\u0438\u0436\u0435\u043D\u0438\u0435: <span class=\"settings--zoom\">100</span>%</span>\n                            </div>\n                            <div class=\"card__data__image__settings--brightness\">\n                                <span class=\"card--image-settings\">\u042F\u0440\u043A\u043E\u0441\u0442\u044C: <span class=\"settings--brightness\">100</span>%</span>\n                            </div>\n                            <input type=\"range\" class=\"music__track--range settings--range\" min=\"-100\" max=\"100\" value=\"0\">\n                        </div>\n                    </div>\n\n                    \n\n\n                    \n\n                    \n\n                </div>\n            </div> <!-- bottom -->\n\n        </div>\n    \n        <div class=\"card card__s\">\n            <div class=\"card__hover-icon card__hover-icon--top\">\n                <svg class=\"icon--card__hover\">\n                    <use xlink:href=\"assets/cross.svg#Events\"></use>\n                </svg>\n            </div>\n            <div class=\"card__hover-icon  card__hover-icon--bottom\">\n                <svg class=\"icon--card__hover \">\n                    <use xlink:href=\"assets/Next.svg#Events\"></use>\n                </svg>\n            </div>\n            <div class=\"card__type--top card__info\">\n                <div class=\"card__header\">\n                    <div class=\"card__icon\">\n                        <svg class=\"icon--card\" viewBox=\"-10 -15 62 65\" preserveAspectRatio=\"xMinYMid\"><use xlink:href=\"assets/kettle.svg#Events\"></use></svg>\n                    </div>\n                    <div class=\"card__title\">\n                        <h2 class=\"card--heading\">\u0412\u043E\u0434\u0430 \u0432\u0441\u043A\u0438\u043F\u0435\u043B\u0430</h2>\n                    </div>\n                </div>\n\n                <div class=\"card__source\">\n                    <h3 class=\"card--source-text\">\u0427\u0430\u0439\u043D\u0438\u043A</h3>\n                </div>\n                <div class=\"card__time\">\n                    <h3 class=\"card--time-text\">16:20, \u0421\u0435\u0433\u043E\u0434\u043D\u044F</h3>\n                </div>\n            </div>\n            <div class=\"card__type--bottom card__info\">\n\n                \n                \n            </div> <!-- bottom -->\n\n        </div>\n    </section>\n                </div>"
    },
    {
        name: "Сводка",
        id: "page-summary",
        innerHtml: "<div class=\"summary-page\">\n                        <section class=\"main\">\n                                <div class=\"section-heading\">\n                                    <h3 class=\"heading-section\">\u0413\u043B\u0430\u0432\u043D\u043E\u0435</h3>\n                                </div>\n                                <div class=\"main__content\">\n                                    <div class=\"main__status\">\n                                        <div class=\"main__status--greeting\">\n                                            <h2 class=\"heading-greeting\">\u041F\u0440\u0438\u0432\u0435\u0442, \u0413\u0435\u043D\u043D\u0430\u0434\u0438\u0439!</h2>\n                                        </div>\n                                        <div class=\"main__status--house\">\n                                            <p class=\"paragraph-1\">\u0414\u0432\u0435\u0440\u0438 \u0438 \u043E\u043A\u043D\u0430 \u0437\u0430\u043A\u0440\u044B\u0442\u044B, \u0441\u0438\u0433\u043D\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u0430.</p>\n                                        </div>\n                                        <div class=\"main__status--temperature\">\n                \n                                            <div class=\"temperature--heading\">\n                                                <h4 class=\"heading--place\">\u0414\u043E\u043C\u0430</h4>\n                                            </div>\n                                            <div class=\"temperature--heading\">\n                                                <h4 class=\"heading--place\">\u0417\u0430 \u043E\u043A\u043D\u043E\u043C</h4>\n                                            </div>\n                \n                                            <div class=\"temperature--value\">\n                                                <h1 class=\"heading-temperature\">+23</h1>\n                                            </div>\n                                            <div class=\"temperature--value\">\n                                                <h1 class=\"heading-temperature\">+19\n                                                    <svg class=\"icon--cloud\">\n                                                        <use xlink:href=\"assets/cloud-drizzle.svg#Final\"></use>\n                                                    </svg>\n                                                </h1>\n                                            </div>\n                \n                                        </div>\n                                    </div>\n                                    <div class=\"main__schedule\" onscroll=\"changeMainSliderVisibility(event)\">\n                                        <a href=\"#popup-temperature\" class=\"card card__f card--main\">\n                                            <div class=\"card__icon\">\n                                                <svg class=\"icon--device\">\n                                                    <use xlink:href=\"assets/icon_temperature.svg#Final\"></use>\n                                                </svg>\n                                            </div>\n                                            <div class=\"card__title\">\n                                                <h5 class=\"heading-card\">Philips Cooler</h5>\n                                            </div>\n                                            <div class=\"card__text\">\n                                                <p class=\"paragraph-2\">\u041D\u0430\u0447\u043D\u0435\u0442 \u043E\u0445\u043B\u0430\u0436\u0434\u0430\u0442\u044C \u0432 16:30</p>\n                                            </div>\n                                        </a>\n                                        <a href=\"#popup-light\" class=\"card card__f card--main\">\n                                            <div class=\"card__icon\">\n                                                <svg class=\"icon--device\">\n                                                    <use xlink:href=\"assets/icon_sun.svg#Final\"></use>\n                                                </svg>\n                                            </div>\n                                            <div class=\"card__title\">\n                                                <h5 class=\"heading-card\">Xiaomi Yeelight LED Smart Bulb</h5>\n                                            </div>\n                                            <div class=\"card__text\">\n                                                <p class=\"paragraph-2\">\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u0441\u044F \u0432 17:00</p>\n                                            </div>\n                                        </a>\n                                        <a href=\"#popup-floor\" class=\"card card__f card--main\">\n                                            <div class=\"card__icon\">\n                                                <svg class=\"icon--device\">\n                                                    <use xlink:href=\"assets/icon_temperature_2.svg#Final\"></use>\n                                                </svg>\n                                            </div>\n                                            <div class=\"card__title\">\n                                                <h5 class=\"heading-card\">Xiaomi Warm Floor</h5>\n                                            </div>\n                                            <div class=\"card__text\">\n                                                <p class=\"paragraph-2\">\u0412\u043A\u043B\u044E\u0447\u0435\u043D\u043E</p>\n                                            </div>\n                                        </a>\n                                        <div class=\"main__schedule__slider\" id=\"schedule__slider\">\n                                            <img srcset=\"assets/Icons/Arrow_Double/M.png 1x, assets/Icons/Arrow_Double/M@2x.png 2x\" src=\"assets/Icons/Arrow_Double/M@2x.png\"\n                                                alt=\"slider\" class=\"icon--double-arrow\">\n                                        </div>\n                                    </div>\n                                </div>\n                            </section>\n                            <!-- /main -->\n                            <!-- scenarios -->\n                            <section class=\"scenarios\">\n                                <div class=\"scenarios__heading\">\n                                    <div class=\"section-heading\">\n                                        <h3 class=\"heading-section\">\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0438</h3>\n                                    </div>\n                                    <div class=\"scenarios__icons\">\n                                        <div class=\"nav-arrows\">\n                                            <div class=\"arrow arrow--left carousel__prev carousel__prev--scenarios\">\n                                                <svg class=\"icon--arrow\">\n                                                    <use xlink:href=\"assets/Icons/Arrow_Right/MCopy@1x.svg#icon_arrow-right_m\"></use>\n                                                </svg>\n                                            </div>\n                                            <div class=\"arrow arrow--right carousel__next carousel__next--scenarios\">\n                                                <svg class=\"icon--arrow\">\n                                                    <use xlink:href=\"assets/Icons/Arrow_Right/MCopy@1x.svg#icon_arrow-right_m\"></use>\n                                                </svg>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <!-- scenarios__heading -->\n                                <div class=\"carousel__wrap carousel__wrap--scenarios\">\n                                    <div class=\"scenarios__content carousel__container carousel__container--scenarios\">\n                                        <div class=\"card card__f card--scenarios\">\n                                            <div class=\"card__icon\">\n                                                <svg class=\"icon--device\">\n                                                    <use xlink:href=\"assets/icon_sun_2.svg#Final\"></use>\n                                                </svg>\n                                            </div>\n                                            <div class=\"card__title\">\n                                                <h5 class=\"heading-card\">\u0412\u044B\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0432\u0435\u0441\u044C \u0441\u0432\u0435\u0442 \u0432 \u0434\u043E\u043C\u0435 \u0438 \u0432\u043E \u0434\u0432\u043E\u0440\u0435</h5>\n                                            </div>\n                                        </div>\n                                        <div class=\"card  card__f card--scenarios\">\n                                            <div class=\"card__icon\">\n                                                <svg class=\"icon--device\">\n                                                    <use xlink:href=\"assets/icon_scheduled.svg#Final\"></use>\n                                                </svg>\n                                            </div>\n                                            <div class=\"card__title\">\n                                                <h5 class=\"heading-card\">\u042F \u0443\u0445\u043E\u0436\u0443</h5>\n                                            </div>\n                                        </div>\n                                        <div class=\"card card__f card--scenarios\">\n                                            <div class=\"card__icon\">\n                                                <svg class=\"icon--device\">\n                                                    <use xlink:href=\"assets/icon_sun_2.svg#Final\"></use>\n                                                </svg>\n                                            </div>\n                                            <div class=\"card__title\">\n                                                <h5 class=\"heading-card\">\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0441\u0432\u0435\u0442 \u0432 \u043A\u043E\u0440\u0438\u0434\u043E\u0440\u0435</h5>\n                                            </div>\n                                        </div>\n                                        <div class=\"card card__f card--scenarios\">\n                                            <div class=\"card__icon\">\n                                                <svg class=\"icon--device\">\n                                                    <use xlink:href=\"assets/icon_temperature_2.svg#Final\"></use>\n                                                </svg>\n                                            </div>\n                                            <div class=\"card__title\">\n                                                <h5 class=\"heading-card\">\u041D\u0430\u0431\u0440\u0430\u0442\u044C \u0433\u043E\u0440\u044F\u0447\u0443\u044E \u0432\u0430\u043D\u043D\u0443</h5>\n                                            </div>\n                                            <div class=\"card__text\">\n                                                <p class=\"paragraph-2\">\u041D\u0430\u0447\u043D\u0451\u0442\u0441\u044F \u0432 18:00</p>\n                                            </div>\n                                        </div>\n                                        <a href=\"#popup-floor\" class=\"card card__f card--scenarios\">\n                                            <div class=\"card__icon\">\n                                                <svg class=\"icon--device\">\n                                                    <use xlink:href=\"assets/icon_temperature_2.svg#Final\"></use>\n                                                </svg>\n                                            </div>\n                                            <div class=\"card__title\">\n                                                <h5 class=\"heading-card\">\u0421\u0434\u0435\u043B\u0430\u0442\u044C \u043F\u043E\u043B \u0442\u0451\u043F\u043B\u044B\u043C \u0432\u043E \u0432\u0441\u0435\u0439 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0435</h5>\n                                            </div>\n                                        </a>\n                                    </div>\n                                </div>\n                                <!-- scenarios__content -->\n                            </section>\n                            <!-- /scenarios -->\n                \n                            <!-- devices -->\n                            <section class=\"devices\">\n                                <div class=\"devices__header\">\n                                    <div class=\"section-heading\">\n                                        <h3 class=\"heading-section\">\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430</h3>\n                                    </div>\n                                    <div class=\"devices__filters\">\n                                        <div class=\" devices__filter filter-active\">\n                                            <label for=\"filter-toggle\">\n                                                <h5 class=\"heading--filter\">\u0412\u0441\u0435\n                                                    <svg class=\"icon--arrow-down\" viewBox=\"0 0 129 129\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                                                        enable-background=\"new 0 0 129 129\">\n                                                        <g>\n                                                            <path d=\"m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z\" />\n                                                        </g>\n                                                    </svg>\n                                                </h5>\n                                            </label>\n                                        </div>\n                                        <input type=\"checkbox\" class=\"devices__filters__checkbox\" id=\"filter-toggle\">\n                                        <div class=\"devices__filters__list\">\n                                            <div class=\"devices__filter\">\n                                                <h5 class=\"heading--filter\">\u041A\u0443\u0445\u043D\u044F</h5>\n                                            </div>\n                                            <div class=\"devices__filter\">\n                                                <h5 class=\"heading--filter\">\u0417\u0430\u043B</h5>\n                                            </div>\n                                            <div class=\"devices__filter\">\n                                                <h5 class=\"heading--filter\">\u041B\u0430\u043C\u043F\u043E\u0447\u043A\u0438</h5>\n                                            </div>\n                                            <div class=\"devices__filter\">\n                                                <h5 class=\"heading--filter\">\u041A\u0430\u043C\u0435\u0440\u044B</h5>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"devices__icons\">\n                                        <div class=\"nav-arrows\">\n                                            <div class=\"arrow arrow--left carousel__prev carousel__prev--devices\">\n                                                <svg class=\"icon--arrow\">\n                                                    <use xlink:href=\"assets/Icons/Arrow_Right/MCopy@1x.svg#icon_arrow-right_m\"></use>\n                                                </svg>\n                                            </div>\n                                            <div class=\"arrow arrow--right carousel__next carousel__next--devices\">\n                                                <svg class=\"icon--arrow\">\n                                                    <use xlink:href=\"assets/Icons/Arrow_Right/MCopy@1x.svg#icon_arrow-right_m\"></use>\n                                                </svg>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"carousel__wrap carousel__wrap--devices\">\n                                    <div class=\"devices__list carousel__container carousel__container--devices\">\n                                        <a href=\"#popup-light\" class=\"card card__f card--devices\">\n                                            <div class=\"card__icon\">\n                                                <svg class=\"icon--device\">\n                                                    <use xlink:href=\"assets/icon_sun_2.svg#Final\"></use>\n                                                </svg>\n                                            </div>\n                                            <div class=\"card__title\">\n                                                <h5 class=\"heading-card\">Xiaomi Yeelight LED Smart Bulb</h5>\n                                            </div>\n                                            <div class=\"card__text\">\n                                                <p class=\"paragraph-2\">\u0412\u043A\u043B\u044E\u0447\u0435\u043D\u043E</p>\n                                            </div>\n                                        </a>\n                                        <a href=\"#popup-light\" class=\"card card__f card--devices\">\n                                            <div class=\"card__icon\">\n                                                <svg class=\"icon--device\">\n                                                    <use xlink:href=\"assets/icon_sun.svg#Final\"></use>\n                                                </svg>\n                                            </div>\n                                            <div class=\"card__title\">\n                                                <h5 class=\"heading-card\">D-Link Omna 180 Cam</h5>\n                                            </div>\n                                            <div class=\"card__text\">\n                                                <p class=\"paragraph-2\">\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u0441\u044F \u0432 17:00</p>\n                                            </div>\n                                        </a>\n                                        <a href=\"#popup-temperature\" class=\"card card__f card--devices\">\n                                            <div class=\"card__icon\">\n                                                <svg class=\"icon--device\">\n                                                    <use xlink:href=\"assets/icon_temperature.svg#Final\"></use>\n                                                </svg>\n                                            </div>\n                                            <div class=\"card__title\">\n                                                <h5 class=\"heading-card\">Elgato Eve Degree Connected</h5>\n                                            </div>\n                                            <div class=\"card__text\">\n                                                <p class=\"paragraph-2\">\u0412\u044B\u043A\u043B\u044E\u0447\u0435\u043D\u043E \u0434\u043E 17:00</p>\n                                            </div>\n                                        </a>\n                                        <a href=\"#popup-light\" class=\"card card__f card--devices\">\n                                            <div class=\"card__icon\">\n                                                <svg class=\"icon--device\">\n                                                    <use xlink:href=\"assets/icon_sun.svg#Final\"></use>\n                                                </svg>\n                                            </div>\n                                            <div class=\"card__title\">\n                                                <h5 class=\"heading-card\">LIFX Mini Day & Dusk A60 E27</h5>\n                                            </div>\n                                            <div class=\"card__text\">\n                                                <p class=\"paragraph-2\">\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u0441\u044F \u0432 17:00</p>\n                                            </div>\n                                        </a>\n                                        <a href=\"#popup-light\" class=\"card card__f card--devices\">\n                                            <div class=\"card__icon\">\n                                                <svg class=\"icon--device\">\n                                                    <use xlink:href=\"assets/icon_sun_2.svg#Final\"></use>\n                                                </svg>\n                                            </div>\n                                            <div class=\"card__title\">\n                                                <h5 class=\"heading-card\">Xiaomi Mi Air Purifier 2S</h5>\n                                            </div>\n                                            <div class=\"card__text\">\n                                                <p class=\"paragraph-2\">\u0412\u043A\u043B\u044E\u0447\u0435\u043D\u043E</p>\n                                            </div>\n                                        </a>\n                                        <a href=\"#popup-light\" class=\"card card__f card--devices\">\n                                            <div class=\"card__icon\">\n                                                <svg class=\"icon--device\">\n                                                    <use xlink:href=\"assets/icon_sun.svg#Final\"></use>\n                                                </svg>\n                                            </div>\n                                            <div class=\"card__title\">\n                                                <h5 class=\"heading-card\">Philips Zhirui</h5>\n                                            </div>\n                                            <div class=\"card__text\">\n                                                <p class=\"paragraph-2\">\u0412\u044B\u043A\u043B\u044E\u0447\u0435\u043D\u043E</p>\n                                            </div>\n                                        </a>\n                                        <a href=\"#popup-light\" class=\"card card__f card--devices\">\n                                            <div class=\"card__icon\">\n                                                <svg class=\"icon--device\">\n                                                    <use xlink:href=\"assets/icon_sun_2.svg#Final\"></use>\n                                                </svg>\n                                            </div>\n                                            <div class=\"card__title\">\n                                                <h5 class=\"heading-card\">Xiaomi Mi Air Purifier 2S</h5>\n                                            </div>\n                                            <div class=\"card__text\">\n                                                <p class=\"paragraph-2\">\u0412\u043A\u043B\u044E\u0447\u0435\u043D\u043E</p>\n                                            </div>\n                                        </a>\n                                    </div>\n                                </div>\n                            </section>\n                            <!-- /devices -->\n                    </div>"
    },
    {
        name: "Видеонаблюдение",
        id: "page-sstv",
        innerHtml: "<div class=\"sstv-page\">\n                        <div class=\"content__header\">\n                            <h1 class=\"heading--primary\">\n                                \u0412\u0438\u0434\u0435\u043E\u043D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435\n                            </h1>\n                        </div>\n                        <section class=\"sstv\">\n                            <div class=\"sstv__row\">\n                                <div class=\"sstv__video__container\">\n                                    <video id=\"video-1\" class=\"sstv__video\" muted autoplay>\n                                    </video>\n                                    <a href=\"#popup-sstv\" class=\"sstv__btn-expand\">+</a>\n                                </div>\n                                <div class=\"sstv__video__container\">\n                                    <video id=\"video-2\" class=\"sstv__video\" muted autoplay></video>\n                                    <a href=\"#popup-sstv\" class=\"sstv__btn-expand\">+</a>\n                                </div>\n                                <div class=\"sstv__video__container\">\n                                    <video id=\"video-3\" class=\"sstv__video\" muted autoplay></video>\n                                    <a href=\"#popup-sstv\" class=\"sstv__btn-expand\">+</a>\n                                </div>\n                                <div class=\"sstv__video__container\">\n                                    <video id=\"video-4\" class=\"sstv__video\" muted autoplay></video>\n                                    <a href=\"#popup-sstv\" class=\"sstv__btn-expand\">+</a>\n                                </div>\n            \n                            </div>\n            \n                        </section>\n                </div>"
    }
];
var View = /** @class */ (function () {
    function View(componentsData) {
        this.container = document.querySelector('.content');
        this.navContainer = document.querySelector('.nav__list');
        this.components = componentsData;
        this.renderNav();
    }
    View.prototype.renderPage = function (id) {
        var component = this.components.find(function (component) { return component.id === id; });
        if (this.container && component) {
            this.container.innerHTML = component.innerHtml;
            store_1.store.popActionById(id);
        }
    };
    View.prototype.renderNav = function () {
        var items = '';
        this.components.forEach(function (component) {
            items += "<li class=\"header__nav__item\">\n                            <a href=\"#\" class=\"text--nav-link\" id=\"" + component.id + "\">" + component.name + "</a>\n                        </li>";
        });
        this.navContainer.innerHTML = items;
    };
    return View;
}());
var view = new View(components);
exports.view = view;

},{"./store":9}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        if (this.brightnessField && this.brightnessField.parentElement) {
            this.brightnessField.parentElement.addEventListener("pointerdown", function (e) {
                _this._resetProperties();
            });
        }
        if (this.element) {
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
        }
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
            y: Math.round((point1.currY + point2.currY) / 2),
        };
        var abscissaPoint = {
            x: circleCenter.x * 2,
            y: circleCenter.y,
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

},{}],12:[function(require,module,exports){
arguments[4][1][0].apply(exports,arguments)
},{"dup":1}],13:[function(require,module,exports){
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

},{"./SensorInputHandler":11}]},{},[1,2,3,4,5,6,7,8,9,10,11,12,13]);
