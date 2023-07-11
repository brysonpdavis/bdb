import { remark } from "remark"
import remarkHtml from "remark-html"
import remarkGfm from "remark-gfm"

export async function parseMarkdown(md: string) {
    "use server"
    const processedContent = await remark()
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        .use(remarkHtml, { sanitize: true })
        .use(remarkGfm)
        .process(md)

    return processedContent.toString()
}