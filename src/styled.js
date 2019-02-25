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
export const styled = tag =>
  function() {
    const args = [].slice.call(arguments);
    const processStyles = props => {
      const className = getClassNameForCss(
        getCss(args[0], args.slice(1), props)
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
