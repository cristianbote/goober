import { getClassNameForCss } from "./core/style";
import { getCss } from "./core/parser";

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
const styled = tag => (str, ...defs) => props => {
    const className = getClassNameForCss(getCss(str, defs, props));

    // To be used for 'vanilla'
    if (!h || !tag) return className;

    return h(tag, {
      ...props,
      className: (props ? props.className : "") + " " + className
    });
};

export {
  styled
}