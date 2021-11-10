//Do not modify this file.  This file is generated from ./scripts/generateAtRules.js
/**
 * @name fontFeatureValues
 * @category CssProps Helper
 * @summary Returns a numerical value appended with the css atRule @font-feature-values
 *
 * @description
 * Returns a numerical value appended with the css atRule @font-feature-values
 *
 * @param {number} atRule- The numerical value that the css atRule will be appended
 * @returns {string} numerical value with appended atRule @font-feature-values
 */

export default function charset(atRuleParams, arrayOfCssProps) {
    return {
        ["@font-feature-values" + (atRuleParams ? " " + atRuleParams : "")]: arrayOfCssProps.reduce((result, cssPropObj) => {
            return Object.assign(result, cssPropObj)
        }, {})
    }
}