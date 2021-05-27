---
id: typescript
title: TypeScript
sidebar_label: TypeScript
---

`goober` comes with types included, making developing with TypeScript easy.

## Prop Types

If you're utilising custom props and wish to style based on them, you can do so when initialising as follows:

```ts
interface Props {
    size: number;
}

styled('div')<Props>`
    border-radius: ${(props) => props.size}px;
`;

// This also works!

styled<Props>('div')`
    border-radius: ${(props) => props.size}px;
`;
```

## Extending Theme

If you're using a [custom theme](../api/setup.md#with-theme) with goober, to add types to it you should create a declaration file at the base of your project.

```ts
// goober.d.t.s

import 'goober';

declare module 'goober' {
    export interface DefaultTheme {
        colors: {
            primary: string;
        };
    }
}
```

You should now have autocompletion for your theme.

```ts
const ThemeContainer = styled('div')`
    background-color: ${(props) => props.theme.colors.primary};
`;
```

#### Note when using Preact

If utilising Preact, add the following into a declaration file at the root of your project to enable typing:

```ts
// preact.d.ts

import JSX = preact.JSX;
```
