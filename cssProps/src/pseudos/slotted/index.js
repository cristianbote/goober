/**
 * @name slotted
 * @category CssProps Helper
 * @summary Returns css pseudo selector ::slotted with object of css properties
 *
 * @description
 * Returns an object with the ::slotted pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns ::slotted property as object with object of css properties
 */

import { flatten } from '../../util/index';
export default function slotted(cssProps) {
    return {
        '&::slotted': flatten(cssProps)
    };
}
