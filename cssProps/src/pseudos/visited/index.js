/**
 * @name visited
 * @category CssProps Helper
 * @summary Returns css pseudo selector :visited with object of css properties
 *
 * @description
 * Returns an object with the :visited pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns :visited property as object with object of css properties
 */

import { flatten } from '../../util/index';
export default function visited(cssProps) {
    return {
        '&:visited': flatten(cssProps)
    };
}
