import Head from "next/head";
import { db, posts } from '$db'
import { InferModel } from "drizzle-orm";

export default async function Home() {

    let ps = await getPosts()

    return (
        <>
            <Head>
                <title>Bryson's Blog</title>
                <meta name="description" content="Still a work in progress... obviously" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
                <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
                    <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
                        Bryson's <span className="text-[hsl(280,100%,70%)]">Dev</span> Blog
                    </h1>
                    {ps.map((p) => <PostListItem post={p} />)}
                    <form action={insertPost}>
                        <button type="submit" >insert post!</button>
                    </form>
                </div>
            </main>
        </>
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

async function PostListItem(props: { post: InferModel<typeof posts> }) {
    const p = props.post
    return <div key={p.id}><h1>{p.title}: {p.id}</h1>
        <pre>{p.markdown}</pre>
    </div>

}

export const runtime = "edge"