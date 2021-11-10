//Do not modify this file.  This file is generated from ./scripts/generateUnits.js
import { default as appendArgs } from '../../util/index'

/**
 * @name hsla
 * @category CssProps Helper
 * @summary Returns a function call for css function hsla() with the passed in argmunets comma delimited
 *
 * @description
 * Returns a comma delimited function call for the css function hsla()
 *
 * @param arguments - String or numerical values that will be comma delimited for the function call
 * @returns {string} Returns a comma delimited function call for the function hsla()
 */
export default function hsla() {
    return "hsla(" + appendArgs(arguments, ",") + ")"
}