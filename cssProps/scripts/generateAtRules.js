const jetpack = require('fs-jetpack');
const mdnData = require('mdn-data');
//[ 'api', 'css', 'l10n' ]

const cssData = mdnData.css;
//[ 'atRules', 'selectors', 'types', 'properties', 'syntaxes', 'units' ]

const cssAtRules = cssData.atRules;
// '@counter-style': {
//     syntax: '@counter-style <counter-style-name> {\n' +
//       '  [ system: <counter-system>; ] ||\n' +
//       '  [ symbols: <counter-symbols>; ] ||\n' +
//       '  [ additive-symbols: <additive-symbols>; ] ||\n' +
//       '  [ negative: <negative-symbol>; ] ||\n' +
//       '  [ prefix: <prefix>; ] ||\n' +
//       '  [ suffix: <suffix>; ] ||\n' +
//       '  [ range: <range>; ] ||\n' +
//       '  [ pad: <padding>; ] ||\n' +
//       '  [ speak-as: <speak-as>; ] ||\n' +
//       '  [ fallback: <counter-style-name>; ]\n' +
//       '}',
//     interfaces: [ 'CSSCounterStyleRule' ],
//     groups: [ 'CSS Counter Styles' ],
//     descriptors: {
//       'additive-symbols': [Object],
//       fallback: [Object],
//       negative: [Object],
//       pad: [Object],
//       prefix: [Object],
//       range: [Object],
//       'speak-as': [Object],
//       suffix: [Object],
//       symbols: [Object],
//       system: [Object]
//     },
//     status: 'standard',
//     mdn_url: 'https://developer.mozilla.org/docs/Web/CSS/@counter-style'
//   },

const cssStandardAtRules = Object.keys(cssAtRules).reduce((result, nextKey) => {
    if (cssAtRules[nextKey].status === 'standard') {
        result[nextKey] = cssAtRules[nextKey];
    }
    return result;
}, {});

//Loop through all the css properties generating the source code, the root index file, and the jest tests
Object.keys(cssStandardAtRules).forEach((atRule) => {
    const isNested = ['@charset', '@import', '@namespace'].includes(atRule) ? false : true;
    const atRuleCamelCase = toCamelCase(atRule.slice(1)); //Also removes '@' character

    jetpack.dir(`./src/atRules/${atRuleCamelCase}`);
    jetpack.write(
        `./src/atRules/${atRuleCamelCase}/index.js`,
        functionIndexTemplate(atRule, atRuleCamelCase)
    );
});

jetpack.write('./src/atRules/index.js', indexTemplate);
jetpack.write('./src/atRules/__tests__/atRules.test.js', testTemplate);

function toCamelCase(str) {
    return str.replace(/-[a-z]/g, (g) => g[1].toUpperCase());
}
