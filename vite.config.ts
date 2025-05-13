import { defineConfig, PluginOption } from "vite"
import react from "@vitejs/plugin-react-swc"
import UnoCSS from "unocss/vite"
import { TanStackRouterVite } from "@tanstack/router-plugin/vite"
import { browserslistToTargets } from "lightningcss"
import browserslist from "browserslist"
import { nodePolyfills } from "vite-plugin-node-polyfills"
import { visualizer } from "rollup-plugin-visualizer"

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
	server: {
		port: 3000,
	},
})
