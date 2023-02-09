const jetpack = require('fs-jetpack');
const Mustache = require('mustache');

const functions = jetpack.read('./cssMdnData/functions.json', 'json');

const functionsIndexTemplate = jetpack.read('./templates/functions.index.mustache');
const functionsFunctionIndexTemplate = jetpack.read(
    './templates/functions.function.index.mustache'
);
const functionsTestTemplate = jetpack.read('./templates/functions.test.mustache');

const funcListView = {
    Funcs: []
};

Object.keys(functions).forEach((func) => {
    func = func
        .slice(0, -2) //remove "()"
        .replace(/-[a-z]/g, (g) => g[1].toUpperCase()); // camelCase

    if (func === 'var') {
        //Since "var" is a javascript keyword, need to rename "var" css function to "variable" css function
        func = 'variable';
    }

    funcView = { func: func };
    funcListView.Funcs.push(funcView);

    const functionsFunctionIndexFile = Mustache.render(functionsFunctionIndexTemplate, funcView);

    jetpack.dir(`./src/functions/${func}`);
    jetpack.write(`./src/functions/${func}/index.js`, functionsFunctionIndexFile);
});

const functionsIndexFile = Mustache.render(functionsIndexTemplate, funcListView);
jetpack.write('./src/functions/index.js', functionsIndexFile);

const functionsTestFile = Mustache.render(functionsTestTemplate, funcListView);
jetpack.write('./test/functions/functions.test.js', functionsTestFile);
