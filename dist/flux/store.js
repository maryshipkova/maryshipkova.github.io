"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Store = /** @class */ (function () {
    function Store(view) {
        this.view = view;
        this.localStorage = localStorage;
    }
    Store.prototype.setState = function (action) {
        if (action.type === "get-page") { // others are possible
            this.view.renderPage(action.id);
        }
    };
    return Store;
}());
exports.Store = Store;
