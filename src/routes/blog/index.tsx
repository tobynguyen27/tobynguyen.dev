import { createFileRoute } from "@tanstack/react-router"
import matter from "gray-matter"
import PostItem from "../../components/PostItem"
import dayjs from "dayjs"
import PostMetadata from "../../types/PostMetadata"

export const Route = createFileRoute("/blog/")({
	component: Index,
})

const posts = import.meta.glob("../../assets/posts/*.md", {
	eager: true,
	query: "?raw",
	import: "default",
})

function Index() {
	return (
		<div className='w-11/12 sm:w-4/6 md:w-3/5 lg:1/2 mx-auto h-full'>
			<div className='my-8'>
				<h1 className='text-white text-5xl p-5'>Blog</h1>
			</div>
			<div className=''>
				{Object.keys(posts).map(key => {
					const rawPost = posts[key] as string
					const post = matter(rawPost)
					const { id, title, description, date } =
						post.data as PostMetadata

					return (
						<PostItem
							key={id}
							title={title}
							date={dayjs(date, "YYYY-MM-DD").toDate()}
							description={description}
							link={`/blog/${id}`}
						/>
					)
				})}
			</div>
		</div>
	)
}
