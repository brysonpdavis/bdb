"use client"

import { useState } from "react"
import { insertPost } from "./actions"

export default function Client({ parseMarkdown }: { parseMarkdown: (md: string) => Promise<string> }) {

    const [showPreview, setShowPreview] = useState(false)
    const [markdown, setMarkdown] = useState('')
    const [title, setTitle] = useState('')
    const [parsedMarkdown, setParsedMarkdown] = useState<string | undefined>(undefined)


    if (showPreview && parsedMarkdown === undefined) {
        return <div className="w-full flex flex-col gap-4">
            <div className="loading loading-spinner"></div>
            <button onClick={() => setShowPreview(false)}>back to edit</button>
        </div>
    }

    if (showPreview && parsedMarkdown) {
        return <div className="w-full flex flex-col gap-4">
            <h2>{title}</h2>
            <div className="border p-4 w-full" dangerouslySetInnerHTML={{ __html: parsedMarkdown }} ></div>
            <button className="w-full btn btn-accent" onClick={() => { setShowPreview(prev => !prev); setParsedMarkdown(undefined) }}>back to edit</button>
        </div>
    }

    return <div className="w-full flex flex-col gap-4">
        <input defaultValue={title} placeholder="title..." className="input input-primary w-full text-xl" onChange={e => setTitle(e.currentTarget.value)} />
        <textarea defaultValue={markdown} placeholder="content..." className="textarea textarea-primary w-full h-full text-xl" onChange={e => setMarkdown(e.currentTarget.value)} />
        <button className="w-full btn btn-accent" onClick={async () => { setShowPreview(prev => !prev); const pmd = await parseMarkdown(markdown); setParsedMarkdown(pmd) }} >preview</button>
        <button className="w-full btn btn-primary" onClick={async () => { await insertPost({ markdown, title }) }}>submit</button>
    </div>
}