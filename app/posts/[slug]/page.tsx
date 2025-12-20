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
        className="inline-block mb-8 text-foreground hover:opacity-70 transition-opacity font-medium text-xl"
      >
        ← Back to all posts
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

        <h1 className="text-3xl md:text-5xl font-title mb-4 text-black">{post.title}</h1>

        <div className="flex flex-wrap items-center gap-3 text-sm md:text-base text-muted-foreground border-b border-border mb-8 pb-8">
          {post.price && <span className="text-xl md:text-2xl font-bold text-foreground">${post.price}</span>}
          {post.author && <span className="font-medium text-foreground">{post.author}</span>}
          {post.date && (
            <time className="text-muted-foreground" dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          )}
        </div>

        {post.description && (
          <div className="border-t border-border border-none border-none mt-0 pt-0">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-black">Description</h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{post.description}</p>

            <a
              href="https://www.deviantart.com/ioartseu/gallery/all"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-6 px-6 py-3 bg-foreground text-background rounded-lg hover:opacity-90 transition-all duration-300 group"
            >
              <svg
                className="w-8 h-8 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300"
                viewBox="0 0 256 256"
                fill="currentColor"
              >
                <path d="M208,0H94.4L69.6,27.2L60,32H0v79.2h45.6L35.2,126.4V256h113.6l24.8-27.2l9.6-4.8h72.8v-79.2h-45.6l10.4-15.2V0H208z M184,224h-73.6L80,207.2V150.4l19.2-16h72V224z" />
              </svg>
              <span className="font-title text-lg">View on DeviantArt</span>
            </a>
          </div>
        )}
      </article>
    </div>
  )
}
