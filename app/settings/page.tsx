import {SettingsTabs} from '@/app/components/features/settings/SettingsTabs'
import Layout from '../components/layout/Layout'

export default function SettingsPage() {
  return (
    <Layout>
      <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Configurações</h1>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        <SettingsTabs />
      </div>
    </div>
    </Layout>
    
  )
}