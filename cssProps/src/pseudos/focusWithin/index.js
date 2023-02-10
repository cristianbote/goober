/**
 * @name focusWithin
 * @category CssProps Helper
 * @summary Returns css pseudo selector :focus-within with object of css properties
 *
 * @description
 * Returns an object with the :focus-within pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns :focus-within property as object with object of css properties
 */

import { flatten } from '../../util/index';
export default function focusWithin(cssProps) {
    return {
        '&:focus-within': flatten(cssProps)
    };
}
