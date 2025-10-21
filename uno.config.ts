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
      light: {
        "bg-100": "hsla(0,0%,100%,1)",
        "bg-200": "hsla(0,0%,98%,1)",
        "gray-100": "hsla(0,0%,95%,1)",
        "gray-200": "hsla(0,0%,92%,1)",
        "gray-300": "hsla(0,0%,90%,1)",
        "gray-400": "hsla(0,0%,92%,1)",
        "gray-500": "hsla(0,0%,79%,1)",
        "gray-600": "hsla(0,0%,66%,1)",
        "gray-700": "hsla(0,0%,56%,1)",
        "gray-800": "hsla(0,0%,49%,1)",
        "gray-900": "hsla(0,0%,40%,1)",
        "gray-1000": "hsla(0,0%,9%,1)",
      },
      dark: {
        "bg-100": "hsla(0,0%,4%,1)",
        "bg-200": "hsla(0,0%,0%,1)",
        "gray-100": "hsla(0,0%,10%,1)",
        "gray-200": "hsla(0,0%,12%,1)",
        "gray-300": "hsla(0,0%,16%,1)",
        "gray-400": "hsla(0,0%,18%,1)",
        "gray-500": "hsla(0,0%,27%,1)",
        "gray-600": "hsla(0,0%,53%,1)",
        "gray-700": "hsla(0,0%,56%,1)",
        "gray-800": "hsla(0,0%,49%,1)",
        "gray-900": "hsla(0,0%,63%,1)",
        "gray-1000": "hsla(0,0%,93%,1)",
      },
    },
  },
  shortcuts: {
    "navbar-item-text": "text-secondary hover:text-primary",
    "bg-2": "bg-light-bg-200 dark:bg-dark-bg-200",
    "bg-1": "bg-light-bg-100 dark:bg-dark-bg-100",
    "text-primary": "text-light-gray-1000 dark:text-dark-gray-1000",
    "text-secondary": "text-light-gray-900 dark:text-dark-gray-900",
    "decoration-primary": "decoration-light-gray-1000 dark:decoration-dark-gray-1000",
    "decoration-secondary": "decoration-light-gray-900/30 dark:decoration-dark-gray-900/30",
    "text-link":
      "text-secondary decoration-0.8 underline underline-offset-5 decoration-secondary hover:(decoration-primary underline-offset-5 text-primary) duration-200",
    "button-primary":
      "border border-light-gray-400 dark:border-dark-gray-400 rounded-md hover:(border-light-gray-500 dark:border-dark-gray-500 dark:bg-dark-gray-100 bg-light-gray-100)",
  },
});
