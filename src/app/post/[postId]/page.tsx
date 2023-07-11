import { db, posts } from "$db"
import { Markdown } from "$lib/components/markdown"
import { eq } from "drizzle-orm"

export const runtime = "edge"
export const revalidate = 0

export default async function Page({ params }: { params: { postId: string } }) {

    const post = (await db.select().from(posts).where(eq(posts.id, Number(params.postId)))).at(0)

    if (!post) {
        return <div>couldnt find that post</div>
    }

    const { markdown, ...restOfPost } = post

    return <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-extrabold text-white ">Bryson's Dev Blog</h2>
        <h3>metadata</h3>
        <pre>
            {JSON.stringify(restOfPost, undefined, 4)}
        </pre>
        <h3>content</h3>
        <Markdown content={markdown} />
    </div>
}