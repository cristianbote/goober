/**
 * Can parse a compiled string, from a tagged template
 * @param {String} value
 * @param {Object} [props]
 */
export let compile = (str, defs, data) => {
    return str.reduce((out, next, i) => {
        let tail = defs[i];

        // If this is a function we need to:
        if (tail && tail.call) {
            // 1. Call it with `data`
            let res = tail(data);

            // 2. Grab the className
            let className = res && res.props && res.props.className;

            // 3. If there's none, see if this is basically a
            // previously styled className by checking the prefix
            let end = className || (/^go/.test(res) && res);

            tail = end
                ? // If the `end` is defined means it's a className
                  '.' + end
                : // If `res` it's not falsy and not a vnode, we could just dump it
                // since the value it's an dynamic value
                res && res.props
                ? ''
                : res;
        }
        return out + next + (tail == null ? '' : tail);
    }, '');
};
