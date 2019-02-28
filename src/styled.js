import { css } from "./css";

let h;
const setPragma = pragma => (h = pragma);

/**
 * Styled function
 * @param {String} tag 
 */
function styled(tag) {
  return function () {
      const args = [].slice.call(arguments, 0);

      return props => {
          const className = css.apply({
              p: props
          }, args);

          return h(
              tag,
              Object.assign({}, props, {
                  className: props && props.className ? (props.className + " " + className) : className
              })
          )
      };
  }
}

export {
  styled,
  setPragma
}