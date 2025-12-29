import * as MDast from "mdast-util-to-string";
import getReadingTime from "reading-time";
import type { Node } from "unist";
import type { VFile } from "vfile";

export function remarkReadingTime() {
    return (tree: Node, file: VFile) => {
        const textOnPage = MDast.toString(tree);
        const readingTime = getReadingTime(textOnPage);

        if (!file.data.astro || !file.data.astro.frontmatter) return;

        file.data.astro.frontmatter.minutesRead = readingTime.text;
    };
}
