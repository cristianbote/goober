---
id: createGlobalStyles
title: createGlobalStyles
sidebar_label: createGlobalStyles
---

`createGlobalStyles`

To define your global styles you need to create a `GlobalStyles` component and use it as part of your tree. The `createGlobalStyles` is available at `goober/global` addon.

```js
import { createGlobalStyles } from 'goober/global';

const GlobalStyles = createGlobalStyles`
  html,
  body {
    background: light;
  }

  * {
    box-sizing: border-box;
  }
`;

export default function App() {
    return (
        <div id="root">
            <GlobalStyles />
            <Navigation>
            <RestOfYourApp>
        </div>
    )
}
```

## How about using `glob` function directly?

Before the global addon, `goober/global`, there was a method named `glob` that was part of the main package that would do the same thing, more or less. Having only that method to define global styles usually led to missing global styles from the extracted css, since the pattern did not enforced the evaluation of the styles at render time. The `glob` method it is still exported from `goober/global` if you have a hard dependency on it. It still has the same API:

```js
import { glob } from "goober";

glob`
  html,
  body {
    background: light;
  }

  * {
    box-sizing: border-box;
  }
`;
```
