export interface ITransformProperties {
    translateX: number;
    translateY: number;
    scale: number;
    brightness: number;

    [key: string]: number;
}

export interface IConditions {
    translateX: string;
    translateY: string;
    brightness: string;

    [key: string]: string;
}

export interface IPoinerEvent extends PointerEvent {
    currX: number;
    currY: number;
    prevX: number;
    prevY: number;

}
