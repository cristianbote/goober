# babel-plugin-transform-goober

A [Babel](https://babeljs.io/) plugin for
[🥜goober](https://github.com/cristianbote/goober), rewriting `styled.div` syntax to `styled('div')` calls.

## Install

`npm install --save babel-plugin-transform-goober`

## How to use

Edit `.babelrc.json`

```json
{
  "presets": [...],
  "plugins": ["babel-plugin-transform-goober]
}
```

And now you can create your components using `styled.*` syntax:

```jsx
import React from 'react';
import { styled } from 'goober';

const Button = styled.button`
    margin: 0;
    padding: 1rem;
    font-size: 1rem;
    background-color: tomato;
`;
```

If you want to use some other identifier than `styled` you need to
tell the plugin about it. Set the configuration option `"name"` to the
identifier name that want to use. For example, a `.babelrc.json` file like this:

```json
{
  "presets": [...],
  "plugins": [["babel-plugin-transform-goober", { "name" : "goober" }]]
}
```

allows you to use goober like this:

```jsx
import React from 'react';
import { styled as goober } from 'goober';

const Button = goober.button`...`;
```
