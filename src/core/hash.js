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
 * @param {Object} sheet
 */
export const hash = (compiled, sheet, glob) => {
    // generate hash
    const compString = JSON.stringify(compiled);
    const className = cache[compString] || (cache[compString] = glob ? "" : toHash(compString));

    // Parse the compiled
    const parsed = cache[className] || (cache[className] = parse(
            compiled[0] ? astish(compiled) : compiled,
            className
        ));

    // Naive cleanup when it hits 10k total ops
    if (++cache.c > 1e4) cache = { c: 0 };

    // add or update
    update(parsed, sheet);

    // return hash
    return className.substr(1);
};
