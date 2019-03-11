import { css } from "./css";

let h;
const setPragma = pragma => (h = pragma);

/**
 * Styled function
 * @param {String} tag
 */
function styled(tag) {
  const ctx = this || {};
  return function() {
    const args = arguments;
    return props => {
      ctx.p = props;
      return h(
        tag,
        Object.assign({}, props, {
          className:
            (props && props.className ? props.className + " " : "") +
            css.apply(ctx, args)
        })
      );
    };
  };
}

export { styled, setPragma };
