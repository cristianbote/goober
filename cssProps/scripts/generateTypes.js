const jetpack = require('fs-jetpack');
const mdnData = require('mdn-data');
//[ 'api', 'css', 'l10n' ]

const cssData = mdnData.css;
//[ 'atRules', 'selectors', 'types', 'properties', 'syntaxes', 'units' ]

const cssTypes = cssData.types;

jetpack.write('./cssProps/syntax/types.syntax.json', cssTypes);
