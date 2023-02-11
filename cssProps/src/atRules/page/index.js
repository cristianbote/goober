/* Do not modify this file.  This file is generated from ./cssProps/templates/atRules.atRule.index.mustache */
import { flatten } from '../../util/index';
export default function page(args, cssProps) {
    return {
        [`@page ${args}`]: flatten(cssProps)
    };
}
