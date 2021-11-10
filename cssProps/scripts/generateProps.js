const jetpack = require('fs-jetpack')
const mdnData = require('mdn-data')
//[ 'api', 'css', 'l10n' ]

const cssData = mdnData.css;
//[ 'atRules', 'selectors', 'types', 'properties', 'syntaxes', 'units' ]

const cssProperties = cssData.properties
const cssStandardProperties = Object.keys(cssProperties).reduce((result, nextKey) => { 
    if(cssProperties[nextKey].status === 'standard'){
        result[nextKey] = cssProperties[nextKey]
    }
    return result
}, {})

// jetpack.write('./cssProperties.json', cssStandardProperties)

const cssSyntax = Object.keys(cssStandardProperties).map((prop) => {
    return cssStandardProperties[prop].syntax
})

// jetpack.write('./cssPropertiesSyntax.json', cssSyntax)

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

let indexTemplate = "//Do not modify this file.  This file is generated from ./scripts/generateProps.js\n"
let testTemplate = `//Do not modify this file.  This file is generated from ./scripts/generateProps.js
import * as cssProps from '../index';
import { css, setup } from 'goober';

jest.mock('goober', () => ({
    css: jest.fn().mockReturnValue('css()')
}));

describe('cssProps', () => {
    beforeEach(() => {
        css.mockClear();
    });
`

//Loop through all the css properties generating the source code, the root index file, and the jest tests
Object.keys(cssStandardProperties).forEach(property => {
    const prop = toCamelCase(property);
    
    jetpack.dir(`./src/props/${prop}`);
    jetpack.write(`./src/props/${prop}/index.js`, functionIndexTemplate(prop));
    
    indexTemplate += `export { default as ${prop} } from './${prop}/index'\n`
    
    testTemplate += `
    it('${prop} type', () => {
        expect(typeof cssProps.${prop}).toEqual('function');
    });

    it('${prop}', () => {
        expect(cssProps.${prop}("value")).toEqual({${prop}:'value'});
    });

`
});

testTemplate += "});"
jetpack.write('./src/props/index.js', indexTemplate);
jetpack.write('./src/props/__tests__/props.test.js', testTemplate);

function toCamelCase(str) {
    return str.replace(/-[a-z]/g, g => g[1].toUpperCase())
}

function functionIndexTemplate(prop) {
    return `//Do not modify this file.  This file is generated from ./scripts/generateProps.js
import { default as appendArgs } from '../../util/index'

/**
 * @name ${prop}
 * @category CssProps Helper
 * @summary Returns css property ${prop} and value as an object
 *
 * @description
 * Returns an object with the css property ${prop} with its passed in values
 *
 * @param - One or more parameters that will be appended together based on a delimiter
 * @returns ${prop} property as object
 */

export default function ${prop}() {
    return {
        ${prop}: appendArgs(arguments)
    }
}`
}