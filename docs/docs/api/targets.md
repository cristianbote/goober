---
id: targets
title: targets
sidebar_label: targets
---

`targets`

By default, goober will append a style tag to the `<head>` of a document. You might want to target a different node, for instance, when you want to use goober with web components (so you'd want it to append style tags to individual shadowRoots). For this purpose, you can `.bind` a new target to the `styled` and `css` methods:

```js
import * as goober from "goober";
const target = document.getElementById("target");
const css = goober.css.bind({ target: target });
const styled = goober.styled.bind({ target: target });
```

If you don't provide a target, goober always defaults to `<head>` and in environments without a DOM (think certain SSR solutions), it will just use a plain string cache to store generated styles which you can extract with `extractCSS`(see below).
