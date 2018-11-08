"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var View = /** @class */ (function () {
    function View(componentsData) {
        this.container = document.querySelector(".content");
        this.components = componentsData;
    }
    View.prototype.renderComponent = function (id) {
        var component = this.components.find(function (component) { return component.id === id; });
        if (this.container && component) {
            this.container.innerHTML = component.innerHtml;
        }
    };
    return View;
}());
exports.View = View;
