//Do not modify this file.  This file is generated from ./scripts/generatePseudo.js
/**
 * @name focusVisible
 * @category CssProps Helper
 * @summary Returns css pseudo selector :focus-visible with object of css properties
 *
 * @description
 * Returns an object with the :focus-visible pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns :focus-visible property as object with object of css properties
 */

export default function focusVisible(arrayOfProps) {
    return {
        "&:focus-visible": arrayOfProps.reduce((result, cssPropObj) => {
            return Object.assign(result, cssPropObj)
        }, {})
    }
}