import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetWebFonts,
  presetWind4,
  transformerAttributifyJsx,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  presets: [
    presetWind4({ preflights: { reset: true } }),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
        height: "1.2em",
        width: "1.2em",
      },
    }),
    presetWebFonts({
      themeKey: "font",
      provider: "fontsource",
      fonts: { sans: "Geist", mono: "JetBrains Mono" },
    }),
    presetTypography(),
  ],
  transformers: [transformerVariantGroup(), transformerAttributifyJsx()],
  theme: {
    colors: {
      "bg-100": "var(--bg-100)",
      "bg-200": "var(--bg-200)",

      "gray-100": "var(--gray-100)",
      "gray-200": "var(--gray-200)",
      "gray-300": "var(--gray-300)",
      "gray-400": "var(--gray-400)",
      "gray-500": "var(--gray-500)",
      "gray-600": "var(--gray-600)",
      "gray-700": "var(--gray-700)",
      "gray-800": "var(--gray-800)",
      "gray-900": "var(--gray-900)",
      "gray-1000": "var(--gray-1000)",
    },
  },
  shortcuts: {
    "text-primary": "text-gray-1000",
    "text-secondary": "text-gray-900",

    "bg-100": "bg-bg-100",
    "bg-200": "bg-bg-200",

    "navbar-item": "text-secondary hover:(text-primary cursor-pointer) duration-300 text-xl",

    "underline-primary":
      "underline decoration-offset-5 decoration-gray-1000/30 hover:(text-primary cursor-pointer decoration-gray-1000) duration-300",
  },
});
