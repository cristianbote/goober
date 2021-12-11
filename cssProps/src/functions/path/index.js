/* Do not modify this file.  This file is generated from ./cssProps/templates/functions.function.index.mustache */

/**
 * @name path
 * @category CssProps Helper
 *
 * @description
 * Returns a comma delimited function call for the css function path()
 *
 * @param arguments - String or numerical values that will be comma delimited for the function call
 * @returns {string} Returns a comma delimited function call for the function path()
 */
export default (...args) => `path(${args.join()})`;
