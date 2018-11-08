import {Component} from "./Component";
import {IObservable, IObserver} from "./Observer";
import {View} from "./view";

export class NavigationView extends View implements IObservable {

    public navContainer: HTMLUListElement;
    private observer?: IObserver;

    constructor(componentsData: Component[], navContainer: HTMLUListElement) {
        super(componentsData);
        this.navContainer = navContainer;
    }

    public init(observer?: IObserver) {
        this.observer = observer;
        this.renderNav();
        this.renderComponent(this.components[0].id);
    }

    public notify(event: Event): void {
        if (this.observer) {
            this.observer.handleEvent(event);
        }
    }

    private renderNav() {
        let items: string = "";
        this.components.forEach((component) => {
            items += `<li class="header__nav__item">
                            <a href="#" class="text--nav-link" id="${component.id}">${component.name}</a>
                        </li>`;
        });

        this.navContainer.innerHTML = items;
        Array.from(this.navContainer.children).forEach((element) => {
            element.addEventListener("click", (event: Event) => this.notify(event));
        });

    }

}
