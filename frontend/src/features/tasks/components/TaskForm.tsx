'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createTask } from '@/features/tasks/api/createTask'
import Spinner from '@/components/Spinner'

export default function TaskForm() {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState(1)
  const [dueDate, setDueDate] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      await createTask({ title, description, priority, due_date: dueDate || undefined })
      router.push('/tasks')
    } catch (err) {
        console.error('Error fetching tasks:', err)
        setError('Failed to create task.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-12 space-y-4">
      <h2 className="text-xl font-semibold text-neutral-800">Create Task</h2>
      {error && <p className="text-red-600 text-sm">{error}</p>}

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border border-neutral-300 rounded px-3 py-2"
        required
      />
      <textarea
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full border border-neutral-300 rounded px-3 py-2"
      />
      <select
          value={priority}
          onChange={(e) => setPriority(parseInt(e.target.value))}
          className="w-full border border-neutral-300 rounded px-3 py-2"
        >
          <option value={1}>Low</option>
          <option value={2}>Normal</option>
          <option value={3}>High</option>
        </select>
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="w-full border border-neutral-300 rounded px-3 py-2"
      />

      <button
        type="submit"
        className="w-full bg-neutral-800 text-white py-2 rounded hover:bg-neutral-700 transition"
        disabled={loading}
      >
        {loading ? <Spinner /> : 'Create Task'}
      </button>
    </form>
  )
}