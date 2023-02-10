/**
 * @name nthChild
 * @category CssProps Helper
 * @summary Returns css pseudo selector :nth-child with object of css properties
 *
 * @description
 * Returns an object with the :nth-child pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns :nth-child property as object with object of css properties
 */

import { flatten } from '../../util/index';
export default function nthChild(cssProps) {
    return {
        '&:nth-child': flatten(cssProps)
    };
}