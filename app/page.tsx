import Link from "next/link"
import { draftMode } from "next/headers"
import { getAllPosts } from "@/lib/api"

export default async function Page() {
  const { isEnabled } = await draftMode()
  const allPosts = await getAllPosts(isEnabled)

  return (
    <div className="container mx-auto px-5 py-12">
      {allPosts.length === 0 ? (
        <div className="border-2 border-yellow-500 rounded-lg p-8 bg-yellow-50">
          <h2 className="text-2xl font-bold mb-4 text-yellow-900">Contentful Setup Required</h2>
          <p className="mb-4 text-yellow-900">
            Your Contentful space needs a <strong>"Blog Post"</strong> content type configured before this blog can
            display posts.
          </p>
          <p className="text-sm text-yellow-800">
            See <code className="bg-yellow-100 px-2 py-1 rounded">CONTENTFUL_SETUP.md</code> for detailed instructions.
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          {allPosts.map((post) => (
            <article key={post.slug} className="border-b border-border pb-8">
              <Link href={`/posts/${post.slug}`} className="group">
                <h2 className="text-3xl font-bold mb-2 group-hover:text-primary transition-colors">{post.title}</h2>
                {post.date && (
                  <time className="text-sm text-muted-foreground">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                )}
                {post.excerpt && <p className="mt-2 text-muted-foreground leading-relaxed">{post.excerpt}</p>}
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}
