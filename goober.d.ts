import { Properties as CSSProperties } from 'csstype';

export = goober;

export as namespace goober;

declare namespace goober {
    function styled<T = {}>(tag: string | StyledVNode<any>): Tagged<T & { children: any }>;
    function setPragma<T>(val: T): void;
    function extractCss(): string;
    function glob(tag: CSSAttribute | TemplateStringsArray | string): void;
    function css<T extends unknown = void>(
        tag: TemplateStringsArray,
        props?: (props: T) => string
    ): CssFactory<T>;
    type StyledVNode<T> = (props: T, ...args: any[]) => any;
    type Tagged<T> = (
        tag: CSSAttribute | TemplateStringsArray,
        props?: (props: T) => CSSAttribute | string | number | undefined
    ) => StyledVNode<T>;
    interface CSSAttribute extends CSSProperties {
        [key: string]: CSSAttribute | string | number | undefined;
    }
    type CssFactory<T> = (props: T) => string;
}
