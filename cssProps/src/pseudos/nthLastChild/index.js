/**
 * @name nthLastChild
 * @category CssProps Helper
 * @summary Returns css pseudo selector :nth-last-child with object of css properties
 *
 * @description
 * Returns an object with the :nth-last-child pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns :nth-last-child property as object with object of css properties
 */

import { flatten } from '../../util/index';
export default function nthLastChild(cssProps) {
    return {
        '&:nth-last-child': flatten(cssProps)
    };
}
