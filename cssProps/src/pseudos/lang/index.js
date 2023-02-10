/**
 * @name lang
 * @category CssProps Helper
 * @summary Returns css pseudo selector :lang with object of css properties
 *
 * @description
 * Returns an object with the :lang pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns :lang property as object with object of css properties
 */

import { flatten } from '../../util/index';
export default function lang(cssProps) {
    return {
        '&:lang': flatten(cssProps)
    };
}
