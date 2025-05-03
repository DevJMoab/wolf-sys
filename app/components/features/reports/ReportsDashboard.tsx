'use client'

import { Card } from '@/app/components/ui/Card'
import { BarChart, PieChart } from '@/app/components/ui/Charts'
import { Select } from '@/app/components/ui/Select'
import { Calendar } from '@/app/components/ui/Calendar/Calendar'
import { Button } from '@/app/components/ui/Button'
import { Download, Printer } from 'lucide-react'

export default  function ReportsDashboard() {
  // Dados de exemplo para os gráficos
  const salesData = [
    { name: 'Jan', value: 4000 },
    { name: 'Fev', value: 3000 },
    { name: 'Mar', value: 2000 },
    { name: 'Abr', value: 2780 },
    { name: 'Mai', value: 1890 },
    { name: 'Jun', value: 2390 },
  ]

  const budgetStatusData = [
    { name: 'Aprovados', value: 35, color: '#10B981' },
    { name: 'Pendentes', value: 15, color: '#F59E0B' },
    { name: 'Rejeitados', value: 10, color: '#EF4444' },
  ]

  const periodOptions = [
    { value: '7days', label: 'Últimos 7 dias' },
    { value: '30days', label: 'Últimos 30 dias' },
    { value: '90days', label: 'Últimos 90 dias' },
    { value: 'custom', label: 'Personalizado' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h2 className="text-2xl font-bold">Relatórios</h2>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <Select 
            options={periodOptions}
            defaultValue="30days"
            className="min-w-[200px]"
          />
          
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Exportar
            </Button>
            <Button variant="outline">
              <Printer className="mr-2 h-4 w-4" />
              Imprimir
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 p-6">
          <h3 className="text-lg font-medium mb-4">Vendas por Mês</h3>
          <div className="h-80">
            <BarChart data={salesData} />
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-medium mb-4">Status de Orçamentos</h3>
          <div className="h-80">
            <PieChart data={budgetStatusData} />
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-medium mb-2">Total de Vendas</h3>
          <p className="text-3xl font-bold">R$ 58.420,00</p>
          <p className="text-sm text-green-600">+12% em relação ao mês anterior</p>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-medium mb-2">Orçamentos Gerados</h3>
          <p className="text-3xl font-bold">64</p>
          <p className="text-sm text-green-600">+8% em relação ao mês anterior</p>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-medium mb-2">Taxa de Conversão</h3>
          <p className="text-3xl font-bold">54,7%</p>
          <p className="text-sm text-amber-600">-2% em relação ao mês anterior</p>
        </Card>
      </div>

      <Card className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Vendas por Vendedor</h3>
          <Select 
            options={[
              { value: 'month', label: 'Este Mês' },
              { value: 'quarter', label: 'Este Trimestre' },
              { value: 'year', label: 'Este Ano' },
            ]}
            defaultValue="month"
            className="min-w-[150px]"
          />
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vendedor</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Orçamentos</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vendas</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valor Total</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Taxa de Conversão</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[
                { name: 'Carlos Mendes', quotes: 22, sales: 15, total: 32500, conversion: '68.2%' },
                { name: 'Ana Paula', quotes: 18, sales: 8, total: 14200, conversion: '44.4%' },
                { name: 'João Silva', quotes: 15, sales: 7, total: 11720, conversion: '46.7%' },
              ].map((seller, index) => (
                <tr key={index}>
                  <td className="px-4 py-3 whitespace-nowrap">{seller.name}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{seller.quotes}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{seller.sales}</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(seller.total)}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">{seller.conversion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}