"use server"

import { db, posts } from "$db"
import { eq } from "drizzle-orm"
import { revalidatePath } from "next/cache"

export async function deletePost(formData: FormData) {
    console.log('deleting...')
    await db.delete(posts).where(eq(posts.id, Number(formData.get("postId"))))
    revalidatePath('/')
}

export async function insertPost() {
    "use server"
    console.log('inserting...')
    await db.insert(posts).values([{
        markdown: '<>this is some markdown</>',
        title: 'blog post title'
    }])
    console.log('done inserting')
    revalidatePath('/')
}
