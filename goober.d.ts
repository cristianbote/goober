import { Properties as CSSProperties } from 'csstype';

export = goober;

export as namespace goober;

declare namespace goober {
    function styled <T = {}>(tag: string): tagged<T>;
    function setPragma (val: StyledVNode): void;
    function extractCss (): string;
    function css (tag: CSSAttribute | TemplateStringsArray): ClassName;
    type StyledVNode<T = {}> = (props: T, ...args: any[]) => any;
    type tagged<T = {}> = (tag: CSSAttribute | TemplateStringsArray) => StyledVNode<T>;
    interface CSSAttribute extends CSSProperties {
        [key: string]: CSSAttribute | string | number | undefined;
    }
    type ClassName = string;
}
