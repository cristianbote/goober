---
id: extractCss
title: extractCss
sidebar_label: extractCss
---

`extractCss(target?)`

- `@returns {String}`

Returns the `<style>` tag that is rendered in a target and clears the style sheet. Defaults to `<head>`.

```js
const { extractCss } = require("goober");

// After your app has rendered, just call it:
const styleTag = `<style id="_goober">${extractCss()}</style>`;

// Note: To be able to `hydrate` the styles you should use the proper `id` so `goober` can pick it up and use it as the target from now on
```
