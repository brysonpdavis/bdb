import Client from "./client"
import { parseMarkdown } from "./actions"

export const runtime = "edge"
export const revalidate = 0

export default function New() {
    return <Client parseMarkdown={parseMarkdown} />
}
