import ReportsDashboard from '@/app/components/features/reports/ReportsDashboard'

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Relatórios</h1>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        <ReportsDashboard />
      </div>
    </div>
  )
}