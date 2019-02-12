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
      // If this is a vNode with a className
      if (res.attributes && res.attributes.className) {
        return `${out}${next}.${res.attributes.className}`;
      }

      // TODO: Should figure out a better _detection_
      if (res[0] == "g" && res[1] == "0") {
        return `${out}${next}.${res}`;
      }
      
      return `${out}${next}${res}`;
    }
    return out + next + (defs[i] || "");
  }, "");