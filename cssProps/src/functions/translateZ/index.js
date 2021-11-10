//Do not modify this file.  This file is generated from ./scripts/generateUnits.js
import { default as appendArgs } from '../../util/index'

/**
 * @name translateZ
 * @category CssProps Helper
 * @summary Returns a function call for css function translateZ() with the passed in argmunets comma delimited
 *
 * @description
 * Returns a comma delimited function call for the css function translateZ()
 *
 * @param arguments - String or numerical values that will be comma delimited for the function call
 * @returns {string} Returns a comma delimited function call for the function translateZ()
 */
export default function translateZ() {
    return "translateZ(" + appendArgs(arguments, ",") + ")"
}