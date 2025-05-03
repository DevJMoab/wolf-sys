import { Button } from '@/app/components/ui/Button'
import { Plus } from 'lucide-react'
import {BudgetTable} from '@/app/components/features/budget/BudgetTable'

export default function BudgetsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Orçamentos</h1>
        <Button className="bg-amber-600 hover:bg-amber-700">
          <Plus className="mr-2 h-4 w-4" />
          Novo Orçamento
        </Button>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        <BudgetTable />
      </div>
    </div>
  )
}