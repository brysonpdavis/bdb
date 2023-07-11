import Client from "./client"
import { parseMarkdown } from "./actions"

export const runtime = "edge"
export const revalidate = 0

export default async function New() {
    return <Client parseMarkdown={parseMarkdown} />
}
