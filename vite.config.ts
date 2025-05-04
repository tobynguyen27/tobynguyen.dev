import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import UnoCSS from "unocss/vite"
import { TanStackRouterVite } from "@tanstack/router-plugin/vite"
import { browserslistToTargets } from "lightningcss"
import browserslist from "browserslist"
import Markdown from "vite-plugin-markdown"

export default defineConfig({
	plugins: [
		TanStackRouterVite({ target: "react", autoCodeSplitting: true }),
		react(),
		Markdown(),
		UnoCSS(),
	],
	build: {
		cssMinify: "lightningcss",
	},
	css: {
		transformer: "lightningcss",
		lightningcss: {
			targets: browserslistToTargets(browserslist(">= 0.25%")),
		},
	},
	server: {
		port: 3000,
	},
})
