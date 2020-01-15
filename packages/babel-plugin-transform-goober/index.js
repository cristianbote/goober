module.exports = function({ types: t }, options = {}) {
    const name = options.name || 'styled';

    return {
        name: 'transform-goober',
        visitor: {
            MemberExpression: {
                exit(path) {
                    const node = path.node;
                    if (!t.isIdentifier(node.object) || node.object.name !== name) {
                        return;
                    }
                    if (!t.isIdentifier(node.property)) {
                        return;
                    }
                    path.replaceWith(
                        t.callExpression(node.object, [t.stringLiteral(node.property.name)])
                    );
                }
            }
        }
    };
};
