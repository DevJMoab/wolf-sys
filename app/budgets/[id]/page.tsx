import { notFound } from 'next/navigation'
import { BudgetDetails } from '@/app/components/features/budget/BudgetDetails'

export default function BudgetDetailsPage({ params }: { params: { id: string } }) {
  // Simulação de busca de dados - substituir por chamada real à API
  const budget = {
    id: params.id,
    clientName: "João Silva",
    kit: "Kit Solar Premium",
    // ... outros campos do orçamento
  }

  if (!budget) {
    return notFound()
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Orçamento #{budget.id}</h1>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md">
            Imprimir
          </button>
          <button className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-md">
            Converter em Venda
          </button>
        </div>
      </div>
      
      <BudgetDetails budget={budget} />
    </div>
  )
}