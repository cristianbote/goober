/**
 * @name optional
 * @category CssProps Helper
 * @summary Returns css pseudo selector :optional with object of css properties
 *
 * @description
 * Returns an object with the :optional pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns :optional property as object with object of css properties
 */

import { flatten } from '../../util/index';
export default function optional(cssProps) {
    return {
        '&:optional': flatten(cssProps)
    };
}
