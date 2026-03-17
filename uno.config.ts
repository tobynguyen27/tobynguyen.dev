import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTypography,
    presetWebFonts,
    presetWind4,
    transformerVariantGroup,
} from "unocss"

const PALETTES = ["gray", "blue"] as const
const STEPS = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000] as const

const paletteColors = Object.fromEntries(
    PALETTES.flatMap(palette =>
        STEPS.map(step => [`${palette}-${step}`, `var(--${palette}-${step})`]),
    ),
)

const colors = {
    base: "var(--bg-base)",
    surface: "var(--bg-surface)",
    ...paletteColors,
}

function generateBorderClasses(): Record<string, string> {
    const states = { default: "400", hover: "500", active: "600" }

    return ["t", "l", "r", "b"].reduce(
        (acc, side) => {
            Object.entries(states).forEach(([state, weight]) => {
                acc[`border-${side}-${state}`] = `border-${side}-gray-${weight}`
            })

            return acc
        },
        {
            "border-default": "border-gray-400",
            "border-hover": "border-gray-500",
            "border-active": "border-gray-600",
        } as Record<string, string>,
    )
}

export default defineConfig({
    presets: [
        presetWind4({ preflights: { reset: true } }),
        presetWebFonts({
            provider: "fontsource",
            fonts: { mono: "Geist Mono", sans: "Geist", serif: "IBM Plex Serif" },
        }),
        presetIcons({
            extraProperties: {
                "display": "inline-block",
                "height": "1.3em",
                "width": "1.3em",
                "vertical-align": "text-bottom",
            },
        }),
        presetTypography(),
        presetAttributify(),
    ],
    transformers: [transformerVariantGroup()],
    theme: {
        colors,
    },
    shortcuts: {
        ...generateBorderClasses(),

        "container": "w-full max-w-5xl px-5 mx-auto",
        "container-sm": "w-full max-w-2xl px-5 mx-auto",

        "text-default": "text-gray-1000",
        "text-muted": "text-gray-900",

        "link": "text-muted hover:(text-default underline-gray-1000) underline underline-gray-900/30 duration-200 decoration-offset-5",
    },
})
