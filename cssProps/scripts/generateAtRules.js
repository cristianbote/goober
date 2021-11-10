const jetpack = require('fs-jetpack')
const mdnData = require('mdn-data')
//[ 'api', 'css', 'l10n' ]

const cssData = mdnData.css;
//[ 'atRules', 'selectors', 'types', 'properties', 'syntaxes', 'units' ]

const cssAtRules = cssData.atRules
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
    if(cssAtRules[nextKey].status === 'standard'){
        result[nextKey] = cssAtRules[nextKey]
    }
    return result
}, {})

// jetpack.write('./cssStandardAtRules.json', cssStandardAtRules)


let indexTemplate = "//Do not modify this file.  This file is generated from ./scripts/generateAtRules.js\n"
let testTemplate = `//Do not modify this file.  This file is generated from ./scripts/generateAtRules.js
import * as cssAtRules from '../index';
import { color, maxWidth } from '../../props/index';
import { css, setup } from 'goober';

jest.mock('goober', () => ({
    css: jest.fn().mockReturnValue('css()')
}));

describe('cssAtRules', () => {
    beforeEach(() => {
        css.mockClear();
    });
`

//Loop through all the css properties generating the source code, the root index file, and the jest tests
Object.keys(cssStandardAtRules).forEach(atRule => {
    const isNested = ['@charset', '@import', '@namespace'].includes(atRule) ? false : true
    const atRuleCamelCase = toCamelCase(atRule.slice(1)) //Also removes '@' character
        
    jetpack.dir(`./src/atRules/${atRuleCamelCase}`);
    jetpack.write(`./src/atRules/${atRuleCamelCase}/index.js`, functionIndexTemplate(atRule, atRuleCamelCase));
    
    indexTemplate += `export { default as ${atRuleCamelCase} } from './${atRuleCamelCase}/index'\n`
    
    testTemplate += `
    it('${atRule} type', () => {
        expect(typeof cssAtRules.${atRuleCamelCase}).toEqual('function');
    });

    it('${atRule}', () => {
        expect(cssAtRules.${atRuleCamelCase}("(param)", [
            color("blue"),
            maxWidth("100px")
        ])).toEqual({"${atRule} (param)": {"color": "blue", "maxWidth": "100px"}});
    });

`
});

testTemplate += "});"
jetpack.write('./src/atRules/index.js', indexTemplate);
jetpack.write('./src/atRules/__tests__/atRules.test.js', testTemplate);

function toCamelCase(str) {
    return str.replace(/-[a-z]/g, g => g[1].toUpperCase())
}

function functionIndexTemplate(atRule, atRuleCamelCase) {
    return `//Do not modify this file.  This file is generated from ./scripts/generateAtRules.js
/**
 * @name ${atRuleCamelCase}
 * @category CssProps Helper
 * @summary Returns a numerical value appended with the css atRule ${atRule}
 *
 * @description
 * Returns a numerical value appended with the css atRule ${atRule}
 *
 * @param {number} atRule- The numerical value that the css atRule will be appended
 * @returns {string} numerical value with appended atRule ${atRule}
 */

export default function charset(atRuleParams, arrayOfCssProps) {
    return {
        ["${atRule}" + (atRuleParams ? " " + atRuleParams : "")]: arrayOfCssProps.reduce((result, cssPropObj) => {
            return Object.assign(result, cssPropObj)
        }, {})
    }
}`
}