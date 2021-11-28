/* Do not modify this file.  This file is generated from ./cssProps/templates/functions.function.index.mustache */
import { default as appendArgs } from '../../util/index';

/**
 * @name rotate3d
 * @category CssProps Helper
 *
 * @description
 * Returns a comma delimited function call for the css function rotate3d()
 *
 * @param arguments - String or numerical values that will be comma delimited for the function call
 * @returns {string} Returns a comma delimited function call for the function rotate3d()
 */
export default function rotate3d() {
    return 'rotate3d(' + appendArgs(arguments, ',') + ')';
}
