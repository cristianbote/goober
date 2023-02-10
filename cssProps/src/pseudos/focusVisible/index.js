/**
 * @name focusVisible
 * @category CssProps Helper
 * @summary Returns css pseudo selector :focus-visible with object of css properties
 *
 * @description
 * Returns an object with the :focus-visible pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns :focus-visible property as object with object of css properties
 */

import { flatten } from '../../util/index';
export default function focusVisible(cssProps) {
    return {
        '&:focus-visible': flatten(cssProps)
    };
}
