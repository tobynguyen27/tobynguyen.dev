import type { APIRoute } from "astro"
import DefaultOg from "@components/og/DefaultOg"
import ImageResponse from "@takumi-rs/image-response"

export const GET = (async () => {
    return new ImageResponse(
        DefaultOg(),
        {
            width: 1200,
            height: 630,
            format: "png",
        },
    )
}) satisfies APIRoute
