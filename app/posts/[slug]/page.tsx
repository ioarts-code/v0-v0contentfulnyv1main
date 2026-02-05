import Link from "next/link"
import { draftMode } from "next/headers"
import { getAllPosts, getPostAndMorePosts } from "@/lib/api"

export async function generateStaticParams() {
  const allPosts = await getAllPosts(false)

  return allPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function PostPage({ params }: any) {
  const { slug } = await params
  const decodedSlug = decodeURIComponent(slug)
  const { isEnabled } = await draftMode()
  const { post } = await getPostAndMorePosts(decodedSlug, isEnabled)

  if (!post) {
    return (
      <div className="container mx-auto px-4 md:px-5 py-8 md:py-12">
        <h1 className="text-3xl font-bold">Post not found</h1>
        <p className="mt-4 text-muted-foreground">The post you are looking for does not exist.</p>
        <Link href="/" className="mt-4 inline-block text-primary hover:underline">
          Return to home
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-4xl md:pb-28">
      <Link
        href="/"
        className="inline-block mb-8 hover:opacity-70 transition-opacity font-title text-xl text-neutral-700"
      >
        Home
      </Link>

      <article>
        {post.image && (
          <div className="mb-8">
            <img
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              className="w-full h-auto object-cover rounded-lg bg-slate-300 bg-slate-300 bg-slate-100"
            />
          </div>
        )}

        <h1 className="text-3xl md:text-5xl font-title py-0 underline mb-7 ml-1.5 text-white      {post.description && (
          <div className="rounded-2xl pt-2 bg-transparent<h2 className="text-xl md:text-2xl font-bold mb-4 text-white px-9 py-4 pb-0 mt-0">Description</h2>
            <p className="text-base leading-relaxed text-white px-9 md:text-base">{post.description}</p>

            <a
          bg-neutral-700 rounded-2xl pt-2 border-2 border-2 border border-0 border-solid border-solid border-none border-none border-whitet.com/ioartseu/gallery/all"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-white font-title text-lg hover:scale-105 transition-all duration-300 group bg-neutral-700 px-6 ml-[32px] mb-8 rounded-lg border-3 border-white mt-3.5 py-2.5"
            >
              <svg
                className="w-6 h-6 group-hover:animate-pulse group-hover:scale-110 transition-transform duration-300"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19.207 4.794l.23-.43V0H15.07l-.436.44-2.058 3.836-.627.354H4.58v5.378h4.156l-5.02 9.378-.2.428V24h4.364l.436-.44 2.058-3.836.627-.354h7.37v-5.378h-4.156l5.02-9.378z" />
              </svg>
              <span>DeviantArt</span>
            </a>

          </div>
        )}
      </article>
    </div>
  )
}
