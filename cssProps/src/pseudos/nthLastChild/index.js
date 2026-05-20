/* Do not modify this file.  This file is generated from ./cssProps/templates/pseudos.pseudo.index.mustache */
import { flatten } from '../../util/index';
export default function nthLastChild(cssProps) {
    return {
        '&:nth-last-child': flatten(cssProps)
    };
}
