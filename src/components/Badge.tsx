import React from "react"

interface BadgeProps {
	icon: React.JSX.Element
	text: string
	url: string
	noBackground?: boolean
}

export default function Badge({ icon, text, url, noBackground }: BadgeProps) {
	return (
		<a href={url} target='_blank'>
			<div
				className={`flex items-center justify-center gap-1 ${noBackground ? "" : "bg-stone-900"} py-1 px-2 rounded-md w-min hover:(bg-stone-800 text-gray-100 cursor-pointer) duration-300`}>
				{icon}
				<p className='text-gray-300 text-nowrap'>{text}</p>
			</div>
		</a>
	)
}
