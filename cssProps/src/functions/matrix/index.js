/* Do not modify this file.  This file is generated from ./cssProps/templates/functions.function.index.mustache */
import { default as appendArgs } from '../../util/index';

/**
 * @name matrix
 * @category CssProps Helper
 *
 * @description
 * Returns a comma delimited function call for the css function matrix()
 *
 * @param arguments - String or numerical values that will be comma delimited for the function call
 * @returns {string} Returns a comma delimited function call for the function matrix()
 */
export default function matrix() {
    return 'matrix(' + appendArgs(arguments, ',') + ')';
}
