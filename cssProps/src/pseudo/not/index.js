//Do not modify this file.  This file is generated from ./scripts/generatePseudo.js
/**
 * @name not
 * @category CssProps Helper
 * @summary Returns css pseudo selector :not with object of css properties
 *
 * @description
 * Returns an object with the :not pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns :not property as object with object of css properties
 */

export default function not(arrayOfProps) {
    return {
        "&:not": arrayOfProps.reduce((result, cssPropObj) => {
            return Object.assign(result, cssPropObj)
        }, {})
    }
}