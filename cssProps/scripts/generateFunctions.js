const jetpack = require('fs-jetpack');
const Mustache = require('mustache');
const mdnData = require('mdn-data');
//[ 'api', 'css', 'l10n' ]

const cssData = mdnData.css;
//[ 'atRules', 'selectors', 'types', 'properties', 'syntaxes', 'units' ]

const cssSyntaxes = cssData.syntaxes;
// "color": {
//     "syntax": "<rgb()> | <rgba()> | <hsl()> | <hsla()> | <hex-color> | <named-color> | currentcolor | <deprecated-system-color>"
//  },

const cssSyntaxFunctions = Object.keys(cssSyntaxes).reduce((result, nextKey) => {
    if (nextKey.slice(-2) === '()') {
        const cssFunction = nextKey.slice(0, -2);
        result[cssFunction] = cssSyntaxes[nextKey].syntax;
    }
    return result;
}, {});

jetpack.write('./syntax/functions.syntax.json', cssSyntaxFunctions);

const functionsIndexTemplate = jetpack.read('./templates/functions.index.mustache');
const functionsFunctionIndexTemplate = jetpack.read(
    './templates/functions.function.index.mustache'
);
const functionsTestTemplate = jetpack.read('./templates/functions.test.mustache');

const funcListView = {
    Funcs: []
};

//Loop through all the css properties generating the source code, the root index file, and the jest tests
Object.keys(cssSyntaxFunctions).forEach((func) => {
    func = toCamelCase(func);

    if (func === 'var') {
        //Since "var" is a javascript keyword, need to rename "var" css function to "variable" css function
        func = 'variable';
    }

    funcView = { func: func };
    funcListView.Funcs.push(funcView);

    const functionsFunctionIndexFile = Mustache.render(functionsFunctionIndexTemplate, funcView);

    jetpack.dir(`./src/functions/${func}`);
    jetpack.write(`./src/functions/${func}/index.js`, functionsFunctionIndexFile);
});

const functionsIndexFile = Mustache.render(functionsIndexTemplate, funcListView);
jetpack.write('./src/functions/index.js', functionsIndexFile);

const functionsTestFile = Mustache.render(functionsTestTemplate, funcListView);
jetpack.write('./src/functions/__tests__/functions.test.js', functionsTestFile);

function toCamelCase(str) {
    return str.replace(/-[a-z]/g, (g) => g[1].toUpperCase());
}
