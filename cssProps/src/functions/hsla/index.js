/* Do not modify this file.  This file is generated from ./cssProps/templates/functions.function.index.mustache */
import { default as appendArgs } from '../../util/index';

/**
 * @name hsla
 * @category CssProps Helper
 *
 * @description
 * Returns a comma delimited function call for the css function hsla()
 *
 * @param arguments - String or numerical values that will be comma delimited for the function call
 * @returns {string} Returns a comma delimited function call for the function hsla()
 */
export default function hsla() {
    return 'hsla(' + appendArgs(arguments, ',') + ')';
}
