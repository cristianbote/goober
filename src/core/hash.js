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
 * @param {Object} sheet StyleSheet target
 * @param {Object} g Global flag
 * @param {Object} append Append or not
 * @returns {String} 
 */
export const hash = (compiled, sheet, g, append) => {
    // generate hash
    const compString = JSON.stringify(compiled);
    const className = cache[compString] || (cache[compString] = g ? "" : toHash(compString));

    // Parse the compiled
    const parsed = cache[className] || (
        cache[className] = parse(
            compiled[0] ? astish(compiled) : compiled,
            className
        )
    );

    // Naive cleanup when it hits 10k total ops
    if (++cache.c > 1e4) cache = { c: 0 };

    // add or update
    update(parsed, sheet, append);

    // return hash
    return className.slice(1);
};
