import Client from "./client"
import { parseMarkdown } from "$lib/parse-markdown"

export const runtime = "edge"
export const revalidate = 0

export default function New() {
    return <Client parseMarkdown={parseMarkdown} />
}
