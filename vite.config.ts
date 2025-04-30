import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import UnoCSS from "unocss/vite"
import { TanStackRouterVite } from "@tanstack/router-plugin/vite"

export default defineConfig({
	plugins: [
		TanStackRouterVite({ target: "react", autoCodeSplitting: true }),
		react(),
		UnoCSS(),
	],
	server: {
		port: 3000,
	},
})
