import {IObserver} from "./Observer";
import {Store} from "./store";

export class Dispatcher implements IObserver {
    private store: Store;

    constructor(store: Store) {
        this.store = store;
    }

    public handleEvent(event: Event): void {
        const element = event.srcElement;
        if (element) {
            this.store.setState({
                type: "get-page",
                id: element.getAttribute("id")!,
            });
        }
    }
}
