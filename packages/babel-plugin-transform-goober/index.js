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
                    let property = node.property;
                    if (t.isIdentifier(property)) {
                        property = t.stringLiteral(property.name);
                    }

                    if (/[A-Z]/.test(property.value)) {
                        property.value = property.value.replace(/[A-Z]/g, '-$&').toLowerCase();
                    }

                    path.replaceWith(t.callExpression(node.object, [property]));
                }
            }
        }
    };
};
