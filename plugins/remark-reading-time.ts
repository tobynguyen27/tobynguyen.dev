import * as MDast from "mdast-util-to-string";
import getReadingTime from "reading-time";

export function remarkReadingTime() {
    return (tree: any, { data }: { data: any }) => {
        const textOnPage = MDast.toString(tree);
        const readingTime = getReadingTime(textOnPage);

        data.astro.frontmatter.minutesRead = readingTime.text;
    };
}
