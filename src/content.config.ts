import { file, glob } from "astro/loaders"
import { defineCollection } from "astro:content"
import { blogSchema, featuredProjectSchema, minecraftModSchema } from "./contents/schema"

const blog = defineCollection({
    loader: glob({ base: "src/contents/blog/", pattern: "**/*.mdx" }),
    schema: blogSchema,
})

const featuredProject = defineCollection({
    loader: file("src/contents/projects/featured_projects.json"),
    schema: featuredProjectSchema,
})

const minecraftMod = defineCollection({
    loader: file("src/contents/projects/minecraft_mods.json"),
    schema: minecraftModSchema,
})

export const collections = { minecraftMod, blog, featuredProject }
