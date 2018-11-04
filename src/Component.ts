export class Component {
    public name: string;
    public id: string;
    public innerHtml: string;


    constructor(name: string, id: string, innerHtml: string) {
        this.name = name;
        this.id = id;
        this.innerHtml = innerHtml;
    }
}