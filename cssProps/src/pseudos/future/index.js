/**
 * @name future
 * @category CssProps Helper
 * @summary Returns css pseudo selector :future with object of css properties
 *
 * @description
 * Returns an object with the :future pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns :future property as object with object of css properties
 */

import { flatten } from '../../util/index';
export default function future(cssProps) {
    return {
        '&:future': flatten(cssProps)
    };
}
