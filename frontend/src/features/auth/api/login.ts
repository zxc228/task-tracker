type LoginData = {
    username: string
    password: string
  }
  
  export async function loginUser(data: LoginData): Promise<string> {
    const res = await fetch('http://127.0.0.1:8000/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
  
    const result = await res.json()
  
    if (!res.ok) {
      throw new Error(result.detail || 'Login failed')
    }
  
    return result.access_token
  }