import { getClassNameForCss } from "./core/style/get-class-name";
import { getCss } from "./core/parser/get-css";

let h;
/**
 * Sets custom pragma to be used in contexts
 * @param {function} val
 */
export const setPragma = val => (h = val);

/**
 * Styled function. Returns a vDOM component with a className that defines it's style.
 * @param {String} tag DOM tagName
 * @return {Function}
 */
export const styled = function(tag) {
  const target = (this || {}).target;
  const notGlob = tag != "global";

  return function() {
    const args = arguments;
    const str = arguments[0];

    const processStyles = props => {
      let p = props || {};

      let className = getClassNameForCss(
        str.map ? getCss(str, [].slice.call(args, 1), p) : str,
        notGlob,
        target
      );

      // To be used for 'vanilla'
      if (!h || !(tag && notGlob)) return className;

      p.className = p.className ? p.className + " " + className : className;

      return h(
        tag,
        p
      );
    };

    return tag && notGlob ? processStyles : processStyles();
  };
};
