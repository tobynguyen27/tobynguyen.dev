export interface ProjectItemProps {
	icon: string
	name: string
	description: string
	url: string
}

export default function ProjectItem({
	icon,
	name,
	description,
	url,
}: ProjectItemProps) {
	return (
		<a
			href={url}
			target='_blank'
			className='w-full h-full border p-5 rounded-lg hover:(bg-stone/15 cursor-pointer) duration-300'>
			<div className='flex flex-inline h-auto items-center'>
				<div className=''>
					<img
						src={icon}
						className='w-28 h-28 rounded-md'
						alt='icon'
					/>
				</div>
				<div className=''>
					<p className='text-white text-2xl ml-5 font-semibold'>
						{name}
					</p>
				</div>
			</div>
			<div className='h-auto'>
				<p className='text-gray-300'>{description}</p>
			</div>
		</a>
	)
}
