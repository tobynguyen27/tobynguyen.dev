import MDX from "@astrojs/mdx"
import Vue from "@astrojs/vue"
import { defineConfig } from "astro/config"
import UnoCSS from "unocss/astro"

export default defineConfig({
    integrations: [UnoCSS(), Vue(), MDX()],

    markdown: {
        shikiConfig: {
            themes: {
                light: "catppuccin-latte",
                dark: "catppuccin-mocha",
            },
        },
    },

    site: "https://tobynguyen.net",
    output: "static",

    server: { port: 5173 },

    vite: {
        optimizeDeps: {
            exclude: ["@takumi-rs/core"],
        },
        ssr: {
            external: ["@takumi-rs/core"],
        },
    },

    experimental: {
        rustCompiler: true,
    },
})
