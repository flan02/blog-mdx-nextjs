import LatestPosts from "@/components/custom/home/LatestPosts";
import MaxWidthWrapper from "@/components/reutilizable/MaxWidthWrapper";


export default function Home() {
  return (
    <MaxWidthWrapper>
      <main>
        <div>
          <LatestPosts />
        </div>
      </main>
    </MaxWidthWrapper>
  );
}
