const jetpack = require('fs-jetpack');
const Mustache = require('mustache');

const pseudos = jetpack.read('./cssMdnData/pseudos.json', 'json');

const pseudosIndexTemplate = jetpack.read('./templates/pseudos.index.mustache');
const pseudosPseudoIndexTemplate = jetpack.read('./templates/pseudos.pseudo.index.mustache');
const pseudosTestTemplate = jetpack.read('./templates/pseudos.test.mustache');

const pseudoListView = {
    Pseudos: []
};

//Loop through all the css properties generating the source code, the root index file, and the jest tests
Object.keys(pseudos).forEach((pseudoSelector) => {
    let pseudoCamelCase = toCamelCase(pseudoSelector.replace(/:/g, ''));

    if (pseudoCamelCase === 'default') {
        //Since "default" is a javascript keyword, rename the "default" css pseudo selector function to "defaultElement"
        pseudoCamelCase = 'defaultElement';
    }

    pseudoView = { pseudo: pseudoSelector, pseudoCamelCase: pseudoCamelCase };
    pseudoListView.Pseudos.push(pseudoView);

    const pseudosPseudoIndexFile = Mustache.render(pseudosPseudoIndexTemplate, pseudoView);

    jetpack.dir(`./src/pseudos/${pseudoCamelCase}`);
    jetpack.write(`./src/pseudos/${pseudoCamelCase}/index.js`, pseudosPseudoIndexFile);
});

const pseudosIndexFile = Mustache.render(pseudosIndexTemplate, pseudoListView);
jetpack.write('./src/pseudos/index.js', pseudosIndexFile);

const pseudosTestFile = Mustache.render(pseudosTestTemplate, pseudoListView);
jetpack.write('./test/pseudos.test.js', pseudosTestFile);

function toCamelCase(str) {
    return str.replace(/-[a-z]/g, (g) => g[1].toUpperCase());
}
