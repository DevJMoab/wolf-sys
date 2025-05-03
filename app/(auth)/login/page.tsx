import Link from 'next/link'
import { Lock, User, Building } from 'lucide-react'
import { Button } from '@/app/components/ui/Button'
import { Input } from '@/app/components/ui/Input'
import { Select } from '@/app/components/ui/Select'

export default function LoginPage() {
  const companyOptions = [
    { value: '', label: 'Selecione uma empresa' },
    { value: '1', label: 'Empresa A' },
    { value: '2', label: 'Empresa B' },
  ]

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="p-8">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center">
              <span className="text-white text-2xl font-bold">W</span>
            </div>
          </div>
          
          <h1 className="text-2xl font-bold text-center mb-6">Acesse o Wolf-Sys</h1>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="company" className="block text-sm font-medium mb-1">Empresa</label>
              <Select
                id="company"
                options={companyOptions}
              />
            </div>
            
            <div>
              <label htmlFor="username" className="block text-sm font-medium mb-1">Usuário</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  id="username"
                  type="text"
                  placeholder="Digite seu usuário"
                  className="pl-10 w-full"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-1">Senha</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="Digite sua senha"
                  className="pl-10 w-full"
                />
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm">
                  Lembrar-me
                </label>
              </div>
              
              <div className="text-sm">
                <Link href="/forgot-password" className="font-medium text-amber-600 hover:text-amber-500">
                  Esqueceu a senha?
                </Link>
              </div>
            </div>
            
            <div>
              <Button
                type="submit"
                variant="primary"
                className="w-full"
              >
                Entrar
              </Button>
            </div>
          </form>
        </div>
        
        <div className="px-8 py-4 bg-gray-50 dark:bg-gray-700 text-center text-sm">
          <p>
            Precisa de ajuda?{' '}
            <Link href="/support" className="font-medium text-amber-600 hover:text-amber-500">
              Contate o suporte
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}