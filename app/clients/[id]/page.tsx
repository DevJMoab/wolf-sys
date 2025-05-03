import { notFound } from 'next/navigation'
import {ClientDetails} from '@/app/components/features/clients/ClientDetails'

export default function ClientDetailsPage({ params }: { params: { id: string } }) {
  // Simulação de busca de dados
  const client = {
    id: params.id,
    name: "João Silva",
    cpf: "123.456.789-00",
    email: "joao@example.com",
    phone: "(11) 99999-9999",
    // ... outros campos do cliente
  }

  if (!client) {
    return notFound()
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">{client.name}</h1>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md">
            Editar
          </button>
          <button className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-md">
            Novo Orçamento
          </button>
        </div>
      </div>
      
      <ClientDetails client={client} />
    </div>
  )
}