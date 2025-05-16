import ShikiHighlighter, { Element, isInlineCode } from "react-shiki"
import cn from "@/utils/cn"
import { ReactNode, useMemo, useState } from "react"

export default function CodeHighlight({
	className,
	children,
	node,
	...props
}: {
	className?: string
	children?: ReactNode
	node?: Element
}) {
	const code = String(children).trim()

	const match1 = className?.match(/-([^#]+)#(.+)/)
	const match2 = className?.match(/language-(.+)/)

	const filename = match1 ? match1[1] : undefined
	const language = match1 ? match1[2] : match2 ? match2[1] : undefined

	const isInline = node ? isInlineCode(node) : undefined

	const [copied, setCopied] = useState(false)

	const copyToClipboard = async () => {
		await navigator.clipboard.writeText(code)
		setCopied(true)
		setTimeout(() => setCopied(false), 1000)
	}

	if (isInline) {
		return (
			<code
				className={cn(
					className,
					"bg-gray-300/20 px-1 py-0.5 rounded-lg",
				)}
				{...props}>
				{code}
			</code>
		)
	}

	return (
		<div
			className={cn(
				" w-full h-full bg-[#1E1E2E]",
				!filename && "relative",
			)}>
			{filename ? (
				<div className='w-full border-b border-b-gray-300/10 flex justify-between'>
					<div className='ml-3 flex items-center gap-1'>
						<i
							className={cn(
								`i-devicon-${language}`,
								!filename ? "hidden" : "",
							)}></i>
						<span className={cn(filename ?? "ml-3")}>
							{filename}
						</span>
					</div>
					<button
						onClick={copyToClipboard}
						className=' hover:cursor-pointer py-1 mr-3'
						aria-label='Copy code to clipboard'>
						{copied ? (
							<span className='i-tabler-copy-check h-5 w-5 text-green-400' />
						) : (
							<span className='i-tabler-copy h-5 w-5 text-gray-300' />
						)}
					</button>
				</div>
			) : (
				<button
					onClick={copyToClipboard}
					className='bg-[#1E1E2E] hover:cursor-pointer absolute z-1 top-2 right-3 p-2'
					aria-label='Copy code to clipboard'>
					{copied ? (
						<span className='i-tabler-copy-check h-5 w-5 text-green-400' />
					) : (
						<span className='i-tabler-copy h-5 w-5 text-gray-300' />
					)}
				</button>
			)}
			<ShikiHighlighter
				language={language}
				theme='catppuccin-mocha'
				showLanguage={false}
				{...props}>
				{code}
			</ShikiHighlighter>
		</div>
	)
}
