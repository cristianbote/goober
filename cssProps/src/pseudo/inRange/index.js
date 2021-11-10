//Do not modify this file.  This file is generated from ./scripts/generatePseudo.js
/**
 * @name inRange
 * @category CssProps Helper
 * @summary Returns css pseudo selector :in-range with object of css properties
 *
 * @description
 * Returns an object with the :in-range pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns :in-range property as object with object of css properties
 */

export default function inRange(arrayOfProps) {
    return {
        "&:in-range": arrayOfProps.reduce((result, cssPropObj) => {
            return Object.assign(result, cssPropObj)
        }, {})
    }
}