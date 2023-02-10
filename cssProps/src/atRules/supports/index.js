/* Do not modify this file.  This file is generated from ./cssProps/templates/atRules.atRule.index.mustache */
/**
 * @name supports
 * @category CssProps Helper
 * @summary @supports
 *
 * @description
 *    @supports
 *    @supports &lt;supports-condition&gt; { &lt;group-rule-body&gt; }
 *
 * @param {string} args - a string representation of the arguments following the @rule
 * @param {Object[]} cssProps - Array of css property objects that apply to the @rule
 * @returns {Object} atRule - returns an object with the @supports property
 */

import { flatten } from '../../util/index';
export default function supports(args, cssProps) {
    return {
        [`@supports ${args}`]: flatten(cssProps)
    };
}
