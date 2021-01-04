---
id: autoprefixer
title: Autoprefixer
sidebar_label: Autoprefixer
---

Autoprefixing is a helpful way to make sure the generated css will work seamlessly on the whole spectrum of browsers. With that in mind, the core `goober` package can't hold that logic to determine the autoprefixing needs, so we added a new package that you can choose to address them.

```sh
npm install goober-autoprefixer
# or
yarn add goober-autoprefixer
```

After the above package is installed it's time to bootstrap goober with it:

```js
import { setup } from "goober";
import { prefix } from "goober-autoprefixer";

// Bootstrap goober
setup(React.createElement, prefix);
```

And voila! It is done!
