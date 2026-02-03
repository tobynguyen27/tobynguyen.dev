import OG from "@/components/react/OG";
import ImageResponse from "@takumi-rs/image-response";
import type { APIRoute } from "astro";

export const GET = (async () => {
    return new ImageResponse(
        OG({ title: "Toby Nguyen", description: "An Open Source Enthusiast" }),
        {
            width: 1200,
            height: 630,
            format: "webp",
        },
    );
}) satisfies APIRoute;
