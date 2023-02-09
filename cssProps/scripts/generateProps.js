const jetpack = require('fs-jetpack');
const Mustache = require('mustache');

const cssProperties = jetpack.read('./cssMdnData/properties.json', 'json');

const propsIndexTemplate = jetpack.read('./templates/props.index.mustache');
const propsPropIndexTemplate = jetpack.read('./templates/props.prop.index.mustache');
const propsTestTemplate = jetpack.read('./templates/props.test.mustache');

const propsListView = {
    Props: []
};

Object.keys(cssProperties).forEach((property) => {
    const prop = toCamelCase(property);

    propView = { prop: prop };
    propsListView.Props.push(propView);

    const propsPropIndexFile = Mustache.render(propsPropIndexTemplate, propView);

    jetpack.dir(`./src/props/${prop}`);
    jetpack.write(`./src/props/${prop}/index.js`, propsPropIndexFile);
});

const propsIndexFile = Mustache.render(propsIndexTemplate, propsListView);
jetpack.write('./src/props/index.js', propsIndexFile);

const propsTestFile = Mustache.render(propsTestTemplate, propsListView);
jetpack.write('./test/props/props.test.js', propsTestFile);

function toCamelCase(str) {
    return str.replace(/-[a-z]/g, (g) => g[1].toUpperCase());
}
