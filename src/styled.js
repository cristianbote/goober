import { getClassNameForCss } from "./core/style/get-class-name";
import { getCss } from "./core/parser/get-css";

let h;

try {
  h = require("react").createElement;
} catch (e) {
  try {
    h = require("preact").h;
  } catch (e) {
    // do nothing, not our business to know it
  }
}

/**
 * Styled function. Returns a vDOM component with a className that defines it's style.
 * @param {String} tag DOM tagName
 * @return {Function}
 */
export const styled = tag => (str, ...defs) => props => {
    const className = getClassNameForCss(getCss(str, defs, props));

    // To be used for 'vanilla'
    if (!h || !tag) return className;

    return h(tag, Object.assign({}, props, {
      className: ((props && props.className ? props.className : "") + " ") + className
    }));
};