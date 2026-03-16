import { file, glob } from "astro/loaders"
import { defineCollection } from "astro:content"
import { blogSchema, projectSchema } from "./contents/schema"

const project = defineCollection({
    loader: file("src/assets/data/projects.json"),
    schema: projectSchema,
})

const blog = defineCollection({
    loader: glob({ base: "src/contents/blog/", pattern: "**/*.mdx" }),
    schema: blogSchema,
})

export const collections = { project, blog }
