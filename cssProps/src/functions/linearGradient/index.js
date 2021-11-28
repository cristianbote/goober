/* Do not modify this file.  This file is generated from ./cssProps/templates/functions.function.index.mustache */
import { default as appendArgs } from '../../util/index';

/**
 * @name linearGradient
 * @category CssProps Helper
 *
 * @description
 * Returns a comma delimited function call for the css function linearGradient()
 *
 * @param arguments - String or numerical values that will be comma delimited for the function call
 * @returns {string} Returns a comma delimited function call for the function linearGradient()
 */
export default function linearGradient() {
    return 'linearGradient(' + appendArgs(arguments, ',') + ')';
}
