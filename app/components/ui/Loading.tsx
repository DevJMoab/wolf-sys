import { Spinner } from '@/app/components/ui/Spinner' // Vamos criar este componente também

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-50">
      <div className="text-center">
        <Spinner className="w-12 h-12 mx-auto text-amber-600" />
        <p className="mt-4 text-lg font-medium text-gray-800 dark:text-gray-200">
          Carregando interface...
        </p>
      </div>
    </div>
  )
}