/**
 * @name cue
 * @category CssProps Helper
 * @summary Returns css pseudo selector ::cue with object of css properties
 *
 * @description
 * Returns an object with the ::cue pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns ::cue property as object with object of css properties
 */

import { flatten } from '../../util/index';
export default function cue(cssProps) {
    return {
        '&::cue': flatten(cssProps)
    };
}
