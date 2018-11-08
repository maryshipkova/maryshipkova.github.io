import {Component} from "./Component";


export class View {
    private container: HTMLMainElement | null;
    private components: Component[];
    public navContainer: HTMLUListElement;

    constructor(componentsData: Component[]) {
        this.container = document.querySelector('.content');
        this.navContainer = document.querySelector<HTMLUListElement>('.nav__list')!;
        this.components = componentsData;
        this.renderNav();

    }


    renderPage(id: string) {
        let component = this.components.find((component) => component.id === id);
        if (this.container && component) {
            this.container.innerHTML = component.innerHtml;
        }
    }

    private renderNav() {
        let items: string = '';
        this.components.forEach((component) => {
            items += `<li class="header__nav__item">
                            <a href="#" class="text--nav-link" id="${component.id}">${component.name}</a>
                        </li>`;
        });
        dispatcher.setEventHandlers(Array.from(view.navContainer.children));
        this.navContainer.innerHTML = items;

    }

}
