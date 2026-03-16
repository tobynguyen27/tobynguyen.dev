import antfu from "@antfu/eslint-config"

export default antfu({
    type: "app",

    gitignore: true,

    stylistic: {
        indent: 4,
        quotes: "double",
    },
    formatters: {
        css: true,
    },

    vue: true,
    typescript: true,
    astro: true,
    unocss: true,
    toml: true,
    jsonc: true,
    yaml: {
        overrides: {
            "yaml/indent": ["error", 2],
        },
    },
})
