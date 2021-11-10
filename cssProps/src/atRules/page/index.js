//Do not modify this file.  This file is generated from ./scripts/generateAtRules.js
/**
 * @name page
 * @category CssProps Helper
 * @summary Returns a numerical value appended with the css atRule @page
 *
 * @description
 * Returns a numerical value appended with the css atRule @page
 *
 * @param {number} atRule- The numerical value that the css atRule will be appended
 * @returns {string} numerical value with appended atRule @page
 */

export default function charset(atRuleParams, arrayOfCssProps) {
    return {
        ["@page" + (atRuleParams ? " " + atRuleParams : "")]: arrayOfCssProps.reduce((result, cssPropObj) => {
            return Object.assign(result, cssPropObj)
        }, {})
    }
}