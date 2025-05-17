import { Element, isInlineCode } from "react-shiki"
import cn from "@/utils/cn"
import { lazy, ReactNode, Suspense, useState } from "react"

const ShikiHighlighter = lazy(() => import("react-shiki"))

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
	const isInline = node ? isInlineCode(node) : undefined

	const match1 = className?.match(/-([^#]+)#(.+)/)
	const match2 = className?.match(/language-(.+)/)

	const filename = match1 ? match1[1] : undefined
	const language = match1 ? match1[2] : match2 ? match2[1] : undefined

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
					<CopyButton
						className=' hover:cursor-pointer py-1 mr-3'
						content={code}
					/>
				</div>
			) : (
				<CopyButton
					className='bg-[#1E1E2E] hover:cursor-pointer absolute z-1 top-2 right-3 p-2'
					content={code}
				/>
			)}
			<Suspense
				fallback={<p className='text-gray-300'>Loading code...</p>}>
				<ShikiHighlighter
					language={language}
					theme='catppuccin-mocha'
					showLanguage={false}
					{...props}>
					{code}
				</ShikiHighlighter>
			</Suspense>
		</div>
	)
}

function CopyButton({
	className,
	content,
}: {
	className?: string
	content: string
}) {
	const [copied, setCopied] = useState(false)

	const copyToClipboard = async () => {
		await navigator.clipboard.writeText(content)
		setCopied(true)
		setTimeout(() => setCopied(false), 1000)
	}

	return (
		<button
			onClick={copyToClipboard}
			className={className}
			aria-label='Copy code to clipboard'>
			{copied ? (
				<span className='i-tabler-copy-check h-5 w-5 text-green-400' />
			) : (
				<span className='i-tabler-copy h-5 w-5 text-gray-300' />
			)}
		</button>
	)
}
