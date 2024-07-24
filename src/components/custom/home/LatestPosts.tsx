import PostComponent from "@/components/reutilizable/PostComponent";
import { usePostsLatest } from "@/hooks/usePosts";

export default function LatestPosts() {

  //console.log("Post obtained are", latestPosts.map((post) => post.metadata.title));
  const orderedLatestPosts = usePostsLatest();
  return (
    <>
      <h1 className="inline-block mt-6 font-heading text-3xl tracking-tight lg:text-4xl">Recently Published</h1>
      {
        orderedLatestPosts.length === 0
          ? <p>No post available</p>
          : orderedLatestPosts.map((post: { slug: any; metadata: any; }) => {
            return <PostComponent post={post} key={post.slug} metadata={post.metadata} />
          })
      }
    </>
  )
}

