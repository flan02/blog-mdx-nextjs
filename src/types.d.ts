

export type Post = {
  metadata: any
  post: {
    slug: string
    metadata: {
      [key: string]: any
    }
  }
}

export type POST = {
  title: string;
  href: string;
  description: string;
};
