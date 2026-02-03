export default function OG({
    title,
    description = "Toby Nguyen",
}: {
    title: string;
    description?: string;
}) {
    return (
        <div tw="bg-black w-full h-full flex items-center justify-center flex-col">
            <div tw="w-full h-full p-16 flex items-start justify-center flex-col gap-28">
                <p tw="text-white text-6xl">{title}</p>
                <p tw="text-[#a1a1a1] text-5xl">{description}</p>
            </div>
        </div>
    );
}
