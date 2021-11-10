//Do not modify this file.  This file is generated from ./scripts/generateAtRules.js
/**
 * @name supports
 * @category CssProps Helper
 * @summary Returns a numerical value appended with the css atRule @supports
 *
 * @description
 * Returns a numerical value appended with the css atRule @supports
 *
 * @param {number} atRule- The numerical value that the css atRule will be appended
 * @returns {string} numerical value with appended atRule @supports
 */

export default function charset(atRuleParams, arrayOfCssProps) {
    return {
        ["@supports" + (atRuleParams ? " " + atRuleParams : "")]: arrayOfCssProps.reduce((result, cssPropObj) => {
            return Object.assign(result, cssPropObj)
        }, {})
    }
}