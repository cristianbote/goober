/**
 * Can parse a compiled string, from a tagged template
 * @param {String} value
 * @param {Object} [props]
 */
export const compile = (str, defs, data) => {
    return str.reduce((out, next, i) => {
        let tail = defs[i];
    
        if (typeof defs[i] == "function") {
          const res = defs[i](data);
          const attr = res.attributes || res.props;
          const end = (attr && attr.className) || (/^g0/.test(res) && res);
    
          tail = (end ? "." + end : (attr ? "" : res));
        }
        return out + next + (tail || "");
      }, "");
}