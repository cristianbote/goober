/* Do not modify this file.  This file is generated from ./cssProps/templates/atRules.atRule.index.mustache */
/**
 * @name counterStyle
 * @category CssProps Helper
 * @summary @counter-style
 *
 * @description
 *    @counter-style
 *    @counter-style &lt;counter-style-name&gt; { [ system: &lt;counter-system&gt;; ] || [ symbols: &lt;counter-symbols&gt;; ] || [ additive-symbols: &lt;additive-symbols&gt;; ] || [ negative: &lt;negative-symbol&gt;; ] || [ prefix: &lt;prefix&gt;; ] || [ suffix: &lt;suffix&gt;; ] || [ range: &lt;range&gt;; ] || [ pad: &lt;padding&gt;; ] || [ speak-as: &lt;speak-as&gt;; ] || [ fallback: &lt;counter-style-name&gt;; ] }
 *
 * @param {string} args - a string representation of the arguments following the @rule
 * @param {Object[]} cssProps - Array of css property objects that apply to the @rule
 * @returns {Object} atRule - returns an object with the @counter-style property
 */

import { flatten } from '../../util/index';
export default function counterStyle(args, cssProps) {
    return {
        [`@counter-style ${args}`]: flatten(cssProps)
    };
}
