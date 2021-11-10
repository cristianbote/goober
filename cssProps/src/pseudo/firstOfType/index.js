//Do not modify this file.  This file is generated from ./scripts/generatePseudo.js
/**
 * @name firstOfType
 * @category CssProps Helper
 * @summary Returns css pseudo selector :first-of-type with object of css properties
 *
 * @description
 * Returns an object with the :first-of-type pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns :first-of-type property as object with object of css properties
 */

export default function firstOfType(arrayOfProps) {
    return {
        "&:first-of-type": arrayOfProps.reduce((result, cssPropObj) => {
            return Object.assign(result, cssPropObj)
        }, {})
    }
}