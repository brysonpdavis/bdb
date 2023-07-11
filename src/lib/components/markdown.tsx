import { parseMarkdown } from "$lib/parse-markdown"

export async function Markdown({ content }: { content: string }) {
    const contentHtml = await parseMarkdown(content)
    return <div className="p-4" data-theme="forest" dangerouslySetInnerHTML={{__html: contentHtml}}></div>
}