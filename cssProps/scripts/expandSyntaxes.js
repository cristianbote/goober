const jetpack = require('fs-jetpack');
const mdnData = require('mdn-data');

//[ 'atRules', 'selectors', 'types', 'properties', 'syntaxes', 'units' ]
const cssData = mdnData.css;

// "color": {
//     "syntax": "<rgb()> | <rgba()> | <hsl()> | <hsla()> | <hex-color> | <named-color> | currentcolor | <deprecated-system-color>"
//  },
const cssSyntaxes = cssData.syntaxes;

console.log(cssSyntaxes);

const expand = (syntax) => {
    childSyntaxes = syntax.match(/<[\w\-]+>/g);

    if (childSyntaxes) {
        childSyntaxes.forEach((childSyntax, index) => {
            const childSyntaxName = childSyntax.slice(1, -1); //remove <>
            console.log('Processing key: ' + childSyntaxName);
            if (cssSyntaxes[childSyntaxName]) {
                syntax = syntax.replace(childSyntax, expand(cssSyntaxes[childSyntaxName].syntax));
            } else {
                syntax = syntax.replace(childSyntax, childSyntax.toUpperCase());
            }
        });
        return syntax;
    } else {
        return syntax;
    }
};

console.log(cssSyntaxes.color.syntax);
console.log(expand(cssSyntaxes.color.syntax));
