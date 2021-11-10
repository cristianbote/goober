//Do not modify this file.  This file is generated from ./scripts/generatePseudo.js
/**
 * @name focus
 * @category CssProps Helper
 * @summary Returns css pseudo selector :focus with object of css properties
 *
 * @description
 * Returns an object with the :focus pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns :focus property as object with object of css properties
 */

export default function focus(arrayOfProps) {
    return {
        "&:focus": arrayOfProps.reduce((result, cssPropObj) => {
            return Object.assign(result, cssPropObj)
        }, {})
    }
}