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

      "blue-100": "var(--blue-100)",
      "blue-200": "var(--blue-200)",
      "blue-300": "var(--blue-300)",
      "blue-400": "var(--blue-400)",
      "blue-500": "var(--blue-500)",
      "blue-600": "var(--blue-600)",
      "blue-700": "var(--blue-700)",
      "blue-800": "var(--blue-800)",
      "blue-900": "var(--blue-900)",
      "blue-1000": "var(--blue-1000)",

      "green-100": "var(--green-100)",
      "green-200": "var(--green-200)",
      "green-300": "var(--green-300)",
      "green-400": "var(--green-400)",
      "green-500": "var(--green-500)",
      "green-600": "var(--green-600)",
      "green-700": "var(--green-700)",
      "green-800": "var(--green-800)",
      "green-900": "var(--green-900)",
      "green-1000": "var(--green-1000)",

      "amber-100": "var(--amber-100)",
      "amber-200": "var(--amber-200)",
      "amber-300": "var(--amber-300)",
      "amber-400": "var(--amber-400)",
      "amber-500": "var(--amber-500)",
      "amber-600": "var(--amber-600)",
      "amber-700": "var(--amber-700)",
      "amber-800": "var(--amber-800)",
      "amber-900": "var(--amber-900)",
      "amber-1000": "var(--amber-1000)",
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
