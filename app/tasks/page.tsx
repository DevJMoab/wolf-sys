import KanbanBoard from '@/app/components/features/tasks/KanbanBoard'
import Layout from '../components/layout/Layout'

export default function TasksPage() {
  return (
    <Layout>
      <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Tarefas</h1>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
        <KanbanBoard />
      </div>
    </div>
    </Layout>
    
  )
}