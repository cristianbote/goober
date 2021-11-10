//Do not modify this file.  This file is generated from ./scripts/generatePseudo.js
/**
 * @name firstLetter
 * @category CssProps Helper
 * @summary Returns css pseudo selector ::first-letter with object of css properties
 *
 * @description
 * Returns an object with the ::first-letter pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns ::first-letter property as object with object of css properties
 */

export default function firstLetter(arrayOfProps) {
    return {
        "&::first-letter": arrayOfProps.reduce((result, cssPropObj) => {
            return Object.assign(result, cssPropObj)
        }, {})
    }
}