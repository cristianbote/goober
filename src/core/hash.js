import { toHash } from "./to-hash";
import { generate } from "./generate";
import { update } from "./update";

/**
 * Generates the needed className
 * @param {String|Object} compiled
 * @param {Object} target
 */
export const hash = (compiled, target, glob) => {
    // generate hash
    const className = glob ? "" : toHash(compiled);

    // add or update
    update(
        generate(className, compiled),
        target
    );

    // return hash
    return className.substr(1);
}