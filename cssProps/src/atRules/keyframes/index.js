/* Do not modify this file.  This file is generated from ./cssProps/templates/atRules.atRule.index.mustache */
import { flatten } from '../../util/index';
export default function keyframes(args, cssProps) {
    return {
        [`@keyframes ${args}`]: flatten(cssProps)
    };
}
