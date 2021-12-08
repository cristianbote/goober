import { hash } from './core/hash';
import { compile } from './core/compile';
import { getSheet } from './core/get-sheet';

/**
 * css entry
 * @param {String|Object|Function} val
 */
function css(val) {
    let ctx = this || { c: {} };
    let _val = val.call ? val(ctx.p) : val;

    return hash(
        _val.unshift
            ? _val.raw
                ? // Tagged templates
                  compile(_val, [].slice.call(arguments, 1), ctx.p)
                : // Regular arrays
                  _val.reduce((o, i) => Object.assign(o, i && i.call ? i(ctx.p) : i), {})
            : _val,
        getSheet(ctx.target),
        ctx.g,
        ctx.o,
        ctx.k,
        ctx.c
    );
}

/**
 * CSS Global function to declare global styles
 * @type {Function}
 */
let glob = css.bind({ g: 1, c: {} });

/**
 * `keyframes` function for defining animations
 * @type {Function}
 */
let keyframes = css.bind({ k: 1, c: {} });

export { css, glob, keyframes };
