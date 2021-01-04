---
id: styled
title: styled
sidebar_label: styled
---

`styled(tagName: String | Function, forwardRef?: Function)`

- `@param {String|Function} tagName` The name of the dom element you'd like the styled to be applied to
- `@param {Function} forwardRef` Forward ref function. Usually `React.forwardRef`
- `@returns {Function}` Returns the tag template function.

```js
import { styled } from "goober";

const Btn = styled("button")`
  border-radius: 4px;
`;
```

## Different ways of customizing the styles

### Tagged templates functions

```js
import { styled } from "goober";

const Btn = styled("button")`
  border-radius: ${(props) => props.size}px;
`;

<Btn size={20} />;
```

### Function that returns a string

```js
import { styled } from "goober";

const Btn = styled("button")(
  (props) => `
  border-radius: ${props.size}px;
`
);

<Btn size={20} />;
```

### JSON/Object

```js
import { styled } from "goober";

const Btn = styled("button")((props) => ({
  borderRadius: props.size + "px",
}));

<Btn size={20} />;
```

### Arrays

```js
import { styled } from "goober";

const Btn = styled("button")([
  { color: "tomato" },
  ({ isPrimary }) => ({ background: isPrimary ? "cyan" : "gray" }),
]);

<Btn />; // This will render the `Button` with `background: gray;`
<Btn isPrimary />; // This will render the `Button` with `background: cyan;`
```
