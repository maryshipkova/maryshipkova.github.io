import {Component} from "./Component";
import {IObservable, IObserver} from "./Observer";
import {View} from "./view";

export class NavigationView extends View implements IObservable {

    public navContainer: HTMLUListElement;
    private observer: IObserver | null;

    constructor(componentsData: Component[], navContainer: HTMLElement, observer: IObserver | null) {
        super(componentsData);
        this.navContainer = document.querySelector<HTMLUListElement>(".nav__list")!;
        this.observer = observer;
        this.renderNav();

    }

    // set observer(value: IObserver) {
    //     this._observer = value;
    // }

    public notify(elements: Element[]): void {
        if(this.observer)
            this.observer.handleEvent(elements);
    }

    private renderNav() {
        let items: string = "";
        this.components.forEach((component) => {
            items += `<li class="header__nav__item">
                            <a href="#" class="text--nav-link" id="${component.id}">${component.name}</a>
                        </li>`;
        });
        this.notify(Array.from(this.navContainer.children));
        // dispatcher.setEventHandlers(Array.from(view.navContainer.children));
        this.navContainer.innerHTML = items;

    }

}
