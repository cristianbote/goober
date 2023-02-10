/* Do not modify this file.  This file is generated from ./cssProps/templates/atRules.atRule.index.mustache */
/**
 * @name scrollTimeline
 * @category CssProps Helper
 * @summary @scroll-timeline
 *
 * @description
 *    @scroll-timeline
 *    @scroll-timeline &lt;timeline-name&gt; { &lt;declaration-list&gt; }
 *
 * @param {string} args - a string representation of the arguments following the @rule
 * @param {Object[]} cssProps - Array of css property objects that apply to the @rule
 * @returns {Object} atRule - returns an object with the @scroll-timeline property
 */

import { flatten } from '../../util/index';
export default function scrollTimeline(args, cssProps) {
    return {
        [`@scroll-timeline ${args}`]: flatten(cssProps)
    };
}
