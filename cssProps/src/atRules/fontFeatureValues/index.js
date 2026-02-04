/* Do not modify this file.  This file is generated from ./cssProps/templates/atRules.atRule.index.mustache */
import { flatten } from '../../util/index';
export default function fontFeatureValues(args, cssProps) {
    return {
        [`@font-feature-values ${args}`]: flatten(cssProps)
    };
}
