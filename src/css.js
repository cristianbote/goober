import { hash } from './core/hash';
import { compile } from './core/compile';
import { getSheet } from './core/get-sheet';

/**
 * css entry
 * @param {String|Object|Function} val
 */
function css(val) {
    const ctx = this || {};
    const _val = val.call ? val(ctx.p) : val;

    return hash(
        _val.map ? compile(_val, [].slice.call(arguments, 1), ctx.p) : _val,
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
