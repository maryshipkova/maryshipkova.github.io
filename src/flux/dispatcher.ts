import {IObserver} from "./Observer";
import {Store} from "./store";

export class Dispatcher implements IObserver {
    private store: Store;

    constructor(store: Store) {
        this.store = store;
    }

    public registerEvent(event: Event): void {
        const element = event.srcElement;
        if (element) {
            this.store.pushAction({
                type: "get-page",
                id: element.getAttribute("id")!,
            });
        }
    }

    public handleEvent(elements: Element[]) {
        elements.forEach((element) =>
            element.addEventListener("click", this.registerEvent));

    }
}
