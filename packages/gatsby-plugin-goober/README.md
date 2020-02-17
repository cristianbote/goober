# gatsby-plugin-goober

A [Gatsby](https://github.com/gatsbyjs/gatsby) plugin for
[🥜goober](https://github.com/cristianbote/goober) with auto pragma config and
built-in server-side rendering support.

## Install

`npm install --save goober gatsby-plugin-goober`

## How to use

Edit `gatsby-config.js`

```javascript
module.exports = {
    plugins: [`gatsby-plugin-goober`]
};
```

And now you can create your components using `goober`

```jsx
import React from 'react';
import { styled } from 'goober';

const Button = styled('button')`
    margin: 0;
    padding: 1rem;
    font-size: 1rem;
    background-color: tomato;
`;
```

## What does `auto pragma config` means?

`goober` needs to be instructed which pragma, eg JSX function, should be used to create the styled component. This is done via `setup` function and usually it's something that needs to be done inside the entry point or main file. For `Gatsby` that means `gatsby-browser.js` and `gatsby-ssr.js` which this plugin takes care of. So no need to worry about it, you simply use `goober` and everything is taken care of.
