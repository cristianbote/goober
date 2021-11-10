//Do not modify this file.  This file is generated from ./scripts/generatePseudo.js
/**
 * @name firstLine
 * @category CssProps Helper
 * @summary Returns css pseudo selector ::first-line with object of css properties
 *
 * @description
 * Returns an object with the ::first-line pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns ::first-line property as object with object of css properties
 */

export default function firstLine(arrayOfProps) {
    return {
        "&::first-line": arrayOfProps.reduce((result, cssPropObj) => {
            return Object.assign(result, cssPropObj)
        }, {})
    }
}