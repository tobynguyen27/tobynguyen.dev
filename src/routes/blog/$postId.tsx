import { createFileRoute, Link, notFound } from "@tanstack/react-router"
import fm from "front-matter"
import { lazy, Suspense } from "react"
import PostMetadata from "../../types/PostMetadata"
import dayjs from "dayjs"

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
		const { body, attributes } = fm(raw)

		return {
			postContent: body.toString(),
			postMetadata: attributes as PostMetadata,
		}
	},
	component: Index,
	notFoundComponent: () => {
		return (
			<div className='w-full h-screen flex flex-col items-center justify-center'>
				<p className='text-white text-8xl font-light text-center'>
					404
				</p>
				<p className='text-gray-300 text-5xl text-center'>
					Post Not Found
				</p>
				<Link to='/'>
					<p className='text-gray-300 text-xl hover:(cursor-pointer) p-2 mt-3 text-center'>
						cd ../
					</p>
				</Link>
			</div>
		)
	},
})

const Markdown = lazy(() => import("@uiw/react-markdown-preview"))

function Index() {
	const { postContent, postMetadata } = Route.useLoaderData()

	return (
		<div className='w-full px-3 py-6 sm:px-12 md:px-24 lg:px-36 xl:px-48 h-full'>
			<Suspense
				fallback={
					<p className='text-white text-lg'>Loading content...</p>
				}>
				<div className='prose mx-auto'>
					<span className='text-3xl lg:text-5xl text-white font-semibold'>
						{postMetadata.title}
					</span>
					<br />
					<span className='text-gray-300/80 text-lg'>
						{dayjs(postMetadata.date, "YYYY-MM-DD").format(
							"MMMM D, YYYY",
						)}
					</span>
				</div>
				<article className='prose mx-auto prose-white font-sans'>
					<Markdown
						source={postContent}
						style={{ backgroundColor: "black" }}
						wrapperElement={{
							"data-color-mode": "dark",
						}}
					/>
				</article>
			</Suspense>
			<div className='prose mx-auto'>
				<Link to='/blog'>
					<button className='text-gray-300 mt-8 text-xl p-2 rounded-md hover:(cursor-pointer text-white) duration-300'>
						cd ../
					</button>
				</Link>
			</div>
		</div>
	)
}
