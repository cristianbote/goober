import { hash } from './core/hash';
import { getSheet } from './core/get-sheet';
import { parse } from './core/parse';

/**
 * Setup function to configure the prefixer
 * @param {Function} prefixer - Optional prefixer function
 */
function setup(prefixer) {
    parse.p = prefixer;
}

/**
 * css entry - only supports object syntax
 * @param {Object|Function} val - CSS object or function returning CSS object
 */
function css(val) {
    let ctx = this || {};
    let _val = val.call ? val(ctx.p) : val;

    return hash(_val, getSheet(ctx.target), ctx.g, ctx.o, ctx.k);
}

/**
 * CSS Global function to declare global styles
 * @type {Function}
 */
let glob = css.bind({ g: 1 });

/**
 * `keyframes` function for defining animations
 * @type {Function}
 */
let keyframes = css.bind({ k: 1 });

export { css, glob, keyframes, setup };
