// src/features/tasks/api/createTask.ts
import { Task } from '@/types/task'

export interface CreateTaskData {
  title: string
  description?: string
  priority?: number
  due_date?: string
}

export async function createTask(data: CreateTaskData): Promise<Task> {
  const token = localStorage.getItem('token')

  const res = await fetch('http://localhost:8000/tasks/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })

  if (!res.ok) {
    throw new Error('Failed to create task')
  }

  return res.json()
}