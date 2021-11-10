//Do not modify this file.  This file is generated from ./scripts/generatePseudo.js
/**
 * @name outOfRange
 * @category CssProps Helper
 * @summary Returns css pseudo selector :out-of-range with object of css properties
 *
 * @description
 * Returns an object with the :out-of-range pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns :out-of-range property as object with object of css properties
 */

export default function outOfRange(arrayOfProps) {
    return {
        "&:out-of-range": arrayOfProps.reduce((result, cssPropObj) => {
            return Object.assign(result, cssPropObj)
        }, {})
    }
}