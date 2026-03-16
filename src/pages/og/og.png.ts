import type { APIRoute } from "astro"
import OG from "@components/Og"
import ImageResponse from "@takumi-rs/image-response"

export const GET = (async () => {
    return new ImageResponse(
        OG({ title: "Toby Nguyen", description: "An Open Source Enthusiast" }),
        {
            width: 1200,
            height: 630,
            format: "png",
        },
    )
}) satisfies APIRoute
