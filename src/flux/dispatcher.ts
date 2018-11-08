import {Store} from "./store";


export class Dispatcher {
    private store:Store;

    constructor(store:Store) {

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
