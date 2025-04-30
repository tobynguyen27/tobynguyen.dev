import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetWebFonts,
	presetWind4,
	transformerVariantGroup,
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
			provider: "bunny",
			fonts: {
				sans: "Inter",
				mono: "JetBrains Mono",
			},
		}),
	],
	transformers: [transformerVariantGroup()],
})
