"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var view_1 = require("./view");
var NavigationView = /** @class */ (function (_super) {
    __extends(NavigationView, _super);
    function NavigationView(componentsData, navContainer) {
        var _this = _super.call(this, componentsData) || this;
        _this.navContainer = navContainer;
        return _this;
    }
    NavigationView.prototype.init = function (observer) {
        this.observer = observer;
        this.renderNav();
        this.renderPage(this.components[0].id);
    };
    NavigationView.prototype.notify = function (event) {
        if (this.observer)
            this.observer.handleEvent(event);
    };
    NavigationView.prototype.renderNav = function () {
        var _this = this;
        var items = "";
        this.components.forEach(function (component) {
            items += "<li class=\"header__nav__item\">\n                            <a href=\"#\" class=\"text--nav-link\" id=\"" + component.id + "\">" + component.name + "</a>\n                        </li>";
        });
        this.navContainer.innerHTML = items;
        Array.from(this.navContainer.children).forEach(function (element) {
            element.addEventListener("click", function (event) { return _this.notify(event); });
        });
    };
    return NavigationView;
}(view_1.View));
exports.NavigationView = NavigationView;
