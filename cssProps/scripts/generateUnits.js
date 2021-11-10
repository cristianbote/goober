const jetpack = require('fs-jetpack')
const mdnData = require('mdn-data')
//[ 'api', 'css', 'l10n' ]

const cssData = mdnData.css;
//[ 'atRules', 'selectors', 'types', 'properties', 'syntaxes', 'units' ]

const cssUnits = cssData.units
//ch: { groups: [ 'CSS Units', 'CSS Lengths' ], status: 'standard' },

const cssStandardUnits = Object.keys(cssUnits).reduce((result, nextKey) => { 
    if(cssUnits[nextKey].status === 'standard'){
        result[nextKey] = cssUnits[nextKey]
    }
    return result
}, {})

// jetpack.write('./cssStandardUnits.json', cssStandardUnits)


let indexTemplate = "//Do not modify this file.  This file is generated from ./scripts/generateUnits.js\n"
let testTemplate = `//Do not modify this file.  This file is generated from ./scripts/generateUnits.js
import * as cssUnits from '../index';
import { css, setup } from 'goober';

jest.mock('goober', () => ({
    css: jest.fn().mockReturnValue('css()')
}));

describe('cssUnits', () => {
    beforeEach(() => {
        css.mockClear();
    });
`

//Loop through all the css properties generating the source code, the root index file, and the jest tests
Object.keys(cssStandardUnits).forEach(unit => {

        if(unit === 'in'){
            unit = 'inch'
        }
        
        jetpack.dir(`./src/units/${unit}`);
        jetpack.write(`./src/units/${unit}/index.js`, functionIndexTemplate(unit));
        
        indexTemplate += `export { default as ${unit} } from './${unit}/index'\n`
        
        testTemplate += `
    it('${unit} type', () => {
        expect(typeof cssUnits.${unit}).toEqual('function');
    });

    it('${unit}', () => {
        expect(cssUnits.${unit}(5)).toEqual('5${unit}');
    });

`
});

testTemplate += "});"
jetpack.write('./src/units/index.js', indexTemplate);
jetpack.write('./src/units/__tests__/units.test.js', testTemplate);

function functionIndexTemplate(unit) {
    return `//Do not modify this file.  This file is generated from ./scripts/generateUnits.js
/**
 * @name ${unit}
 * @category CssProps Helper
 * @summary Returns a numerical value appended with the css unit ${unit}
 *
 * @description
 * Returns a numerical value appended with the css unit ${unit}
 *
 * @param {number} unit- The numerical value that the css unit will be appended
 * @returns {string} numerical value with appended unit ${unit}
 */

export default function ${unit}(unit) {
    return unit + "${unit}"
}`
}