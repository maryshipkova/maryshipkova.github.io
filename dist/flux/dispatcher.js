"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dispatcher = /** @class */ (function () {
    function Dispatcher(store) {
        this.store = store;
    }
    Dispatcher.prototype.handleEvent = function (event) {
        var element = event.srcElement;
        if (element) {
            this.store.setState({
                type: "get-page",
                id: element.getAttribute("id"),
            });
        }
    };
    return Dispatcher;
}());
exports.Dispatcher = Dispatcher;
