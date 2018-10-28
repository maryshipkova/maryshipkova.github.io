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
