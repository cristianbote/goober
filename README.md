<p align="center">
  <img src="https://i.imgur.com/hHXmkvE.png" width="500" alt="goober" />
</p>

🥜 goober, a less than 1KB css-in-js solution.

[![Backers on Open Collective](https://opencollective.com/goober/backers/badge.svg)](#backers)
[![Sponsors on Open Collective](https://opencollective.com/goober/sponsors/badge.svg)](#sponsors)

[![version](https://img.shields.io/npm/v/goober)](https://www.npmjs.com/package/goober)
[![status](https://travis-ci.org/cristianbote/goober.svg?branch=master)](https://travis-ci.org/cristianbote/goober)
[![gzip size](https://img.badgesize.io/https://unpkg.com/goober@latest/dist/goober.module.js?compression=gzip)](https://unpkg.com/goober)
[![downloads](https://img.shields.io/npm/dw/goober)](https://www.npmjs.com/package/goober)
[![coverage](https://img.shields.io/codecov/c/github/cristianbote/goober.svg?maxAge=2592000)](https://codecov.io/github/cristianbote/goober?branch=master)
[![Slack](https://img.shields.io/badge/slack-join-orange)](https://join.slack.com/t/gooberdev/shared_invite/enQtOTM5NjUyOTcwNzI1LWUwNzg0NTQwODY1NDJmMzQ2NzdlODI4YTM3NWUwYjlkY2ZkNGVmMTFlNGMwZGUyOWQyZmI4OTYwYmRiMzE0NGQ)
[![Greenkeeper badge](https://badges.greenkeeper.io/cristianbote/goober.svg)](https://greenkeeper.io/)

# Motivation

I always wondered, if you can get a working solution for css-in-js with a smaller footprint. I started a project and wanted a to use styled-components. Looking at their sizes, it seems that I would rather not include ~12kB([styled-components](https://github.com/styled-components/styled-components)) or ~11kB([emotion](https://github.com/emotion-js/emotion)) just so I can use the `styled` paradigm. So, I embarked in a mission to create a smaller alternative for these well established apis.

# Table of contents

-   [Usage](#usage)
-   [Examples](#examples)
-   [SSR](#ssr)
-   [Benchmarks](#benchmarks)
    -   [Browser](#browser)
    -   [SSR](#ssr-1)
-   [API](#api)
    -   [styled](#styledtagname)
    -   [setup](#setpragmapragma-function)
    -   [css](#csstaggedtemplate)
    -   [targets](#targets)
    -   [extractCss](#extractcsstarget)
    -   [glob](#glob)
-   [Integrations](#integrations)
    -   [Babel Plugin](#babel-plugin)
    -   [Gatsby](#gatsby)
-   [Features](#features)
    -   [Sharing Style](#sharing-style)
    -   [Autoprefixer](#autoprefixer)
-   [Browser Support](#browser-support)
-   [Contributing](#contributing)

# Usage

The API is inspired by emotion, `styled` function. Meaning, you call it with your `tagName` and returns a vDOM component for that tag. Note, `setup` is needed to be run before the `styled` function is used.

```jsx
import { h } from 'preact';
import { styled, setup } from 'goober';

// Should be called here, and just once
setup(h);

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
-   [Fre](https://codesandbox.io/s/fre-goober-ffqjv)

# SSR

You can get the critical CSS for SSR, via `extractCss`. Take a look at this example: [CodeSandbox: SSR with Preact and goober](https://codesandbox.io/s/7m9zzl6746) and read the full explanation for `extractCSS` and `targets` below.

# Benchmarks

You results are included inside the build output as well.

## Browser

These are not yet measured. Need some time.

## SSR

The benchmark is testing the following scenario:

```jsx
import styled from 'package';

// Create the dynamic styled component
const Foo = styled('div')((props) => ({
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

### `styled(tagName: String | Function, forwardRef?: Function)`

-   `@param {String|Function} tagName` The name of the dom element you'd like the styled to be applied to
-   `@param {Function} forwardRef` Forward ref function. Usually `React.forwardRef`
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
    border-radius: ${(props) => props.size}px;
`;

<Btn size={20} />;
```

##### Function that returns a string

```js
import { styled } from 'goober';

const Btn = styled('button')(
    (props) => `
  border-radius: ${props.size}px;
`
);

<Btn size={20} />;
```

##### JSON/Object

```js
import { styled } from 'goober';

const Btn = styled('button')((props) => ({
    borderRadius: props.size + 'px'
}));

<Btn size={20} />;
```

### `setup(pragma: Function, prefixer?: Function, theme?: Function)`

Given the fact that `react` uses `createElement` for the transformed elements and `preact` uses `h`, `setup` should be called with the proper _pragma_ function. This was added to reduce the bundled size and being able to bundle esmodule version. At the moment I think it's the best tradeoff we can have.

```js
import React from 'react';
import { setup } from 'goober';

setup(React.createElement);
```

### `css(taggedTemplate)`

-   `@returns {String}` Returns the className.

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

#### Different ways of customizing `css`

##### Passing props to `css` tagged templates

```js
import { css } from 'goober';

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

##### Using `css` with JSON/Object

```js
import { css } from 'goober';
const BtnClassName = props => css({
    background: props.color,
    borderRadius: props.radius + 'px'
});
```

**Notice:** using `css` with object can reduce your bundle size.

We also can declare the styles at the top of the file by wrapping `css` into a function that we call to get the className.

```js
import { css } from 'goober';

const BtnClassName = (props) => css`
    border-radius: ${props.size}px;
`;

// vanilla JS
// BtnClassName({size:20}) -> g016360
const btn = document.querySelector('#btn');
btn.classList.add(BtnClassName({ size: 20 }));

// JSX
// BtnClassName({size:20}) -> g016360
const App = () => <button className={BtnClassName({ size: 20 })}>click</button>;
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

# Integrations

## Babel plugin

You're in love with the `styled.div` syntax? Fear no more! We got you covered with a babel plugin that will take your lovely syntax from `styled.tag` and translate it to goober's `styled("tag")` call.

```sh
npm i --save-dev babel-plugin-transform-goober
# or
yarn add --dev babel-plugin-transform-goober
```

Visit the package in here for more info (https://github.com/cristianbote/goober/tree/master/packages/babel-plugin-transform-goober)

## [Gatsby](https://github.com/gatsbyjs/gatsby)

Want to use `goober` with Gatsby? We've got you covered! We have our own plugin to deal with styling your Gatsby projects.

```sh
npm i --save gatsby-plugin-goober
# or
yarn add gatsby-plugin-goober
```

# Features

-   [x] Basic CSS parsing
-   [x] Nested rules with pseudo selectors
-   [x] Nested styled components
-   [x] [Extending Styles](#sharing-style)
-   [x] Media queries (@media)
-   [x] Keyframes (@keyframes)
-   [x] Smart(lazy) client-side hydration
-   [x] Styling any component
    -   via `` const Btn = ({className}) => {...}; const TomatoBtn = styled(Btn)`color: tomato;` ``
-   [x] Vanilla(via `css` function)
-   [x] `globalStyle`(via `glob`) so one would be able to create global styles
-   [x] target/extract from elements other than `<head>`
-   [x] [vendor prefixing](#autoprefixer)

# Sharing style

There are a couple of ways to effectly share/extend styles across components.

## Extending

One can simply extend the desired component that needs to be enrich or overwriten with another set of css rules.

```js
import { styled } from 'goober';

// Let's declare a primitive for our styled component
const Primitive = styled('span')`
    margin: 0;
    padding: 0;
`;

// Later on we could get the primitive shared styles and also add our owns
const Container = styled(Primitive)`
    padding: 1em;
`;
```

## Using `as` prop

Another helpful way to extend a certain component is with the `as` property. Given our example above we could modify it like:

```jsx
import { styled } from 'goober';

// Our primitive element
const Primitive = styled('span')`
    margin: 0;
    padding: 0;
`;

const Container = styled('div')`
    padding: 1em;
`;

// At composition/render time
<Primitive as={'div'} /> // <div class="go01234" />

// Or using the `Container`
<Primitive as={Container} /> // <div class="go01234 go56789" />
```

# Autoprefixer

Autoprefixing is a helpful way to make sure the generated css will work seamlessly on the whole spectrum of browsers. With that in mind, the core `goober` package can't hold that logic to determine the autoprefixing needs, so we added a new package that you can choose to address them.

```sh
npm install goober-autoprefixer
# or
yarn add goober-autoprefixer
```

After the above package is installed it's time to bootstrap goober with it:

```js
import { setup } from 'goober';
import { prefix } from 'goober-autoprefixer';

// Bootstrap goober
setup(React.createElement, prefix);
```

And voila! It is done!

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

## Backers

Thank you to all our backers! 🙏
<a href="https://opencollective.com/goober#backers" target="_blank"><img src="https://opencollective.com/goober/backers.svg?width=890"></a>

## Sponsors

Support this project by becoming a sponsor. Your logo will show up here with a link to your website.
<a href="https://opencollective.com/goober#sponsors" target="_blank"><img src="https://opencollective.com/goober/sponsors.svg?width=890"></a>
