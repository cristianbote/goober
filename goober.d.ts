import { Properties as CSSProperties } from 'csstype';

export = goober;

export as namespace goober;

declare namespace goober {
    interface DefaultTheme {}

    type Theme<T extends object> = keyof T extends never ? T : { theme: T };

    function extractCss(target?: Element): string;
    function glob(
        tag: CSSAttribute | TemplateStringsArray | string,
        ...props: Array<string | number>
    ): void;
    function css(
        tag: CSSAttribute | TemplateStringsArray | string,
        ...props: Array<string | number>
    ): string;
    function keyframes(
        tag: CSSAttribute | TemplateStringsArray | string,
        ...props: Array<string | number>
    ): string;

    interface CSSAttribute extends CSSProperties {
        [key: string]: CSSAttribute | string | number | undefined | null;
    }
}
