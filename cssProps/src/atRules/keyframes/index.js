/* Do not modify this file.  This file is generated from ./cssProps/templates/atRules.atRule.index.mustache */
/**
 * @name keyframes
 * @category CssProps Helper
 * @summary @keyframes
 *
 * @description
 *    @keyframes
 *    @keyframes &lt;keyframes-name&gt; { &lt;keyframe-block-list&gt; }
 *
 * @param {string} args - a string representation of the arguments following the @rule
 * @param {Object[]} cssProps - Array of css property objects that apply to the @rule
 * @returns {Object} atRule - returns an object with the @keyframes property
 */

import { flatten } from '../../util/index';
export default function keyframes(args, cssProps) {
    return {
        [`@keyframes ${args}`]: flatten(cssProps)
    };
}
