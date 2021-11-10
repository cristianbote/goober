//Do not modify this file.  This file is generated from ./scripts/generateAtRules.js
/**
 * @name charset
 * @category CssProps Helper
 * @summary Returns a numerical value appended with the css atRule @charset
 *
 * @description
 * Returns a numerical value appended with the css atRule @charset
 *
 * @param {number} atRule- The numerical value that the css atRule will be appended
 * @returns {string} numerical value with appended atRule @charset
 */

export default function charset(atRuleParams, arrayOfCssProps) {
    return {
        ["@charset" + (atRuleParams ? " " + atRuleParams : "")]: arrayOfCssProps.reduce((result, cssPropObj) => {
            return Object.assign(result, cssPropObj)
        }, {})
    }
}