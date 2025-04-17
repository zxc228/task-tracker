'use client'

import { useState } from 'react'
import { Task } from '@/types/task'
import { updateTask } from '@/features/tasks/api/updateTask'
import Spinner from '@/components/Spinner'

interface EditTaskModalProps {
    task: Task
    onClose: () => void
    onSave: (updatedTask: Task) => void  
  }

export default function EditTaskModal({ task, onClose, onSave }: EditTaskModalProps) {
  const [title, setTitle] = useState(task.title)
  const [description, setDescription] = useState(task.description || '')
  const [dueDate, setDueDate] = useState(task.due_date?.split('T')[0] || '')
  const [priority, setPriority] = useState(task.priority)
  const [isCompleted, setIsCompleted] = useState(task.is_completed)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSave = async () => {
    setLoading(true)
    setError('')
  
    try {
      const updated = await updateTask(task.id, {
        title,
        description,
        due_date: dueDate,
        is_completed: isCompleted,
        priority,
      })
  
      onSave(updated) // 👈 передаём новую версию задачи
      onClose()
    } catch (err) {
      console.error('Error updating task:', err)
      setError('Failed to update task')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
      <div className="bg-white p-6 rounded-lg shadow w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-neutral-800">Edit Task</h2>

        {error && <p className="text-red-600 text-sm mb-2">{error}</p>}

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-neutral-300 rounded px-3 py-2 mb-3"
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border border-neutral-300 rounded px-3 py-2 mb-3"
        />

        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="w-full border border-neutral-300 rounded px-3 py-2 mb-3"
        />

        <div className="flex justify-between items-center mb-3">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={isCompleted}
              onChange={(e) => setIsCompleted(e.target.checked)}
            />
            Completed
          </label>

          <select
            value={priority}
            onChange={(e) => setPriority(parseInt(e.target.value))}
            className="border border-neutral-300 rounded px-2 py-1"
          >
            <option value={1}>Low</option>
            <option value={2}>Normal</option>
            <option value={3}>High</option>
          </select>
        </div>

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded border border-neutral-300 hover:bg-neutral-100"
            disabled={loading}
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-1.5 rounded bg-neutral-900 text-white hover:bg-neutral-700 transition"
            disabled={loading}
          >
            {loading ? <Spinner /> : 'Save'}
          </button>
        </div>
      </div>
    </div>
  )
}