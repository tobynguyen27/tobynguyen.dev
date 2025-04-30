import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
	component: Index,
})

function Index() {
	return (
		<div className='mx-auto w-3/4 md:w-3/5 lg:w-1/2'>
			<h1 className='text-white text-3xl font-mono'>Toby Nguyen</h1>

			<p className='text-gray-300 mt-8'>
				Hi there 👋 I'm Toby Nguyen, a web developer and tech
				enthusiast.
			</p>
		</div>
	)
}
