export interface IObserver {
    handleEvent(elements: Element[]): void;
}

export interface IObservable {
    notify(elements: Element[]): void;
}
