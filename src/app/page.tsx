import LatestPosts from "@/components/custom/home/LatestPosts";
import PopularPosts from "@/components/custom/home/PopularPosts";
import TopCategories from "@/components/custom/home/TopCategories";


export default function Home() {
  return (

    <main className="flex flex-col isolate justify-evenly mt-16 md:flex-row">
      <div>
        <LatestPosts />
      </div>
      <div className="h-screen">
        <div>
          <h2 className="font-bold mb-4">TOP CATEGORIES</h2>
          <TopCategories />
        </div>
        <div className="mt-10 sticky top-0">
          <h2 className="font-bold mb-4">POPULAR POSTS</h2>
          <PopularPosts />
        </div>
      </div>
    </main>

  );
}
