import dayjs from "dayjs"

interface PostItemProps {
	title: string
	date: Date
	description: string
	link: string
}

export default function PostItem({
	link,
	title,
	date,
	description,
}: PostItemProps) {
	return (
		<a
			href={link}
			className='w-full hover:(bg-stone/15 cursor-pointer) rounded-md p-5 duration-300 flex flex-col justify-center'>
			<div className=''>
				<p className='text-white font-semibold text-3xl'>{title}</p>
			</div>
			<div className=''>
				<p className='text-gray-300'>{description}</p>
			</div>
			<div className='my-3'>
				<p className='text-gray-300'>
					{dayjs(date).format("MMMM D, YYYY")}
				</p>
			</div>
		</a>
	)
}
