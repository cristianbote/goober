const jetpack = require('fs-jetpack');
const Mustache = require('mustache');
const mdnData = require('mdn-data');

//[ 'atRules', 'selectors', 'types', 'properties', 'syntaxes', 'units' ]
const cssData = mdnData.css;

// "color": {
//     "syntax": "<rgb()> | <rgba()> | <hsl()> | <hsla()> | <hex-color> | <named-color> | currentcolor | <deprecated-system-color>"
//  },
const cssSyntaxes = cssData.syntaxes;

const ignoreList = ['type-or-unit', 'deprecated-system-color'];

const constants = [];
Object.keys(cssSyntaxes).forEach((name) => {
    //Skip units and deprecated values
    if (!ignoreList.includes(name)) {
        //Get all the tokens from the syntax, and look for only constant values
        const tokens = cssSyntaxes[name].syntax.split(/\s+/);
        tokens
            .filter((token) => token.match(/^[\w\-]+$/))
            .forEach((token) => {
                constants.push(token);
            });
    }
});

//Remove duplicates and sort
const uniqueConstants = constants
    .filter((constant, index, list) => list.indexOf(constant) == index)
    .sort();

const constantListView = {
    Constants: []
};

//Replace template values
uniqueConstants.forEach((constant) => {
    const constantView = {
        constantName: constant.replaceAll('-', '_').toUpperCase(),
        constantValue: constant
    };
    constantListView.Constants.push(constantView);
});

const constantsIndexTemplate = jetpack.read('./templates/constants.index.mustache');
const constantsIndexFile = Mustache.render(constantsIndexTemplate, constantListView);

jetpack.write('./src/constants/index.js', constantsIndexFile);
