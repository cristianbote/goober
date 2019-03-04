import { PropertiesHyphen as CSSPropertiesHyphen } from 'csstype';

export = goober;

export as namespace goober;

declare namespace goober {
    function styled (tag: string): tagged;
    function setPragma (val: TaggedNode): void;
    function extractCSS (): string;
    function css (tag: CSSAttribute): ClassName;
    function css (tag: string): TaggedNode;
    type TaggedNode = (props: any, ...args: any[]) => any;
    type tagged = (tag: string) => TaggedNode;
    interface CSSAttribute extends CSSPropertiesHyphen {
        [key: string]: CSSPropertiesHyphen | string | number;
    }
    type ClassName = string;
}
