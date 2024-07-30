import LatestPosts from "@/components/custom/home/LatestPosts";
import PopularPosts from "@/components/custom/home/PopularPosts";
import TopCategories from "@/components/custom/home/TopCategories";
import { BadgeDollarSign, LucideShoppingBasket, NotebookIcon } from "lucide-react";


export default function Home() {
  return (

    <main className="flex flex-col isolate justify-evenly mt-16 md:flex-row">
      <div>
        <aside className="h-[50vh] border border-rgba(0,0,0,0.1) rounded-lg">
          <div className="flex flex-col justify-center items-center h-full">
            <h1 className="font-bold text-2xl uppercase mb-4">our basketball blog</h1>
            <NotebookIcon size={64} />
          </div>
        </aside>
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
