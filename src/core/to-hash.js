/**
 * Transforms the input into a className
 * @param {String} str
 */
export const toHash = str =>
    '.go' + str.split('').reduce((out, i) => (31 * out + i.charCodeAt(0)) >>> 0, 0);
