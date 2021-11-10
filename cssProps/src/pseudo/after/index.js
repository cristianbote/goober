//Do not modify this file.  This file is generated from ./scripts/generatePseudo.js
/**
 * @name after
 * @category CssProps Helper
 * @summary Returns css pseudo selector ::after with object of css properties
 *
 * @description
 * Returns an object with the ::after pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns ::after property as object with object of css properties
 */

export default function after(arrayOfProps) {
    return {
        "&::after": arrayOfProps.reduce((result, cssPropObj) => {
            return Object.assign(result, cssPropObj)
        }, {})
    }
}