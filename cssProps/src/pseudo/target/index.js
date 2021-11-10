//Do not modify this file.  This file is generated from ./scripts/generatePseudo.js
/**
 * @name target
 * @category CssProps Helper
 * @summary Returns css pseudo selector :target with object of css properties
 *
 * @description
 * Returns an object with the :target pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns :target property as object with object of css properties
 */

export default function target(arrayOfProps) {
    return {
        "&:target": arrayOfProps.reduce((result, cssPropObj) => {
            return Object.assign(result, cssPropObj)
        }, {})
    }
}