/**
 * Can parse a compiled string, from a tagged template
 * @param {String} value
 * @param {Object} [props]
 */
export const compile = (str, defs, data) => {
    return str.reduce((out, next, i) => {
        let tail = defs[i];
    
        // If this is a function we need to:
        if (tail && tail.call) {
          // 1. Call it with `data`
          const res = tail(data);

          // 2. Grab the className
          const className = res && res.props && res.props.className;

          // 3. If there's none, see if this is basically a
          // previously styled className by checking the prefix
          const end = className || (/^go/.test(res) && res);
    
          tail = (end ? "." + end : (res.props ? "" : res));
        }
        return out + next + (tail || "");
      }, "");
}