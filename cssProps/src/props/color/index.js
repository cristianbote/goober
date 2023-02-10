/* Do not modify this file.  This file is generated from ./cssProps/templates/props.prop.index.mustache */

/**
 * @name color
 * @category CssProps Helper
 *
 * @description
 * Returns an object with the css property color with its passed in values
 *
 * @param {string} One or more parameters that will be appended together separated by a delimiter based on the css syntax
 * @returns color property as object
 */

export default function color(...args) {
    return {
        color: args.join(' ')
    };
}
