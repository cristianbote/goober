/* Do not modify this file.  This file is generated from ./cssProps/templates/functions.function.index.mustache */

/**
 * @name rgb
 * @category CssProps Helper
 *
 * @description
 * Returns a comma delimited function call for the css function rgb()
 *
 * @param arguments - String or numerical values that will be comma delimited for the function call
 * @returns {string} Returns a comma delimited function call for the function rgb()
 */
export default (...args) => `rgb(${args.join()})`;
