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
    "text-base": "text-gray-900 dark:text-gray-300",
    "subtext-base": "text-gray-600/85 dark:text-gray-300/85",
    "text-link": "text-base hover:(underline underline-offset-3 text-gray-900) text-gray-600 dark:text-gray-300 dark:hover:text-white",
    "navbar-item-text": "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white",
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
