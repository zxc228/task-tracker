export async function registerUser(data: {
    username: string
    email: string
    password: string
  }): Promise<void> {
    const res = await fetch('http://localhost:8000/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
  
    if (!res.ok) {
      const error = await res.json()
      throw new Error(error.detail || 'Failed to register')
    }
  }