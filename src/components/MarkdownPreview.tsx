import { lazy } from "react"
import "@/styles/markdown.css"
interface MarkdownPreviewProps {
	source: string
}

const Markdown = lazy(() => import("react-markdown"))

export default function MarkdownPreview({ source }: MarkdownPreviewProps) {
	return <Markdown children={source} />
}
