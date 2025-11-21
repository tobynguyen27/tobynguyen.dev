import { defineCollection, z } from "astro:content";
import { file, glob } from "astro/loaders";
import { postSchema, projectSchema, usesSchema } from "./content/schema";

const blog = defineCollection({
    loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
    schema: postSchema,
});

const projects = defineCollection({
    loader: file("./src/content/projects/data.json"),
    schema: projectSchema,
});

const uses = defineCollection({ loader: file("./src/content/uses/data.json"), schema: usesSchema });

export const collections = { blog, projects, uses };
