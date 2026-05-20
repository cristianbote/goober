/* Do not modify this file.  This file is generated from ./cssProps/templates/atRules.atRule.index.mustache */
import { flatten } from '../../util/index';
export default function scrollTimeline(args, cssProps) {
    return {
        [`@scroll-timeline ${args}`]: flatten(cssProps)
    };
}
