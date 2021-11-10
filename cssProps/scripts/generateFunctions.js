const jetpack = require('fs-jetpack')
const mdnData = require('mdn-data')
//[ 'api', 'css', 'l10n' ]

const cssData = mdnData.css;
//[ 'atRules', 'selectors', 'types', 'properties', 'syntaxes', 'units' ]

const cssSyntaxes = cssData.syntaxes
// "color": {
//     "syntax": "<rgb()> | <rgba()> | <hsl()> | <hsla()> | <hex-color> | <named-color> | currentcolor | <deprecated-system-color>"
//  },

const cssSyntaxFunctions = Object.keys(cssSyntaxes).reduce((result, nextKey) => { 
    if(nextKey.slice(-2) === '()'){
        const cssFunction = nextKey.slice(0, -2)
        result[cssFunction] = cssSyntaxes[nextKey]
    }
    return result
}, {})


// jetpack.write('./cssSyntaxFunctions.json', cssSyntaxFunctions)


let indexTemplate = "//Do not modify this file.  This file is generated from ./scripts/generateUnits.js\n"
let testTemplate = `//Do not modify this file.  This file is generated from ./scripts/generateUnits.js
import * as cssFunctions from '../index';
import { css, setup } from 'goober';

jest.mock('goober', () => ({
    css: jest.fn().mockReturnValue('css()')
}));

describe('cssFunctions', () => {
    beforeEach(() => {
        css.mockClear();
    });
`

//Loop through all the css properties generating the source code, the root index file, and the jest tests
Object.keys(cssSyntaxFunctions).forEach(func => {
        func = toCamelCase(func)

        if( func === "var"){
            func = "variable"
        }

        jetpack.dir(`./src/functions/${func}`);
        jetpack.write(`./src/functions/${func}/index.js`, functionIndexTemplate(func));
        
        indexTemplate += `export { default as ${func} } from './${func}/index'\n`
        
        testTemplate += `
    it('${func} type', () => {
        expect(typeof cssFunctions.${func}).toEqual('function');
    });

    it('${func}', () => {
        expect(cssFunctions.${func}(255,255)).toEqual('${func}(255,255)');
    });

`
});

testTemplate += "});"
jetpack.write('./src/functions/index.js', indexTemplate);
jetpack.write('./src/functions/__tests__/functions.test.js', testTemplate);

function toCamelCase(str) {
    return str.replace(/-[a-z]/g, g => g[1].toUpperCase())
}

function functionIndexTemplate(func) {
    return `//Do not modify this file.  This file is generated from ./scripts/generateUnits.js
import { default as appendArgs } from '../../util/index'

/**
 * @name ${func}
 * @category CssProps Helper
 * @summary Returns a function call for css function ${func}() with the passed in argmunets comma delimited
 *
 * @description
 * Returns a comma delimited function call for the css function ${func}()
 *
 * @param arguments - String or numerical values that will be comma delimited for the function call
 * @returns {string} Returns a comma delimited function call for the function ${func}()
 */
export default function ${func}() {
    return "${func}(" + appendArgs(arguments, ",") + ")"
}`
}