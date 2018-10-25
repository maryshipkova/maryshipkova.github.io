"use strict";
exports.__esModule = true;
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
                image: "get_it_from_mocks_:3.jpg"
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
var container = document.querySelector("#events");
var cardTemplate = document.querySelector("#card-template");
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
var TemplateFactory = /** @class */ (function () {
    function TemplateFactory(template, properties) {
        this._template = template.content;
        this._properties = JSON.parse(JSON.stringify(properties));
        this._stringToReplace = "$meow";
    }
    TemplateFactory.prototype._initTemplate = function () {
        var template = document.importNode(this._template, true);
        this._properties.forEach(function (prop) {
            prop.element = template.querySelector(prop.selector);
        });
        return template;
    };
    TemplateFactory.prototype._removeItem = function (item) {
        item.parentElement.removeChild(item);
    };
    TemplateFactory.prototype.renderEventData = function (event, dataNode) {
        var graph = dataNode.querySelector(".card__data__graph");
        var image = dataNode.querySelector(".card__data__image");
        var music = dataNode.querySelector(".card__data__music");
        var climate = dataNode.querySelector(".card__data__climate");
        var buttons = dataNode.querySelector(".card__data__buttons");
        if (event.data.type == "graph") {
            graph.children[0].src = "assets/RichData@2x-min.png"; //// temp
            graph.children[0].alt = "RichData@2x-min.png";
        }
        else {
            this._removeItem(graph);
        }
        if (event.data.image) {
            image.children[0].src = "assets/" + event.data.image;
            image.children[0].alt = "" + event.data.image;
        }
        else {
            this._removeItem(image.parentElement);
        }
        if (event.data.temperature) {
            climate.innerHTML = "\n\t\t\t<div class=\"card__data__temperature\">\n\t\t\t\t<p class=\"card--data-climate\">\n\t\t\t\t\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430: <span class=\"card--data-climate text--bold\">" + event.data.temperature + " \u0421</span>\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t\t<div class=\"card__data__humidity\">\n\t\t\t\t<p class=\"card--data-climate\">\n\t\t\t\t\t\u0412\u043B\u0430\u0436\u043D\u043E\u0441\u0442\u044C: <span class=\"card--data-climate text--bold\">" + event.data.humidity + "%</span>\n\t\t\t\t</p>\n\t\t\t</div>";
        }
        else {
            this._removeItem(climate);
        }
        if (event.data.track) {
            music.innerHTML =
                "  <div class=\"music__header\">\n                    <div class=\"card__data__albumcover\">\n                        <img class=\"card__data__albumcover--img\" src=\"" + event.data.albumcover + "\" alt=\"" + event.data.albumcover + "\">\n                    </div>\n\n                    <div class=\"music__main\">\n                        <div class=\"card__data__artist\">\n                            <p class=\"card--data-music-title\">\n                                " + event.data.artist + " - " + event.data.track.name + "\n                            </p>\n                        </div>\n                        <div class=\"music__track\">\n                            <input type=\"range\" class=\"music__track--range\">\n                            <div class=\"card__data__track--length music__track--length\">\n                                <p class=\"card--data-music\">\n                                    " + event.data.track.length + "\n                                </p>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n                <div class=\"music__player\">\n                    <div class=\"music__icons\">\n                        <div class=\"music__icons--item\">\n                            <svg class=\"icon--music\">\n                                <use xlink:href=\"assets/Prev.svg#Events\"></use>\n                            </svg>\n                        </div>\n                        <div class=\"music__icons--item\">\n                            <svg class=\"icon--music icon--rotated\">\n                                <use xlink:href=\"assets/Prev.svg#Events\"></use>\n                            </svg>\n                        </div>\n                    </div>\n\n                    <input type=\"range\" class=\"music__player--range\">\n                    <div class=\"card__data__volume\">\n                        <p class=\"card--data-music\">\n                            " + event.data.volume + "\n                        </p>\n                    </div>\n                </div>";
        }
        else {
            this._removeItem(music);
        }
        if (event.data.buttons) {
            var buttons_1 = dataNode.querySelector(".card__data__buttons");
            event.data.buttons.forEach(function (btn) {
                buttons_1.innerHTML += " <button class=\"card__data__buttons--btn\">\n                                            <span class=\"card--data-paragraph text--bold\">\n                                                " + btn + "\n                                            </span>\n                                        </button>";
            });
        }
        else {
            this._removeItem(buttons);
        }
    };
    TemplateFactory.prototype.renderContent = function (dataToRender) {
        var _this = this;
        dataToRender.forEach(function (event) {
            var template = _this._initTemplate();
            _this._properties.forEach(function (prop) {
                if (!prop.children) {
                    var element = prop.neededChild ? prop.element.children[0] : prop.element, inputContent = prop.innerHtml ? prop.innerHtml.replace(_this._stringToReplace, event[prop.name]) : event[prop.name];
                    if (prop.className) {
                        element.className = prop.className.replace(_this._stringToReplace, event[prop.name]);
                    }
                    else if (prop.optional) {
                        if (event[prop.name]) {
                            element.innerHTML = inputContent;
                        }
                        else {
                            _this._removeItem(prop.element);
                        }
                    }
                    else {
                        element.innerHTML = inputContent;
                    }
                }
                else {
                    if (event[prop.name]) {
                        _this.renderEventData(event, prop.element);
                    }
                    else {
                        _this._removeItem(prop.element);
                    }
                }
            });
            container.appendChild(template.cloneNode(true));
        });
    };
    return TemplateFactory;
}());
var cardTemplateFactory = new TemplateFactory(cardTemplate, PROPERTIES);
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
