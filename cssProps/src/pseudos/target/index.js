/* Do not modify this file.  This file is generated from ./cssProps/templates/pseudos.pseudo.index.mustache */
import { flatten } from '../../util/index';
export default function target(cssProps) {
    return {
        '&:target': flatten(cssProps)
    };
}
