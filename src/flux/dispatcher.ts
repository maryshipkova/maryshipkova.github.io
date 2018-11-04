import {store} from "./store";
import {view} from "./view";

class Dispatcher {

    constructor() {
    }


    public registerEvent(event: Event): void {
        let element = event.srcElement;
        if(element)
            store.pushAction({
                type: 'get-page',
                id: element.getAttribute('id')!
            });
    }

    public setEventHandlers(items:Element[]){
        items.forEach((element) =>
            element.addEventListener('click', this.registerEvent));

    }
}
const dispatcher = new Dispatcher();
dispatcher.setEventHandlers(Array.from(view.navContainer.children));
export {dispatcher};