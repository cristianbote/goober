const jetpack = require('fs-jetpack')
const mdnData = require('mdn-data')
//[ 'api', 'css', 'l10n' ]

const cssData = mdnData.css;
//[ 'atRules', 'selectors', 'types', 'properties', 'syntaxes', 'units' ]

const cssSelectors = cssData.selectors
// 'Attribute selectors': {
//     syntax: '[attr=value]',
//     groups: [ 'Basic Selectors', 'Selectors' ],
//     status: 'standard',
//     mdn_url: 'https://developer.mozilla.org/docs/Web/CSS/Attribute_selectors'
//   },

const cssStandardSelectors = Object.keys(cssSelectors).reduce((result, nextKey) => { 
    if(cssSelectors[nextKey].status === 'standard'){
        result[nextKey] = cssSelectors[nextKey]
    }
    return result
}, {})

const cssPseudoSelectors = Object.keys(cssStandardSelectors)
    .filter(selector => selector.slice(0,1) === ":")


let indexTemplate = "//Do not modify this file.  This file is generated from ./scripts/generatePseudo.js\n"
let testTemplate = `//Do not modify this file.  This file is generated from ./scripts/generatePseudo.js
import * as cssPseudo from '../index';
import { color, maxWidth } from '../../props/index'
import { css, setup } from 'goober';

jest.mock('goober', () => ({
    css: jest.fn().mockReturnValue('css()')
}));

describe('cssPseudo', () => {
    beforeEach(() => {
        css.mockClear();
    });
`

//Loop through all the css properties generating the source code, the root index file, and the jest tests
cssPseudoSelectors.forEach(pseudoSelector => {
    let pseudoCamelCase = toCamelCase(pseudoSelector.replace(/:/g,""));

    if( pseudoCamelCase === 'default'){
        pseudoCamelCase = 'defaultElement'
    }
    
    jetpack.dir(`./src/pseudo/${pseudoCamelCase}`);
    jetpack.write(`./src/pseudo/${pseudoCamelCase}/index.js`, functionIndexTemplate(pseudoSelector, pseudoCamelCase));
    
    indexTemplate += `export { default as ${pseudoCamelCase} } from './${pseudoCamelCase}/index'\n`
    
    testTemplate += `
    it('${pseudoSelector} type', () => {
        expect(typeof cssPseudo.${pseudoCamelCase}).toEqual('function');
    });

    it('${pseudoSelector}', () => {
        expect(cssPseudo.${pseudoCamelCase}([
            color("blue"),
            maxWidth("20px")
        ])).toEqual({"&${pseudoSelector}":{
            color: "blue",
            maxWidth: "20px"
        }});
    });

`
});

testTemplate += "});"
jetpack.write('./src/pseudo/index.js', indexTemplate);
jetpack.write('./src/pseudo/__tests__/pseudo.test.js', testTemplate);

function toCamelCase(str) {
    return str.replace(/-[a-z]/g, g => g[1].toUpperCase())
}

function functionIndexTemplate(pseudoSelector, pseudoCamelCase) {
    return `//Do not modify this file.  This file is generated from ./scripts/generatePseudo.js
/**
 * @name ${pseudoCamelCase}
 * @category CssProps Helper
 * @summary Returns css pseudo selector ${pseudoSelector} with object of css properties
 *
 * @description
 * Returns an object with the ${pseudoSelector} pseudo selector with its passed in css properties
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns ${pseudoSelector} property as object with object of css properties
 */

export default function ${pseudoCamelCase}(arrayOfProps) {
    return {
        "&${pseudoSelector}": arrayOfProps.reduce((result, cssPropObj) => {
            return Object.assign(result, cssPropObj)
        }, {})
    }
}`
}