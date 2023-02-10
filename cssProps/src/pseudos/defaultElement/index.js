/**
 * @name defaultElement
 * @category CssProps Helper
 * @summary Returns css pseudo selector :default with object of css properties
 *
 * @description
 * Returns an object with the :default pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns :default property as object with object of css properties
 */

import { flatten } from '../../util/index';
export default function defaultElement(cssProps) {
    return {
        '&:default': flatten(cssProps)
    };
}
