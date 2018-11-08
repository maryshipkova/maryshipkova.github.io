"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dispatcher = /** @class */ (function () {
    function Dispatcher(store) {
    }
    Dispatcher.prototype.registerEvent = function (event) {
        var element = event.srcElement;
        if (element)
            store.pushAction({
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
exports.Dispatcher = Dispatcher;
