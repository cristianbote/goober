import { toHash } from './to-hash';
import { update } from './update';
import { astish } from './astish';
import { parse } from './parse';

/**
 * In-memory cache.
 */
let cache = {};

/**
 * Stringifies a object structure
 * @param {Object} data
 * @returns {String}
 */
let stringify = (data) => {
    let out = '';

    for (let p in data) {
        const val = data[p];
        out += p + (typeof val == 'object' ? stringify(data[p]) : data[p]);
    }

    return out;
};

/**
 * Generates the needed className
 * @param {String|Object} compiled
 * @param {Object} sheet StyleSheet target
 * @param {Object} global Global flag
 * @param {Boolean} append Append or not
 * @param {Boolean} keyframes Keyframes mode. The input is the keyframes body that needs to be wrapped.
 * @returns {String}
 */
export let hash = (compiled, sheet, global, append, keyframes) => {
    let ast = compiled[0] ? astish(compiled) : compiled;
    let stringifiedCompiled = stringify(ast);
    let className =
        cache[stringifiedCompiled] || (cache[stringifiedCompiled] = toHash(stringifiedCompiled));

    // If we are in _keyframes_ mode, define the wrapper for it
    if (keyframes) {
        ast = { ['@keyframes ' + className]: ast };
    }

    // Parse the compiled
    let parsed = cache[className] || (cache[className] = parse(ast, global ? '' : '.' + className));

    // add or update
    update(parsed, sheet, append);

    // return hash
    return className;
};
