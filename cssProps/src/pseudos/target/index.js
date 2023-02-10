/**
 * @name target
 * @category CssProps Helper
 * @summary Returns css pseudo selector :target with object of css properties
 *
 * @description
 * Returns an object with the :target pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns :target property as object with object of css properties
 */

import { flatten } from '../../util/index';
export default function target(cssProps) {
    return {
        '&:target': flatten(cssProps)
    };
}
