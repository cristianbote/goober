//Do not modify this file.  This file is generated from ./scripts/generatePseudo.js
/**
 * @name valid
 * @category CssProps Helper
 * @summary Returns css pseudo selector :valid with object of css properties
 *
 * @description
 * Returns an object with the :valid pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns :valid property as object with object of css properties
 */

export default function valid(arrayOfProps) {
    return {
        "&:valid": arrayOfProps.reduce((result, cssPropObj) => {
            return Object.assign(result, cssPropObj)
        }, {})
    }
}