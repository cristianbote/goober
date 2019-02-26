import { getClassNameForCss } from "./core/style/get-class-name";
import { getCss } from "./core/parser/get-css";

let pragma;

/**
 * Sets custom pragma to be used in contexts
 * @param {function} val
 */
export const setPragma = val => (pragma = val);

/**
 * Styled function. Returns a vDOM component with a className that defines it's style.
 * @param {String} tag DOM tagName
 * @return {Function}
 */
export const styled = function(tag) {
  const styledContext = this || { pragma };
  const h = pragma || styledContext.pragma;
  return function() {
    const cssContext = this || {};
    const target =
      styledContext.target || cssContext.target || (document && document.head);
    const args = [].slice.call(arguments);
    const processStyles = props => {
      const className = getClassNameForCss(
        getCss(args[0], args.slice(1), props),
        target
      );

      // To be used for 'vanilla'
      if (!h || !tag) return className;

      return h(
        tag,
        Object.assign({}, props, {
          className:
            (props && props.className ? props.className + " " : "") + className
        })
      );
    };
    return tag ? processStyles : processStyles();
  };
};
