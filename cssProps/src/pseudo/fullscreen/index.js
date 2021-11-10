//Do not modify this file.  This file is generated from ./scripts/generatePseudo.js
/**
 * @name fullscreen
 * @category CssProps Helper
 * @summary Returns css pseudo selector :fullscreen with object of css properties
 *
 * @description
 * Returns an object with the :fullscreen pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns :fullscreen property as object with object of css properties
 */

export default function fullscreen(arrayOfProps) {
    return {
        "&:fullscreen": arrayOfProps.reduce((result, cssPropObj) => {
            return Object.assign(result, cssPropObj)
        }, {})
    }
}