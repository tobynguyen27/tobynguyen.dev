import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import UnoCSS from "unocss/astro";
import { remarkGenerateOgImage } from "./plugins/remark-generate-og-image";
import { remarkReadingTime } from "./plugins/remark-reading-time";

export default defineConfig({
    site: "https://tobynguyen.dev",
    output: "static",
    integrations: [
        UnoCSS(),
        mdx({
            remarkPlugins: [remarkReadingTime, remarkGenerateOgImage],
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
    ],
    vite: { build: { assetsInlineLimit: 1024 } },
    server: { port: 3000 },
});
