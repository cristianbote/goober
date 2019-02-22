const ruleStructure = /(?:([a-z0-9-%]+) *: *([^{;]+?);|([^;}{]*?) +({))/g;
const ruleComma = /("|})(")/g;
const ruleClean = /\/\*.*?\*\/|\s{2,}|\n/gm;

/**
 * Convert a css style string into a object
 * @param {string} val 
 * @returns {object}
 */
export const astish = val => {
    let target = val = val.replace(ruleClean, "");

    let block;
    while ((block = ruleStructure.exec(target))) {
        val = val.replace(block[0], '"' + (block[1] || block[3]) + '":' + (block[2] ? '"' + block[2] + '"' : block[4]));
    }
    
    // Add the needed commas
    val = val.replace(ruleComma, "$1,$2");

    return JSON.parse("{" + val + "}");
}