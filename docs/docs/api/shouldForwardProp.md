---
id: shouldForwardProp
title: shouldForwardProp
sidebar_label: shouldForwardProp
---

`shouldForwardProp`

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
