import mdx from "@astrojs/mdx"
import { defineConfig } from "astro/config"
import UnoCSS from "unocss/astro"

export default defineConfig({
    site: "https://tobynguyen.dev",
    output: "static",
    integrations: [UnoCSS({ injectReset: true }), mdx({
        syntaxHighlight: "shiki",
        shikiConfig: { theme: "catppuccin-mocha" },
        gfm: true,
    })],
    vite: {
        css: {
            transformer: "lightningcss",
        },
    },
    server: {
        port: 3000,
    },
})
