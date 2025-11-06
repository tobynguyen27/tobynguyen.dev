import { z } from "astro:content";

export const postSchema = z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    readTime: z.number(),
});

export type PostSchema = z.infer<typeof postSchema>;

export const projectSchema = z.object({
    id: z.string(),
    description: z.string(),
    icon: z.string().url(),
    link: z.string().url(),
});

export type ProjectSchema = z.infer<typeof projectSchema>;
