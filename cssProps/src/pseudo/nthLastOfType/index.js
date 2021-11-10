//Do not modify this file.  This file is generated from ./scripts/generatePseudo.js
/**
 * @name nthLastOfType
 * @category CssProps Helper
 * @summary Returns css pseudo selector :nth-last-of-type with object of css properties
 *
 * @description
 * Returns an object with the :nth-last-of-type pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns :nth-last-of-type property as object with object of css properties
 */

export default function nthLastOfType(arrayOfProps) {
    return {
        "&:nth-last-of-type": arrayOfProps.reduce((result, cssPropObj) => {
            return Object.assign(result, cssPropObj)
        }, {})
    }
}