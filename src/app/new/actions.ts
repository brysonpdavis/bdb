"use server"
import { redirect } from 'next/navigation'
import { remark } from "remark"
import remarkHtml from "remark-html"
import { db, posts } from "$db"

export async function parseMarkdown(md: string): Promise<string> {
    const processedContent = await remark()
    .use(remarkHtml, {sanitize: true})
    .process(md)

    return processedContent.toString()
}

export async function insertPost(post: {markdown: string, title: string}) {
    "use server"
    console.log('inserting...')
    await db.insert(posts).values([{
        markdown: post.markdown,
        title: post.title
    }])
    console.log('done inserting')
    redirect('/')
}
