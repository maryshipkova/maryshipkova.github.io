import {Component} from "./Component";


export class View {

    protected container: HTMLMainElement | null;
    protected components: Component[];


    constructor(componentsData: Component[]) {
        this.container = document.querySelector(".content");
        this.components = componentsData;


    }


    public renderPage(id: string) {
        const component = this.components.find((component: Component) => component.id === id);
        if (this.container && component) {
            this.container.innerHTML = component.innerHtml;
        }
    }
}

