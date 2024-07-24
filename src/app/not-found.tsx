import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <section className='grid place-content-center h-screen'>
      <h1 className='mb-8 text-4xl lg:text-6xl font-semibold tracking-tighter'>404 - Page not found</h1>
      <p className='mb-4 text-center'>This page you are looking for does not exist.</p>
      <Link href="/" className='text-center hover:underline'>Go home
      </Link>
    </section>
  )
}

