import { remark } from "remark"
import remarkHtml from "remark-html"

export async function parseMarkdown(md: string) {
    const processedContent = await remark()
        // @ts-ignore
        .use(remarkHtml, { sanitize: true })
        .process(md)

    return processedContent.toString()
}