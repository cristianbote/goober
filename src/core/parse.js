export let parse = {
    /**
     * The part of the parser that handles `@` rules
     * @param {Object}
     * @returns
     */
    a: ({ key, val, selector, parts }) => {
        if (key[1] == 'i') {
            // Handling the `@import`
            return {
                ...parts,
                outer: key + ' ' + val + ';'
            };
        }

        if (key[1] == 'f') {
            // Handling the `@font-face` where the
            // block doesn't need the brackets wrapped
            return {
                ...parts,
                blocks: parts.blocks + parse.f(val, key)
            };
        }

        return {
            ...parts,
            blocks: parts.blocks + key + '{' + parse.f(val, key[1] == 'k' ? '' : selector) + '}'
        };
    },
    /**
     * The part of the parser that handles objects
     * @param {Object}
     * @returns
     */
    o: ({ key, val, selector, parts }) => {
        // Call the parse for this block
        return {
            ...parts,
            blocks:
                parts.blocks +
                parse.f(
                    val,
                    selector
                        ? // Go over the selector and replace the matching multiple selectors if any
                          selector.replace(/([^,])+/g, (sel) => {
                              // Return the current selector with the key matching multiple selectors if any
                              return key.replace(/(^:.*)|([^,])+/g, (k) => {
                                  // If the current `k`(key) has a nested selector replace it
                                  if (/&/.test(k)) return k.replace(/&/g, sel);

                                  // If there's a current selector concat it
                                  return sel ? sel + ' ' + k : k;
                              });
                          })
                        : key
                )
        };
    },
    /**
     * The part of the parser that handles strings
     * @param {Object}
     * @returns
     */
    s: ({ key, val, parts }) => {
        // Convert all but CSS variables
        key = /^--/.test(key) ? key : key.replace(/[A-Z]/g, '-$&').toLowerCase();
        // Push the line for this property
        return {
            ...parts,
            current:
                parts.current +
                (parse.p
                    ? // We have a prefixer and we need to run this through that
                      parse.p(key, val)
                    : // Nope no prefixer just append it
                      key + ':' + val + ';')
        };
    },
    /**
     * Parses the object into css, scoped, blocks
     * @param {Object} obj
     * @param {String} selector
     * @param {String} wrapper
     */

    f: (obj, selector) => {
        let parts = { outer: '', blocks: '', current: '' };

        for (let key in obj) {
            let val = obj[key];
            let handler;
            if (key[0] == '@') {
                // If these are the `@` rule
                handler = parse.a;
            } else if (typeof val == 'object') {
                // If the value is an object
                handler = parse.o;
            } else if (val != undefined) {
                // If the value is a string
                handler = parse.s;
            }
            if (handler) parts = handler({ key, val, selector, parts });
        }

        // If we have properties apply standard rule composition
        return (
            parts.outer +
            (selector && parts.current ? selector + '{' + parts.current + '}' : parts.current) +
            parts.blocks
        );
    }
};
