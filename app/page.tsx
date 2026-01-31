import Link from "next/link"
import { draftMode } from "next/headers"
import { getAllPosts } from "@/lib/api"
import Image from "next/image"

export default async function Page() {
  const { isEnabled } = await draftMode()
  const allPosts = await getAllPosts(isEnabled)

  return (
    <div className="flex h-screen overflow-hidden relative">
      {/* Vertical text with links - visible on whole site */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20" style={{ writingMode: 'vertical-rl' }}>
        <span className="font-title text-gray-500 text-sm tracking-widest">
          Follow{' '}
          <Link
            href="https://www.deviantart.com/ioartseu/gallery/all"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700 transition-colors"
          >
            DeviantArt
          </Link>
          {' / '}
          <Link
            href="https://www.etsy.com/shop/ioartseu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700 transition-colors"
          >
            ETSY inc
          </Link>
        </span>
      </div>

      {/* Left side - Scrollable posts */}
      <main className="w-full md:w-1/2 overflow-y-auto px-4 md:px-8 py-8 md:py-12 bg-slate-200">
        <h3 className="text-lg md:text-xl font-title mb-6 md:mb-8 text-foreground underline">Browse</h3>

        {allPosts.length === 0 ? (
          <div className="border-2 border-destructive rounded-lg p-8 bg-destructive/10">
            <h2 className="text-2xl font-bold mb-4 text-destructive-foreground">Contentful Setup Required</h2>
            <p className="mb-4 text-foreground">
              Your Contentful space needs a <strong>"Blog Post"</strong> content type configured before this blog can
              display posts.
            </p>
            <p className="text-sm text-muted-foreground">
              See <code className="bg-muted px-2 py-1 rounded">CONTENTFUL_SETUP.md</code> for detailed instructions.
            </p>
          </div>
        ) : (
          <div className="space-y-6 md:space-y-8">
            {allPosts.map((post) => (
              <article key={post.slug} className="border-b pb-6 md:pb-8 border-neutral-700">
                <Link href={`/posts/${post.slug}`} className="group">
                  {post.image && (
                    <div className="relative w-full h-[100px] mb-4 overflow-hidden">
                      <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                    </div>
                  )}
                  <h2 className="text-2xl md:text-3xl font-title mb-2 text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>

                  {post.excerpt && <p className="mt-2 text-muted-foreground leading-relaxed">{post.excerpt}</p>}
                </Link>
              </article>
            ))}
          </div>
        )}
      </main>

      {/* Right side - Image (hidden on mobile) */}
      <aside className="hidden md:block md:w-1/2 relative">
        <h2 className="absolute top-8 left-1/2 -translate-x-1/2 font-title text-5xl md:text-6xl text-black z-10 text-right">
          Custom Gear
        </h2>
        <div className="relative w-full h-full flex items-center justify-center bg-slate-200">
          <div className="relative w-[85%] h-[85%]">
            <Image
              src="/images/7691.png"
              alt="Abstract design with geometric patterns"
              fill
              className="object-contain rotate-0 mb-0 bg-slate-200"
              priority
            />
          </div>
        </div>
      </aside>
    </div>
  )
}
