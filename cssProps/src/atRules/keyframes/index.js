//Do not modify this file.  This file is generated from ./scripts/generateAtRules.js
/**
 * @name keyframes
 * @category CssProps Helper
 * @summary Returns a numerical value appended with the css atRule @keyframes
 *
 * @description
 * Returns a numerical value appended with the css atRule @keyframes
 *
 * @param {number} atRule- The numerical value that the css atRule will be appended
 * @returns {string} numerical value with appended atRule @keyframes
 */

export default function charset(atRuleParams, arrayOfCssProps) {
    return {
        ["@keyframes" + (atRuleParams ? " " + atRuleParams : "")]: arrayOfCssProps.reduce((result, cssPropObj) => {
            return Object.assign(result, cssPropObj)
        }, {})
    }
}