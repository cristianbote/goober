---
id: setup
title: setup
sidebar_label: setup
---

`setup(pragma: Function, prefixer?: Function, theme?: Function)`

Given the fact that `react` uses `createElement` for the transformed elements and `preact` uses `h`, `setup` should be called with the proper _pragma_ function. This was added to reduce the bundled size and being able to bundle esmodule version. At the moment I think it's the best tradeoff we can have.

```js
import React from "react";
import { setup } from "goober";

setup(React.createElement);
```

## With prefixer

```js
import React from "react";
import { setup } from "goober";

const customPrefixer = (key, value) => `${key}: ${value};\n`;

setup(React.createElement, customPrefixer);
```

## With theme

```js
import React from "react";
import { setup, styled } from "goober";

const theme = { primary: "blue" };
const ThemeContext = createContext(theme);
const useTheme = () => useContext(ThemeContext);

setup(React.createElement, undefined, useTheme);

const ContainerWithTheme = styled("div")`
  color: ${(props) => props.theme.primary};
`;
```
