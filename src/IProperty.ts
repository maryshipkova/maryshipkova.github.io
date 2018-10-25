export interface IProperty {
    name: string;
    selector: string;
    neededChild: boolean;
    element?: HTMLElement;
    className?: string;
    innerHtml?: string;
    optional?: boolean;
    children?: object;
}