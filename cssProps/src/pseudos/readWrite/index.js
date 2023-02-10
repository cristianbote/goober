/**
 * @name readWrite
 * @category CssProps Helper
 * @summary Returns css pseudo selector :read-write with object of css properties
 *
 * @description
 * Returns an object with the :read-write pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns :read-write property as object with object of css properties
 */

import { flatten } from '../../util/index';
export default function readWrite(cssProps) {
    return {
        '&:read-write': flatten(cssProps)
    };
}
