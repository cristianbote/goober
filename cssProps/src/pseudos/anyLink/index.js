/**
 * @name anyLink
 * @category CssProps Helper
 * @summary Returns css pseudo selector :any-link with object of css properties
 *
 * @description
 * Returns an object with the :any-link pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns :any-link property as object with object of css properties
 */

import { flatten } from '../../util/index';
export default function anyLink(cssProps) {
    return {
        '&:any-link': flatten(cssProps)
    };
}
