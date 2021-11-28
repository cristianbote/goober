/* Do not modify this file.  This file is generated from ./cssProps/templates/functions.function.index.mustache */
import { default as appendArgs } from '../../util/index';

/**
 * @name max
 * @category CssProps Helper
 *
 * @description
 * Returns a comma delimited function call for the css function max()
 *
 * @param arguments - String or numerical values that will be comma delimited for the function call
 * @returns {string} Returns a comma delimited function call for the function max()
 */
export default function max() {
    return 'max(' + appendArgs(arguments, ',') + ')';
}
