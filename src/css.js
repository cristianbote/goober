import { hash } from "./core/hash";
import { compile } from "./core/compile";
import { getSheet } from "./core/get-sheet";

/**
 * css entry
 * @param {String} str
 */
function css(str) {
    const ctx = this || {};

    return hash(
        str.map ? compile(str, [].slice.call(arguments, 1), ctx.p) : str,
        getSheet(ctx.target),
        ctx.g,
        ctx.o
    );
}

/**
 * CSS Global function to declare global styes
 */
const glob = css.bind({ g: 1 });

export { css, glob };
