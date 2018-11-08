import {Action} from "./Action";
import {View} from "./view";

export class Store {

    private view: View;
    private localStorage: Storage;

    public constructor(view: View) {
        this.view = view;
        this.localStorage = localStorage;

    }

    public getState(): Action {
        const id = this.localStorage.getItem("action-id"),
            type = this.localStorage.getItem("action-type");

        return {
            id: id ? id : "",
            type: type ? type : "",
        };
    }

    public setState(action: Action): void {

        const {id, type} = this.getState();
        if (action.id !== id || action.type !== type) {
            if (action.type === "get-page") { // others are possible
                this.view.renderComponent(action.id);
                localStorage.setItem("action-id", action.id);
                localStorage.setItem("action-type", action.type);
            }
        }
    }

}
