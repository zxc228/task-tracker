'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function HomePage() {
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      router.push('/tasks')
    }
  }, [router])

  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-6">
      <div className="bg-white/70 backdrop-blur-md border border-neutral-200 rounded-xl shadow-sm px-10 py-16 max-w-2xl w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-4">
          Welcome to <span className="text-neutral-600">TaskTracker</span>
        </h1>
        <p className="text-base md:text-lg text-neutral-600">
          Organize your tasks efficiently. <br />
          <span className="italic">Simple. Secure. Minimal.</span>
        </p>
      </div>
    </section>
  )
}