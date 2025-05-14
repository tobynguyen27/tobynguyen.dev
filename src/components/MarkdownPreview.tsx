import { lazy, ReactNode } from "react"
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

	return !isInline ? (
		<ShikiHighlighter
			language={language}
			theme='catppuccin-mocha'
			{...props}>
			{code}
		</ShikiHighlighter>
	) : (
		<code
			className={cn(className, "bg-gray-300/20 px-1 py-0.5 rounded-lg")}
			{...props}>
			{code}
		</code>
	)
}
