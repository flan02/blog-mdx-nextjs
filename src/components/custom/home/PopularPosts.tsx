"use client";

//import { popularPosts } from "@/lib/placeholder-data";
import useSWR from "swr";

import { fetcher, fetchUrl } from "@/lib/utils";
import { Icons } from "@/components/icons/Icons";
import Link from "next/link";
import PostSkeleton from "@/components/skeletons/PostSkeleton";

type Post = {
  category: string;
  title: string;
  slug: string;
};

const PopularPosts = () => {
  const { data, error, isLoading } = useSWR(fetchUrl, fetcher);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <PostSkeleton />;
  return (
    <ul className="overflow-auto">
      {data?.map((post: Post) => (
        <Link href={`/blog/${post.category}/${post.slug}`} key={post.title}>
          <li className="flex items-center gap-2 group cursor-pointer py-2">
            <Icons.arrowRight className="h-6 w-6 group-hover:translate-x-1 transition-all" />
            <p>{post.title}</p>
          </li>
        </Link>
      ))}
    </ul>
  )
}

export default PopularPosts