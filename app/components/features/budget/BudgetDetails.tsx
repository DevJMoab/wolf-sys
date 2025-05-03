import { Card } from '@/app/components/ui/Card'
import { Button } from '@/app/components/ui/Button'
import { Download, Printer, FileText } from 'lucide-react'

type BudgetDetailsProps = {
  budget: {
    id: string
    clientName: string
    kit: string
    // ... outros campos do orçamento
  }
}

export function BudgetDetails({ budget }: BudgetDetailsProps) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <h3 className="font-medium mb-2">Informações do Cliente</h3>
          <div className="space-y-2">
            <p><span className="text-gray-500">Nome:</span> {budget.clientName}</p>
            <p><span className="text-gray-500">CPF:</span> 123.456.789-00</p>
            <p><span className="text-gray-500">Telefone:</span> (11) 99999-9999</p>
          </div>
        </Card>

        <Card>
          <h3 className="font-medium mb-2">Detalhes do Kit</h3>
          <div className="space-y-2">
            <p><span className="text-gray-500">Kit:</span> {budget.kit}</p>
            <p><span className="text-gray-500">Módulos:</span> 10x 550W</p>
            <p><span className="text-gray-500">Inversor:</span> 5kW</p>
          </div>
        </Card>

        <Card>
          <h3 className="font-medium mb-2">Valores</h3>
          <div className="space-y-2">
            <p><span className="text-gray-500">Custo:</span> R$ 18.000,00</p>
            <p><span className="text-gray-500">Venda:</span> R$ 25.000,00</p>
            <p><span className="text-gray-500">Comissão:</span> R$ 2.500,00</p>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <h3 className="font-medium mb-2">Fases do Projeto</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium">Fase 1: Projeto</h4>
              <p className="text-sm text-gray-500">Concluído em 01/10/2023</p>
            </div>
            <div>
              <h4 className="font-medium">Fase 2: Aprovação</h4>
              <p className="text-sm text-gray-500">Concluído em 05/10/2023</p>
            </div>
            <div>
              <h4 className="font-medium">Fase 3: Instalação</h4>
              <p className="text-sm text-gray-500">Concluído em 10/10/2023</p>
            </div>
          </div>
        </Card>

        <Card>
          <h3 className="font-medium mb-2">Documentos</h3>
          <div className="space-y-2">
            <Button variant="outline" className="w-full justify-start">
              <FileText className="mr-2 h-4 w-4" />
              Orçamento.pdf
              <Download className="ml-auto h-4 w-4" />
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <FileText className="mr-2 h-4 w-4" />
              Contrato.pdf
              <Download className="ml-auto h-4 w-4" />
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <FileText className="mr-2 h-4 w-4" />
              Projeto.pdf
              <Download className="ml-auto h-4 w-4" />
            </Button>
          </div>
        </Card>
      </div>

      <div className="flex justify-end space-x-2">
        <Button variant="outline">
          <Printer className="mr-2 h-4 w-4" />
          Imprimir
        </Button>
        <Button className="bg-amber-600 hover:bg-amber-700">
          Editar Orçamento
        </Button>
      </div>
    </div>
  )
}