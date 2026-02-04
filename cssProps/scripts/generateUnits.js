const jetpack = require('fs-jetpack');
const Mustache = require('mustache');

const units = jetpack.read('./cssMdnData/units.json', 'json');

const unitsIndexTemplate = jetpack.read('./templates/units.index.mustache');
const unitsUnitIndexTemplate = jetpack.read('./templates/units.unit.index.mustache');
const unitsTestTemplate = jetpack.read('./templates/units.test.mustache');

const unitsListView = {
    Units: []
};

//Loop through all the css properties generating the source code, the root index file, and the jest tests
units.forEach((unit) => {
    let unitName = unit;
    if (unit === 'in') {
        unitName = 'inch';
    }
    if (unit === '%') {
        unitName = 'percent';
    }

    const unitView = {
        unitName,
        unit
    };
    unitsListView.Units.push(unitView);

    const unitsUnitIndexFile = Mustache.render(unitsUnitIndexTemplate, unitView);

    jetpack.dir(`./src/units/${unitName}`);
    jetpack.write(`./src/units/${unitName}/index.js`, unitsUnitIndexFile);
});

unitsIndexFile = Mustache.render(unitsIndexTemplate, unitsListView);
jetpack.write('./src/units/index.js', unitsIndexFile);

unitsTestFile = Mustache.render(unitsTestTemplate, unitsListView);
jetpack.write('./test/units.test.js', unitsTestFile);
