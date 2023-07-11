import Client from "./client"
import { parseMarkdown } from "./actions"

export default async function New() {
    return <Client parseMarkdown={parseMarkdown}/>
}
 