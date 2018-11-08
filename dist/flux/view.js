"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        }
    };
    View.prototype.renderNav = function () {
        var items = '';
        this.components.forEach(function (component) {
            items += "<li class=\"header__nav__item\">\n                            <a href=\"#\" class=\"text--nav-link\" id=\"" + component.id + "\">" + component.name + "</a>\n                        </li>";
        });
        dispatcher.setEventHandlers(Array.from(view.navContainer.children));
        this.navContainer.innerHTML = items;
    };
    return View;
}());
exports.View = View;
