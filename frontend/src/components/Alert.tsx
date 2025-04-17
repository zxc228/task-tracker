// src/components/Alert.tsx
'use client'

import { ReactNode } from 'react'

interface AlertProps {
  type?: 'error' | 'success' | 'info'
  children: ReactNode
}

const baseStyles = 'px-4 py-3 rounded-md text-sm font-medium border'

const variants = {
  error: 'bg-red-50 text-red-800 border-red-200',
  success: 'bg-green-50 text-green-800 border-green-200',
  info: 'bg-blue-50 text-blue-800 border-blue-200',
}

export default function Alert({ type = 'info', children }: AlertProps) {
  return (
    <div className={`${baseStyles} ${variants[type]} shadow-sm`}>
      {children}
    </div>
  )
}