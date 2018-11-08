export interface IObserver {
    handleEvent(event: Event): void;
}

export interface IObservable {
    notify(event: Event): void;
}
