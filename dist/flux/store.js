"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Store = /** @class */ (function () {
    function Store(view) {
        this.view = view;
        this.localStorage = localStorage;
    }
    Store.prototype.getState = function () {
        var id = this.localStorage.getItem('action-id'), type = this.localStorage.getItem('action-type');
        return {
            id: id ? id : '',
            type: type ? type : ''
        };
    };
    Store.prototype.setState = function (action) {
        var _a = this.getState(), id = _a.id, type = _a.type;
        if (action.id !== id || action.type !== type)
            if (action.type === "get-page") { // others are possible
                this.view.renderComponent(action.id);
                localStorage.setItem('action-id', action.id);
                localStorage.setItem('action-type', action.type);
            }
    };
    return Store;
}());
exports.Store = Store;
