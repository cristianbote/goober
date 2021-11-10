//Do not modify this file.  This file is generated from ./scripts/generatePseudo.js
/**
 * @name indeterminate
 * @category CssProps Helper
 * @summary Returns css pseudo selector :indeterminate with object of css properties
 *
 * @description
 * Returns an object with the :indeterminate pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns :indeterminate property as object with object of css properties
 */

export default function indeterminate(arrayOfProps) {
    return {
        "&:indeterminate": arrayOfProps.reduce((result, cssPropObj) => {
            return Object.assign(result, cssPropObj)
        }, {})
    }
}