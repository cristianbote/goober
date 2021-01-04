---
id: css
title: css
sidebar_label: css
---

`css(taggedTemplate)`

- `@returns {String}` Returns the className.

To create a className, you need to call `css` with your style rules in a tagged template.

```js
import { css } from "goober";

const BtnClassName = css`
  border-radius: 4px;
`;

// vanilla JS
const btn = document.querySelector("#btn");
// BtnClassName === 'g016232'
btn.classList.add(BtnClassName);

// JSX
// BtnClassName === 'g016232'
const App => <button className={BtnClassName}>click</button>
```

## Different ways of customizing `css`

### Passing props to `css` tagged templates

```js
import { css } from "goober";

// JSX
const CustomButton = (props) => (
  <button
    className={css`
      border-radius: ${props.size}px;
    `}
  >
    click
  </button>
);
```

### Using `css` with JSON/Object

```js
import { css } from "goober";
const BtnClassName = (props) =>
  css({
    background: props.color,
    borderRadius: props.radius + "px",
  });
```

**Notice:** using `css` with object can reduce your bundle size.

We also can declare the styles at the top of the file by wrapping `css` into a function that we call to get the className.

```js
import { css } from "goober";

const BtnClassName = (props) => css`
  border-radius: ${props.size}px;
`;

// vanilla JS
// BtnClassName({size:20}) -> g016360
const btn = document.querySelector("#btn");
btn.classList.add(BtnClassName({ size: 20 }));

// JSX
// BtnClassName({size:20}) -> g016360
const App = () => <button className={BtnClassName({ size: 20 })}>click</button>;
```

The difference between calling `css` directly and wrapping into a function is the timing of its execution. The former is when the component(file) is imported, the latter is when it is actually rendered.

If you use `extractCSS` for SSR, you may prefer to use the latter or `styled` api to avoid inconsistent results.
