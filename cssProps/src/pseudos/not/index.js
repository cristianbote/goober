/**
 * @name not
 * @category CssProps Helper
 * @summary Returns css pseudo selector :not with object of css properties
 *
 * @description
 * Returns an object with the :not pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns :not property as object with object of css properties
 */

import { flatten } from '../../util/index';
export default function not(cssProps) {
    return {
        '&:not': flatten(cssProps)
    };
}
