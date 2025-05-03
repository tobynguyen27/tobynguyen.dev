import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import UnoCSS from "unocss/vite"
import { TanStackRouterVite } from "@tanstack/router-plugin/vite"
import { browserslistToTargets } from "lightningcss"
import browserslist from "browserslist"

export default defineConfig({
	plugins: [
		TanStackRouterVite({ target: "react", autoCodeSplitting: true }),
		react(),
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
