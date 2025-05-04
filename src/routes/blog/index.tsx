import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/blog/")({
	component: Index,
})

function Index() {
	return (
		<div className='w-11/12 sm:w-4/6 md:w-3/5 lg:1/2 mx-auto h-full'>
			<div className='my-8'>
				<h1 className='text-white text-5xl p-5'>Blog</h1>
			</div>
			<div className=''></div>
		</div>
	)
}
