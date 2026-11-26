let newRule = /([^\s:{]+) ?:([^;{]+);|([^;{}]*){|}/g;

/**
 * Convert a css style string into a object
 * @param {String} val
 * @returns {Object}
 */
export let astish = (val) => {
    let tree = [{}];
    let block, left;

    while ((block = newRule.exec(val.replace(/\/\*[^]*?\*\/|  +/g, '')))) {
        if (block[3]) {
            left = block[3].replace(/\n+/g, ' ').trim();
            tree.unshift((tree[0][left] = tree[0][left] || {}));
        } else if (block[1]) {
            tree[0][block[1]] = block[2].replace(/\n+/g, ' ').trim();
        } else {
            // Remove the current entry
            tree.shift();
        }
    }

    return tree[0];
};
