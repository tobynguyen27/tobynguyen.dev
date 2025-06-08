import antfu from "@antfu/eslint-config"

export default antfu({
    type: "app",

    stylistic: {
        indent: 4,
        quotes: "double",
    },

    formatters: {
        markdown: "dprint",
    },

    typescript: true,
    astro: true,
    unocss: true,
})
