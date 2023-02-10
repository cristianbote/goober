/**
 * @name after
 * @category CssProps Helper
 * @summary Returns css pseudo selector ::after with object of css properties
 *
 * @description
 * Returns an object with the ::after pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns ::after property as object with object of css properties
 */

import { flatten } from '../../util/index';
export default function after(cssProps) {
    return {
        '&::after': flatten(cssProps)
    };
}
