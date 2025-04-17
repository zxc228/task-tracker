// src/app/tasks/create/page.tsx
import CreateTaskForm from '@/features/tasks/components/TaskForm'

export default function CreateTaskPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6 text-neutral-800">Create New Task</h1>
      <CreateTaskForm />
    </section>
  )
}