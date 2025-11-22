const POST_GRAPHQL_FIELDS = `
  sys {
    id
    publishedAt
  }
  slug
  title
  image {
    url
  }
  price
  author
`

async function fetchGraphQL(query: string, preview = false): Promise<any> {
  const response = await fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${
        preview ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN : process.env.CONTENTFUL_ACCESS_TOKEN
      }`,
    },
    body: JSON.stringify({ query }),
    next: { tags: ["posts"], revalidate: 60 },
  })

  const result = await response.json()

  if (result?.errors) {
    console.warn("[v0] Contentful returned errors (likely unresolvable links):", result.errors.length)
  }

  return result
}

function extractPost(fetchResponse: any): any {
  const post = fetchResponse?.data?.titleCollection?.items?.[0]
  // Return null if the post doesn't exist or has critical missing data
  if (!post || !post.slug) return null
  return post
}

function extractPostEntries(fetchResponse: any): any[] {
  const items = fetchResponse?.data?.titleCollection?.items ?? []
  // Filter out null entries caused by unresolvable links
  return items.filter((item: any) => item !== null && item.slug)
}

export async function getPreviewPostBySlug(slug: string | null): Promise<any> {
  const entry = await fetchGraphQL(
    `query {
      titleCollection(where: { slug: "${slug}" }, preview: true, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    true,
  )
  return extractPost(entry)
}

export async function getAllPosts(isDraftMode: boolean): Promise<any[]> {
  const entries = await fetchGraphQL(
    `query {
      titleCollection(where: { slug_exists: true }, order: title_DESC, preview: ${isDraftMode ? "true" : "false"}) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    isDraftMode,
  )
  return extractPostEntries(entries)
}

export async function getPostAndMorePosts(slug: string, preview: boolean): Promise<any> {
  const entry = await fetchGraphQL(
    `query {
      titleCollection(where: { slug: "${slug}" }, preview: ${preview ? "true" : "false"}, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview,
  )
  const entries = await fetchGraphQL(
    `query {
      titleCollection(where: { slug_not_in: "${slug}" }, order: title_DESC, preview: ${
        preview ? "true" : "false"
      }, limit: 2) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview,
  )
  return {
    post: extractPost(entry),
    morePosts: extractPostEntries(entries),
  }
}
