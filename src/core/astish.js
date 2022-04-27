let newRule = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g;
let ruleClean = /\/\*[^]*?\*\/+/g;

/**
 * Convert a css style string into a object
 * @param {String} val
 * @returns {Object}
 */
export let astish = (val) => {
    let tree = [{}];
    let block;
    let selector;

    while ((block = newRule.exec(val.replace(ruleClean, '')))) {
        // Remove the current entry
        selector = (block[3] || '').trim().replace(/\s+|\n+/g, ' ');

        if (block[4]) {
            tree.shift();
        } else if (selector) {
            tree.unshift((tree[0][selector] = tree[0][selector] || {}));
        } else {
            selector = (block[1] || '').trim().replace(/\s+|\n+/g, ' ');
            tree[0][selector] = block[2].trim().replace(/\s+|\n+/g, ' ');
        }
    }

    return tree[0];
};
