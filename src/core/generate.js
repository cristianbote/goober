import { parse } from "./parse";
import { astish } from "./astish";

/**
 * Generates the parsed and compiled css
 * @param {String} className 
 * @param {String|Object} compiled 
 * @returns {String}
 */
export const generate = (className, compiled) => {
    return parse(
        compiled.big ? astish(compiled) : compiled,
        "." + className
    );
};