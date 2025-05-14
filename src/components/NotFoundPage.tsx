import { Link } from "@tanstack/react-router"

interface NotFoundPageProps {
	description: string
	buttonLabel: string
	buttonUrl: string
}

export default function NotFoundPage({
	description,
	buttonLabel,
	buttonUrl,
}: NotFoundPageProps) {
	return (
		<div className='w-full h-screen flex flex-col items-center justify-center'>
			<p className='text-white text-8xl font-light text-center'>404</p>
			<p className='text-gray-300 text-5xl my-3 text-center'>
				{description}
			</p>
			<Link to={buttonUrl}>
				<button className='text-gray-300/80 text-xl rounded-md hover:(cursor-pointer text-white) duration-300 group'>
					<span className='group-hover:(underline underline-offset-4) duration-300'>
						{buttonLabel}
					</span>
				</button>
			</Link>
		</div>
	)
}
