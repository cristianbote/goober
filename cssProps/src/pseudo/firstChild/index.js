//Do not modify this file.  This file is generated from ./scripts/generatePseudo.js
/**
 * @name firstChild
 * @category CssProps Helper
 * @summary Returns css pseudo selector :first-child with object of css properties
 *
 * @description
 * Returns an object with the :first-child pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns :first-child property as object with object of css properties
 */

export default function firstChild(arrayOfProps) {
    return {
        "&:first-child": arrayOfProps.reduce((result, cssPropObj) => {
            return Object.assign(result, cssPropObj)
        }, {})
    }
}