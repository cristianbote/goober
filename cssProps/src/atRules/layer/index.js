/* Do not modify this file.  This file is generated from ./cssProps/templates/atRules.atRule.index.mustache */
/**
 * @name layer
 * @category CssProps Helper
 * @summary @layer
 *
 * @description
 *    @layer
 *    @layer [ &lt;layer-name&gt;# | &lt;layer-name&gt;? { &lt;stylesheet&gt; } ]
 *
 * @param {string} args - a string representation of the arguments following the @rule
 * @param {Object[]} cssProps - Array of css property objects that apply to the @rule
 * @returns {Object} atRule - returns an object with the @layer property
 */

import { flatten } from '../../util/index';
export default function layer(args, cssProps) {
    return {
        [`@layer ${args}`]: flatten(cssProps)
    };
}
