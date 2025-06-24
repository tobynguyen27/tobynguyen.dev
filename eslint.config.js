import antfu from "@antfu/eslint-config";

export default antfu({
  type: "app",

  stylistic: {
    indent: 2,
    quotes: "double",
    semi: true,
  },

  formatters: {
    markdown: "dprint",
    css: "prettier",
  },

  typescript: true,
  astro: true,
  unocss: true,
});
