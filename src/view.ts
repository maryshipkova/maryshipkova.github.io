import {Component} from "./Component";
import {components} from "./main";
import {store} from "./store";
import {dispatcher} from "./dispatcher";

 class View {
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
            store.popActionById(id);
        }
    }

    private renderNav() {
        let items: string = '';
        this.components.forEach((component) => {
            items += `<li class="header__nav__item">
                            <a href="#" class="text--nav-link" id="${component.id}">${component.name}</a>
                        </li>`;
        });

        this.navContainer.innerHTML = items;

    }

}

const view = new View(components);

export {view}