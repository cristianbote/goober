//Do not modify this file.  This file is generated from ./scripts/generatePseudo.js
/**
 * @name before
 * @category CssProps Helper
 * @summary Returns css pseudo selector ::before with object of css properties
 *
 * @description
 * Returns an object with the ::before pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns ::before property as object with object of css properties
 */

export default function before(arrayOfProps) {
    return {
        "&::before": arrayOfProps.reduce((result, cssPropObj) => {
            return Object.assign(result, cssPropObj)
        }, {})
    }
}