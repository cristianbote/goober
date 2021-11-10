//Do not modify this file.  This file is generated from ./scripts/generatePseudo.js
/**
 * @name lang
 * @category CssProps Helper
 * @summary Returns css pseudo selector :lang with object of css properties
 *
 * @description
 * Returns an object with the :lang pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns :lang property as object with object of css properties
 */

export default function lang(arrayOfProps) {
    return {
        "&:lang": arrayOfProps.reduce((result, cssPropObj) => {
            return Object.assign(result, cssPropObj)
        }, {})
    }
}