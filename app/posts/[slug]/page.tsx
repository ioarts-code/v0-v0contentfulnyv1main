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
  const { isEnabled } = await draftMode()
  const { post } = await getPostAndMorePosts(params.slug, isEnabled)

  if (!post) {
    return (
      <div className="container mx-auto px-5 py-12">
        <h1 className="text-3xl font-bold">Post not found</h1>
        <p className="mt-4 text-muted-foreground">The post you are looking for does not exist.</p>
        <Link href="/" className="mt-4 inline-block text-primary hover:underline">
          Return to home
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-5 py-12">
      <Link href="/" className="inline-block mb-8 text-primary hover:underline">
        ← Back to all posts
      </Link>

      <article className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">{post.title}</h1>

        {post.date && (
          <time className="text-muted-foreground">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        )}

        {post.content && (
          <div className="prose prose-lg mt-8 max-w-none">
            <Markdown content={post.content} />
          </div>
        )}
      </article>
    </div>
  )
}
