import {IEventModel} from "./IEventModel";
import {IProperty} from "./IProperty";

export class TemplateFactory {
    private readonly _template: HTMLTemplateElement | DocumentFragment;
    private readonly _stringToReplace: string;
    private _properties: IProperty[];
    private _container: HTMLDivElement | null;

    constructor(template: HTMLTemplateElement | null, properties: IProperty[]) {
        this._template = template ? template.content : new HTMLTemplateElement();
        this._properties = JSON.parse(JSON.stringify(properties));
        this._stringToReplace = "$meow";
        this._container = document.querySelector("#events");

    }

    public _initTemplate(): HTMLTemplateElement | DocumentFragment {
        const template = document.importNode(this._template, true);
        this._properties.forEach((prop) => {
            const element: HTMLElement | null = template.querySelector(prop.selector);
            prop.element = element ? element : undefined;
        });
        return template;
    }

    public _removeItem(item: HTMLElement | null): void {
        if (item && item.parentElement) {
            item.parentElement.removeChild(item);
        }
    }

    public renderEventData(event: IEventModel, dataNode: HTMLElement): void {

        const graph: HTMLDivElement | null = dataNode.querySelector(".card__data__graph");
        const image: HTMLDivElement | null = dataNode.querySelector(".card__data__image");
        const music: HTMLDivElement | null = dataNode.querySelector(".card__data__music");
        const climate: HTMLDivElement | null = dataNode.querySelector(".card__data__climate");
        const buttons: HTMLDivElement | null = dataNode.querySelector(".card__data__buttons");

        if (event.data) {
            if (event.data.type === "graph" && graph) {
                graph.innerHTML = `  <img class="card__data__image--img" src="${"assets/RichData@2x-min.png"}" alt="${"RichData@2x-min.png"}" touch-action="none">`;

            } else {
                this._removeItem(graph);
            }

            if (event.data.image && image) {
                image.innerHTML = `  <img class="card__data__image--img" src="assets/${event.data.image}" alt="${event.data.image}" touch-action="none">`;
            } else {
                if (image) {
                    this._removeItem(image.parentElement);
                }
            }

            if (event.data.temperature && climate) {
                climate.innerHTML = `
                    <div class="card__data__temperature">
                        <p class="card--data-climate">
                        Температура: <span class="card--data-climate text--bold">${event.data.temperature} С</span>
                        </p>
                    </div>
                    <div class="card__data__humidity">
                        <p class="card--data-climate">
                            Влажность: <span class="card--data-climate text--bold">${event.data.humidity}%</span>
                        </p>
                    </div>`;
            } else {
                this._removeItem(climate);
            }

            if (event.data.track && music) {
                music.innerHTML =
                    `  <div class="music__header">
                    <div class="card__data__albumcover">
                        <img class="card__data__albumcover--img" src="${event.data.albumcover}" alt="${event.data.albumcover}">
                    </div>

                    <div class="music__main">
                        <div class="card__data__artist">
                            <p class="card--data-music-title">
                                ${event.data.artist} - ${event.data.track.name}
                            </p>
                        </div>
                        <div class="music__track">
                            <input type="range" class="music__track--range">
                            <div class="card__data__track--length music__track--length">
                                <p class="card--data-music">
                                    ${event.data.track.length}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="music__player">
                    <div class="music__icons">
                        <div class="music__icons--item">
                            <svg class="icon--music">
                                <use xlink:href="assets/Prev.svg#Events"></use>
                            </svg>
                        </div>
                        <div class="music__icons--item">
                            <svg class="icon--music icon--rotated">
                                <use xlink:href="assets/Prev.svg#Events"></use>
                            </svg>
                        </div>
                    </div>

                    <input type="range" class="music__player--range">
                    <div class="card__data__volume">
                        <p class="card--data-music">
                            ${event.data.volume}
                        </p>
                    </div>
                </div>`;
            } else {
                this._removeItem(music);
            }

            if (event.data.buttons && buttons) {
                event.data.buttons.forEach((btn) => {
                    buttons.innerHTML += ` <button class="card__data__buttons--btn">
                                            <span class="card--data-paragraph text--bold">
                                                ${btn}
                                            </span>
                                        </button>`;
                });

            } else {
                this._removeItem(buttons);
            }
        }
    }

    public renderContent(dataToRender: IEventModel[]): void {
        dataToRender.forEach((event) => {

            const template = this._initTemplate();
            this._properties.forEach((prop) => {
                if (!prop.children) {
                    let element: HTMLElement;
                    let inputContent: string;
                    if (prop.neededChild) {
                        element = prop.element ? prop.element.children[0] as HTMLElement : new HTMLElement();
                    } else {
                        element = prop.element ? prop.element : new HTMLElement();
                    }
                    if (prop.innerHtml) {
                        inputContent = prop.innerHtml.replace(this._stringToReplace, event[prop.name] !== undefined ? event[prop.name] as string : "");
                    } else {
                        inputContent = event[prop.name] ? event[prop.name] as string : "";
                    }

                    if (prop.className && element) {
                        element.className = prop.className.replace(this._stringToReplace, event[prop.name] !== undefined ? event[prop.name] as string : "");
                    } else if (prop.optional && element) {
                        if (event[prop.name]) {
                            element.innerHTML = inputContent;
                        } else {
                            if (prop.element) {
                                this._removeItem(prop.element);
                            }
                        }
                    } else {
                        if (element) {
                            element.innerHTML = inputContent;
                        }
                    }

                } else {
                    if (event[prop.name] && prop.element) {
                        this.renderEventData(event, prop.element);
                    } else {
                        if (prop.element) {
                            this._removeItem(prop.element);
                        }
                    }
                }

            });
            if (this._container) {
                this._container.appendChild(template.cloneNode(true));
            }
        });

    }
}
