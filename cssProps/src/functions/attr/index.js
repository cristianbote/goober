/* Do not modify this file.  This file is generated from ./cssProps/templates/functions.function.index.mustache */

/**
 * @name attr
 * @category CssProps Helper
 *
 * @description
 * Returns a comma delimited function call for the css function attr()
 *
 * @param arguments - String or numerical values that will be comma delimited for the function call
 * @returns {string} Returns a comma delimited function call for the function attr()
 */
export default (...args) => `attr(${args.join()})`;