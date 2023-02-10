/* Do not modify this file.  This file is generated from ./cssProps/templates/atRules.atRule.index.mustache */
/**
 * @name atImport
 * @category CssProps Helper
 * @summary @import
 *
 * @description
 *    @import
 *    @import [ &lt;string&gt; | &lt;url&gt; ]    [ layer | layer(&lt;layer-name&gt;) ]?    [ supports( [ &lt;supports-condition&gt; | &lt;declaration&gt; ] ) ]?    &lt;media-query-list&gt;? ;
 *
 * @param {string} args - a string representation of the arguments following the @rule
 */

export default function atImport(args) {
    return `@import ${args}`;
}
