import React from 'react'

type SearchParams = {
  params: {
    category: string
  }
}

export default function CategoryPage({ params }: SearchParams) {
  return (
    <div>{params.category}</div>
  )
}

