/* Do not modify this file.  This file is generated from ./cssProps/templates/props.prop.index.mustache */

/**
 * @name contain
 * @category CssProps Helper
 *
 * @description
 * Returns an object with the css property contain with its passed in values
 *
 * @param {string} One or more parameters that will be appended together separated by a delimiter based on the css syntax
 * @returns contain property as object
 */

export default function contain(...args) {
    return {
        contain: args.join(' ')
    };
}
