import { lazy } from "react"
import "@/styles/markdown.css"

import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import rehypeIgnore from "rehype-ignore"
import CodeHighlight from "./CodeHighlight"

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
