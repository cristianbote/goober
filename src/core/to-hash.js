/**
 * Transforms the input into a className
 * @param {String} str 
 */
export const toHash = (str) => (
    ".go" + str
        .split("")
        .reduce((out, i) => out + (i.charCodeAt(0) | 8), 0)
);