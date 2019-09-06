import { css } from "./css";

let h;
const setPragma = pragma => (h = pragma);

/**
 * Styled function
 * @param {String} tag
 */
function styled(tag) {
  const _ctx = this || {};

  return function() {
    const _args = arguments;

    return function Styled(props) {
      _ctx.p = props || {};
      _ctx.p.className = css.apply(_ctx, _args) + (_ctx.p.className ? " " + _ctx.p.className : "");

      return h(
        tag,
        _ctx.p
      );
    };
  };
}

export { styled, setPragma };
