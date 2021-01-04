---
id: keyframes
title: keyframes
sidebar_label: keyframes
---

`keyframes`

`keyframes` is a helpful method to define reusable animations that can be decoupled from the main style declaration and shared across components.

```js
import { keyframes } from "goober";

const rotate = keyframes`
    from, to {
        transform: rotate(0deg);
    }

    50% {
        transform: rotate(180deg);
    }
`;

const Wicked = styled("div")`
  background: tomato;
  color: white;
  animation: ${rotate} 1s ease-in-out;
`;
```
