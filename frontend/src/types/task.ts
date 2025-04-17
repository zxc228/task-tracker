export interface Task {
    id: number
    title: string
    description?: string
    is_completed: boolean
    priority: number
    due_date?: string
    created_at: string
  }