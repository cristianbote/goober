//Do not modify this file.  This file is generated from ./scripts/generateUnits.js
import { default as appendArgs } from '../../util/index'

/**
 * @name matrix3d
 * @category CssProps Helper
 * @summary Returns a function call for css function matrix3d() with the passed in argmunets comma delimited
 *
 * @description
 * Returns a comma delimited function call for the css function matrix3d()
 *
 * @param arguments - String or numerical values that will be comma delimited for the function call
 * @returns {string} Returns a comma delimited function call for the function matrix3d()
 */
export default function matrix3d() {
    return "matrix3d(" + appendArgs(arguments, ",") + ")"
}