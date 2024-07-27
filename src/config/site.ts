type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
};

export const siteConfig: SiteConfig = {
  name: "BLOG02",
  description:
    "An Open source Technical Blog platform with Next.js 14 with shadcn/ui, prisma and markdown support.",
  url: "http://localhost:3000",
  ogImage: "http://localhost:3000",
  links: {
    twitter: "https://twitter.com/flan02",
    github: "https://github.com/flan02",
  },
};