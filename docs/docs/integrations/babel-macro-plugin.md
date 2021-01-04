---
id: babel-macro-plugin
title: Babel Macro Plugin
sidebar_label: Babel Macro Plugin
---

A babel-plugin-macros macro for 🥜goober, rewriting `styled.div` syntax to `styled('div')` calls.

## Usage

Once you've configured babel-plugin-macros, change your imports from `goober` to `goober/macro`.

Now you can create your components using `styled.*` syntax:.

```js
import { styled } from "goober/macro";

const Button = styled.button`
  margin: 0;
  padding: 1rem;
  font-size: 1rem;
  background-color: tomato;
`;
```
