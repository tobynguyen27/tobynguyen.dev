import { existsSync } from "node:fs";
import { mkdir, readFile } from "node:fs/promises";
import { basename, join, resolve } from "node:path";
import consola from "consola";
import sharp from "sharp";
import type { VFile } from "vfile";

interface OgOptions {
    outputDir: string;
    templatePath: string;
}

export function remarkGenerateOgImage(options: Partial<OgOptions> = {}) {
    const { outputDir = "public/og", templatePath = "plugins/og-template/og-template.svg" } =
        options;

    let templateCache: string | null = null;

    // biome-ignore lint/suspicious/noExplicitAny: bypass
    return async (_: any, file: VFile) => {
        const frontmatter = file.data.astro?.frontmatter;
        const title = frontmatter?.title;

        if (!title) return;

        let name = basename(file.path || "", file.extname || "");
        if (name === "index" && file.dirname) {
            name = basename(file.dirname);
        }

        const outputPath = join(process.cwd(), outputDir, `${name}.png`);

        if (existsSync(outputPath)) return;

        if (!templateCache) {
            templateCache = await readFile(resolve(process.cwd(), templatePath), "utf-8");
        }

        await generateOgImage({
            title,
            outputPath,
            template: templateCache,
        });
    };
}

async function generateOgImage({
    title,
    outputPath,
    template,
}: {
    title: string;
    outputPath: string;
    template: string;
}) {
    await mkdir(resolve(outputPath, ".."), { recursive: true });

    const lines = title
        .trim()
        .split(/(.{0,30})(?:\s|$)/g)
        .filter(Boolean);

    const data: Record<string, string> = { line1: lines[0], line2: lines[1], line3: lines[2] };
    const svg = template.replace(/\{\{([^}]+)\}\}/g, (_, name) => data[name] || "");

    consola.info(`Generating ${outputPath}`);
    try {
        await sharp(Buffer.from(svg)).resize(1200, 630).png().toFile(outputPath);
    } catch (e) {
        consola.error("Failed to generate OG image", e);
    }
}
