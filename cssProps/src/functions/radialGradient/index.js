//Do not modify this file.  This file is generated from ./scripts/generateUnits.js
import { default as appendArgs } from '../../util/index'

/**
 * @name radialGradient
 * @category CssProps Helper
 * @summary Returns a function call for css function radialGradient() with the passed in argmunets comma delimited
 *
 * @description
 * Returns a comma delimited function call for the css function radialGradient()
 *
 * @param arguments - String or numerical values that will be comma delimited for the function call
 * @returns {string} Returns a comma delimited function call for the function radialGradient()
 */
export default function radialGradient() {
    return "radialGradient(" + appendArgs(arguments, ",") + ")"
}