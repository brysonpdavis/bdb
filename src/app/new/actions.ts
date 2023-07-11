"use server"
import { redirect } from 'next/navigation'
import { db, posts } from "$db"


export async function insertPost(post: { markdown: string, title: string }) {
    "use server"
    console.log('inserting...')
    await db.insert(posts).values([{
        markdown: post.markdown,
        title: post.title
    }])
    console.log('done inserting')
    redirect('/')
}
