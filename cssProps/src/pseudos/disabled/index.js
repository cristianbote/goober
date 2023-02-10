/**
 * @name disabled
 * @category CssProps Helper
 * @summary Returns css pseudo selector :disabled with object of css properties
 *
 * @description
 * Returns an object with the :disabled pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns :disabled property as object with object of css properties
 */

import { flatten } from '../../util/index';
export default function disabled(cssProps) {
    return {
        '&:disabled': flatten(cssProps)
    };
}
