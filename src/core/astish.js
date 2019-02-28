const newRule = /(?:([a-z0-9-%]+) *: *([^{;]+?);|([^;}{]*?) +{)|(})/gi;
const ruleClean = /\/\*.*?\*\/|\s{2,}|\n/gm;

/**
 * Convert a css style string into a object
 * @param {string} val 
 * @returns {object}
 */
export const astish = val => {
    let target = val = val.replace(ruleClean, "");
    let tree = [{}];

    let block;
    while ((block = newRule.exec(target))) {
        const key = block[3];
      
        // Remove the current entry
        if (block[4]) tree.shift();
        
        if (key) {
            tree.unshift((tree[0][key] = {}));
        } else if (!block[4]) {
            tree[0][block[1]] = block[2];
        }
    }
    
    return tree[0];
}