/**
 * Parses the object into css, scoped, blocks
 * @param {Object} obj
 * @param {String} paren
 * @param {String} wrapper
 */
export let parse = (obj, paren, wrapper) => {
    let outer = '';
    let blocks = '';
    let current = '';
    let next;

    for (let key in obj) {
        let val = obj[key];

        // If this is a 'block'
        if (typeof val == 'object') {
            // Regular selector
            next = paren.replace(/([^,])+/g, '$& ' + key) || key;

            // Nested
            if (/&/g.test(key)) next = key.replace(/&/g, paren);

            // If these are the `@` rule
            if (key[0] == '@') {
                // Handling the `@font-face` where the
                // block doesn't need the brackets wrapped
                if (key[1] == 'f') {
                    blocks += parse(val, key);
                } else {
                    // Regular rule block
                    blocks += key + '{' + parse(val, key[1] == 'k' ? '' : paren) + '}';
                }
            } else {
                // Call the parse for this block
                blocks += parse(val, next, wrapper);
            }
        } else {
            if (key[0] == '@' && key[1] == 'i') {
                outer = key + ' ' + val + ';';
            } else {
                // Push the line for this property
                current += parse.p
                    ? // We have a prefixer and we need to run this through that
                      parse.p(key.replace(/[A-Z]/g, '-$&').toLowerCase(), val)
                    : // Nope no prefixer just append it
                      key.replace(/[A-Z]/g, '-$&').toLowerCase() + ':' + val + ';';
            }
        }
    }

    // If we have properties
    if (current[0]) {
        // Standard rule composition
        next = paren + '{' + current + '}';

        // With wrapper
        if (wrapper) {
            return blocks + wrapper + '{' + (wrapper[0] == '@' ? next : paren + current) + '}';
        }

        // Else just push the rule
        return outer + next + blocks;
    }

    return outer + blocks;
};
