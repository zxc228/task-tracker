'use client'

import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-wide hover:text-gray-300 transition-colors">
          Tracker
        </Link>
        <div className="flex items-center gap-4 text-sm">
          <Link href="/login" className="hover:text-gray-300 transition-colors">
            Login
          </Link>
          <Link
            href="/register"
            className="bg-white text-gray-900 px-4 py-1.5 rounded-md hover:bg-gray-100 transition-colors font-medium"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  )
}