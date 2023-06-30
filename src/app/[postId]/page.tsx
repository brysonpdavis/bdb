import { db, posts } from "$db"
import { eq } from "drizzle-orm"

export const runtime = "edge"
export const revalidate = 0

export default async function Page({ params }: { params: { postId: string } }) {

    const post = (await db.select().from(posts).where(eq(posts.id, Number(params.postId)))).at(0)

    if (!post) {
        return <div>couldnt find that post</div>
    }
    return <div className="p-4"><pre>
        {JSON.stringify(post, undefined, 4)}
    </pre></div>
}