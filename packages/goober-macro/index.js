const { createMacro } = require('babel-plugin-macros');
const { addNamed } = require('@babel/helper-module-imports');

module.exports = createMacro(gooberMacro);

function gooberMacro({ references, babel, state }) {
    const program = state.file.path;

    // Inject import {styled} from 'goober'
    Object.keys(references).forEach(refName => {
        const id = addNamed(program, 'styled', 'goober');
        references[refName].forEach(referencePath => {
            referencePath.node.name = id.name;
        });
    });

    const t = babel.types;

    references.default.forEach((referencePath, i) => {
        const type = referencePath.parentPath.type;

        if (type === 'MemberExpression') {
            const node = referencePath.parentPath.node;
            const functionName = node.object.name;
            let elementName = node.property.name;

            // Custom elements
            if (/[A-Z]/.test(elementName)) {
                elementName = elementName.replace(/[A-Z]/g, '-$&').toLowerCase();
            }

            referencePath.parentPath.replaceWith(
                t.callExpression(t.identifier(functionName), [t.stringLiteral(elementName)])
            );
        }
    });
}
