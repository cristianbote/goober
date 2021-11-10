//Do not modify this file.  This file is generated from ./scripts/generatePseudo.js
/**
 * @name marker
 * @category CssProps Helper
 * @summary Returns css pseudo selector ::marker with object of css properties
 *
 * @description
 * Returns an object with the ::marker pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns ::marker property as object with object of css properties
 */

export default function marker(arrayOfProps) {
    return {
        "&::marker": arrayOfProps.reduce((result, cssPropObj) => {
            return Object.assign(result, cssPropObj)
        }, {})
    }
}