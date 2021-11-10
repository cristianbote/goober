//Do not modify this file.  This file is generated from ./scripts/generateUnits.js
import { default as appendArgs } from '../../util/index'

/**
 * @name ellipse
 * @category CssProps Helper
 * @summary Returns a function call for css function ellipse() with the passed in argmunets comma delimited
 *
 * @description
 * Returns a comma delimited function call for the css function ellipse()
 *
 * @param arguments - String or numerical values that will be comma delimited for the function call
 * @returns {string} Returns a comma delimited function call for the function ellipse()
 */
export default function ellipse() {
    return "ellipse(" + appendArgs(arguments, ",") + ")"
}