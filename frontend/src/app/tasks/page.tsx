// src/app/tasks/page.tsx
import TaskList from '@/features/tasks/components/TaskList'
import Link from 'next/link'

export default function TasksPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-neutral-800">Dashboard</h1>
        <Link
          href="/tasks/create"
          className="bg-neutral-800 text-white px-4 py-2 rounded hover:bg-neutral-700 transition"
        >
          + New Task
        </Link>
      </div>
      <TaskList />
    </section>
  )
}