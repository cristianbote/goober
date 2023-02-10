/**
 * @name left
 * @category CssProps Helper
 * @summary Returns css pseudo selector :left with object of css properties
 *
 * @description
 * Returns an object with the :left pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns :left property as object with object of css properties
 */

import { flatten } from '../../util/index';
export default function left(cssProps) {
    return {
        '&:left': flatten(cssProps)
    };
}
