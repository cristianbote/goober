/**
 * Parses the object into css, scoped, blocks
 * @param {Object} obj
 * @param {String} paren
 * @param {String} wrapper
 */
export const parse = (obj, paren, wrapper) => {
    let current = '';
    let blocks = '';
    let outer = '';

    for (let key in obj) {
        const val = obj[key];

        // If this is a 'block'
        if (typeof val == 'object') {
            // Regular selector
            let next = paren + ' ' + key;

            // Nested
            if (/&/g.test(key)) next = key.replace(/&/g, paren);

            // Media queries or other
            if (key[0] == '@') {
                next = paren;
                // If this is the case for `@font-face`
                if (key[1] == 'f') {
                    next = key;
                }
            }

            // If this is the `@keyframes`
            if (/@k/.test(key)) {
                // Take the key and inline it
                blocks += key + '{' + parse(val, '', '') + '}';
            } else {
                // Call the parse for this block
                blocks += parse(val, next, next == paren ? key : wrapper || '');
            }
        } else {
            if (/^@i/.test(key)) outer = key + ' ' + val + ';';
            // Push the line for this property
            else current += key.replace(/[A-Z]/g, '-$&').toLowerCase() + ':' + val + ';';
        }
    }

    // If we have properties
    if (current.charCodeAt(0)) {
        // Standard rule composition
        const rule = paren + '{' + current + '}';

        // With wrapper
        if (wrapper) return blocks + wrapper + '{' + rule + '}';

        // Else just push the rule
        return outer + rule + blocks;
    }

    return outer + blocks;
};
