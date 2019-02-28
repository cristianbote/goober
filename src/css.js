import { hash } from "./core/hash";
import { compile } from "./core/compile";
import { getTarget } from "./core/get-target";

/**
 * css entry
 * @param {String} str 
 */
function css(str) {
    const defs = [].slice.call(arguments, 1);
    const ctx = this || {};

    return hash(
        str.map ? compile(str, defs, ctx.props) : str,
        getTarget(ctx.target),
        ctx.g
    );
}

const glob = css.bind({ g: !0 });

export {
    css,
    glob
}