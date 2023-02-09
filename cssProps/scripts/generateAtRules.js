const jetpack = require('fs-jetpack');
const Mustache = require('mustache');

const cssAtRules = jetpack.read('./cssMdnData/atRules.json', 'json');

const atRulesIndexTemplate = jetpack.read('./templates/atRules.index.mustache');
const atRulesAtRuleIndexTemplate = jetpack.read('./templates/atRules.atRule.index.mustache');
const atRulesTestTemplate = jetpack.read('./templates/atRules.test.mustache');

const atRulesListView = {
    atRules: []
};

Object.keys(cssAtRules).forEach((atRule) => {
    const atRuleCamelCase = atRule.replace(/-[a-z]/g, (g) => g[1].toUpperCase());

    atRuleView = { atRule: atRule };
    atRulesListView.atRules.push(atRuleView);

    const atRulesAtRuleIndexFile = Mustache.render(atRulesAtRuleIndexTemplate, atRuleView);

    jetpack.dir(`./src/atRules/${atRule}`);
    jetpack.write(`./src/atRules/${atRule}/index.js`, atRulesAtRuleIndexFile);
});

const atRulesIndexFile = Mustache.render(atRulesIndexTemplate, atRulesListView);
jetpack.write('./src/atRules/index.js', atRulesIndexFile);

const atRulesTestFile = Mustache.render(atRulesTestTemplate, atRulesListView);
jetpack.write('./test/atRules/atRules.test.js', atRulesTestFile);
