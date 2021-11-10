//Do not modify this file.  This file is generated from ./scripts/generateAtRules.js
/**
 * @name import
 * @category CssProps Helper
 * @summary Returns a numerical value appended with the css atRule @import
 *
 * @description
 * Returns a numerical value appended with the css atRule @import
 *
 * @param {number} atRule- The numerical value that the css atRule will be appended
 * @returns {string} numerical value with appended atRule @import
 */

export default function charset(atRuleParams, arrayOfCssProps) {
    return {
        ["@import" + (atRuleParams ? " " + atRuleParams : "")]: arrayOfCssProps.reduce((result, cssPropObj) => {
            return Object.assign(result, cssPropObj)
        }, {})
    }
}