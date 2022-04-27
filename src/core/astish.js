let newRule = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g;
let ruleClean = /\/\*[^]*?\*\//g;

/**
 * Convert a css style string into a object
 * @param {String} val
 * @returns {Object}
 */
export let astish = (val) => {
    let tree = [{}];
    let block;
    let selector;

    function clean(val) {
        return !val ? '' : val.trim().replace(/\s+|\n+/g, ' ');
    }

    while ((block = newRule.exec(val.replace(ruleClean, '')))) {
        // Remove the current entry

        if (block[4]) {
            tree.shift();
        } else if (block[3]) {
            selector = clean(block[3]);
            tree.unshift((tree[0][selector] = tree[0][selector] || {}));
        } else {
            tree[0][clean(block[1])] = clean(block[2]);
        }
    }

    return tree[0];
};
