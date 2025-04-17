interface PriorityBadgeProps {
    priority: number
  }
  
  export default function PriorityBadge({ priority }: PriorityBadgeProps) {
    let text = ''
    let color = ''
    let emoji = ''
  
    switch (priority) {
      case 1:
        text = 'Low'
        color = 'bg-blue-100 text-blue-700'
        emoji = '🧘'
        break
      case 2:
        text = 'Normal'
        color = 'bg-yellow-100 text-yellow-700'
        emoji = '📋'
        break
      case 3:
        text = 'High'
        color = 'bg-red-100 text-red-700'
        emoji = '🔥'
        break
      default:
        text = 'Unknown'
        color = 'bg-gray-100 text-gray-500'
        emoji = '❓'
    }
  
    return (
      <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded ${color}`}>
        {emoji} {text}
      </span>
    )
  }