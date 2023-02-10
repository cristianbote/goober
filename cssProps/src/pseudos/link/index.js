/**
 * @name link
 * @category CssProps Helper
 * @summary Returns css pseudo selector :link with object of css properties
 *
 * @description
 * Returns an object with the :link pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns :link property as object with object of css properties
 */

import { flatten } from '../../util/index';
export default function link(cssProps) {
    return {
        '&:link': flatten(cssProps)
    };
}
