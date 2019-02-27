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

  return function() {
    const args = [].slice.call(arguments);

    const processStyles = props => {
      let className = getClassNameForCss(
        args[0].map ? getCss(args[0], args.slice(1), props) : args[0],
        tag != "global",
        target
      );

      // To be used for 'vanilla'
      if (!h || !tag) return className;

      return h(
        tag,
        Object.assign(props, {
          className:
            props && props.className ? props.className + " " + className : className
        })
      );
    };
    return tag ? processStyles : processStyles();
  };
};
