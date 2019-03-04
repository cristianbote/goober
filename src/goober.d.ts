export = goober;

export as namespace goober;

declare namespace goober {
    function styled (tag: string): tagged;
    function setPragma (val: TaggedNode): void;
    function extractCSS (): string;
    function css (tag: string): TaggedNode;
    function css (tag: CSSAttribute): ClassName;
    type TaggedNode = (props: any, ...args: any[]) => any;
    type tagged = (tag: string) => TaggedNode;
    interface CSSAttribute {
        [key: string]: CSSAttribute | string | number;
    }
    type ClassName = string;
}
