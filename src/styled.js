import { css } from "./css";

let h;
let forwardRef;
const setPragma = pragma => { h = pragma };
const setForwardRef = fn => { forwardRef = fn };

/**
 * Styled function
 * @param {String} tag
 */
function styled(tag) {
  const _ctx = this || {};

  return function () {
    const _args = arguments;

    function Styled(props, ref) {
      const _props = _ctx.p = Object.assign({}, props);
      const _previousClassName = _props.className;

      _ctx.o = /\s*go[0-9]+/g.test(_previousClassName);
      _props.className = css.apply(_ctx, _args) + (_previousClassName ? " " + _previousClassName : "");
      if (forwardRef) {
        _props.ref = ref;
      }

      return h(
        tag,
        _props
      );
    };
    return forwardRef ? forwardRef(Styled) : Styled;
  };
}

export { styled, setPragma, setForwardRef };
