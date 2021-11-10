//Do not modify this file.  This file is generated from ./scripts/generatePseudo.js
/**
 * @name selection
 * @category CssProps Helper
 * @summary Returns css pseudo selector ::selection with object of css properties
 *
 * @description
 * Returns an object with the ::selection pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns ::selection property as object with object of css properties
 */

export default function selection(arrayOfProps) {
    return {
        "&::selection": arrayOfProps.reduce((result, cssPropObj) => {
            return Object.assign(result, cssPropObj)
        }, {})
    }
}