import { createFileRoute, Link, notFound } from "@tanstack/react-router"
import fm from "front-matter"
import { lazy, Suspense } from "react"

const postModules = import.meta.glob("../../assets/posts/*.md", {
	eager: false,
	query: "?raw",
	import: "default",
})

export const Route = createFileRoute("/blog/$postId")({
	loader: async ({ params: { postId } }) => {
		const key = `../../assets/posts/${postId}.md`
		const resolver = postModules[key]

		if (!resolver) throw notFound()

		const raw = (await resolver()) as string
		const { body } = fm(raw)

		return { postContent: body.toString() }
	},
	component: Index,
	notFoundComponent: () => {
		return (
			<div className='w-full h-screen flex flex-col items-center justify-center'>
				<p className='text-white text-5xl'>Page Not Found</p>
			</div>
		)
	},
})

const MarkdownPreview = lazy(() => import("@uiw/react-markdown-preview"))

function Index() {
	const { postContent } = Route.useLoaderData()

	return (
		<div className='w-full px-3 py-6 sm:px-12 md:px-24 lg:px-36 xl:px-48 font-mono h-full'>
			<Suspense
				fallback={
					<p className='text-white text-lg'>Loading content...</p>
				}>
				<MarkdownPreview
					source={postContent}
					className='w-full h-full'
					wrapperElement={{
						"data-color-mode": "dark",
					}}
					style={{ backgroundColor: "black" }}
				/>
			</Suspense>
			<Link to='/blog'>
				{" "}
				<button className='text-gray-300 mt-12 text-xl p-2 rounded-md hover:(bg-stone/15 cursor-pointer) duration-300'>
					cd ../
				</button>
			</Link>
		</div>
	)
}
