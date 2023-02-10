/* Do not modify this file.  This file is generated from ./cssProps/templates/atRules.atRule.index.mustache */
/**
 * @name fontFeatureValues
 * @category CssProps Helper
 * @summary @font-feature-values
 *
 * @description
 *    @font-feature-values
 *    @font-feature-values &lt;family-name&gt;# { &lt;feature-value-block-list&gt; }
 *
 * @param {string} args - a string representation of the arguments following the @rule
 * @param {Object[]} cssProps - Array of css property objects that apply to the @rule
 * @returns {Object} atRule - returns an object with the @font-feature-values property
 */

import { flatten } from '../../util/index';
export default function fontFeatureValues(args, cssProps) {
    return {
        [`@font-feature-values ${args}`]: flatten(cssProps)
    };
}
