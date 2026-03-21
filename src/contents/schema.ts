import { z } from "astro/zod"

export const minecraftModSchema = z.object({
    description: z.string(),
    icon: z.string(),
    github: z.string().optional(),
    modrinth: z.string().optional(),
    curseforge: z.string().optional(),
})

export type MinecraftMod = z.infer<typeof minecraftModSchema>

export const blogSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
})

export const featuredProjectSchema = z.object({
    description: z.string(),
    image: z.string(),
    tags: z.array(z.string()),
    releaseYear: z.number(),
})

export type FeaturedProject = z.infer<typeof featuredProjectSchema>
