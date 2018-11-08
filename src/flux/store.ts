import {Action} from "./Action";
import {View} from "./view";


export class Store {

    private view: View;
    private localStorage: Storage;

    public constructor(view: View) {
        this.view = view;
        this.localStorage = localStorage;

    }

    public setState(action: Action) {

        if (action.type === "get-page") { // others are possible
            this.view.renderPage(action.id);
        }
    }

}
