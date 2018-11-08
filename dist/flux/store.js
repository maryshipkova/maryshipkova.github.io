"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//singleton
var Store = /** @class */ (function () {
    function Store(view) {
        this.actionQueue = [];
        this.view = view;
    }
    Store.prototype.pushAction = function (action) {
        this.actionQueue.push(action);
        if (action.type === 'get-page')
            this.view.renderPage(action.id);
    };
    Store.prototype.popAction = function (action) {
        this.actionQueue.shift();
    };
    Store.prototype.popActionById = function (id) {
        var actionToPop = this.actionQueue.find(function (action) { return action.id === id; });
        if (actionToPop)
            this.popAction(actionToPop);
    };
    return Store;
}());
exports.Store = Store;
