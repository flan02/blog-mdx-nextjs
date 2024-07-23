import { formatDate } from '@/app/blog/utils'
import { Post } from '@/types'
import Link from 'next/link'
import React from 'react'

type Props = Post

const PostComponent = ({ post }: Props) => {
  return (
    <article className="text-wrap max-w-md my-10">
      <Link href={`/blog/${post.metadata.category}/${post.slug}`}>
        <h3 className="font-bold py-2 leading-5 dark:hover:text-slate-300 hover:text-blue-900">
          {post.metadata.title}
        </h3>
      </Link>
      <p className="leading-8 my-5">{post.metadata.summary}</p>
      <p className="text-sm text-muted-foreground">{formatDate(post.metadata.publishedAt)}</p>
    </article>
  )
}

export default PostComponent