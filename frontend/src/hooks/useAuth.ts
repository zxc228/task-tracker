'use client'

import { useEffect, useState } from 'react'

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)

  useEffect(() => {
    const checkToken = () => {
      const token = localStorage.getItem('token')
      setIsAuthenticated(!!token)
    }

    checkToken()

    // Listen for custom "auth-changed" events
    window.addEventListener('auth-changed', checkToken)

    return () => {
      window.removeEventListener('auth-changed', checkToken)
    }
  }, [])

  return { isAuthenticated }
}