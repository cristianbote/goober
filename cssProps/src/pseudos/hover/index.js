/**
 * @name hover
 * @category CssProps Helper
 * @summary Returns css pseudo selector :hover with object of css properties
 *
 * @description
 * Returns an object with the :hover pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns :hover property as object with object of css properties
 */

import { flatten } from '../../util/index';
export default function hover(cssProps) {
    return {
        '&:hover': flatten(cssProps)
    };
}
