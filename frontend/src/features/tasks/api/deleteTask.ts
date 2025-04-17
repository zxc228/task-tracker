export async function deleteTask(id: number): Promise<void> {
    const token = localStorage.getItem('token')
  
    const res = await fetch(`http://localhost:8000/tasks/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  
    if (!res.ok) {
      throw new Error('Failed to delete task')
    }
  }