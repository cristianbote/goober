/**
 * @name dir
 * @category CssProps Helper
 * @summary Returns css pseudo selector :dir with object of css properties
 *
 * @description
 * Returns an object with the :dir pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns :dir property as object with object of css properties
 */

import { flatten } from '../../util/index';
export default function dir(cssProps) {
    return {
        '&:dir': flatten(cssProps)
    };
}
