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
    if (typeof data == 'object') {
        let out = '';
        for (let p in data) out += p + stringify(data[p]);
        return out;
    } else {
        return data;
    }
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
    // Get a string representation of the object or the value that is called 'compiled'
    let stringifiedCompiled = stringify(compiled);

    // Retrieve the className from cache or hash it in place
    let className = (cache[stringifiedCompiled] =
        cache[stringifiedCompiled] || toHash(stringifiedCompiled));

    // If there's no entry for the current className
    // Parse it
    let parsed = (cache[className] =
        cache[className] ||
        parse(
        // For keyframes
        keyframes
            ? {
                  ['@keyframes ' + className]:
                      // Build the _ast_-ish structure if needed
                      stringifiedCompiled != compiled ? compiled : astish(compiled)
              }
            : stringifiedCompiled != compiled
            ? compiled
            : astish(compiled),
            global ? '' : '.' + className
        ));

    // If the global flag is set, save the current stringified and compiled CSS to `cache.g`
    // to allow replacing styles in <style /> instead of appending them.
    // This is required for using `createGlobalStyles` with themes
    // add or update
    update(parsed, sheet, append, global && cache.g);
    global && (cache.g = parsed);

    // return hash
    return className;
};
