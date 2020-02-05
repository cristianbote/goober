import { Properties as CSSProperties } from 'csstype';

export = goober;

export as namespace goober;

declare namespace goober {
    function styled<T = {}>(tag: string | StyledVNode<any>): Tagged<T & { children: any }>;
    function setPragma<T>(val: T): void;
    function extractCss(): string;
    function glob(
        tag: CSSAttribute | TemplateStringsArray | string,
        ...props: Array<string | number>
    ): void;
    function css(
        tag: CSSAttribute | TemplateStringsArray | string,
        ...props: Array<string | number>
    ): string;
    type StyledVNode<T> = (props: T, ...args: any[]) => any;
    type Tagged<T> = (
        tag: CSSAttribute | TemplateStringsArray | string | ((props: T) => CSSAttribute | string),
        ...props: Array<
            string | number | ((props: T) => CSSAttribute | string | number | undefined)
        >
    ) => StyledVNode<T>;
    interface CSSAttribute extends CSSProperties {
        [key: string]: CSSAttribute | string | number | undefined;
    }
}
