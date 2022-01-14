let newRule = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g;
let ruleClean = /\/\*[^]*?\*\/|\s\s+|\n/g;

/**
 * Convert a css style string into a object
 * @param {String} val
 * @returns {Object}
 */
export let astish = (val, tree) => {
    let block = newRule.exec(val.replace(ruleClean, ''));
    if (!block) {
        return tree[0];
    }

    // Remove the current entry
    if (block[4]) {
        tree.shift();
    } else if (block[3]) {
        tree.unshift((tree[0][block[3]] = tree[0][block[3]] || {}));
    } else {
        tree[0][block[1]] = block[2];
    }

    return astish(val, tree);
};
