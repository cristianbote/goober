/* Do not modify this file.  This file is generated from ./cssProps/templates/functions.function.index.mustache */

/**
 * @name rgba
 * @category CssProps Helper
 *
 * @description
 * Returns a comma delimited function call for the css function rgba()
 *
 * @param arguments - String or numerical values that will be comma delimited for the function call
 * @returns {string} Returns a comma delimited function call for the function rgba()
 */
export default (...args) => `rgba(${args.join()})`;
