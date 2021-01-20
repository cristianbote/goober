<p align="center">
  <img src="./goober_cover.png" width="500" alt="goober" />
</p>

🥜 goober, a less than 1KB css-in-js solution.

[![Backers on Open Collective](https://opencollective.com/goober/backers/badge.svg)](#backers)
[![Sponsors on Open Collective](https://opencollective.com/goober/sponsors/badge.svg)](#sponsors)

[![version](https://img.shields.io/npm/v/goober)](https://www.npmjs.com/package/goober)
[![status](https://travis-ci.org/cristianbote/goober.svg?branch=master)](https://travis-ci.org/cristianbote/goober)
[![gzip size](https://img.badgesize.io/https://unpkg.com/goober@latest/dist/goober.module.js?compression=gzip)](https://unpkg.com/goober)
[![downloads](https://img.shields.io/npm/dm/goober)](https://www.npmjs.com/package/goober)
[![coverage](https://img.shields.io/codecov/c/github/cristianbote/goober.svg?maxAge=2592000)](https://codecov.io/github/cristianbote/goober?branch=master)
[![Slack](https://img.shields.io/badge/slack-join-orange)](https://join.slack.com/t/gooberdev/shared_invite/enQtOTM5NjUyOTcwNzI1LWUwNzg0NTQwODY1NDJmMzQ2NzdlODI4YTM3NWUwYjlkY2ZkNGVmMTFlNGMwZGUyOWQyZmI4OTYwYmRiMzE0NGQ)
[![Greenkeeper badge](https://badges.greenkeeper.io/cristianbote/goober.svg)](https://greenkeeper.io/)

# Motivation

I always wondered, if you can get a working solution for css-in-js with a smaller footprint. So, while I was working on a side-project I wanted a to use styled-components or more accurate the `styled` pattern. Looking at the JavaScript bundled sizes, I quickly realized that I would have to include ~12kB([styled-components](https://github.com/styled-components/styled-components)) or ~11kB([emotion](https://github.com/emotion-js/emotion)) just so I can use the `styled` paradigm. So, I embarked in a mission to create a smaller alternative for these well established apis.

# Why the peanuts emoji?

It's a pun on the tagline.

> css-in-js at the cost of peanuts!
> 🥜goober

# Table of contents

-   [Usage](#usage)
-   [Examples](#examples)
-   [SSR](#ssr)
-   [Benchmarks](#benchmarks)
    -   [Browser](#browser)
    -   [SSR](#ssr-1)
-   [API](#api)
    -   [styled](#styledtagname-string--function-forwardref-function)
    -   [setup](#setuppragma-function-prefixer-function-theme-function-forwardprops-function)
        -   [With prefixer](#with-prefixer)
        -   [With theme](#with-theme)
        -   [With forwardProps](#with-forwardProps)
    -   [css](#csstaggedtemplate)
    -   [targets](#targets)
    -   [extractCss](#extractcsstarget)
    -   [createGlobalStyles](#createglobalstyles)
    -   [keyframes](#keyframes)
    -   [shouldForwardProp](#shouldForwardProp)
-   [Integrations](#integrations)
    -   [Babel Plugin](#babel-plugin)
    -   [Babel Macro Plugin](#babel-macro-plugin)
    -   [Gatsby](#gatsby)
    -   [Preact CLI Plugin](#preact-cli-plugin)
    -   [CSS Prop](#css-prop)
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

The results are included inside the build output as well.

## Browser

Comming soon!

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
goober x 169,157 ops/sec ±1.29% (91 runs sampled)
styled-components x 10,558 ops/sec ±7.44% (55 runs sampled)
emotion@10.0.27 x 73,287 ops/sec ±3.69% (88 runs sampled)

Fastest is: goober
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

##### Arrays

```js
import { styled } from 'goober';

const Btn = styled('button')([
    { color: 'tomato' },
    ({ isPrimary }) => ({ background: isPrimary ? 'cyan' : 'gray' })
]);

<Btn />; // This will render the `Button` with `background: gray;`
<Btn isPrimary />; // This will render the `Button` with `background: cyan;`
```

### `setup(pragma: Function, prefixer?: Function, theme?: Function, forwardProps?: Function)`

Given the fact that `react` uses `createElement` for the transformed elements and `preact` uses `h`, `setup` should be called with the proper _pragma_ function. This was added to reduce the bundled size and being able to bundle esmodule version. At the moment I think it's the best tradeoff we can have.

```js
import React from 'react';
import { setup } from 'goober';

setup(React.createElement);
```

#### With prefixer

```js
import React from 'react';
import { setup } from 'goober';

const customPrefixer = (key, value) => `${key}: ${value};\n`;

setup(React.createElement, customPrefixer);
```

#### With theme

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

#### With forwardProps

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

The functionality of "transient props" (with a "\$" prefix) can be implemented as follows:

```js
import React from 'react';
import { setup, styled } from 'goober';

setup(React.createElement, undefined, undefined, (props) => {
    for (let prop in props) {
        if (prop[0] === '$') {
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
const BtnClassName = (props) =>
    css({
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

The difference between calling `css` directly and wrapping into a function is the timing of its execution. The former is when the component(file) is imported, the latter is when it is actually rendered.

If you use `extractCSS` for SSR, you may prefer to use the latter or `styled` api to avoid inconsistent results.

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

### `createGlobalStyles`

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

#### How about using `glob` function directly?

Before the global addon, `goober/global`, there was a method named `glob` that was part of the main package that would do the same thing, more or less. Having only that method to define global styles usually led to missing global styles from the extracted css, since the pattern did not enforced the evaluation of the styles at render time. The `glob` method it is still exported from `goober/global` if you have a hard dependency on it. It still has the same API:

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

### `keyframes`

`keyframes` is a helpful method to define reusable animations that can be decoupled from the main style declaration and shared across components.

```js
import { keyframes } from 'goober';

const rotate = keyframes`
    from, to {
        transform: rotate(0deg);
    }

    50% {
        transform: rotate(180deg);
    }
`;

const Wicked = styled('div')`
    background: tomato;
    color: white;
    animation: ${rotate} 1s ease-in-out;
`;
```

### `shouldForwardProp`

To seamingly implement the `shouldForwardProp` without the need to provide the full loop over `props` you can use the `goober/should-forward-prop` addon.

```js
import { h } from 'preact';
import { setup } from 'goober';
import { shouldForwardProp } from 'goober/should-forward-prop';

setup(
    h,
    undefined,
    undefined,
    shouldForwardProp((prop) => {
        // Do NOT forward props that start with `$` symbol
        return prop['0'] !== '$';
    })
);
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

## Babel macro plugin

A babel-plugin-macros macro for [🥜goober][goober], rewriting `styled.div` syntax to `styled('div')` calls.

### Usage

Once you've configured [babel-plugin-macros](https://github.com/kentcdodds/babel-plugin-macros), change your imports from `goober` to `goober/macro`.

Now you can create your components using `styled.*` syntax:.

```js
import { styled } from 'goober/macro';

const Button = styled.button`
    margin: 0;
    padding: 1rem;
    font-size: 1rem;
    background-color: tomato;
`;
```

## [Gatsby](https://github.com/gatsbyjs/gatsby)

Want to use `goober` with Gatsby? We've got you covered! We have our own plugin to deal with styling your Gatsby projects.

```sh
npm i --save gatsby-plugin-goober
# or
yarn add gatsby-plugin-goober
```

## Preact CLI plugin

If you use Goober with Preact CLI, you can use [preact-cli-goober-ssr](https://github.com/gerhardsletten/preact-cli-goober-ssr)

```sh
npm i --save-dev preact-cli-goober-ssr
# or
yarn add --dev preact-cli-goober-ssr

# preact.config.js
const gooberPlugin = require('preact-cli-goober-ssr')

export default (config, env) => {
  gooberPlugin(config, env)
}
```

When you build your Preact application this will run `extractCss` on your prerendered pages and add critical styles for each page.

## CSS Prop

You can use a custom `css` prop to pass in styles on HTML elements with this Babel plugin.

Installation:

```sh
npm install --save-dev @agney/babel-plugin-goober-css-prop
```

List the plugin in `.babelrc`:

```
{
  "plugins": [
    "@agney/babel-plugin-goober-css-prop"
  ]
}
```

Usage:

```javascript
<main
    css={`
        display: flex;
        min-height: 100vh;
        justify-content: center;
        align-items: center;
    `}
>
    <h1 css="color: dodgerblue">Goober</h1>
</main>
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
npm install goober
# or
yarn add goober
```

After the main package is installed it's time to bootstrap goober with it:

```js
import { setup } from 'goober';
import { prefix } from 'goober/prefixer';

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
