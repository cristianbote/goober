//Do not modify this file.  This file is generated from ./scripts/generateUnits.js
import { default as appendArgs } from '../../util/index'

/**
 * @name contrast
 * @category CssProps Helper
 * @summary Returns a function call for css function contrast() with the passed in argmunets comma delimited
 *
 * @description
 * Returns a comma delimited function call for the css function contrast()
 *
 * @param arguments - String or numerical values that will be comma delimited for the function call
 * @returns {string} Returns a comma delimited function call for the function contrast()
 */
export default function contrast() {
    return "contrast(" + appendArgs(arguments, ",") + ")"
}