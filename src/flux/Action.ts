export class Action {
    public type: string;
    public id: string;

    constructor(type: string, id: string) {
        this.type = type;
        this.id = id;
    }

}
