import { z } from "astro:content";

export const postSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    minutesRead: z.number(),
    redirect: z.string().url().optional(),
});

export type PostSchema = z.infer<typeof postSchema>;

export const projectSchema = z.object({
    id: z.string(),
    description: z.string(),
    icon: z.string().url(),
    link: z.string().url(),
});

export type ProjectSchema = z.infer<typeof projectSchema>;
