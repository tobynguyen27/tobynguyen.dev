import { lazy, ReactNode } from "react"
import "@/styles/markdown.css"
import ShikiHighlighter, { Element, isInlineCode } from "react-shiki"

interface MarkdownPreviewProps {
	source: string
}

const Markdown = lazy(() => import("react-markdown"))

export default function MarkdownPreview({ source }: MarkdownPreviewProps) {
	return <Markdown children={source} components={{ code: CodeHighlight }} />
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
		<code className={className} {...props}>
			{code}
		</code>
	)
}
