//Do not modify this file.  This file is generated from ./scripts/generatePseudo.js
/**
 * @name scope
 * @category CssProps Helper
 * @summary Returns css pseudo selector :scope with object of css properties
 *
 * @description
 * Returns an object with the :scope pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns :scope property as object with object of css properties
 */

export default function scope(arrayOfProps) {
    return {
        "&:scope": arrayOfProps.reduce((result, cssPropObj) => {
            return Object.assign(result, cssPropObj)
        }, {})
    }
}