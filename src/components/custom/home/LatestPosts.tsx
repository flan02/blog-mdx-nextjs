import { getBlogPosts } from "@/app/blog/utils"
import PostComponent from "@/components/reutilizable/PostComponent";



type Props = {}

export default function LatestPosts() {
  const latestPosts = getBlogPosts();
  //console.log("Post obtained are", latestPosts.map((post) => post.metadata.title));

  return (
    <>
      <h1 className="inline-block mt-6 font-heading text-3xl tracking-tight lg:text-4xl">Recently Published</h1>

      {
        latestPosts.length === 0 ? <p>No post available</p> :
          latestPosts
            .sort((a, b) => {
              if (
                new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
              ) {
                return -1;
              }
              return 1;
            })
            .map((post) => {
              return <PostComponent post={post} key={post.slug} />
            })
      }
    </>
  )
}

