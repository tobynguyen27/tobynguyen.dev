import { lazy } from "react"
import "../styles/markdown.css"
interface MarkdownPreviewProps {
	source: string
}

const Markdown = lazy(() => import("@uiw/react-markdown-preview"))

export default function MarkdownPreview({ source }: MarkdownPreviewProps) {
	return (
		<Markdown
			source={source}
			style={{ backgroundColor: "black" }}
			wrapperElement={{
				"data-color-mode": "dark",
			}}
		/>
	)
}
