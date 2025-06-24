import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetWebFonts,
  presetWind4,
  transformerAttributifyJsx,
  transformerVariantGroup,
} from "unocss"

export default defineConfig({
  shortcuts: {
    "navbar-item-text": "text-secondary hover:text-primary",
    "bg-2": "bg-[#F9FAFB] dark:bg-black",
    "bg-1": "bg-white dark:bg-[#0A0A0A]",
    "text-primary": "text-[#171717] dark:text-[#EDEDED]",
    "text-secondary": "text-[#666666] dark:text-[#A0A0A0]",
    "decoration-primary": "decoration-[#171717] dark:decoration-[#EDEDED]",
    "decoration-secondary": "decoration-[#666666]/30 dark:decoration-[#A0A0A0]/30",
    "text-link": "text-secondary decoration-0.8 underline underline-offset-5 decoration-secondary hover:(decoration-primary underline-offset-5 text-primary) duration-200",
    "button-primary": "border border-[#EAEAEA] dark:border-[#2E2E2E] rounded-md hover:(border-[#C9C9C9] dark:border-[#454545] dark:bg-[#1A1A1A] bg-[#EBEBEB])",
  },
  presets: [
    presetWind4(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        "display": "inline-block",
        "vertical-align": "middle",
        "height": "1.2em",
        "width": "1.2em",
      },
    }),
    presetWebFonts({
      themeKey: "font",
      provider: "fontsource",
      fonts: {
        sans: "Geist",
        mono: "JetBrains Mono",
      },
    }),
    presetTypography(),
  ],
  transformers: [transformerVariantGroup(), transformerAttributifyJsx()],
})
