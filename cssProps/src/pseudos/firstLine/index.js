/**
 * @name firstLine
 * @category CssProps Helper
 * @summary Returns css pseudo selector ::first-line with object of css properties
 *
 * @description
 * Returns an object with the ::first-line pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns ::first-line property as object with object of css properties
 */

import { flatten } from '../../util/index';
export default function firstLine(cssProps) {
    return {
        '&::first-line': flatten(cssProps)
    };
}
