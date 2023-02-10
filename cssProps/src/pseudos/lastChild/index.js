/**
 * @name lastChild
 * @category CssProps Helper
 * @summary Returns css pseudo selector :last-child with object of css properties
 *
 * @description
 * Returns an object with the :last-child pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns :last-child property as object with object of css properties
 */

import { flatten } from '../../util/index';
export default function lastChild(cssProps) {
    return {
        '&:last-child': flatten(cssProps)
    };
}
