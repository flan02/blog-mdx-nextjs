import { Button } from "@/components/ui/button"
import { POSTS } from "@/lib/constants"
import Link from "next/link"


type Props = {}

const TopCategories = (props: Props) => {
  return (
    <div className="min-w-[450px] md:min-w-[100px] lg:min-w-[300px] grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-2">
      {POSTS.map((post, index) => (
        <Button
          key={index}
          variant={"secondary"}
          className="hover:scale-110 transition-all bg-gray-200 hover:border hover:border-gray-200 dark:bg-[rgba(50,50,50,.2)] dark:hover:dark:bg-[rgba(50,50,50,.4)] dark:hover:border-gray-700"
          asChild
        >
          <Link href={post.href}>{post.title}</Link>
        </Button>
      ))}
    </div>
  )
}

export default TopCategories