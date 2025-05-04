import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/blog/$postId")({
	component: RouteComponent,
})

function RouteComponent() {
	const { postId } = Route.useParams()
	return (
		<div>
			<p className='text-white'>Post ID: {postId}</p>
		</div>
	)
}
