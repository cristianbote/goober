//Do not modify this file.  This file is generated from ./scripts/generatePseudo.js
/**
 * @name readWrite
 * @category CssProps Helper
 * @summary Returns css pseudo selector :read-write with object of css properties
 *
 * @description
 * Returns an object with the :read-write pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns :read-write property as object with object of css properties
 */

export default function readWrite(arrayOfProps) {
    return {
        "&:read-write": arrayOfProps.reduce((result, cssPropObj) => {
            return Object.assign(result, cssPropObj)
        }, {})
    }
}