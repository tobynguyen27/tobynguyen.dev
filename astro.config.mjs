import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";

export default defineConfig({
    site: "https://tobynguyen.dev",
    output: "static",
    integrations: [
        UnoCSS(),
        mdx({
            syntaxHighlight: "shiki",
            shikiConfig: { themes: { light: "catppuccin-latte", dark: "catppuccin-mocha" } },
            gfm: true,
            rehypePlugins: [
                rehypeSlug,
                [rehypeAutolinkHeadings, { behavior: "wrap", properties: { className: ["heading-anchor"] } }],
            ],
        }),
        sitemap(),
    ],
    vite: { css: { transformer: "lightningcss" } },
    server: { port: 3000 },
});
