import OG from "@/components/react/OG";
import ImageResponse from "@takumi-rs/image-response";
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

const posts = await getCollection("blog");

export async function getStaticPaths() {
    return posts.map((post) => ({ params: { post: post.id }, props: post }));
}

export const GET = (async ({ params, redirect }) => {
    const post = posts.find((post) => post.id === params.post);

    if (!post) {
        return redirect("/404");
    }

    return new ImageResponse(OG({ title: post.data.title }), {
        width: 1200,
        height: 630,
        format: "webp",
    });
}) satisfies APIRoute;
