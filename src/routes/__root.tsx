import { createRootRoute, Link, Outlet } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

export const Route = createRootRoute({
	component: () => (
		<div className='antialiased'>
			<NavBar />
			<Outlet />
			<Footer />
			<TanStackRouterDevtools />
		</div>
	),
	notFoundComponent: () => {
		return (
			<div className='w-full h-screen flex flex-col items-center justify-center'>
				<p className='text-white text-8xl font-light text-center'>
					404
				</p>
				<p className='text-gray-300 text-5xl text-center'>
					Page Not Found
				</p>
				<Link to='/'>
					<p className='text-gray-300 text-xl hover:(cursor-pointer) p-2 mt-3'>
						cd ~/
					</p>
				</Link>
			</div>
		)
	},
})
