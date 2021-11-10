//Do not modify this file.  This file is generated from ./scripts/generateUnits.js
import { default as appendArgs } from '../../util/index'

/**
 * @name brightness
 * @category CssProps Helper
 * @summary Returns a function call for css function brightness() with the passed in argmunets comma delimited
 *
 * @description
 * Returns a comma delimited function call for the css function brightness()
 *
 * @param arguments - String or numerical values that will be comma delimited for the function call
 * @returns {string} Returns a comma delimited function call for the function brightness()
 */
export default function brightness() {
    return "brightness(" + appendArgs(arguments, ",") + ")"
}