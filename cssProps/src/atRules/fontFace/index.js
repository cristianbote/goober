//Do not modify this file.  This file is generated from ./scripts/generateAtRules.js
/**
 * @name fontFace
 * @category CssProps Helper
 * @summary Returns a numerical value appended with the css atRule @font-face
 *
 * @description
 * Returns a numerical value appended with the css atRule @font-face
 *
 * @param {number} atRule- The numerical value that the css atRule will be appended
 * @returns {string} numerical value with appended atRule @font-face
 */

export default function charset(atRuleParams, arrayOfCssProps) {
    return {
        ["@font-face" + (atRuleParams ? " " + atRuleParams : "")]: arrayOfCssProps.reduce((result, cssPropObj) => {
            return Object.assign(result, cssPropObj)
        }, {})
    }
}