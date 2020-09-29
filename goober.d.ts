import { Properties as CSSProperties } from 'csstype';

export = goober;

export as namespace goober;

declare namespace goober {
    interface StyledFunction {
        // used when creating a styled component from a native HTML element
        <T extends keyof JSX.IntrinsicElements, P extends Object = {}>(tag: T): Tagged<
            JSX.LibraryManagedAttributes<T, JSX.IntrinsicElements[T]> & P
        >;

        // used to extend other styled components. Inherits props from the extended component
        <PP extends Object = {}, P extends Object = {}>(tag: StyledVNode<PP>): Tagged<PP & P>;

        // used when creating a component from a string (html native) but using a non HTML standard
        // component, such as when you want to style web components
        <P extends Object = {}>(tag: string): Tagged<P & Partial<JSX.ElementChildrenAttribute>>;

        // used to create a styled component from a JSX element (both functional and class-based)
        <T extends JSX.Element | JSX.ElementClass, P extends Object = {}>(tag: T): Tagged<P>;
    }

    const styled: StyledFunction;
    function setup<T>(val: T, prefixer?: (key: string, val: any) => string, theme?: Function): void;
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
    type Tagged<P extends Object = {}> = <PP extends Object = {}>(
        tag:
            | CSSAttribute
            | TemplateStringsArray
            | string
            | ((props: P & PP) => CSSAttribute | string),
        ...props: Array<
            string | number | ((props: P & PP) => CSSAttribute | string | number | undefined)
        >
    ) => StyledVNode<P & PP>;
    interface CSSAttribute extends CSSProperties {
        [key: string]: CSSAttribute | string | number | undefined;
    }
}
