basket 🧺
===
800B css-in-js solution.

# Usage
The API is inspired by emotion(v9).

```jsx
import { styled } from "basket";

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

# Motivation
As far as I can tell, emotion is moving away from it's previous approach.

# SSR
You can get the critical CSS for SSR, via `extractCss`. Take a look at this example: <link>