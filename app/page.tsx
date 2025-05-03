'use client'

import { Suspense, useEffect, useState } from 'react'
import Loading from '@/app/components/ui/Loading' // Recomendo criar um componente Loading separado

type LayoutComponent = React.ComponentType<{ children: React.ReactNode }>

export default function Home() {
  const [Layout, setLayout] = useState<LayoutComponent>(() => Loading)

  useEffect(() => {
    // Carregar o layout dinamicamente apenas no cliente
    const loadLayout = async () => {
      try {
        const mod = await import('@/app/components/layout/Layout')
        setLayout(() => mod.default)
      } catch (error) {
        console.error('Failed to load layout:', error)
        // Fallback layout simplificado com tipagem correta
        setLayout(({ children }: { children: React.ReactNode }) => <div>{children}</div>)
      }
    }
    
    loadLayout()
  }, [])

  return (
    <Layout>
      <div className="max-w-7xl mx-auto p-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        {/* Conteúdo do dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-2">Orçamentos</h2>
            <p className="text-3xl font-bold text-amber-600">0</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-2">Clientes</h2>
            <p className="text-3xl font-bold text-amber-600">0</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-2">Tarefas</h2>
            <p className="text-3xl font-bold text-amber-600">0</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}