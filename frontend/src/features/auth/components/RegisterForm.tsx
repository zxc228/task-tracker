'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Spinner from '@/components/Spinner'
import { registerUser } from '@/features/auth/api/register'

import { toast } from 'react-hot-toast'

export default function RegisterForm() {
  const router = useRouter()
  const [form, setForm] = useState({ username: '', email: '', password: '' })
  
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setIsLoading(true)
    try {
      await registerUser(form)
      router.push('/login')
    } catch (err: unknown) {
      if (err instanceof Error) {
        toast.error(err.message)
      } else {
        toast.error('Something went wrong. Please try again.')
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto mt-20 bg-neutral-50 p-6 rounded-xl shadow border border-neutral-200">
      <h2 className="text-2xl font-semibold mb-4 text-neutral-800">Register</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          className="w-full border border-neutral-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-neutral-300"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border border-neutral-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-neutral-300"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full border border-neutral-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-neutral-300"
        />
        <button
          type="submit"
          className="w-full bg-neutral-800 text-white py-2 rounded hover:bg-neutral-700 transition"
          disabled={isLoading}
        >
          {isLoading ? <Spinner /> : 'Sign Up'}
        </button>
      </form>
    </div>
  )
}