import { Properties as CSSProperties } from 'csstype';

export = goober;

export as namespace goober;

declare namespace goober {
    function styled (tag: string): tagged;
    function setPragma (val: StyledVNode): void;
    function extractCSS (): string;
    function css (tag: CSSAttribute | TemplateStringsArray): ClassName;
    type StyledVNode = (props: any, ...args: any[]) => any;
    type tagged = (tag: CSSAttribute | TemplateStringsArray) => StyledVNode;
    interface CSSAttribute extends CSSProperties {
        [key: string]: CSSAttribute | string | number;
    }
    type ClassName = string;
}
