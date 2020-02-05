# babel-macro-goober

A [babel-plugin-macros][babel-plugin-macros] macro for
[🥜goober][goober], rewriting `styled.div` syntax to `styled('div')` calls.

## Install

```
npm install babel-macro-goober
```

You'll also need to install and configure
[`babel-plugin-macros`][babel-plugin-macros], if you haven't already.

> Some toolkits like [create-react-app][cra] already support `babel-plugin-macros`.

## Usage

Once you've configured [babel-plugin-macros][babel-plugin-macros], change your imports from `goober` to `babel-macro-goober`.

Now you can create your components using `styled.*` syntax:.

```js
import { styled } from 'babel-macro-goober';

const Button = styled.button`
    margin: 0;
    padding: 1rem;
    font-size: 1rem;
    background-color: tomato;
`;
```

**Note**:

[babel-plugin-transform-goober][babel-plugin-transform-goober] allows you to use the same syntax without changing the imports.

[goober]: https://github.com/cristianbote/goober
[babel-plugin-transform-goober]: https://github.com/cristianbote/goober/tree/master/packages/babel-plugin-transform-goober
[babel-plugin-macros]: https://github.com/kentcdodds/babel-plugin-macros
[cra]: https://github.com/facebookincubator/create-react-app
