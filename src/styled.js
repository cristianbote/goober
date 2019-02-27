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
  const ctx = this;
  const notGlob = tag != "global"
  /**
   * This is the tagged function that's being returned
   */
  return function tagged(str) {

    /**
     * VNODE props or attributes
     * @param {object|undefined} props 
     */
    const processStyles = props => {

      let className = getClassNameForCss(
        getCss(str, [].slice.call(arguments, 1), props),
        notGlob,
        (this || ctx || {}).target
      );

      // To be used for 'vanilla'
      if (!h || (!tag && notGlob)) return className;

      return h(
        tag,
        Object.assign({}, props, {
          className: props && props.className ? props.className + " " + className : className
        })
      );
    };

    return tag && notGlob ? processStyles : processStyles();
  };
};
