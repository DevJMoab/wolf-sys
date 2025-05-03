import { Button } from '@/app/components/ui/Button'
import { Plus } from 'lucide-react'
import {SellersTable} from '@/app/components/features/sellers/SellersTable'

export default function SellersPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Vendedores</h1>
        <Button className="bg-amber-600 hover:bg-amber-700">
          <Plus className="mr-2 h-4 w-4" />
          Novo Vendedor
        </Button>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        <SellersTable />
      </div>
    </div>
  )
}