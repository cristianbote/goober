//Do not modify this file.  This file is generated from ./scripts/generatePseudo.js
/**
 * @name disabled
 * @category CssProps Helper
 * @summary Returns css pseudo selector :disabled with object of css properties
 *
 * @description
 * Returns an object with the :disabled pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns :disabled property as object with object of css properties
 */

export default function disabled(arrayOfProps) {
    return {
        "&:disabled": arrayOfProps.reduce((result, cssPropObj) => {
            return Object.assign(result, cssPropObj)
        }, {})
    }
}