import { Button } from "@/components/ui/button"
import { POSTS } from "@/lib/constants"
import Link from "next/link"


type Props = {}

const TopCategories = (props: Props) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-2">
      {POSTS.map((post, index) => (
        <Button
          key={index}
          variant={"secondary"}
          className="hover:scale-110 transition-all"
          asChild
        >
          <Link href={post.href}>{post.title}</Link>
        </Button>
      ))}
    </div>
  )
}

export default TopCategories