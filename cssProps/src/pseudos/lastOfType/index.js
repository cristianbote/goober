/**
 * @name lastOfType
 * @category CssProps Helper
 * @summary Returns css pseudo selector :last-of-type with object of css properties
 *
 * @description
 * Returns an object with the :last-of-type pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns :last-of-type property as object with object of css properties
 */

import { flatten } from '../../util/index';
export default function lastOfType(cssProps) {
    return {
        '&:last-of-type': flatten(cssProps)
    };
}
