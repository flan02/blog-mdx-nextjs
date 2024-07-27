/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { postData } from "@/service"
import { Blog } from "@prisma/client"
import { useEffect } from "react"

type ViewProps = Pick<Blog, "slug" | "title" | "category">

const ReportViews = ({ slug, title, category }: ViewProps) => {

  useEffect(() => {
    postData({ slug, title, category })
  }, [slug, title, category])
  return (
    <></>
  )
}

export default ReportViews