/**
 * @name backdrop
 * @category CssProps Helper
 * @summary Returns css pseudo selector ::backdrop with object of css properties
 *
 * @description
 * Returns an object with the ::backdrop pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns ::backdrop property as object with object of css properties
 */

import { flatten } from '../../util/index';
export default function backdrop(cssProps) {
    return {
        '&::backdrop': flatten(cssProps)
    };
}
