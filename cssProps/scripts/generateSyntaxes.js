const jetpack = require('fs-jetpack');
const mdnData = require('mdn-data');

//[ 'atRules', 'selectors', 'types', 'properties', 'syntaxes', 'units' ]
const cssData = mdnData.css;

// "color": {
//     "syntax": "<rgb()> | <rgba()> | <hsl()> | <hsla()> | <hex-color> | <named-color> | currentcolor | <deprecated-system-color>"
//  },
const cssSyntaxes = cssData.syntaxes;
jetpack.write('./syntax/syntaxes.json', cssSyntaxes);
