//Do not modify this file.  This file is generated from ./scripts/generatePseudo.js
/**
 * @name placeholder
 * @category CssProps Helper
 * @summary Returns css pseudo selector ::placeholder with object of css properties
 *
 * @description
 * Returns an object with the ::placeholder pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns ::placeholder property as object with object of css properties
 */

export default function placeholder(arrayOfProps) {
    return {
        "&::placeholder": arrayOfProps.reduce((result, cssPropObj) => {
            return Object.assign(result, cssPropObj)
        }, {})
    }
}