import { createFileRoute } from "@tanstack/react-router"
import dayjs from "dayjs"
import fm from "front-matter"
import PostMetadata from "../../types/PostMetadata"
import { lazy, Suspense } from "react"

export const Route = createFileRoute("/blog/")({
	loader: async () => {
		const modules = import.meta.glob("../../assets/posts/*.md", {
			eager: false,
			query: "?raw",
			import: "default",
		})

		const posts = await Promise.all(
			Object.entries(modules).map(async ([, resolver]) => {
				const rawPost = (await resolver()) as string
				const { attributes } = fm(rawPost)
				return attributes as PostMetadata
			}),
		)

		posts.sort((a, b) => {
			return dayjs(b.date).isBefore(dayjs(a.date)) ? 1 : -1
		})

		return { posts }
	},
	component: Index,
})

const PostItem = lazy(() => import("../../components/PostItem"))

function Index() {
	const { posts } = Route.useLoaderData()

	return (
		<div className='w-11/12 sm:w-4/6 md:w-3/5 lg:1/2 mx-auto h-full'>
			<div className='my-8'>
				<h1 className='text-white text-5xl p-5'>Blog</h1>
			</div>
			<div className=''>
				<Suspense
					fallback={
						<p className='text-white text-lg'>Loading posts...</p>
					}>
					{posts.map(({ id, title, description, date }) => (
						<PostItem
							key={id}
							title={title}
							date={dayjs(date, "YYYY-MM-DD").toDate()}
							description={description}
							link={`/blog/${id}`}
						/>
					))}
				</Suspense>
			</div>
		</div>
	)
}
