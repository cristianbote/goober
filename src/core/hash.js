import { toHash } from './to-hash';
import { update } from './update';
import { astish } from './astish';
import { parse } from './parse';

/**
 * In-memory cache.
 */
let cache = {};

/**
 * Stringifies a object strucure
 * @param {Object} data
 * @returns {String}
 */
function stringify(data) {
    let out = '';

    for (let p in data) {
        if (typeof val == 'object') {
            out += p + stringify(data[p]);
        } else {
            out += p + data[p];
        }
    }

    return out;
}

/**
 * Generates the needed className
 * @param {String|Object} compiled
 * @param {Object} sheet StyleSheet target
 * @param {Object} global Global flag
 * @param {Object} append Append or not
 * @returns {String}
 */
export let hash = (compiled, sheet, global, append) => {
    // generate hash
    let stringifiedCompiled = compiled.toLowerCase ? compiled : stringify(compiled);
    let className =
        cache[stringifiedCompiled] || (cache[stringifiedCompiled] = toHash(stringifiedCompiled));

    // Parse the compiled
    let parsed =
        cache[className] ||
        (cache[className] = parse(
            compiled[0] ? astish(compiled) : compiled,
            global ? '' : className
        ));

    // add or update
    update(parsed, sheet, append);

    // return hash
    return className.slice(1);
};
