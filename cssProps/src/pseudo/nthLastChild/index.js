//Do not modify this file.  This file is generated from ./scripts/generatePseudo.js
/**
 * @name nthLastChild
 * @category CssProps Helper
 * @summary Returns css pseudo selector :nth-last-child with object of css properties
 *
 * @description
 * Returns an object with the :nth-last-child pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns :nth-last-child property as object with object of css properties
 */

export default function nthLastChild(arrayOfProps) {
    return {
        "&:nth-last-child": arrayOfProps.reduce((result, cssPropObj) => {
            return Object.assign(result, cssPropObj)
        }, {})
    }
}