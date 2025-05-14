import { createFileRoute, Link, notFound } from "@tanstack/react-router"
import fm from "front-matter"
import { Suspense } from "react"
import PostMetadata from "@/types/PostMetadata"
import dayjs from "dayjs"
import MarkdownPreview from "@/components/MarkdownPreview"
import NotFoundPage from "@/components/NotFoundPage"

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
			<NotFoundPage
				description={"Post Not Found"}
				buttonLabel={"cd ../"}
				buttonUrl={"/blog"}
			/>
		)
	},
})

function Index() {
	const { postContent, postMetadata } = Route.useLoaderData()

	return (
		<div className='mx-auto p-3 sm:px-12 md:px-24 lg:px-36 xl:px-48 sm:py-12'>
			<div className=''>
				<div className='border border-gray-300/30 rounded-md p-6 sm:p-8 md:p-12 lg:p-18'>
					<Suspense
						fallback={
							<p className='text-white text-lg'>
								Loading content...
							</p>
						}>
						<span className='text-3xl lg:text-5xl text-white font-semibold'>
							{postMetadata.title}
						</span>
						<br />
						<span className='text-gray-300/80 text-lg'>
							{dayjs(postMetadata.date, "YYYY-MM-DD").format(
								"MMMM D, YYYY",
							)}
						</span>
						<div className='prose max-w-full prose-white'>
							<article className='w-full font-sans'>
								<MarkdownPreview source={postContent} />
							</article>
						</div>
					</Suspense>
				</div>
				<div className='mx-auto flex flex-col mt-8'>
					<Link to='/blog'>
						<button className='text-gray-300/80 text-xl rounded-md hover:(cursor-pointer text-white) duration-300 group'>
							<i className='i-ic-baseline-keyboard-arrow-right' />{" "}
							<span className='group-hover:(underline underline-offset-4) duration-300'>
								cd /blog
							</span>
						</button>
					</Link>
					<Link to='/'>
						<button className='text-gray-300/80 text-xl rounded-md hover:(cursor-pointer text-white) duration-300 group'>
							<i className='i-ic-baseline-keyboard-arrow-right' />{" "}
							<span className='group-hover:(underline underline-offset-4) duration-300'>
								cd /home
							</span>
						</button>
					</Link>
				</div>
			</div>
		</div>
	)
}
