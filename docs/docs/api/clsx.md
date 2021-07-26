---
id: clsx
title: clsx
sidebar_label: clsx
---

`clsx(...classes)`

-   `@returns {String}`

The `clsx` helper lets you combine class names. This can let you
override styles you've previously created using Goober.

```jsx
import { css } from 'goober';
import clsx from 'goober/clsx';

const SecondaryStyles = css`
    color: red;
`;

const PrimaryStyles = css`
    color: black;
`;

/**
 * PrimaryStyles will be overriden by SecondaryStyles
 * even though SecondaryStyles was declared first.
 */
const CombinedStyles = clx(PrimaryStyles, SecondaryStyles);

/**
 * You can now use the new class name `CombinedStyles`
 * to style an element.
 */
<div className={CombinedStyles} />;
```

Any non-goober classes are passed through to the resulting string.

```js
import clsx from 'goober/clsx';

const MyClasses = clsx('class-a', 'class-b');
// MyClasses has the value: "class-a class-b"
```
