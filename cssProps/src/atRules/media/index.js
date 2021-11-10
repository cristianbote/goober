//Do not modify this file.  This file is generated from ./scripts/generateAtRules.js
/**
 * @name media
 * @category CssProps Helper
 * @summary Returns a numerical value appended with the css atRule @media
 *
 * @description
 * Returns a numerical value appended with the css atRule @media
 *
 * @param {number} atRule- The numerical value that the css atRule will be appended
 * @returns {string} numerical value with appended atRule @media
 */

export default function charset(atRuleParams, arrayOfCssProps) {
    return {
        ["@media" + (atRuleParams ? " " + atRuleParams : "")]: arrayOfCssProps.reduce((result, cssPropObj) => {
            return Object.assign(result, cssPropObj)
        }, {})
    }
}