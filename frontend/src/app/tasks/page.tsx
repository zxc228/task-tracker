import ProtectedRoute from '@/components/ProtectedRoute'

export default function TasksPage() {
  return (
    <ProtectedRoute>
      <div className="p-6 text-neutral-800">
        <h1 className="text-2xl font-semibold">Your Tasks</h1>
        {/* здесь будут задачи */}
      </div>
    </ProtectedRoute>
  )
}