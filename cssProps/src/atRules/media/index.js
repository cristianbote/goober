/* Do not modify this file.  This file is generated from ./cssProps/templates/atRules.atRule.index.mustache */
/**
 * @name media
 * @category CssProps Helper
 * @summary @media
 *
 * @description
 *    @media
 *    @media &lt;media-query-list&gt; { &lt;group-rule-body&gt; }
 *
 * @param {string} args - a string representation of the arguments following the @rule
 * @param {Object[]} cssProps - Array of css property objects that apply to the @rule
 * @returns {Object} atRule - returns an object with the @media property
 */

import { flatten } from '../../util/index';
export default function media(args, cssProps) {
    return {
        [`@media ${args}`]: flatten(cssProps)
    };
}
