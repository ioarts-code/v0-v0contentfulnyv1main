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
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        )}

        <h1 className="text-3xl md:text-5xl font-title text-neutral-700 py-0 underline mb-7 ml-1.5">{post.title}</h1>

        {post.description && (
          <div className="bg-neutral-700 rounded-2xl pt-2">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-white px-9 py-4 pb-0 mt-0">Description</h2>
            <p className="text-base leading-relaxed text-white px-9 md:text-base">{post.description}</p>

            <div className="pb-7" />
          </div>
        )}
      </article>
    </div>
  )
}
