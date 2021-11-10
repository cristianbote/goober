//Do not modify this file.  This file is generated from ./scripts/generatePseudo.js
/**
 * @name empty
 * @category CssProps Helper
 * @summary Returns css pseudo selector :empty with object of css properties
 *
 * @description
 * Returns an object with the :empty pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns :empty property as object with object of css properties
 */

export default function empty(arrayOfProps) {
    return {
        "&:empty": arrayOfProps.reduce((result, cssPropObj) => {
            return Object.assign(result, cssPropObj)
        }, {})
    }
}