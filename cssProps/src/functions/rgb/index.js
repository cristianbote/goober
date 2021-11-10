//Do not modify this file.  This file is generated from ./scripts/generateUnits.js
import { default as appendArgs } from '../../util/index'

/**
 * @name rgb
 * @category CssProps Helper
 * @summary Returns a function call for css function rgb() with the passed in argmunets comma delimited
 *
 * @description
 * Returns a comma delimited function call for the css function rgb()
 *
 * @param arguments - String or numerical values that will be comma delimited for the function call
 * @returns {string} Returns a comma delimited function call for the function rgb()
 */
export default function rgb() {
    return "rgb(" + appendArgs(arguments, ",") + ")"
}