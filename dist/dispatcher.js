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
