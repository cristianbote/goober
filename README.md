goober 🌰
===
700B css-in-js solution.

# Motivation
I always wondered, if you can get a working solution for css-in-js with a smaller footprint. I started a project and wanted a to use styled-components. Looking at their sizes, it seems that I would rather not include ~16kB([styled-components](https://github.com/styled-components/styled-components)) or ~11kB([emotion](https://github.com/emotion-js/emotion)) just so I can use the `styled` paradigm. So, I embarked in a mission to create a smaller alternative for these well established apis.

# Usage
The API is inspired by emotion, `styled` function. Meaning, you call it with your `tagName` and returns a vDOM component for that tag.

```jsx
import { styled } from "goober";

const Icon = styled("i")`
  display: flex;
  flex: 1;
  color: red;
`;

const Button = styled("button")`
  background: dodgerblue;
  color: white;
  border: 0;

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

# SSR
You can get the critical CSS for SSR, via `extractCss`. Take a look at this example: (codesandbox link)

# API
As you can see it supports most of the syntaxes of CSS. If you find any issues, please submit a ticket or even a PR with a fix.

`styled(tagName)`
* `@param {String} tagName` The name of the dom element you'd like the styled to be applied to
* `@returns {Function}` Returns the tag template function.

`extractCss()`
* `@returns {String}` Returns the `<style>` tag should be rendered in your document `<head>`.

# Features
- [x] Basic CSS parsing
- [x] Nested rules with pseudo selectors
- [x] Nested styled components
- [x] Media queries (@media)
- [x] Keyframes (@keyframes)
- [ ] Smart(lazy) client-side hydration

# FAQ
* Why should I use this?