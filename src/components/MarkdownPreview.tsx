import { lazy, ReactNode, useState } from "react"
import "@/styles/markdown.css"
import ShikiHighlighter, { Element, isInlineCode } from "react-shiki"
import cn from "@/utils/cn"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import rehypeIgnore from "rehype-ignore"

interface MarkdownPreviewProps {
	source: string
}

const Markdown = lazy(() => import("react-markdown"))

export default function MarkdownPreview({ source }: MarkdownPreviewProps) {
	return (
		<Markdown
			children={source}
			components={{ code: CodeHighlight }}
			remarkPlugins={[remarkGfm]}
			rehypePlugins={[rehypeRaw, rehypeIgnore]}
		/>
	)
}

function CodeHighlight({
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
	const match = className?.match(/language-(\w+)/)
	const language = match ? match[1] : undefined
	const isInline = node ? isInlineCode(node) : undefined

	const [copied, setCopied] = useState(false)

	const copyToClipboard = async () => {
		await navigator.clipboard.writeText(code)
		setCopied(true)
		setTimeout(() => setCopied(false), 1000)
	}

	return !isInline ? (
		<div className='relative w-full h-full'>
			<button
				onClick={copyToClipboard}
				className='bg-[#1E1E2E] hover:cursor-pointer absolute z-1 top-2 right-3 p-2'
				aria-label='Copy code to clipboard'>
				{copied ? (
					<span className='i-ic-baseline-check h-4 w-4 text-green-400' />
				) : (
					<span className='i-ic-baseline-content-copy h-4 w-4 text-gray-300' />
				)}
			</button>
			<ShikiHighlighter
				language={language}
				theme='catppuccin-mocha'
				showLanguage={false}
				{...props}>
				{code}
			</ShikiHighlighter>
		</div>
	) : (
		<code
			className={cn(className, "bg-gray-300/20 px-1 py-0.5 rounded-lg")}
			{...props}>
			{code}
		</code>
	)
}
