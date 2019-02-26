/**
 * Returns the css parsed. This is the tag template parser.
 * @param {String} str 
 * @param {Array} defs 
 * @param {Object} props 
 * @return {String}
 */
export const getCss = (str, defs, props) =>
  str.reduce((out, next, i) => {
    if (typeof defs[i] == "function") {
      const res = defs[i](props);
      const attr = res.attributes || res.props;
      const end = (attr && attr.className) || (/^g0/.test(res) && res);

      return out + next + (end ? "." + end : (attr ? "" : res));
    }
    return out + next + (defs[i] || "");
  }, "");