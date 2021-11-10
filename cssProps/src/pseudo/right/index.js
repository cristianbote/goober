//Do not modify this file.  This file is generated from ./scripts/generatePseudo.js
/**
 * @name right
 * @category CssProps Helper
 * @summary Returns css pseudo selector :right with object of css properties
 *
 * @description
 * Returns an object with the :right pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns :right property as object with object of css properties
 */

export default function right(arrayOfProps) {
    return {
        "&:right": arrayOfProps.reduce((result, cssPropObj) => {
            return Object.assign(result, cssPropObj)
        }, {})
    }
}