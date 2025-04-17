// src/app/not-found.tsx
'use client'

import Link from "next/link"

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center px-6 bg-gray-100">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-6">Oops! Page not found.</p>
      <Link
        href="/"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Back to Home
      </Link>
    </section>
  )
}