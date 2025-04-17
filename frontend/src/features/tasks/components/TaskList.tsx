'use client'

import { useEffect, useState } from 'react'
import { getTasks } from '@/features/tasks/api/getTasks'
import { Task } from '@/types/task'
import EditTaskModal from '@/features/tasks/components/EditTaskModal' 
import PriorityBadge from '@/features/tasks/components/PriorityBadge'
import { deleteTask } from '@/features/tasks/api/deleteTask'
import { toast } from 'react-hot-toast'

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [loading, setLoading] = useState(true)
  
  const [selectedTask, setSelectedTask] = useState<Task | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const token = localStorage.getItem('token')
        if (!token) throw new Error('Not authenticated')
        const data = await getTasks()
        setTasks(data)
      } catch (err) {
        console.error('Error fetching tasks:', err)
        toast.error('Failed to fetch tasks.')
      } finally {
        setLoading(false)
      }
    }

    fetchTasks()
  }, [])

  const handleEditClick = (task: Task) => {
    setSelectedTask(task)
    setIsModalOpen(true)
  }

  const handleDeleteClick = async (task: Task) => {
    if (!confirm('Are you sure you want to delete this task?')) return
  
    try {
      await deleteTask(task.id)
      setTasks((prev) => prev.filter((t) => t.id !== task.id))
      toast.success('Task deleted successfully!')
    } catch (err) {
      console.error('Error deleting task:', err)
      toast.error('Failed to delete task.')
    }
  }

  return (
    <div className="max-w-4xl mx-auto mt-12 px-4">
      <h1 className="text-2xl font-semibold text-neutral-800 mb-6">Your Tasks</h1>

      {loading && <p className="text-neutral-500">Loading...</p>}
      

      <ul className="space-y-4">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="bg-white p-4 rounded shadow border border-neutral-200"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium text-neutral-900">{task.title}</h3>
                {task.description && (
                  <p className="text-sm text-neutral-600 mt-1">{task.description}</p>
                )}
                {task.due_date && (
                  <p className="text-xs text-neutral-400 mt-1">
                    Due: {new Date(task.due_date).toLocaleDateString()}
                  </p>
                )}
                <span
                  className={`text-xs font-medium px-2 py-1 rounded mt-2 inline-block ${
                    task.is_completed
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}
                >
                  {task.is_completed ? 'Completed' : 'Pending'}
                </span>
                <PriorityBadge priority={task.priority} />
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEditClick(task)}
                  className="text-sm px-3 py-1 rounded border border-neutral-300 hover:bg-neutral-100 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteClick(task)}
                  className="text-sm px-3 py-1 rounded border border-red-300 text-red-600 hover:bg-red-50 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {isModalOpen && selectedTask && (
        <EditTaskModal
          task={selectedTask}
          onClose={() => setIsModalOpen(false)}
          onSave={(updatedTask) => {
            setTasks((prev) =>
              prev.map((t) => (t.id === updatedTask.id ? updatedTask : t))
            )
            setIsModalOpen(false)
            toast.success('Task updated successfully!')
          }}
        />
      )}
    </div>
  )
}