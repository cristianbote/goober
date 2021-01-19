---
id: css-prop
title: CSS Prop
sidebar_label: CSS Prop
---

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
<main css={`display: flex; min-height: 100vh; justify-content: center; align-items: center;`}>
  <h1 css="color: dodgerblue">Goober</h1>
</main>
```