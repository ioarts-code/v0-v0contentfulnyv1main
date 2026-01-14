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
  const { isEnabled } = await draftMode()
  const { post } = await getPostAndMorePosts(slug, isEnabled)

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
        className="inline-block mb-8 hover:opacity-70 transition-opacity font-title text-xl text-neutral-700">
      </Link>

      <article>
        {post.image && (
          <div className="mb-8">
            <img
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        )}

        <h1 className="text-3xl md:text-5xl font-title mb-4 text-neutral-700">{post.title}</h1>

        {post.description && (
          <div className="border-t border-border border-none border-none mt-0 pt-0">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-neutral-700">Description</h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{post.description}</p>

            <a
              href="https://www.deviantart.com/ioartseu/gallery/all"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-6 px-8 py-4 text-white rounded-full font-title text-lg hover:bg-neutral-800 hover:shadow-lg hover:scale-105 transition-all duration-300 group bg-neutral-700"
            >
              <svg
                className="w-6 h-6 animate-pulse group-hover:animate-none group-hover:scale-110 transition-transform duration-300"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19.207 4.794l.23-.43V0H15.07l-.436.44-2.058 3.836-.627.354H4.58v5.378h4.156l-5.02 9.378-.2.428V24h4.364l.436-.44 2.058-3.836.627-.354h7.37v-5.378h-4.156l5.02-9.378z" />
              </svg>
              <span>View on DeviantArt</span>
            </a>
          </div>
        )}
      </article>
    </div>
  )
}
