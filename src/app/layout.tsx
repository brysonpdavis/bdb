import 'src/styles/globals.css'
import localFont from 'next/font/local'
import Link from 'next/link'

export const metadata = {
  title: 'blog',
  description: 'a high tide raises all ships',
}

const concourse = localFont({
  src: [
    {
      path: '../assets/fonts/concourse/concourse_t3_regular.woff',
      style: 'normal',
      weight: '300'
    },
    {
      path: '../assets/fonts/concourse/concourse_t3_italic.woff',
      style: 'italic',
      weight: '300'
    },
    {
      path: '../assets/fonts/concourse/concourse_t6_regular.woff',
      style: 'normal',
      weight: '600'
    },
    {
      path: '../assets/fonts/concourse/concourse_t6_italic.woff',
      style: 'italic',
      weight: '600'
    },
    {
      path: '../assets/fonts/concourse/concourse_t7_regular.woff',
      style: 'normal',
      weight: '700'
    },
    {
      path: '../assets/fonts/concourse/concourse_t7_italic.woff',
      style: 'italic',
      weight: '700'
    },
  ],
  variable: '--font-concourse'
})

const concourseCaps = localFont({
  src: [
    {
      path: '../assets/fonts/concourse/concourse_c3_regular.woff',
      style: 'normal',
      weight: '300'
    },
    {
      path: '../assets/fonts/concourse/concourse_c6_regular.woff',
      style: 'normal',
      weight: '600'
    },
    {
      path: '../assets/fonts/concourse/concourse_c7_regular.woff',
      style: 'normal',
      weight: '700'
    },
  ],
  variable: '--font-concourse-caps'
})

const triplicate = localFont({
  src: [
    {
      path: '../assets/fonts/triplicate/triplicate-t3.ttf',
      style: 'normal',
      weight: '300'
    },
    {
      path: '../assets/fonts/triplicate/triplicate-t4.ttf',
      style: 'normal',
      weight: '400'
    }
  ],
  variable: '--font-triplicate'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${concourse.variable} ${concourseCaps.variable} ${triplicate.variable}`} data-theme="forest">
      <body>
        <main className="flex h-screen flex-col items-center justify-center bg-gradient-to-b from-[#02306d] to-[#15162c]">
          <div className="navbar bg-base-100">
            <div className="flex-1">
              <Link href="/" className="btn btn-ghost normal-case text-xl">my blog</Link>
            </div>
            <div className="flex-none">
              <Link href="/new" className="btn btn-square btn-ghost">
                new
              </Link>
            </div>
          </div>
          <div className="container overflow-scroll h-screen flex flex-col items-center gap-12 px-4 py-16 prose">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
