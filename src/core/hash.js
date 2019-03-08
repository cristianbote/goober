import { toHash } from "./to-hash";
import { update } from "./update";
import { astish } from "./astish";
import { parse } from "./parse";

/**
 * In-memory cache.
 */
let cache = {
    c: 0
};

/**
 * Generates the needed className
 * @param {String|Object} compiled
 * @param {Object} target
 */
export const hash = (compiled, target, glob) => {
    // generate hash
    const compString = JSON.stringify(compiled);
    const className = cache[compString] || (cache[compString] = glob ? "" : toHash(compiled));

    // Parse the compiled
    const parsed = cache[className] || (cache[className] = parse(
        compiled[0] ? astish(compiled) : compiled,
        className
    ));

    if (++cache.c > 1e4) cache = { c: 0 };

    // add or update
    update(parsed, target);

    // return hash
    return className.substr(1);
};
