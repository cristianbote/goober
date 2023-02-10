/**
 * @name first
 * @category CssProps Helper
 * @summary Returns css pseudo selector :first with object of css properties
 *
 * @description
 * Returns an object with the :first pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns :first property as object with object of css properties
 */

import { flatten } from '../../util/index';
export default function first(cssProps) {
    return {
        '&:first': flatten(cssProps)
    };
}