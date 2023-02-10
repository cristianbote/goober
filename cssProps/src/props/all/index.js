/* Do not modify this file.  This file is generated from ./cssProps/templates/props.prop.index.mustache */

/**
 * @name all
 * @category CssProps Helper
 *
 * @description
 * Returns an object with the css property all with its passed in values
 *
 * @param {string} One or more parameters that will be appended together separated by a delimiter based on the css syntax
 * @returns all property as object
 */

export default function all(...args) {
    return {
        all: args.join(' ')
    };
}
