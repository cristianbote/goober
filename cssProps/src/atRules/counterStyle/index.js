//Do not modify this file.  This file is generated from ./scripts/generateAtRules.js
/**
 * @name counterStyle
 * @category CssProps Helper
 * @summary Returns a numerical value appended with the css atRule @counter-style
 *
 * @description
 * Returns a numerical value appended with the css atRule @counter-style
 *
 * @param {number} atRule- The numerical value that the css atRule will be appended
 * @returns {string} numerical value with appended atRule @counter-style
 */

export default function charset(atRuleParams, arrayOfCssProps) {
    return {
        ["@counter-style" + (atRuleParams ? " " + atRuleParams : "")]: arrayOfCssProps.reduce((result, cssPropObj) => {
            return Object.assign(result, cssPropObj)
        }, {})
    }
}