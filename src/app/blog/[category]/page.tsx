import { notFound } from "next/navigation"
import MaxWidthWrapper from "@/components/reutilizable/MaxWidthWrapper"
import Link from "next/link"
import Header from "@/components/reutilizable/Header"
import CardCategory from "@/components/custom/blog/CardCategory"
import { usePostsFiltered } from "@/hooks/usePosts"
import { getBlogPosts } from "../utils"

// $ This fc (its name has to be generateStaticParams) avoid -> ƒ (Dynamic) server-rendered on demand. The content is prerendered as static HTML (SSG)
export async function generateStaticParams() {
  let posts = getBlogPosts()
  return posts.map((post) => ({
    category: post.metadata.category // returns the category of each post in an object
  }))
}

type SearchParams = {
  params: {
    category: string
  }
}

export function generateMetadata({ params }: SearchParams) {
  let { category } = params;

  return {
    title: category.toLocaleUpperCase(),
    description: `All articles regarding ${category}`,
  };
}


export default function CategoryPage({ params }: SearchParams) {
  const postsFiltered = usePostsFiltered(params.category)
  //console.log(postsFiltered);
  if (postsFiltered.length === 0) return notFound()

  return (
    <MaxWidthWrapper className="">
      <Header className="mt-4">
        <h1 className="title font-semibold text-2xl tracking-wider uppercase">
          {postsFiltered[0]?.metadata.category}
        </h1>
      </Header>

      <div className="w-full grid gap-2 grid-cols-1 mx-0 md:grid-cols-2 lg:grid-cols-3 mt-4">
        {
          postsFiltered.map((post: any) => (
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
          ))
        }
      </div>
    </MaxWidthWrapper>


  )
}

