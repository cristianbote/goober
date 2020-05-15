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

    for (let key in obj) {
        let val = obj[key];

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
            if (/^@i/.test(key)) {
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
        let rule = paren + '{' + current + '}';

        // With wrapper
        if (wrapper) return blocks + wrapper + '{' + rule + '}';

        // Else just push the rule
        return outer + rule + blocks;
    }

    return outer + blocks;
};
