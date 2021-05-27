---
id: setup
title: setup
sidebar_label: setup
---

`setup(pragma: Function, prefixer?: Function, theme?: Function, forwardProps?: Function)`

The call to `setup()` should occur once only. It should be called in the entry file of you project.

Given the fact that `react` uses `createElement` for the transformed elements and `preact` uses `h`, `setup` should be called with the proper _pragma_ function. This was added to reduce the bundled size and being able to bundle esmodule version. At the moment I think it's the best tradeoff we can have.

```js
import React from 'react';
import { setup } from 'goober';

setup(React.createElement);
```

## With prefixer

```js
import React from 'react';
import { setup } from 'goober';

const customPrefixer = (key, value) => `${key}: ${value};\n`;

setup(React.createElement, customPrefixer);
```

## With theme

```js
import React from 'react';
import { setup, styled } from 'goober';

const theme = { primary: 'blue' };
const ThemeContext = createContext(theme);
const useTheme = () => useContext(ThemeContext);

setup(React.createElement, undefined, useTheme);

const ContainerWithTheme = styled('div')`
    color: ${(props) => props.theme.primary};
`;
```

## With forwardProps

The `forwardProps` function, offers a way to achieve the same `shouldForwardProps` functionality as emotion and styled-components(with transient props) offer. The difference in here is that the function receives the whole props and you are in charge of removing the props that are should not end-up in the dom.

This is a super useful functionality when paired with theme object, variants or any other customisation one might need.

```js
import React from 'react';
import { setup, styled } from 'goober';

setup(React.createElement, undefined, undefined, (props) => {
    for (let prop in props) {
        // Or any other conditions.
        // This could also check if this is a dev build and not remove the props
        if (prop === 'size') {
            delete props[prop];
        }
    }
});
```

Alternatively you can use `goober/should-forward-prop` addon, to pass only the filter function and not have to deal with the full `props` object.

```js
import React from 'react';
import { setup, styled } from 'goober';
import { shouldForwardProp } from 'goober/should-forward-prop';

setup(
    React.createElement,
    undefined,
    undefined,
    // This package accepts a `filter` function. If you return false that prop
    // won't be included in the forwarded props.
    shouldForwardProp((prop) => {
        return prop !== 'size';
    })
);
```
