import type { APIRoute } from "astro"
import OG from "@components/Og"
import ImageResponse from "@takumi-rs/image-response"
import { getCollection } from "astro:content"

export async function getStaticPaths() {
    const posts = await getCollection("blog")
    return posts.map(post => ({ params: { id: post.id } }))
}

export const GET = (async ({ params, redirect }) => {
    const posts = await getCollection("blog")
    const post = posts.find(post => post.id === params.id)

    if (!post) {
        return redirect("/404")
    }

    return new ImageResponse(OG({ title: post.data.title }), {
        width: 1200,
        height: 630,
        format: "webp",
    })
}) satisfies APIRoute
