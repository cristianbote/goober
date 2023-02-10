/**
 * @name checked
 * @category CssProps Helper
 * @summary Returns css pseudo selector :checked with object of css properties
 *
 * @description
 * Returns an object with the :checked pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns :checked property as object with object of css properties
 */

import { flatten } from '../../util/index';
export default function checked(cssProps) {
    return {
        '&:checked': flatten(cssProps)
    };
}