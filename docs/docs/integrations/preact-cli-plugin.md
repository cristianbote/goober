---
id: preact-cli-plugin
title: Preact CLI Plugin
sidebar_label: Preact CLI Plugin
---

If you use Goober with Preact CLI, you can use [preact-cli-goober-ssr](https://github.com/gerhardsletten/preact-cli-goober-ssr)

```sh
npm i --save-dev preact-cli-goober-ssr
# or
yarn add --dev preact-cli-goober-ssr
# preact.config.js
const gooberPlugin = require('preact-cli-goober-ssr')
export default (config, env) => {
  gooberPlugin(config, env)
}
```
When you build your Preact application this will run `extractCss` on your prerendered pages and add critical styles for each page.
