import { remark } from "remark"
import remarkHtml from "remark-html"

export async function parseMarkdown(md: string) {
    "use server"
    const processedContent = await remark()
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        .use(remarkHtml, { sanitize: true })
        .process(md)

    return processedContent.toString()
}