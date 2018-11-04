"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var view_1 = require("./view");
//singleton
var Store = /** @class */ (function () {
    function Store() {
        this.actionQueue = [];
    }
    Object.defineProperty(Store, "Instance", {
        get: function () {
            return this._instance || (this._instance = new this());
        },
        enumerable: true,
        configurable: true
    });
    Store.prototype.pushAction = function (action) {
        this.actionQueue.push(action);
        //
        if (action.type === 'get-page')
            view_1.view.renderPage(action.id);
        console.log(this.actionQueue);
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
var store = Store.Instance;
exports.store = store;
