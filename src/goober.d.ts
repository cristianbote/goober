import { PropertiesHyphen as CSSPropertiesHyphen } from 'csstype';

export = goober;

export as namespace goober;

declare namespace goober {
    function styled (tag: string): tagged;
    function setPragma (val: StyledVNode): void;
    function extractCSS (): string;
    function css (tag: CSSAttribute | string): ClassName;
    type StyledVNode = (props: any, ...args: any[]) => any;
    type tagged = (tag: string | CSSAttribute) => StyledVNode;
    interface CSSAttribute extends CSSPropertiesHyphen {
        [key: string]: CSSPropertiesHyphen | string | number;
    }
    type ClassName = string;
}
