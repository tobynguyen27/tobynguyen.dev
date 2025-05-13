import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { RouterProvider, createRouter } from "@tanstack/react-router"
import { routeTree } from "./routeTree.gen"
import { SpeedInsights } from "@vercel/speed-insights/react"

import "./styles/globals.css"
import "virtual:uno.css"

const router = createRouter({ routeTree })
declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router
	}
}

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
		<SpeedInsights />
	</StrictMode>,
)
