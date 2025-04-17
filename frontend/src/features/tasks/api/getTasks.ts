import { Task } from '@/types/task'

export async function getTasks(): Promise<Task[]> {
  const token = localStorage.getItem('token')

  const res = await fetch('http://localhost:8000/tasks/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (!res.ok) {
    throw new Error('Failed to fetch tasks')
  }

  return res.json()
}