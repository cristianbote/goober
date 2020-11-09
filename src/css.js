import { hash } from './core/hash';
import { compile } from './core/compile';
import { getSheet } from './core/get-sheet';

/**
 * css entry
 * @param {String|Object|Function} val
 */
function css(val) {
    let ctx = this || {};
    let _val = val.call ? val(ctx.p) : val;
    let sheet = getSheet(ctx.target);

    return hash(
        _val.map
            ? _val.raw
                ? compile(_val, [].slice.call(arguments, 1), ctx.p)
                : _val.reduce((o, i) => Object.assign(o, i.call ? i(ctx.p) : i))
            : _val,
        sheet,
        ctx.g,
        ctx.o,
        ctx.k
    );
}

/**
 * CSS Global function to declare global styles
 */
let glob = css.bind({ g: 1 });

let keyframes = css.bind({ k: 1 });

export { css, glob, keyframes };
