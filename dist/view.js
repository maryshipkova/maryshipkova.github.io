"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = require("./main");
var store_1 = require("./store");
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
var view = new View(main_1.components);
exports.view = view;
