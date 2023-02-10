/* Do not modify this file.  This file is generated from ./cssProps/templates/atRules.atRule.index.mustache */
/**
 * @name page
 * @category CssProps Helper
 * @summary @page
 *
 * @description
 *    @page
 *    @page &lt;page-selector-list&gt; { &lt;page-body&gt; }
 *
 * @param {string} args - a string representation of the arguments following the @rule
 * @param {Object[]} cssProps - Array of css property objects that apply to the @rule
 * @returns {Object} atRule - returns an object with the @page property
 */

import { flatten } from '../../util/index';
export default function page(args, cssProps) {
    return {
        [`@page ${args}`]: flatten(cssProps)
    };
}
