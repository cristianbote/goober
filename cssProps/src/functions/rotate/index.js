/* Do not modify this file.  This file is generated from ./cssProps/templates/functions.function.index.mustache */
import { default as appendArgs } from '../../util/index';

/**
 * @name rotate
 * @category CssProps Helper
 *
 * @description
 * Returns a comma delimited function call for the css function rotate()
 *
 * @param arguments - String or numerical values that will be comma delimited for the function call
 * @returns {string} Returns a comma delimited function call for the function rotate()
 */
export default function rotate() {
    return 'rotate(' + appendArgs(arguments, ',') + ')';
}
