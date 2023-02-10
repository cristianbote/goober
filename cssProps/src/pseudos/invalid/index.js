/**
 * @name invalid
 * @category CssProps Helper
 * @summary Returns css pseudo selector :invalid with object of css properties
 *
 * @description
 * Returns an object with the :invalid pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns :invalid property as object with object of css properties
 */

import { flatten } from '../../util/index';
export default function invalid(cssProps) {
    return {
        '&:invalid': flatten(cssProps)
    };
}
