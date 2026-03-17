export default function DefaultOg() {
    return (
        <div tw="bg-black h-full w-full flex flex-col items-start p-24 gap-16">

            <div tw="flex items-center gap-2">
                <svg width="26" height="36" viewBox="0 0 26 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.750244 17.658C10.0721 14.787 27.346 7.55502 21.8661 1.59565C15.0163 -5.85357 10.8447 38.4796 3.78887 34.4964C-3.26692 30.5131 21.0936 16.9597 24.7502 16.9597" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                </svg>

                <span tw="text-white text-xl" style={{ fontFamily: "Geist Mono" }}>
                    Toby Nguyen
                </span>
            </div>

            <div tw="flex flex-col gap-8">
                <span tw="text-white text-9xl">
                    Toby Nguyen
                </span>
                <span tw="text-[#a1a1a1] text-4xl">
                    A passionate open source developer. I make softwares for free for everyone.
                </span>
            </div>

            <div tw="flex flex-row items-center justify-between w-full">
                <div tw="flex flex-row items-center gap-12">
                    <div tw="flex flex-col">
                        <span tw="text-[#a1a1a1]" style={{ fontFamily: "Geist Mono" }}>WEBSITE</span>
                        <span tw="text-[#a1a1a1]">tobynguyen.org</span>
                    </div>
                    <div tw="flex flex-col">
                        <span tw="text-[#a1a1a1]" style={{ fontFamily: "Geist Mono" }}>X</span>
                        <span tw="text-[#a1a1a1]">@imtobynguyen</span>
                    </div>
                </div>
                <div tw="self-end">
                    <span tw="text-[#a1a1a1]" style={{ fontFamily: "Geist Mono" }}>HO CHI MINH CITY, VIETNAM</span>
                </div>
            </div>
        </div>
    )
}
