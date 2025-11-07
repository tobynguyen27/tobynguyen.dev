import { remarkReadingTime } from "./plugins/remark-reading-time";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import { remarkGenerateOgImage } from "./plugins/remark-generate-og-image";
import UnoCSS from "unocss/astro";

export default defineConfig({
    site: "https://tobynguyen.dev",
    output: "static",
    integrations: [
        UnoCSS(),
        mdx({
            remarkPlugins: [remarkReadingTime, remarkGenerateOgImage],
            shikiConfig: { themes: { light: "catppuccin-latte", dark: "catppuccin-mocha" } },
        }),
        sitemap(),
    ],
    vite: { build: { assetsInlineLimit: 1024 } },
    server: { port: 3000 },
});
