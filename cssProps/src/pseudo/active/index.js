//Do not modify this file.  This file is generated from ./scripts/generatePseudo.js
/**
 * @name active
 * @category CssProps Helper
 * @summary Returns css pseudo selector :active with object of css properties
 *
 * @description
 * Returns an object with the :active pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns :active property as object with object of css properties
 */

export default function active(arrayOfProps) {
    return {
        "&:active": arrayOfProps.reduce((result, cssPropObj) => {
            return Object.assign(result, cssPropObj)
        }, {})
    }
}