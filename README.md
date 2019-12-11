<p align="center">
  <img src="https://i.imgur.com/hHXmkvE.png" width="500" alt="goober" />
</p>

🥜 goober, a less than 1KB css-in-js solution.

[![npm version](https://badge.fury.io/js/goober.svg?bust)](https://badge.fury.io/js/goober)
[![Build Status](https://travis-ci.org/cristianbote/goober.svg?branch=master)](https://travis-ci.org/cristianbote/goober)
[![gzip size](http://img.badgesize.io/https://unpkg.com/goober/dist/goober.js?compression=gzip)](https://unpkg.com/goober)
[![coverage](https://img.shields.io/codecov/c/github/cristianbote/goober.svg?maxAge=2592000)](https://codecov.io/github/cristianbote/goober?branch=master)
[![Gitter](https://img.shields.io/gitter/room/cristianbote/goober.svg?style=popout)](https://gitter.im/goober-project/community) [![Greenkeeper badge](https://badges.greenkeeper.io/cristianbote/goober.svg)](https://greenkeeper.io/)

# Motivation

I always wondered, if you can get a working solution for css-in-js with a smaller footprint. I started a project and wanted a to use styled-components. Looking at their sizes, it seems that I would rather not include ~16kB([styled-components](https://github.com/styled-components/styled-components)) or ~11kB([emotion](https://github.com/emotion-js/emotion)) just so I can use the `styled` paradigm. So, I embarked in a mission to create a smaller alternative for these well established apis.

# Usage

The API is inspired by emotion, `styled` function. Meaning, you call it with your `tagName` and returns a vDOM component for that tag. Note, `setPragma` is needed to be run before the `styled` function is used.

```jsx
import { h } from 'preact';
import { styled, setPragma } from 'goober';

// Should be called here, and just once
setPragma(h);

const Icon = styled('span')`
    display: flex;
    flex: 1;
    color: red;
`;

const Button = styled('button')`
    background: dodgerblue;
    color: white;
    border: ${Math.random()}px solid white;

    &:focus,
    &:hover {
        padding: 1em;
    }

    .otherClass {
        margin: 0;
    }

    ${Icon} {
        color: black;
    }
`;
```

# Examples

-   [Vanilla](https://codesandbox.io/s/qlywyp7z4q)
-   [React](https://codesandbox.io/s/k0mnp40n7v)
-   [Preact](https://codesandbox.io/s/r15wj2qm7o)
-   [SSR with Preact](https://codesandbox.io/s/7m9zzl6746)

# SSR

You can get the critical CSS for SSR, via `extractCss`. Take a look at this example: [CodeSandbox: SSR with Preact and goober](https://codesandbox.io/s/7m9zzl6746) and read the full explanation for `extractCSS` and `targets` below.

# Benchmarks

You results are included inside the build output as well.

## Browser

These are not yet measured. Need some time.

## SSR

The benchmark is testing the folowing scenario:

```jsx
import styled from 'package';

// Create the dynamic styled component
const Foo = styled('div')(props => ({
    opacity: props.counter > 0.5 ? 1 : 0,
    '@media (min-width: 1px)': {
        rule: 'all'
    },
    '&:hover': {
        another: 1,
        display: 'space'
    }
}));

// Serialize the component
renderToString(<Foo counter={Math.random()} />);
```

The results are:

```
goober x 39,348 ops/sec ±1.67% (87 runs sampled)
styled-components x 21,469 ops/sec ±3.60% (85 runs sampled)
emotion x 46,504 ops/sec ±4.67% (85 runs sampled)

Fastest is: emotion
```

# API

As you can see it supports most of the syntaxes of CSS. If you find any issues, please submit a ticket or even a PR with a fix.

### `styled(tagName)`

-   `@param {String} tagName` The name of the dom element you'd like the styled to be applied to
-   `@returns {Function}` Returns the tag template function.

```js
import { styled } from 'goober';

const Btn = styled('button')`
    border-radius: 4px;
`;
```

#### Different ways of customizing the styles

##### Tagged templates functions

```js
import { styled } from 'goober';

const Btn = styled('button')`
    border-radius: ${props => props.size}px;
`;

<Btn size={20} />;
```

##### Function that returns a string

```js
import { styled } from 'goober';

const Btn = styled('button')(
    props => `
  border-radius: ${props.size}px;
`
);

<Btn size={20} />;
```

##### JSON/Object

```js
import { styled } from 'goober';

const Btn = styled('button')(props => ({
    borderRadius: props.size + 'px'
}));

<Btn size={20} />;
```

### `setPragma(pragma: Function)`

Given the fact that `react` uses `createElement` for the transformed elements and `preact` uses `h`, `setPragma` should be called with the proper _pragma_ function. This was added to reduce the bundled size and being able to bundle esmodule version. At the moment I think it's the best tradeoff we can have.

```js
import React from 'react';
import { setPragma } from 'goober';

setPragma(React.createElement);
```

### `css(taggedTemplate)`

-   `@returns {Function}` Returns the tag template function.

Same as `styled` but without the tagName and vNode generation. Calling the function created by `css` will result in a className.

```js
import { css } from "goober";

const BtnClassName = css`
  border-radius: 4px;
`;

// vanilla JS
const btn = document.querySelector("#btn");
// BtnClassName() -> 'g016232'
btn.classList.add(BtnClassName());

// JSX
// BtnClassName() -> 'g016232'
const App => <button className={BtnClassName()}>click</button>
```

#### Different ways of customizing `css`

##### Tagged templates functions

```js
import { css } from 'goober';

const BtnClassName = css`
    border-radius: ${props => props.size}px;
`;

// vanilla JS
// BtnClassName({size:20}) -> g016360
const btn = document.querySelector('#btn');
btn.classList.add(BtnClassName({ size: 20 }));

// JSX
// BtnClassName({size:20}) -> g016360
const App = () => <button className={BtnClassName({ size: 20 })}>click</button>;
```

**💡NOTE**

> If you provide props as an object within `css`, make sure to provide empty object as a default parameter, otherwise your app will throw error if you won't provide an object argument.

```js
const BtnClassName = css`
    border-radius: ${(props = {}) => props.size}px;
`;

// All Good
BtnClassName();
BtnClassName({ size: 4 });
```

### `targets`

By default, goober will append a style tag to the `<head>` of a document. You might want to target a different node, for instance, when you want to use goober with web components (so you'd want it to append style tags to individual shadowRoots). For this purpose, you can `.bind` a new target to the `styled` and `css` methods:

```js
import * as goober from 'goober';
const target = document.getElementById('target');
const css = goober.css.bind({ target: target });
const styled = goober.styled.bind({ target: target });
```

If you don't provide a target, goober always defaults to `<head>` and in environments without a DOM (think certain SSR solutions), it will just use a plain string cache to store generated styles which you can extract with `extractCSS`(see below).

### `extractCss(target?)`

-   `@returns {String}`

Returns the `<style>` tag that is rendered in a target and clears the style sheet. Defaults to `<head>`.

```js
const { extractCss } = require('goober');

// After your app has rendered, just call it:
const styleTag = `<style id="_goober">${extractCss()}</style>`;

// Note: To be able to `hydrate` the styles you should use the proper `id` so `goober` can pick it up and use it as the target from now on
```

### `glob`

To create a global style, you need to call `glob` with your global tagged template. Usually here's a good idea to place document wide styles.

```js
import { glob } from 'goober';

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

# Features

-   [x] Basic CSS parsing
-   [x] Nested rules with pseudo selectors
-   [x] Nested styled components
-   [x] Media queries (@media)
-   [x] Keyframes (@keyframes)
-   [x] Smart(lazy) client-side hydration
-   [x] Vanilla(via `css` function)
-   [x] `globalStyle`(via `glob`) so one would be able to create global styles
-   [x] target/extract from elements other than `<head>`
-   [ ] Vendor prefixing

# Browser support

`goober` uses microbundle to bundle and transpile it's src into code that browsers can leverage. As you might figure it out, until now, Internet Explorer was the buggiest of them all. `goober` works on IE9, as we've successfully test it.

```
IE 9
iOS 9.3
Chrome 42
FF 34
Safari 9
```

# Contributing

Feel free to try it out and checkout the examples. If you wanna fix something feel free to open a issue or a PR.
