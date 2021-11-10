//Do not modify this file.  This file is generated from ./scripts/generatePseudo.js
/**
 * @name hover
 * @category CssProps Helper
 * @summary Returns css pseudo selector :hover with object of css properties
 *
 * @description
 * Returns an object with the :hover pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns :hover property as object with object of css properties
 */

export default function hover(arrayOfProps) {
    return {
        "&:hover": arrayOfProps.reduce((result, cssPropObj) => {
            return Object.assign(result, cssPropObj)
        }, {})
    }
}