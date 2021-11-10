//Do not modify this file.  This file is generated from ./scripts/generatePseudo.js
/**
 * @name first
 * @category CssProps Helper
 * @summary Returns css pseudo selector :first with object of css properties
 *
 * @description
 * Returns an object with the :first pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns :first property as object with object of css properties
 */

export default function first(arrayOfProps) {
    return {
        "&:first": arrayOfProps.reduce((result, cssPropObj) => {
            return Object.assign(result, cssPropObj)
        }, {})
    }
}