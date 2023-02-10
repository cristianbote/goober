/**
 * @name root
 * @category CssProps Helper
 * @summary Returns css pseudo selector :root with object of css properties
 *
 * @description
 * Returns an object with the :root pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns :root property as object with object of css properties
 */

import { flatten } from '../../util/index';
export default function root(cssProps) {
    return {
        '&:root': flatten(cssProps)
    };
}
