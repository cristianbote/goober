/* Do not modify this file.  This file is generated from ./cssProps/templates/pseudos.pseudo.index.mustache */
import { flatten } from '../../util/index';
export default function onlyOfType(cssProps) {
    return {
        '&:only-of-type': flatten(cssProps)
    };
}
