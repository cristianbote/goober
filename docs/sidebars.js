module.exports = {
  docs: [
    {
      type: "doc",
      id: "introduction",
    },
    {
      type: "category",
      label: "API",
      collapsed: false,
      items: [
        "api/styled",
        "api/setup",
        "api/css",
        "api/targets",
        "api/extractCss",
        "api/createGlobalStyles",
        "api/keyframes",
      ],
    },
    {
      type: "category",
      label: "Integrations",
      collapsed: false,
      items: [
        "integrations/babel-plugin",
        "integrations/babel-macro-plugin",
        "integrations/gatsby",
        "integrations/preact-cli-plugin",
      ],
    },
    {
      type: "category",
      label: "Features",
      collapsed: false,
      items: [
        "features/checklist",
        "features/sharing-style",
        "features/autoprefixer",
      ],
    },
    {
      type: "doc",
      id: "contributing",
    },
  ],
};
