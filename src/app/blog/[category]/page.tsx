import { Post } from "@/types"
import { getBlogPosts } from "../utils"
import { notFound } from "next/navigation"
import MaxWidthWrapper from "@/components/reutilizable/MaxWidthWrapper"
import Link from "next/link"
import Header from "@/components/reutilizable/Header"
import CardCategory from "@/components/custom/blog/CardCategory"


type SearchParams = {
  params: {
    category: string
  }
}

export default function CategoryPage({ params }: SearchParams) {
  const posts: Pick<Post, "metadata" | any>[] = getBlogPosts().filter((post: Pick<Post, "metadata" | any>) => post.metadata.category === params.category)
  if (!posts) notFound()
  return (

    <MaxWidthWrapper className="">
      <Header className="mt-4">
        <h1 className="title font-semibold text-2xl tracking-wider uppercase">
          {posts[0]?.metadata.category}
        </h1>
      </Header>

      <div className="w-full grid gap-2 grid-cols-1 mx-0 md:grid-cols-2 lg:grid-cols-3 mt-4">
        {posts
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post) => (
            <Link
              href={`/blog/${post.metadata.category}/${post.slug}`}
              key={post.slug}
            >
              <CardCategory
                title={post.metadata.title}
                summary={post.metadata.summary}
                date={post.metadata.publishedAt}
              />
            </Link>
          ))}
      </div>
    </MaxWidthWrapper>


  )
}

