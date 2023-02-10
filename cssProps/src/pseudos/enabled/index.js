/**
 * @name enabled
 * @category CssProps Helper
 * @summary Returns css pseudo selector :enabled with object of css properties
 *
 * @description
 * Returns an object with the :enabled pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns :enabled property as object with object of css properties
 */

import { flatten } from '../../util/index';
export default function enabled(cssProps) {
    return {
        '&:enabled': flatten(cssProps)
    };
}
