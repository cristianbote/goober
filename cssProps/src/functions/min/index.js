/* Do not modify this file.  This file is generated from ./cssProps/templates/functions.function.index.mustache */
import { default as appendArgs } from '../../util/index';

/**
 * @name min
 * @category CssProps Helper
 *
 * @description
 * Returns a comma delimited function call for the css function min()
 *
 * @param arguments - String or numerical values that will be comma delimited for the function call
 * @returns {string} Returns a comma delimited function call for the function min()
 */
export default function min() {
    return 'min(' + appendArgs(arguments, ',') + ')';
}
