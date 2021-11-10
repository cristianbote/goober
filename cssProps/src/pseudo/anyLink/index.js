//Do not modify this file.  This file is generated from ./scripts/generatePseudo.js
/**
 * @name anyLink
 * @category CssProps Helper
 * @summary Returns css pseudo selector :any-link with object of css properties
 *
 * @description
 * Returns an object with the :any-link pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns :any-link property as object with object of css properties
 */

export default function anyLink(arrayOfProps) {
    return {
        "&:any-link": arrayOfProps.reduce((result, cssPropObj) => {
            return Object.assign(result, cssPropObj)
        }, {})
    }
}