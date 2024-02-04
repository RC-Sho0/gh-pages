import { getAllPosts, getAllTagsFromPosts } from '@/lib/notion'
import SearchLayout from '@/layouts/search'
import Container from '@/components/Container'


export default function BlogPost ({ post, blockMap, emailHash }) {
  const router = useRouter()

  // TODO: It would be better to render something
  if (router.isFallback) return null

  const fullWidth = post.fullWidth ?? false

  return (
    <Container
      title={post.title}
      description={post.summary}
      // date={new Date(post.publishedAt).toISOString()}
      type="article"
      fullWidth={fullWidth}
    ></Container>)

export default function Tag ({ tags, posts, currentTag }) {
  return <SearchLayout tags={tags} posts={posts} currentTag={currentTag} />
}

export async function getStaticProps ({ params }) {
  const currentTag = params.tag
  const posts = await getAllPosts({ includePages: false })
  const tags = getAllTagsFromPosts(posts)
  const filteredPosts = posts.filter(
    post => post && post.tags && post.tags.includes(currentTag)
  )
  return {
    props: {
      tags,
      posts: filteredPosts,
      currentTag
    },
    revalidate: 1
  }
}

export async function getStaticPaths () {
  const posts = await getAllPosts({ includePages: false })
  const tags = getAllTagsFromPosts(posts)
  return {
    paths: Object.keys(tags).map(tag => ({ params: { tag } })),
    fallback: true
  }
}
