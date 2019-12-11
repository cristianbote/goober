import { css } from './css';

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
            const _props = (_ctx.p = Object.assign({}, props));
            const _previousClassName = _props.className;

            _ctx.o = /\s*go[0-9]+/g.test(_previousClassName);
            _props.className =
                css.apply(_ctx, _args) + (_previousClassName ? ' ' + _previousClassName : '');

            return h(tag, _props);
        };
    };
}

export { styled, setPragma };
