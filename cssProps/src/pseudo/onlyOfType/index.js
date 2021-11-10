//Do not modify this file.  This file is generated from ./scripts/generatePseudo.js
/**
 * @name onlyOfType
 * @category CssProps Helper
 * @summary Returns css pseudo selector :only-of-type with object of css properties
 *
 * @description
 * Returns an object with the :only-of-type pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns :only-of-type property as object with object of css properties
 */

export default function onlyOfType(arrayOfProps) {
    return {
        "&:only-of-type": arrayOfProps.reduce((result, cssPropObj) => {
            return Object.assign(result, cssPropObj)
        }, {})
    }
}