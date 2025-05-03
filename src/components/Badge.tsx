import React from "react"

export interface BadgeProps {
	icon: React.JSX.Element
	text: string
	url: string
}

export default function Badge({ icon, text, url }: BadgeProps) {
	return (
		<a href={url} target='_blank'>
			<div className='flex items-center justify-center gap-1 bg-stone-900 py-1 px-2 rounded-md w-min hover:(bg-stone-800 cursor-pointer) duration-300'>
				{icon}
				<p className='text-gray-300 text-nowrap'>{text}</p>
			</div>
		</a>
	)
}
