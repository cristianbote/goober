const nodePath = require('path');

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

function createAssignment(t, left, right) {
    return t.expressionStatement(t.assignmentExpression('=', left, right));
}

module.exports = function ({ types: t }, options = {}) {
    const name = options.name || 'styled';
    // Enable pure by default if it is not set by the user
    const pure = !('pure' in options) ? true : options.pure;

    return {
        name: 'transform-goober',
        visitor: {
            TaggedTemplateExpression(path, state) {
                if (t.isIdentifier(path.node.tag) && path.node.tag.name === 'css') {
                    if (pure) {
                        prependPureComment(path.node);
                    }
                } else if (
                    t.isIdentifier(path.node.tag.callee) &&
                    path.node.tag.callee.name === name
                ) {
                    if (pure) {
                        prependPureComment(path.node);
                    }

                    if (options.displayName) {
                        const variable = path.findParent((path) => path.isVariableDeclaration());
                        if (variable && variable.node.declarations.length === 1) {
                            const decl = variable.node.declarations[0];

                            if (t.isIdentifier(decl.id)) {
                                // Add displayName to goober components for easier debugging
                                const displayName = variable.insertAfter(
                                    createAssignment(
                                        t,
                                        t.MemberExpression(decl.id, t.identifier('displayName')),
                                        t.stringLiteral(decl.id.name)
                                    )
                                );

                                // Add human readable CSS class names. The format is:
                                // [FILENAME]__[COMPONENT]-[#]
                                const fileName = state.file.opts.filename || 'Unknown';
                                let baseName = nodePath
                                    .basename(fileName, nodePath.extname(fileName))
                                    .replace(/\s+/g, '-');

                                // CSS class names MUST begin with a letter,
                                // underscore or minus character
                                if (!/^[-_A-Za-z]/.test(baseName)) {
                                    baseName = '-' + baseName;
                                }

                                state.gooberComponentCount = (state.gooberComponentCount || 0) + 1;

                                displayName[0].insertAfter(
                                    createAssignment(
                                        t,
                                        t.MemberExpression(decl.id, t.identifier('className')),
                                        t.stringLiteral(
                                            `${baseName}__${decl.id.name}-go-${state.gooberComponentCount}`
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

                    if (pure) {
                        prependPureComment(path.node);
                    }
                }
            }
        }
    };
};
