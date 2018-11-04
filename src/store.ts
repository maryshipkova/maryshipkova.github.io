import {Action} from "./Action";
import {view} from "./view";

//singleton
class Store {
    private static _instance: Store;
    private actionQueue: Action[];

    private constructor() {
        this.actionQueue = [];

    }

    public static get Instance() {

        return this._instance || (this._instance = new this());
    }

    public pushAction(action: Action) {
        this.actionQueue.push(action);
    //
        if (action.type === 'get-page')
            view.renderPage(action.id);
        console.log(this.actionQueue);
    }

    public popAction(action: Action): void {
        this.actionQueue.shift();
    }

    public popActionById(id: string): void {
        let actionToPop = this.actionQueue.find(action => action.id === id);
        if (actionToPop)
            this.popAction(actionToPop);
    }

}
const store = Store.Instance;

export {store};