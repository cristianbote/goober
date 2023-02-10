const jetpack = require('fs-jetpack');
const Mustache = require('mustache');

const cssAtRules = jetpack.read('./cssMdnData/atRules.json', 'json');
const cssConstants = jetpack.read('./cssMdnData/constants.json', 'json');
const cssFunctions = jetpack.read('./cssMdnData/functions.json', 'json');
const cssProperties = jetpack.read('./cssMdnData/properties.json', 'json');
const cssPseudos = jetpack.read('./cssMdnData/pseudos.json', 'json');
const cssUnits = jetpack.read('./cssMdnData/units.json', 'json');

const readmeTemplate = jetpack.read('./templates/README.mustache');

const readmeListView = {
    AtRules: [],
    Constants: [],
    Functions: [],
    Properties: [],
    Pseudos: [],
    Units: []
};

Object.keys(cssAtRules).forEach((atRule) => {
    const mdn_url = cssAtRules[atRule].mdn_url;
    readmeListView.AtRules.push({
        atRule,
        mdn_url
    });
});

cssConstants.forEach((constant) => {
    readmeListView.Constants.push({
        constant: constant.toUpperCase()
    });
});

Object.keys(cssFunctions).forEach((func) => {
    const mdn_url = cssFunctions[func].mdn_url;
    readmeListView.Functions.push({
        function: func,
        mdn_url
    });
});

Object.keys(cssProperties).forEach((property) => {
    const mdn_url = cssProperties[property].mdn_url;
    readmeListView.Properties.push({
        property,
        mdn_url
    });
});

Object.keys(cssPseudos).forEach((pseudo) => {
    const mdn_url = cssPseudos[pseudo].mdn_url;
    readmeListView.Pseudos.push({
        pseudo,
        mdn_url
    });
});

cssUnits.forEach((unit) => {
    readmeListView.Units.push({
        unit
    });
});

const readmeFile = Mustache.render(readmeTemplate, readmeListView);
jetpack.write('./README.md', readmeFile);
