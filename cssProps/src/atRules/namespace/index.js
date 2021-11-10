//Do not modify this file.  This file is generated from ./scripts/generateAtRules.js
/**
 * @name namespace
 * @category CssProps Helper
 * @summary Returns a numerical value appended with the css atRule @namespace
 *
 * @description
 * Returns a numerical value appended with the css atRule @namespace
 *
 * @param {number} atRule- The numerical value that the css atRule will be appended
 * @returns {string} numerical value with appended atRule @namespace
 */

export default function charset(atRuleParams, arrayOfCssProps) {
    return {
        ["@namespace" + (atRuleParams ? " " + atRuleParams : "")]: arrayOfCssProps.reduce((result, cssPropObj) => {
            return Object.assign(result, cssPropObj)
        }, {})
    }
}