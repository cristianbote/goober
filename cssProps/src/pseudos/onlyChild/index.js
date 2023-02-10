/**
 * @name onlyChild
 * @category CssProps Helper
 * @summary Returns css pseudo selector :only-child with object of css properties
 *
 * @description
 * Returns an object with the :only-child pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns :only-child property as object with object of css properties
 */

import { flatten } from '../../util/index';
export default function onlyChild(cssProps) {
    return {
        '&:only-child': flatten(cssProps)
    };
}
