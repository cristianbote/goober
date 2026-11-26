import { Properties as CSSProperties } from 'csstype';
import { Theme, DefaultTheme } from 'goober';

export as namespace gooberGlobal;

export interface CSSAttribute extends CSSProperties {
    [key: string]: CSSAttribute | string | number | undefined;
}

export function createGlobalStyles(
    tag: CSSAttribute | TemplateStringsArray | string,
    ...props: Array<
        | string
        | number
        | ((props: Theme<DefaultTheme>) => CSSAttribute | string | number | false | undefined)
    >
): Function;
export function glob(
    tag: CSSAttribute | TemplateStringsArray | string,
    ...props: Array<string | number>
): void;
