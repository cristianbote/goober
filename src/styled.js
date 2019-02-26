import { getClassNameForCss } from "./core/style/get-class-name";
import { getCss } from "./core/parser/get-css";
import { add } from "./core/style/sheet";

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
    tag = tag == "global" ? 0 : tag;
    const args = [].slice.call(arguments);
    const processStyles = props => {
      const className = getClassNameForCss(
        args[0].map ? getCss(args[0], args.slice(1), props) : args[0],
        tag != 0
      );

      // To be used for 'vanilla' or isGlobal
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
