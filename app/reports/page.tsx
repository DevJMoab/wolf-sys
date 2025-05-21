import ReportsDashboard from '@/app/components/features/reports/ReportsDashboard'
import Layout from '../components/layout/Layout'

export default function ReportsPage() {
  return (
    <Layout>
      <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Relatórios</h1>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        <ReportsDashboard />
      </div>
    </div>
    </Layout>
    
  )
}