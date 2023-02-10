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
    //Special case for import, since it is a javascript keyword.
    const atRuleCamelCase =
        atRule === '@import'
            ? 'atImport'
            : atRule.slice(1).replace(/-[a-z]/g, (g) => g[1].toUpperCase());

    const atRuleSyntax = cssAtRules[atRule].syntax;
    const tokens = atRuleSyntax.split(/\s+/);
    const hasArgs = tokens[1] !== '{'; //If first token after @rule is {, then only css properties are present
    const hasProps = tokens.includes('{'); //Found object syntax for @rule
    const argsAndProps = hasArgs && hasProps;
    const isKeyframes = atRule === '@keyframes';

    atRuleView = {
        atRule,
        atRuleCamelCase,
        atRuleSyntax,
        hasArgs,
        hasProps,
        argsAndProps,
        isKeyframes
    };
    atRulesListView.atRules.push(atRuleView);

    const atRulesAtRuleIndexFile = Mustache.render(atRulesAtRuleIndexTemplate, atRuleView);

    jetpack.dir(`./src/atRules/${atRuleCamelCase}`);
    jetpack.write(`./src/atRules/${atRuleCamelCase}/index.js`, atRulesAtRuleIndexFile);
});

const atRulesIndexFile = Mustache.render(atRulesIndexTemplate, atRulesListView);
jetpack.write('./src/atRules/index.js', atRulesIndexFile);

const atRulesTestFile = Mustache.render(atRulesTestTemplate, atRulesListView);
jetpack.write('./test/atRules.test.js', atRulesTestFile);
