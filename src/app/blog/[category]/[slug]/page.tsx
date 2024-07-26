import { notFound } from "next/navigation";
import { formatDate, getBlogPosts } from "../../utils";
import Header from "@/components/reutilizable/Header";
import MaxwidthWrapper from "@/components/reutilizable/MaxWidthWrapper";
import { BreadcrumbWithCustomSeparator } from "@/components/custom/Breadcrumb";
import CustomMDX from "@/components/custom/CustomMdx";
import ReportViews from "@/components/custom/ReportViews";
import { baseUrl } from "@/app/sitemap";


// $ This fc avoid -> ƒ (Dynamic) server-rendered on demand. The content is prerendered as static HTML (SSG)
export async function generateStaticParams() {
  let posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

type SearchParams = {
  params: {
    slug: string
    category: string
  }
}

export function generateMetadata({ params }: SearchParams) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) return notFound();


  const { title, publishedAt: publishedTime, summary: description, image } = post.metadata;

  let ogImage = image ? image : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/blog/${post?.metadata.category}/${post?.slug}}`,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function SlugPage({ params }: SearchParams) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.metadata.category}/${post.slug}`,
            author: {
              "@type": "Person",
              name: "Coding Jitsu Blog",
            },
          }),
        }}
      />

      {/* Client component, contains useEffect */}
      <ReportViews
        category={post.metadata.category}
        title={post.metadata.title}
        slug={post.slug}
      />

      <MaxwidthWrapper className="lg:px-12 px-1/2 md:px-8">
        <Header className="mb-4 pl-8">
          <BreadcrumbWithCustomSeparator
            category={post.metadata.category}
            slug={post.slug}
          />
          <h1 className="title font-semibold text-2xl tracking-tighter mt-4">
            {post.metadata.title}
          </h1>
          <div className="flex justify-between items-center mt-2 text-sm">
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
              {formatDate(post.metadata.publishedAt)}
            </p>
          </div>
        </Header>

        <article className="prose">
          <CustomMDX source={post.content} />
        </article>
      </MaxwidthWrapper>
    </>
  );
}