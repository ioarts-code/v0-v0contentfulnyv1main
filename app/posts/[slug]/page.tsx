import Link from "next/link"
import { draftMode } from "next/headers"
import { Markdown } from "@/lib/markdown"
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
    <div className="container mx-auto px-4 md:px-5 py-8 md:py-12">
      <Link href="/" className="inline-block mb-8 text-primary hover:underline">
        ← Back to all posts
      </Link>

      <article className="max-w-4xl mx-auto">
        {post.image?.url && (
          <div className="mb-8 rounded-lg overflow-hidden bg-muted">
            <img src={post.image.url || "/placeholder.svg"} alt={post.title} className="w-full h-auto object-cover" />
          </div>
        )}

        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-4 mb-4">
          <h1 className="text-3xl md:text-5xl font-bold flex-1">{post.title}</h1>
          {post.price && (
            <div className="text-2xl md:text-3xl font-bold text-primary whitespace-nowrap">${post.price}</div>
          )}
        </div>

        <div className="flex items-center gap-4 text-muted-foreground mb-8">
          {post.author && (
            <>
              <span className="font-medium text-foreground">{post.author}</span>
              {post.date && <span>•</span>}
            </>
          )}
          {post.date && (
            <time>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          )}
        </div>

        {post.content && (
          <div className="prose md:prose-lg mt-8 max-w-none">
            <Markdown content={post.content} />
          </div>
        )}
      </article>
    </div>
  )
}
