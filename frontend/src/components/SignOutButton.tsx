'use client'

import { useRouter } from 'next/navigation'

export default function SignOutButton() {
  const router = useRouter()

  const handleSignOut = () => {
    localStorage.removeItem('token')
    window.dispatchEvent(new Event('auth-changed'))  // 👈 это важно
    router.push('/')
  }

  return (
    <button
      onClick={handleSignOut}
      className="text-sm px-3 py-1 border rounded hover:bg-neutral-100 transition"
    >
      Sign Out
    </button>
  )
}