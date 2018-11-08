import {Action} from "./Action";
import {View} from "./view";


export class Store {

    private actionQueue: Action[];
    private view: View;

    public constructor(view: View) {
        this.actionQueue = [];
        this.view = view;

    }

    public pushAction(action: Action) {
        this.actionQueue.push(action);

        if (action.type === "get-page") {
            this.view.renderPage(action.id);
        }
    }

    public popAction(action: Action): void {
        this.actionQueue.shift();
    }

    public popActionById(id: string): void {
        const actionToPop = this.actionQueue.find((action) => action.id === id);
        if (actionToPop) {
            this.popAction(actionToPop);
        }
    }

}
