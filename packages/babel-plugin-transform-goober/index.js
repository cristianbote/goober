/**
 * Prepend #__PURE__ comment to help minifiers with
 * dead code elminiation (=DCE)
 */
function prependPureComment(node) {
    const comments = node.leadingComments || (node.leadingComments = []);
    comments.push({
        type: 'CommentBlock',
        value: '#__PURE__'
    });
}

module.exports = function ({ types: t }, options = {}) {
    const name = options.name || 'styled';

    return {
        name: 'transform-goober',
        visitor: {
            TaggedTemplateExpression(path) {
                if (t.isIdentifier(path.node.tag) && path.node.tag.name === 'css') {
                    if (options.pure) {
                        prependPureComment(path.node);
                    }
                } else if (
                    t.isIdentifier(path.node.tag.callee) &&
                    path.node.tag.callee.name === name
                ) {
                    if (options.pure) {
                        prependPureComment(path.node);
                    }

                    if (options.displayName) {
                        // Add displayName to goober components for easier debugging
                        const variable = path.findParent((path) => path.isVariableDeclaration());
                        if (variable && variable.node.declarations.length === 1) {
                            const decl = variable.node.declarations[0];

                            if (t.isIdentifier(decl.id)) {
                                variable.insertAfter(
                                    t.expressionStatement(
                                        t.assignmentExpression(
                                            '=',
                                            t.MemberExpression(
                                                decl.id,
                                                t.identifier('displayName')
                                            ),
                                            t.stringLiteral(`${name}(${decl.id.name})`)
                                        )
                                    )
                                );
                            }
                        }
                    }
                }
            },
            MemberExpression: {
                exit(path) {
                    const node = path.node;
                    if (!t.isIdentifier(node.object) || node.object.name !== name) {
                        return;
                    }
                    let property = node.property;
                    if (t.isIdentifier(property)) {
                        property = t.stringLiteral(property.name);
                    }

                    if (/[A-Z]/.test(property.value)) {
                        property.value = property.value.replace(/[A-Z]/g, '-$&').toLowerCase();
                    }

                    path.replaceWith(t.callExpression(node.object, [property]));

                    if (options.pure) {
                        prependPureComment(path.node);
                    }
                }
            }
        }
    };
};
