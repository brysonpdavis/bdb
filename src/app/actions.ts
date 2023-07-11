"use server"

import { db, posts } from "$db"
import { eq } from "drizzle-orm"
import { revalidatePath } from "next/cache"
import example from '$lib/example.md'

export async function deletePost(formData: FormData) {
    console.log('deleting...')
    await db.delete(posts).where(eq(posts.id, Number(formData.get("postId"))))
    revalidatePath('/')
}

export async function insertPost() {
    "use server"
    console.log('inserting...')
    console.log(typeof example)
    await db.insert(posts).values([{
        markdown: example,
        title: 'blog post title'
    }])
    console.log('done inserting')
    revalidatePath('/')
}
