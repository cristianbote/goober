//Do not modify this file.  This file is generated from ./scripts/generatePseudo.js
/**
 * @name readOnly
 * @category CssProps Helper
 * @summary Returns css pseudo selector :read-only with object of css properties
 *
 * @description
 * Returns an object with the :read-only pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns :read-only property as object with object of css properties
 */

export default function readOnly(arrayOfProps) {
    return {
        "&:read-only": arrayOfProps.reduce((result, cssPropObj) => {
            return Object.assign(result, cssPropObj)
        }, {})
    }
}