'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { loginUser } from '@/features/auth/api/login'
import Spinner from '@/components/Spinner'
import Alert from '@/components/Alert'

export default function LoginForm() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      const token = await loginUser({ username, password })
      localStorage.setItem('token', token)
      window.dispatchEvent(new Event('auth-changed')) 
      router.push('/tasks')
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('An unknown error occurred.')
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto mt-20 bg-neutral-50 p-6 rounded-xl shadow border border-neutral-200">
      <h2 className="text-2xl font-semibold mb-4 text-neutral-800">Login</h2>
      {error && <Alert type="error">{error}</Alert>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border border-neutral-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-neutral-300"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-neutral-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-neutral-300"
        />
        <button
          type="submit"
          className="w-full bg-neutral-800 text-white py-2 rounded hover:bg-neutral-700 transition"
          disabled={isLoading}
        >
          {isLoading ? <Spinner /> : 'Sign In'}
        </button>
      </form>
    </div>
  )
}