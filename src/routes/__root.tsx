import { createRootRoute, Outlet } from "@tanstack/react-router"

import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import NotFoundPage from "@/components/NotFoundPage"

export const Route = createRootRoute({
	component: () => (
		<div className='antialiased'>
			<NavBar />
			<Outlet />
			<Footer />
		</div>
	),
	notFoundComponent: () => {
		return (
			<NotFoundPage
				description={"Page Not Found"}
				buttonLabel={"cd ~/"}
				buttonUrl={"/"}
			/>
		)
	},
})
