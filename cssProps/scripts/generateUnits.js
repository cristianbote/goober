const jetpack = require('fs-jetpack');
const Mustache = require('mustache');
const mdnData = require('mdn-data');
//[ 'api', 'css', 'l10n' ]

const cssData = mdnData.css;
//[ 'atRules', 'selectors', 'types', 'properties', 'syntaxes', 'units' ]

const cssUnits = cssData.units;
//ch: { groups: [ 'CSS Units', 'CSS Lengths' ], status: 'standard' },

const cssStandardUnits = Object.keys(cssUnits).reduce((result, nextKey) => {
    if (cssUnits[nextKey].status === 'standard') {
        result[nextKey] = cssUnits[nextKey];
    }
    return result;
}, {});

const unitsIndexTemplate = jetpack.read('./templates/units.index.mustache');
const unitsUnitIndexTemplate = jetpack.read('./templates/units.unit.index.mustache');
const unitsTestTemplate = jetpack.read('./templates/units.test.mustache');

const unitsListView = {
    Units: []
};

//Loop through all the css properties generating the source code, the root index file, and the jest tests
Object.keys(cssStandardUnits).forEach((unit) => {
    if (unit === 'in') {
        //"in" is a javascript keyword, so rename "in" unit function to "inch" unit function
        unit = 'inch';
    }

    const unitView = { unit: unit };
    unitsListView.Units.push(unitView);

    const unitsUnitIndexFile = Mustache.render(unitsUnitIndexTemplate, unitView);

    jetpack.dir(`./src/units/${unit}`);
    jetpack.write(`./src/units/${unit}/index.js`, unitsUnitIndexFile);
});

unitsIndexFile = Mustache.render(unitsIndexTemplate, unitsListView);
jetpack.write('./src/units/index.js', unitsIndexFile);

unitsTestFile = Mustache.render(unitsTestTemplate, unitsListView);
jetpack.write('./src/units/__tests__/units.test.js', unitsTestFile);
