//Extract and clean up only necessary mdn data for generating files

const jetpack = require('fs-jetpack');
const mdnData = require('mdn-data');

//[ 'api', 'css', 'l10n' ]
const cssData = mdnData.css;

//[ 'atRules', 'selectors', 'types', 'properties', 'syntaxes', 'units', 'functions' ]

const cssAtRules = cssData.atRules;
const atRules = Object.keys(cssAtRules)
    .filter((atRule) => cssAtRules[atRule].status === 'standard') //Remove non-standard at rules
    .reduce((result, atRule) => {
        result[atRule] = {
            syntax: cssAtRules[atRule].syntax
                .replace(/\n/g, '') //Remove newline chars
                .replace(/\}/g, ' }') //Insert space before curly braces for tokenization
                .replace(/\s{2}/g, ' '), //Replace double spaces
            status: cssAtRules[atRule].status,
            mdn_url: cssAtRules[atRule].mdn_url + '#syntax'
        };
        return result;
    }, {});

jetpack.write('./cssMdnData/atRules.json', atRules);

const cssProperties = cssData.properties;
const properties = Object.keys(cssProperties)
    //Use only standard properties
    .filter((property) => cssProperties[property].status === 'standard')
    .reduce((result, property) => {
        result[property] = {
            syntax: cssProperties[property].syntax
                .replace(/\n/g, '') //Remove newline chars
                .replace(/\}/g, ' }') //Insert space before curly braces for tokenization
                .replace(/\s{2}/g, ' '), //Replace double spaces
            status: cssProperties[property].status,
            mdn_url: cssProperties[property].mdn_url + '#syntax'
        };
        return result;
    }, {});

jetpack.write('./cssMdnData/properties.json', properties);

const cssSelectors = cssData.selectors;
const pseudos = Object.keys(cssSelectors)
    //Remove non-standard at rules and only select pseudo elements (::) and classes (:)
    .filter(
        (selector) => cssSelectors[selector].status === 'standard' && selector.slice(0, 1) === ':'
    )
    .reduce((result, pseudo) => {
        result[pseudo] = {
            syntax: cssSelectors[pseudo].syntax
                .replace(/\n/g, '') //Remove newline chars
                .replace(/\}/g, ' }') //Insert space before curly braces for tokenization
                .replace(/\s{2}/g, ' '), //Replace double spaces
            status: cssSelectors[pseudo].status,
            mdn_url: cssSelectors[pseudo].mdn_url + '#syntax'
        };
        return result;
    }, {});

jetpack.write('./cssMdnData/pseudos.json', pseudos);

const cssUnits = cssData.units;
const units = Object.keys(cssUnits).filter((unit) => cssUnits[unit].status === 'standard');

jetpack.write('./cssMdnData/units.json', units);

const cssSyntaxes = cssData.syntaxes;

jetpack.write('./cssMdnData/syntaxes.json', cssSyntaxes);

constants = Object.keys(cssSyntaxes)
    //Ignore units and deprecated values
    .filter((name) => !['type-or-unit', 'deprecated-system-color'].includes(name))
    .reduce((result, syntax) => {
        const constantTokens = cssSyntaxes[syntax].syntax
            .split(/\s+/)
            .filter((token) => token.match(/^[\w-]+$/));
        return result.concat(constantTokens);
    }, [])
    //Remove duplicates
    .filter((constant, index, list) => list.indexOf(constant) === index)
    .sort();

jetpack.write('./cssMdnData/constants.json', constants);

const cssFunctions = cssData.functions;

functions = Object.keys(cssFunctions).reduce((result, name) => {
    result[name] = {
        syntax: cssFunctions[name].syntax,
        mdn_url: cssFunctions[name].mdn_url + '#syntax'
    };
    return result;
}, {});

jetpack.write('./cssMdnData/functions.json', functions);
