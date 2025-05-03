import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import './styles/globals.css'
import { ThemeProvider } from './providers/ThemeProvider'

const nunito = Nunito_Sans({ 
  subsets: ['latin'],
  variable: '--font-nunito-sans',
})

export const metadata: Metadata = {
  title: 'Wolf-Sys ERP',
  description: 'Sistema de gestão empresarial',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${nunito.variable}`} suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}