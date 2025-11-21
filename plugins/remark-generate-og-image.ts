import * as fs from "node:fs";
import { existsSync } from "node:fs";
import { mkdir } from "node:fs/promises";
import { basename, dirname, join } from "node:path";
import sharp from "sharp";

export function remarkGenerateOgImage() {
    return async (tree: any, file: any) => {
        if (!checkFileExistsInDir("public/og", "og-image.png")) {
            const title = file.data.astro.frontmatter.title;

            let nameWithoutExt = basename(file.basename, file.extname);
            if (nameWithoutExt === "index") nameWithoutExt = basename(file.dirname);
            if (checkFileExistsInDir("public/og", `${nameWithoutExt}.png`)) return;

            await generateOg(title, `public/og/${nameWithoutExt}.png`);
        }
    };
}

export function checkFileExistsInDir(path: string, filename: string) {
    const fullPath = join(process.cwd(), path, filename);

    return existsSync(fullPath);
}

async function generateOg(title: string, output: string) {
    const templateOG = fs.readFileSync(
        join(process.cwd(), "/plugins/og-template/og-template.svg"),
        "utf-8",
    );

    if (fs.existsSync(output)) return;

    await mkdir(dirname(output), { recursive: true });

    const lines = title
        .trim()
        .split(/(.{0,30})(?:\s|$)/g)
        .filter(Boolean);

    const data: Record<string, string> = { line1: lines[0], line2: lines[1], line3: lines[2] };
    const svg = templateOG.replace(/\{\{([^}]+)\}\}/g, (_, name) => data[name] || "");

    console.log(`Generating ${output}`);
    try {
        await sharp(Buffer.from(svg)).resize(1200, 630).png().toFile(output);
    } catch (e) {
        console.error("Failed to generate og image", e);
    }
}
