import { Button } from '@/app/components/ui/Button'
import { Plus } from 'lucide-react'
import {ProjectsTable} from '@/app/components/features/projects/ProjectsTable'

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Projetos</h1>
        <Button className="bg-amber-600 hover:bg-amber-700">
          <Plus className="mr-2 h-4 w-4" />
          Novo Projeto
        </Button>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        <ProjectsTable />
      </div>
    </div>
  )
}