/* Do not modify this file.  This file is generated from ./cssProps/templates/atRules.atRule.index.mustache */
/**
 * @name fontFace
 * @category CssProps Helper
 * @summary @font-face
 *
 * @description
 *    @font-face
 *    @font-face { [ font-family: &lt;family-name&gt;; ] || [ src: &lt;src&gt;; ] || [ unicode-range: &lt;unicode-range&gt;; ] || [ font-variant: &lt;font-variant&gt;; ] || [ font-feature-settings: &lt;font-feature-settings&gt;; ] || [ font-variation-settings: &lt;font-variation-settings&gt;; ] || [ font-stretch: &lt;font-stretch&gt;; ] || [ font-weight: &lt;font-weight&gt;; ] || [ font-style: &lt;font-style&gt;; ] || [ size-adjust: &lt;size-adjust&gt;; ] || [ ascent-override: &lt;ascent-override&gt;; ] || [ descent-override: &lt;descent-override&gt;; ] || [ line-gap-override: &lt;line-gap-override&gt;; ] }
 *
 * @param {Object[]} cssProps - Array of css property objects that apply to the @rule
 * @returns {Object} atRule - returns an object with the @font-face property
 */

import { flatten } from '../../util/index';
export default function fontFace(cssProps) {
    return {
        [`@font-face`]: flatten(cssProps)
    };
}
