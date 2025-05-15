import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetWebFonts,
	presetWind4,
	presetTypography,
	transformerVariantGroup,
	transformerAttributifyJsx,
} from "unocss"

export default defineConfig({
	presets: [
		presetWind4(),
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
			fonts: {
				sans: "Geist",
				mono: "JetBrains Mono",
			},
		}),
		presetTypography(),
	],
	transformers: [transformerVariantGroup(), transformerAttributifyJsx()],
})
