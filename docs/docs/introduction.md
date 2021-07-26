---
id: introduction
title: Introduction
sidebar_label: Introduction
slug: /
---

🥜 goober, a less than 1KB css-in-js solution.

[![Backers on Open Collective](https://opencollective.com/goober/backers/badge.svg)](#backers)
[![Sponsors on Open Collective](https://opencollective.com/goober/sponsors/badge.svg)](#sponsors)

[![version](https://img.shields.io/npm/v/goober)](https://www.npmjs.com/package/goober)
[![status](https://travis-ci.org/cristianbote/goober.svg?branch=master)](https://travis-ci.org/cristianbote/goober)
[![gzip size](https://img.badgesize.io/https://unpkg.com/goober@latest/dist/goober.js?compression=gzip)](https://unpkg.com/goober)
[![downloads](https://img.shields.io/npm/dm/goober)](https://www.npmjs.com/package/goober)
[![coverage](https://img.shields.io/codecov/c/github/cristianbote/goober.svg?maxAge=2592000)](https://codecov.io/github/cristianbote/goober?branch=master)
[![Slack](https://img.shields.io/badge/slack-join-orange)](https://join.slack.com/t/gooberdev/shared_invite/enQtOTM5NjUyOTcwNzI1LWUwNzg0NTQwODY1NDJmMzQ2NzdlODI4YTM3NWUwYjlkY2ZkNGVmMTFlNGMwZGUyOWQyZmI4OTYwYmRiMzE0NGQ)
[![Greenkeeper badge](https://badges.greenkeeper.io/cristianbote/goober.svg)](https://greenkeeper.io/)

## Usage

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

## Examples

-   [Vanilla](https://codesandbox.io/s/qlywyp7z4q)
-   [React](https://codesandbox.io/s/k0mnp40n7v)
-   [Preact](https://codesandbox.io/s/r15wj2qm7o)
-   [SSR with Preact](https://codesandbox.io/s/7m9zzl6746)
-   [Fre](https://codesandbox.io/s/fre-goober-ffqjv)

## Comparison and tradeoffs

In this section I would like to describe as objectively as I can the comparision between the two most known css-in-js packages: styled-component and emotion. The latest versions to date.

I would use the follwing markers to reflect the state of each point:

-   ✅ Supported
-   🟡 Partially supported
-   🛑 Not supported

Here we go:

| Feature name           | Goober  | Styled Components | Emotion |
| ---------------------- | ------- | ----------------- | ------- |
| Base bundle size       | 1.25 kB | 12.6 kB           | 7.4 kB  |
| Framework agnostic     | ✅      | 🛑                | 🛑      |
| Render with target \*1 | ✅      | 🛑                | 🛑      |
| `css` api              | ✅      | ✅                | ✅      |
| `css` prop             | ✅      | ✅                | ✅      |
| `styled`               | ✅      | ✅                | ✅      |
| `styled.<tag>`         | ✅ \*2  | ✅                | ✅      |
| `as`                   | ✅      | ✅                | ✅      |
| `.withComponent`       | 🛑      | ✅                | ✅      |
| `.attrs`               | 🛑      | ✅                | 🛑      |
| `shouldForwardProp`    | ✅      | ✅                | ✅      |
| `keyframes`            | ✅      | ✅                | ✅      |
| Labels                 | 🛑      | 🛑                | ✅      |
| ClassNames             | 🛑      | 🛑                | ✅      |
| Global styles          | ✅      | ✅                | ✅      |
| SSR                    | ✅      | ✅                | ✅      |
| Theming                | ✅      | ✅                | ✅      |
| Tagged Templates       | ✅      | ✅                | ✅      |
| Object styles          | ✅      | ✅                | ✅      |
| Dynamic styles         | ✅      | ✅                | ✅      |

Footnotes

-   [1] `goober` can render in _any_ dom target. Meaning you can use `goober` to define scoped styles in any context. Really usefull for web-components.
-   [2] Supported only via `babel-plugin-transform-goober`

## SSR

You can get the critical CSS for SSR, via `extractCss`. Take a look at this example: [CodeSandbox: SSR with Preact and goober](https://codesandbox.io/s/7m9zzl6746) and read the full explanation for `extractCSS` and `targets` below.

## Benchmarks

You results are included inside the build output as well.

### Browser

These are not yet measured. Need some time.

### SSR

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

## Browser support

`goober` supports all major browsers (Chrome, Edge, Firefox, Safari).

To support IE 11 and older browsers, make sure to use a tool like [Babel](https://babeljs.io/) to transform your code into code that works in the browsers you target.
