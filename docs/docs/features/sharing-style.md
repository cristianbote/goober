---
id: sharing-style
title: Sharing Style
sidebar_label: Sharing Style
---

There are a couple of ways to effectly share/extend styles across components.

## Extending

One can simply extend the desired component that needs to be enrich or overwriten with another set of css rules.

```js
import { styled } from "goober";

// Let's declare a primitive for our styled component
const Primitive = styled("span")`
  margin: 0;
  padding: 0;
`;

// Later on we could get the primitive shared styles and also add our owns
const Container = styled(Primitive)`
  padding: 1em;
`;
```

## Using `as` prop

Another helpful way to extend a certain component is with the `as` property. Given our example above we could modify it like:

```jsx
import { styled } from 'goober';

// Our primitive element
const Primitive = styled('span')`
    margin: 0;
    padding: 0;
`;

const Container = styled('div')`
    padding: 1em;
`;

// At composition/render time
<Primitive as={'div'} /> // <div class="go01234" />

// Or using the `Container`
<Primitive as={Container} /> // <div class="go01234 go56789" />
```
