import { z } from "astro/zod"

export const projectSchema = z.object({
    description: z.string(),
    icon: z.string(),
    link: z.string(),
})

export type Project = z.infer<typeof projectSchema>

export const blogSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
})
