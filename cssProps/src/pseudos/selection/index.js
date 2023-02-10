/**
 * @name selection
 * @category CssProps Helper
 * @summary Returns css pseudo selector ::selection with object of css properties
 *
 * @description
 * Returns an object with the ::selection pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns ::selection property as object with object of css properties
 */

import { flatten } from '../../util/index';
export default function selection(cssProps) {
    return {
        '&::selection': flatten(cssProps)
    };
}
