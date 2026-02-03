import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import UnoCSS from "unocss/astro";
import { remarkReadingTime } from "./plugins/remark-reading-time";
import react from "@astrojs/react";

export default defineConfig({
    site: "https://tobynguyen.dev",
    output: "static",
    integrations: [
        UnoCSS(),
        mdx({
            remarkPlugins: [remarkReadingTime],
            rehypePlugins: [
                rehypeHeadingIds,
                [
                    rehypeAutolinkHeadings,
                    { behavior: "wrap", properties: { className: ["heading-anchor"] } },
                ],
            ],
            shikiConfig: { themes: { light: "catppuccin-latte", dark: "catppuccin-mocha" } },
        }),
        sitemap(),
        react(),
    ],
    vite: {
        build: { assetsInlineLimit: 1024 },
        optimizeDeps: {
            exclude: ["@takumi-rs/core"],
        },
    },
    server: { port: 5173 },
});
