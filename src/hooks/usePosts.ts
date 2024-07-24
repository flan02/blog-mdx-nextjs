import { getBlogPosts } from "@/app/blog/utils";
import { Post } from "@/types";




export function usePostsLatest() {
  let orderedPosts: any = [];
  const latestPosts = getBlogPosts();
  latestPosts.sort((a, b) => {
    if (
      new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
    ) {
      return -1;
    }
    return 1;
  })
    .map((post) => {

      orderedPosts.push(post);
    })
  return orderedPosts;
}


export function usePostsFiltered(category: string) {
  let filteredPosts: any = [];
  const posts: Pick<Post, "metadata" | any>[] = getBlogPosts().filter((post: Pick<Post, "metadata" | any>) => post.metadata.category === category);
  posts.sort((a, b) => {
    if (
      new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
    ) {
      return -1;
    }
    return 1;
  })
    .map((post) => {

      filteredPosts.push(post);
    })
  return filteredPosts;
}