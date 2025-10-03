const jetpack = require('fs-jetpack');
const Mustache = require('mustache');

const constants = jetpack.read('./cssMdnData/constants.json', 'json');
const constantsIndexTemplate = jetpack.read('./templates/constants.index.mustache');
const constantsTestTemplate = jetpack.read('./templates/constants.test.mustache');

const constantListView = {
    Constants: []
};

//Replace template values
constants.forEach((constant) => {
    const constantView = {
        constantName: constant.replaceAll('-', '_').toUpperCase(),
        constantValue: constant
    };
    constantListView.Constants.push(constantView);
});

const constantsIndexFile = Mustache.render(constantsIndexTemplate, constantListView);
const constantsTestFile = Mustache.render(constantsTestTemplate, constantListView);

jetpack.write('./src/constants/index.js', constantsIndexFile);
jetpack.write('./test/constants.test.js', constantsTestFile);
