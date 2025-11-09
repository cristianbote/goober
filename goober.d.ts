import { Properties as CSSProperties } from 'csstype';

export = goober;

export as namespace goober;

declare namespace goober {
    function setup(prefixer?: (key: string, val: any) => string): void;
    function extractCss(target?: Element): string;
    function glob(styles: CSSAttribute | ((props?: any) => CSSAttribute)): void;
    function css(styles: CSSAttribute | ((props?: any) => CSSAttribute)): string;
    function keyframes(styles: CSSAttribute | ((props?: any) => CSSAttribute)): string;

    interface CSSAttribute extends CSSProperties {
        [key: string]: CSSAttribute | string | number | undefined | null;
    }
}
