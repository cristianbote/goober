const jetpack = require('fs-jetpack');
const Mustache = require('mustache');
const mdnData = require('mdn-data');
//[ 'api', 'css', 'l10n' ]

const cssData = mdnData.css;
//[ 'atRules', 'selectors', 'types', 'properties', 'syntaxes', 'units' ]

const cssProperties = cssData.properties;
const cssStandardProperties = Object.keys(cssProperties).reduce((result, nextKey) => {
    if (cssProperties[nextKey].status === 'standard') {
        result[nextKey] = cssProperties[nextKey];
    }
    return result;
}, {});

const cssSyntax = Object.keys(cssStandardProperties).reduce((result, prop) => {
    result[prop] = cssStandardProperties[prop].syntax;
    return result;
}, {});
// {
//     syntax: 'false | true',
//     media: 'visual',
//     inherited: false,
//     animationType: 'discrete',
//     percentages: 'no',
//     groups: [ 'Microsoft Extensions' ],
//     initial: 'false',
//     appliesto: 'allElements',
//     computed: 'asSpecified',
//     order: 'uniqueOrder',
//     status: 'nonstandard',
//     mdn_url: 'https://developer.mozilla.org/docs/Web/CSS/-ms-accelerator'
// }

jetpack.write('./syntax/props.syntax.json', cssSyntax);

const propsIndexTemplate = jetpack.read('./templates/props.index.mustache');
const propsPropIndexTemplate = jetpack.read('./templates/props.prop.index.mustache');
const propsTestTemplate = jetpack.read('./templates/props.test.mustache');

const propsListView = {
    Props: []
};

//Loop through all the css properties generating the source code, the root index file, and the jest tests
Object.keys(cssStandardProperties).forEach((property) => {
    const prop = toCamelCase(property);

    propView = { prop: prop };
    propsListView.Props.push(propView);

    const propsPropIndexFile = Mustache.render(propsPropIndexTemplate, propView);

    jetpack.dir(`./src/props/${prop}`);
    jetpack.write(`./src/props/${prop}/index.js`, propsPropIndexFile);
});

const propsIndexFile = Mustache.render(propsIndexTemplate, propsListView);
jetpack.write('./src/props/index.js', propsIndexFile);

const propsTestFile = Mustache.render(propsTestTemplate, propsListView);
jetpack.write('./src/props/__tests__/props.test.js', propsTestFile);

function toCamelCase(str) {
    return str.replace(/-[a-z]/g, (g) => g[1].toUpperCase());
}
