export default function BlogOg({
    title,
    description,
}: {
    title: string
    description?: string
}) {
    return (
        <div tw="bg-black h-full w-full flex flex-col items-start justify-between p-24">

            <div tw="flex flex-col gap-8">
                <span tw="text-white text-6xl font-semibold">
                    {title}
                </span>
                <span tw="text-[#a1a1a1] text-4xl">
                    {description}
                </span>
            </div>

            <div tw="flex items-center gap-5">
                <svg width="45" height="62" viewBox="0 0 45 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.50037 30.8404C17.8137 25.8583 48.0429 13.3087 38.4532 2.96747C26.466 -9.95912 19.1656 66.972 6.81796 60.0599C-5.52968 53.1478 37.1012 29.6286 43.5004 29.6286" stroke="white" stroke-width="3" stroke-linecap="round" />
                </svg>

                <span tw="text-white text-4xl">
                    Toby Nguyen
                </span>
            </div>
        </div>
    )
}
