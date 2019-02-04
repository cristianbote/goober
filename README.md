goober 🌰
===
800B css-in-js solution.

# Motivation
I always wondered, if you can get a working solution for css-in-js with a smaller footprint. I started a project and wanted a to use styled-components. Looking at their sizes, it seems that I would rather not include ~16kB(styled-components) or ~11kB(emotion) just so I can use the `styled` paradigm. So, I embarked in a mission to create a smaller alternative for these well established apis.

I was heavily inspired by emotion and styled-components. The solution that they offer, are battle-tested and users are familiar with them.

# Usage
The API is inspired by emotion(v9).

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

# API
As you can see it supports most of the syntaxes of CSS. If you find any issues, please submit a ticket or even a PR with a fix.

*styled*

# SSR
You can get the critical CSS for SSR, via `extractCss`. Take a look at this example: <link>

# FAQ
* Why should I use this?