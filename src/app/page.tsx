import { Metadata } from 'next';
import { db, posts } from '$db'
import type { InferModel } from "drizzle-orm";

export const metadata: Metadata = {
    title: "Bryson's Blog",
    description: "Still a work in progress... obviously"
}
export const runtime = "edge"
export const revalidate = 0

export default async function Home() {

    const ps = await getPosts()

    console.log('these are the posts: ', ps)

    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
            <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
                <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
                    Bryson&apos;s <span className="text-[hsl(280,100%,70%)]">Dev</span> Blog
                </h1>
                {ps.map((p) => <PostListItem key={p.id} post={p} />)}
                <form action={insertPost}>
                    <button type="submit" >insert post!</button>
                </form>
            </div>
        </main>
    );
}

async function getPosts() {
    return await db.select().from(posts)
}

async function insertPost() {
    "use server"
    console.log('inserting...')
    await db.insert(posts).values([{
        markdown: '<>markdown marky marky markdown</>',
        title: 'hey its a title'
    }])
    console.log('done inserting')
}

function PostListItem(props: { post: InferModel<typeof posts> }) {
    const p = props.post
    return <div key={p.id}><h2>{p.title}: {p.id}</h2>
        <pre>{p.markdown}</pre>
    </div>

}