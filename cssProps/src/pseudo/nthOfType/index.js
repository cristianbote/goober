//Do not modify this file.  This file is generated from ./scripts/generatePseudo.js
/**
 * @name nthOfType
 * @category CssProps Helper
 * @summary Returns css pseudo selector :nth-of-type with object of css properties
 *
 * @description
 * Returns an object with the :nth-of-type pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns :nth-of-type property as object with object of css properties
 */

export default function nthOfType(arrayOfProps) {
    return {
        "&:nth-of-type": arrayOfProps.reduce((result, cssPropObj) => {
            return Object.assign(result, cssPropObj)
        }, {})
    }
}