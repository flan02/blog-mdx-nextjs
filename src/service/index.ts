import { fetchUrl } from "@/lib/utils"
import { Blog } from "@prisma/client"

type ViewProps = Pick<Blog, "slug" | "title" | "category">
export const postData = async ({ slug, title, category }: ViewProps) => {
  try {
    await fetch(fetchUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        slug,
        title,
        category
      })
    })
  } catch (err) {
    console.log(err);
  }
}