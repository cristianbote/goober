/* Do not modify this file.  This file is generated from ./cssProps/templates/atRules.atRule.index.mustache */
/**
 * @name viewport
 * @category CssProps Helper
 * @summary @viewport
 *
 * @description
 *    @viewport
 *    @viewport { &lt;group-rule-body&gt; }
 *
 * @param {Object[]} cssProps - Array of css property objects that apply to the @rule
 * @returns {Object} atRule - returns an object with the @viewport property
 */

import { flatten } from '../../util/index';
export default function viewport(cssProps) {
    return {
        [`@viewport`]: flatten(cssProps)
    };
}
