import { InputHTMLAttributes } from 'react'
import { cn } from '@/app/lib/utils'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string
}

export function Input({ className = '', ...props }: InputProps) {
  return (
    <input
      className={cn(
        'flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:ring-offset-gray-950 dark:placeholder:text-gray-400',
        className
      )}
      {...props}
    />
  )
}