import { Properties as CSSProperties } from 'csstype';
export = gooberGlobal;

export as namespace gooberGlobal;

declare namespace gooberGlobal {
    interface CSSAttribute extends CSSProperties {
        [key: string]: CSSAttribute | string | number | undefined;
    }

    function createGlobalStyles(
        tag: CSSAttribute | TemplateStringsArray | string,
        ...props: Array<string | number | Function>
    ): Function;
    function glob(
        tag: CSSAttribute | TemplateStringsArray | string,
        ...props: Array<string | number>
    ): void;
}
