import { createFileRoute, Link, notFound } from "@tanstack/react-router"
import fm from "front-matter"
import MarkdownPreview from "@uiw/react-markdown-preview"

const posts = import.meta.glob("../../assets/posts/*.md", {
	eager: true,
	query: "?raw",
	import: "default",
})

export const Route = createFileRoute("/blog/$postId")({
	loader: ({ params: { postId } }) => {
		const rawPost = posts[`../../assets/posts/${postId}.md`] as
			| string
			| undefined

		if (!rawPost) throw notFound()

		const post = fm(rawPost)
		const postContent = post.body.toString()

		return { postContent }
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

function Index() {
	const { postContent } = Route.useLoaderData()

	return (
		<div className='w-full px-3 py-6 sm:px-12 md:px-24 lg:px-36 xl:px-48 font-mono h-full'>
			<MarkdownPreview
				source={postContent}
				className='w-full h-full'
				wrapperElement={{
					"data-color-mode": "dark",
				}}
				style={{ backgroundColor: "black" }}
			/>
			<Link to='/blog'>
				{" "}
				<button className='text-gray-300 mt-12 text-xl p-2 rounded-md hover:(bg-stone/15 cursor-pointer)'>
					cd ../
				</button>
			</Link>
		</div>
	)
}
