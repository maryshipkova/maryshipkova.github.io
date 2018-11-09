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

        const graph: HTMLDivElement | null = dataNode.querySelector(".Card-data-graph");
        const image: HTMLDivElement | null = dataNode.querySelector(".Card-data-image");
        const music: HTMLDivElement | null = dataNode.querySelector(".Card-data-music");
        const climate: HTMLDivElement | null = dataNode.querySelector(".Card-data-climate");
        const buttons: HTMLDivElement | null = dataNode.querySelector(".Card-data-buttons");

        if (event.data) {
            if (event.data.type === "graph" && graph) {
                graph.innerHTML = `  <img class="Card-data-image_img" src="${"assets/RichData@2x-min.png"}" alt="${"RichData@2x-min.png"}" touch-action="none">`;

            } else {
                this._removeItem(graph);
            }

            if (event.data.image && image) {
                image.innerHTML = `  <img class="Card-data-image_img" src="assets/${event.data.image}" alt="${event.data.image}" touch-action="none">`;
            } else {
                if (image) {
                    this._removeItem(image.parentElement);
                }
            }

            if (event.data.temperature && climate) {
                climate.innerHTML = `
                    <div class="Card-data-temperature">
                        <p class="Card_data-climate">
                        Температура: <span class="Card_data-climate text_bold">${event.data.temperature} С</span>
                        </p>
                    </div>
                    <div class="Card-data-humidity">
                        <p class="Card_data-climate">
                            Влажность: <span class="Card_data-climate text_bold">${event.data.humidity}%</span>
                        </p>
                    </div>`;
            } else {
                this._removeItem(climate);
            }

            if (event.data.track && music) {
                music.innerHTML =
                    `  <div class="music-header">
                    <div class="Card-data-albumcover">
                        <img class="Card-data-albumcover_img" src="${event.data.albumcover}" alt="${event.data.albumcover}">
                    </div>

                    <div class="music-main">
                        <div class="Card-data-artist">
                            <p class="Card_data-music-title">
                                ${event.data.artist} - ${event.data.track.name}
                            </p>
                        </div>
                        <div class="music-track">
                            <input type="range" class="music-track_range">
                            <div class="Card-data-track_length music-track_length">
                                <p class="Card_data-music">
                                    ${event.data.track.length}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="music-player">
                    <div class="music-icons">
                        <div class="music-icons_item">
                            <svg class="icon_music">
                                <use xlink:href="assets/Prev.svg#Events"></use>
                            </svg>
                        </div>
                        <div class="music-icons_item">
                            <svg class="icon_music icon_rotated">
                                <use xlink:href="assets/Prev.svg#Events"></use>
                            </svg>
                        </div>
                    </div>

                    <input type="range" class="music-player_range">
                    <div class="Card-data-volume">
                        <p class="Card_data-music">
                            ${event.data.volume}
                        </p>
                    </div>
                </div>`;
            } else {
                this._removeItem(music);
            }

            if (event.data.buttons && buttons) {
                event.data.buttons.forEach((btn) => {
                    buttons.innerHTML += ` <button class="Card-data-buttons_btn">
                                            <span class="Card_data-paragraph text_bold">
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
