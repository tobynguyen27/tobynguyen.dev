import { file, glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";
import { postSchema, projectSchema } from "./content/schema";

const blog = defineCollection({
    loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
    schema: postSchema,
});

const projects = defineCollection({ loader: file("./src/content/projects/data.json"), schema: projectSchema });

export const collections = { blog, projects };
