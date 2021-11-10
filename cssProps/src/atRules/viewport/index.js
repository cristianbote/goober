//Do not modify this file.  This file is generated from ./scripts/generateAtRules.js
/**
 * @name viewport
 * @category CssProps Helper
 * @summary Returns a numerical value appended with the css atRule @viewport
 *
 * @description
 * Returns a numerical value appended with the css atRule @viewport
 *
 * @param {number} atRule- The numerical value that the css atRule will be appended
 * @returns {string} numerical value with appended atRule @viewport
 */

export default function charset(atRuleParams, arrayOfCssProps) {
    return {
        ["@viewport" + (atRuleParams ? " " + atRuleParams : "")]: arrayOfCssProps.reduce((result, cssPropObj) => {
            return Object.assign(result, cssPropObj)
        }, {})
    }
}