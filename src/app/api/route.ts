import { db } from "@/db";
import { Prisma } from "@prisma/client";


export async function GET(): Promise<Response> {
  try {
    const data = await db.blog.findMany({
      take: 10, // ? limit to 10 posts
      select: { title: true, category: true, slug: true },
      orderBy: [{ view_count: "desc" }],
    });

    return Response.json(data);
  } catch (error) {
    console.error("Database Error...", error);
    //throw new Error("Failed to fetch the popular posts");
    return Response.json({ message: "Failed to fetch the popular posts" }, { status: 500 });
  }
}

export async function POST(request: Request, response: Response) {
  const { slug, title, category } = await request.json();

  try {
    const existingPost = await db.blog.findUnique({
      where: { slug: slug },
    });

    if (existingPost) {
      await db.blog.update({
        where: { slug: slug },
        data: {
          view_count: { increment: 1 },
        },
      });
    } else {
      await db.blog.create({
        data: {
          slug: slug,
          title: title,
          category: category,
        },
      });
    }

    return Response.json({ message: "Successfully posted to DB" });

  } catch (error) {
    console.error("Error updating page view", error);

    return Response.json({ message: "Failed to post to DB" }, { status: 500 });
  }

}