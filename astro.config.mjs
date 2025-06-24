import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import { defineConfig } from "astro/config"
import UnoCSS from "unocss/astro"

export default defineConfig({
  site: "https://tobynguyen.dev",
  output: "static",
  integrations: [UnoCSS({ injectReset: true }), mdx({
    syntaxHighlight: "shiki",
    shikiConfig: { themes: {
      light: "catppuccin-latte",
      dark: "catppuccin-mocha",
    } },
    gfm: true,
  }), sitemap()],
  vite: {
    css: {
      transformer: "lightningcss",
    },
  },
  server: {
    port: 3000,
  },
})
