<p align="center">
  <img src="./goober_cover.png" width="500" alt="goober" />
</p>

🥜 goober, a less than 1KB css-in-js solution.

[![Backers on Open Collective](https://opencollective.com/goober/backers/badge.svg)](#backers)
[![Sponsors on Open Collective](https://opencollective.com/goober/sponsors/badge.svg)](#sponsors)

[![version](https://img.shields.io/npm/v/goober)](https://www.npmjs.com/package/goober)
[![status](https://travis-ci.org/cristianbote/goober.svg?branch=master)](https://travis-ci.org/cristianbote/goober)
[![gzip size](https://img.badgesize.io/https://unpkg.com/goober@latest/dist/goober.modern.js?compression=gzip)](https://unpkg.com/goober)
[![downloads](https://img.shields.io/npm/dm/goober)](https://www.npmjs.com/package/goober)
[![coverage](https://img.shields.io/codecov/c/github/cristianbote/goober.svg?maxAge=2592000)](https://codecov.io/github/cristianbote/goober?branch=master)
[![Slack](https://img.shields.io/badge/slack-join-orange)](https://join.slack.com/t/gooberdev/shared_invite/enQtOTM5NjUyOTcwNzI1LWUwNzg0NTQwODY1NDJmMzQ2NzdlODI4YTM3NWUwYjlkY2ZkNGVmMTFlNGMwZGUyOWQyZmI4OTYwYmRiMzE0NGQ)

# Motivation

I've always wondered if you could get a working solution for css-in-js with a smaller footprint. This library provides a minimal, lightweight alternative focused on the core functionality of CSS-in-JS without the overhead of larger libraries.

# Why the peanuts emoji?

It's a pun on the tagline.

> css-in-js at the cost of peanuts!
> 🥜goober

# Talks and Podcasts

* [React Round Up](https://reactroundup.com/wrangle-your-css-in-js-for-peanuts-using-goober-ft-cristian-bote-rru-177) 👉 https://reactroundup.com/wrangle-your-css-in-js-for-peanuts-using-goober-ft-cristian-bote-rru-177
* ReactDay Berlin 2019 👉  https://www.youtube.com/watch?v=k4-AVy3acqk
* [PodRocket](https://podrocket.logrocket.com/) by [LogRocket](https://logrocket.com/) 👉 https://podrocket.logrocket.com/goober
* [ngParty](https://www.ngparty.cz/) 👉 https://www.youtube.com/watch?v=XKFvOBDPeB0

# Table of contents

-   [Usage](#usage)
-   [Examples](#examples)
-   [SSR](#ssr)
-   [API](#api)
    -   [css](#css)
    -   [glob](#glob)
    -   [keyframes](#keyframes)
    -   [setup](#setup)
    -   [targets](#targets)
    -   [extractCss](#extractcss)
    -   [createGlobalStyles](#createglobalstyles)
-   [Features](#features)
    -   [Autoprefixer](#autoprefixer)
    -   [TypeScript](#typescript)
    -   [Content Security Policy (CSP)](#content-security-policy-csp)
-   [Browser Support](#browser-support)
-   [Contributing](#contributing)

# Usage

goober provides a lightweight css-in-js solution using object syntax. You use the `css` function to generate class names, and apply them to your elements.

```jsx
import { css } from 'goober';

const buttonClass = css({
    background: 'dodgerblue',
    color: 'white',
    border: '1px solid white',
    padding: '1em',
    '&:focus, &:hover': {
        padding: '1.5em'
    }
});

const Button = (props) => <button className={buttonClass}>{props.children}</button>;
```

You can also use dynamic styles by passing a function:

```jsx
import { css } from 'goober';

const Button = ({ color, children }) => {
    const buttonClass = css({
        background: color,
        color: 'white',
        padding: '1em'
    });

    return <button className={buttonClass}>{children}</button>;
};
```

# Examples

-   [Vanilla](https://codesandbox.io/s/qlywyp7z4q)
-   [React](https://codesandbox.io/s/k0mnp40n7v)
-   [Preact](https://codesandbox.io/s/r15wj2qm7o)
-   [SSR with Preact](https://codesandbox.io/s/7m9zzl6746)
-   [Fre](https://codesandbox.io/s/fre-goober-ffqjv)

# SSR

You can get the critical CSS for SSR via `extractCss`. Take a look at this example: [CodeSandbox: SSR with Preact and goober](https://codesandbox.io/s/7m9zzl6746) and read the full explanation for `extractCSS` and `targets` below.

# API

goober supports most CSS syntax. If you find any issues, please submit a ticket, or open a PR with a fix.

### `css(styles)`

-   `@param {Object|Function} styles` - CSS object or function returning CSS object
-   `@returns {String}` Returns the className.

To create a className, call `css` with a style object:

```js
import { css } from 'goober';

const BtnClassName = css({
    borderRadius: '4px'
});

// vanilla JS
const btn = document.querySelector('#btn');
// BtnClassName === 'g016232'
btn.classList.add(BtnClassName);

// JSX
// BtnClassName === 'g016232'
const App = () => <button className={BtnClassName}>click</button>;
```

#### Dynamic styles

You can pass dynamic values directly in the object:

```js
import { css } from 'goober';

const CustomButton = ({ size }) => (
    <button
        className={css({
            borderRadius: size + 'px'
        })}
    >
        click
    </button>
);
```

Or create reusable style functions:

```js
import { css } from 'goober';

const BtnClassName = (props) =>
    css({
        background: props.color,
        borderRadius: props.radius + 'px'
    });

// vanilla JS
const btn = document.querySelector('#btn');
btn.classList.add(BtnClassName({ color: 'red', radius: 20 }));

// JSX
const App = () => <button className={BtnClassName({ color: 'blue', radius: 4 })}>click</button>;
```

### `targets`

By default, goober will append a style tag to the `<head>` of a document. You might want to target a different node, for instance, when you want to use goober with web components (so you'd want it to append style tags to individual shadowRoots). For this purpose, you can `.bind` a new target to the `css` method:

```js
import * as goober from 'goober';
const target = document.getElementById('target');
const css = goober.css.bind({ target: target });
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

### `glob(styles)`

Define global styles that apply to the entire document:

```js
import { glob } from 'goober';

glob({
    html: {
        background: 'light'
    },
    body: {
        background: 'light'
    },
    '*': {
        boxSizing: 'border-box'
    }
});
```

### `createGlobalStyles`

To define your global styles as a component, use `createGlobalStyles` from the `goober/global` addon:

```js
import { createGlobalStyles } from 'goober/global';

const GlobalStyles = createGlobalStyles({
    html: {
        background: 'light'
    },
    body: {
        background: 'light'
    },
    '*': {
        boxSizing: 'border-box'
    }
});

export default function App() {
    return (
        <div id="root">
            <GlobalStyles />
            <Navigation />
            <RestOfYourApp />
        </div>
    );
}
```

### `keyframes(styles)`

Define reusable animations:

```js
import { css, keyframes } from 'goober';

const rotate = keyframes({
    from: {
        transform: 'rotate(0deg)'
    },
    to: {
        transform: 'rotate(180deg)'
    }
});

const wickedClass = css({
    background: 'tomato',
    color: 'white',
    animation: `${rotate} 1s ease-in-out`
});
```

# Features

-   [x] Basic CSS parsing
-   [x] Nested rules with pseudo selectors
-   [x] Media queries (@media)
-   [x] Keyframes (@keyframes)
-   [x] Smart (lazy) client-side hydration
-   [x] Vanilla CSS via `css` function
-   [x] Global styles via `glob` and `createGlobalStyles`
-   [x] Target/extract from elements other than `<head>`
-   [x] [Vendor prefixing](#autoprefixer)

# Content Security Policy (CSP)

goober supports Content Security Policy nonces for inline styles. Set `window.__nonce__` before loading the library:

```js
<script nonce="your-nonce-here">
  window.__nonce__ = 'your-nonce-here';
</script>
```

The nonce will be added to goober's `<style>` element.

# Autoprefixer

Autoprefixing is a helpful way to make sure the generated css will work seamlessly on the whole spectrum of browsers. With that in mind, the core `goober` package can't hold that logic to determine the autoprefixing needs, so we added a new package that you can choose to address them.

```sh
npm install goober
# or
yarn add goober
```

After the main package is installed it's time to configure goober with it:

```js
import { setup } from 'goober';
import { prefix } from 'goober/prefixer';

// Configure goober with autoprefixing
setup(prefix);
```

And voilà! It is done!

# TypeScript

`goober` comes with type definitions built in, making it easy to get started in TypeScript straight away. All the main functions (`css`, `glob`, `keyframes`, `setup`, `extractCss`) are fully typed.

# Browser support

`goober` supports all major browsers (Chrome, Edge, Firefox, Safari).

To support IE 11 and older browsers, make sure to use a tool like [Babel](https://babeljs.io/) to transform your code into code that works in the browsers you target.

# Contributing

Feel free to try it out and checkout the examples. If you wanna fix something feel free to open a issue or a PR.

## Backers

Thank you to all our backers! 🙏
<a href="https://opencollective.com/goober#backers" target="_blank"><img src="https://opencollective.com/goober/backers.svg?width=890"></a>

## Sponsors

Support this project by becoming a sponsor. Your logo will show up here with a link to your website.
<a href="https://opencollective.com/goober#sponsors" target="_blank"><img src="https://opencollective.com/goober/sponsors.svg?width=890"></a>
