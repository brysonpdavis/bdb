import type { Metadata } from 'next';
import { db, posts } from '$db'
import type { InferModel } from "drizzle-orm";
import Link from 'next/link';
import { deletePost, insertPost } from './actions';

export const metadata: Metadata = {
    title: "Bryson's Blog",
    description: "Still a work in progress... obviously"
}
export const runtime = "edge"
export const revalidate = 0

export default async function Home() {

    const ps = await getPosts()

    return (
        <main className="flex h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
            <div className="container h-screen flex flex-col items-center justify-center gap-12 px-4 py-16 ">
                <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
                    Bryson&apos;s <span className="text-[hsl(280,100%,70%)]">Dev</span> Blog
                </h1>
                <div className='flex flex-col w-full flex-grow gap-4 overflow-scroll'>
                    {ps.map((p) => <PostListItem key={p.id} post={p} />)}
                    <form action={insertPost}>
                        <button className='btn btn-secondary' type="submit" >insert post!</button>
                    </form>
                </div>
            </div>
        </main>
    );
}

async function getPosts() {
    return await db.select().from(posts)
}

async function PostListItem({ post }: { post: InferModel<typeof posts> }) {
    return <div key={post.id}><Link href={`/${post.id}`}><h2>{post.title}: {post.id}</h2></Link>
        <pre>{post.markdown}</pre>
        <form action={deletePost}><input hidden value={post.id} name='postId'></input><button className='btn'>delete</button></form>
    </div>
}

