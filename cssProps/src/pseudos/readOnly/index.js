/**
 * @name readOnly
 * @category CssProps Helper
 * @summary Returns css pseudo selector :read-only with object of css properties
 *
 * @description
 * Returns an object with the :read-only pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns :read-only property as object with object of css properties
 */

import { flatten } from '../../util/index';
export default function readOnly(cssProps) {
    return {
        '&:read-only': flatten(cssProps)
    };
}
