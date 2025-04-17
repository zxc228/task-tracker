import { Task } from '@/types/task'

export async function updateTask(id: number, updatedFields: Partial<Task>): Promise<Task> {
  const token = localStorage.getItem('token')

  const res = await fetch(`http://localhost:8000/tasks/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(updatedFields),
  })

  if (!res.ok) {
    throw new Error('Failed to update task')
  }

  return res.json()
}