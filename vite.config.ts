import { defineConfig, PluginOption } from "vite"
import react from "@vitejs/plugin-react-swc"
import UnoCSS from "unocss/vite"
import { TanStackRouterVite } from "@tanstack/router-plugin/vite"
import { browserslistToTargets } from "lightningcss"
import browserslist from "browserslist"
import { nodePolyfills } from "vite-plugin-node-polyfills"
import { visualizer } from "rollup-plugin-visualizer"
import path from "path"
import MillionLint from "@million/lint"

export default defineConfig({
	plugins: [
		TanStackRouterVite({ target: "react", autoCodeSplitting: true }),
		react(),
		UnoCSS(),
		nodePolyfills({
			globals: {
				Buffer: true,
				process: false,
				global: false,
			},
			protocolImports: true,
		}),
		visualizer() as PluginOption,
		MillionLint.vite(),
	],
	build: {
		cssMinify: "lightningcss",
		minify: "esbuild",
	},
	css: {
		transformer: "lightningcss",
		lightningcss: {
			targets: browserslistToTargets(browserslist(">= 0.25%")),
		},
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	server: {
		port: 3000,
	},
})
