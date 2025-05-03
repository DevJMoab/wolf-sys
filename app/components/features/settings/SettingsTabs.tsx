"use client"
import { useState } from 'react'
import { Card } from '@/app/components/ui/Card'

const tabs = [
  { id: 'company', label: 'Empresa' },
  { id: 'users', label: 'Usuários' },
  { id: 'equipment', label: 'Equipamentos' },
  { id: 'templates', label: 'Modelos' },
  { id: 'integrations', label: 'Integrações' }
]

export function SettingsTabs() {
  const [activeTab, setActiveTab] = useState('company')

  return (
    <div className="space-y-4">
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? 'border-amber-500 text-amber-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:hover:text-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      <Card>
        {activeTab === 'company' && (
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Informações da Empresa</h3>
            {/* Formulário de configurações da empresa */}
          </div>
        )}

        {activeTab === 'users' && (
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Gerenciamento de Usuários</h3>
            {/* Listagem de usuários */}
          </div>
        )}

        {activeTab === 'equipment' && (
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Catálogo de Equipamentos</h3>
            {/* Configuração de equipamentos */}
          </div>
        )}

        {activeTab === 'templates' && (
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Modelos de Documentos</h3>
            {/* Gerenciamento de templates */}
          </div>
        )}

        {activeTab === 'integrations' && (
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Integrações</h3>
            {/* Configuração de integrações */}
          </div>
        )}
      </Card>
    </div>
  )
}