"use client"
import { useMemo } from 'react'
import { type ColumnDef } from '@tanstack/react-table'
import { DataTable } from '@/app/components/ui/DataTable'
import { Button } from '@/app/components/ui/Button'
import { Edit, Trash2, User } from 'lucide-react'
import Link from 'next/link'

type Seller = {
  id: string
  name: string
  cpf: string
  email: string
  phone: string
  salesCount: number
  createdAt: string
}

export function SellersTable() {
  const data: Seller[] = [
    {
      id: '1',
      name: 'Carlos Mendes',
      cpf: '111.222.333-44',
      email: 'carlos@empresa.com',
      phone: '(11) 99999-1111',
      salesCount: 15,
      createdAt: '2023-01-10'
    },
    {
      id: '2',
      name: 'Ana Paula',
      cpf: '555.666.777-88',
      email: 'ana@empresa.com',
      phone: '(11) 99999-2222',
      salesCount: 8,
      createdAt: '2023-03-15'
    }
  ]

  const columns = useMemo<ColumnDef<Seller>[]>(
    () => [
      {
        accessorKey: 'name',
        header: 'Nome',
        cell: ({ row }) => (
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-2">
              <User className="h-4 w-4 text-gray-500" />
            </div>
            <Link 
              href={`/sellers/${row.original.id}`}
              className="text-amber-600 hover:text-amber-800"
            >
              {row.original.name}
            </Link>
          </div>
        )
      },
      {
        accessorKey: 'cpf',
        header: 'CPF'
      },
      {
        accessorKey: 'email',
        header: 'E-mail'
      },
      {
        accessorKey: 'phone',
        header: 'Telefone'
      },
      {
        accessorKey: 'salesCount',
        header: 'Vendas',
        cell: ({ row }) => (
          <span className="font-medium">
            {row.original.salesCount}
          </span>
        )
      },
      {
        id: 'actions',
        cell: ({ row }) => (
          <div className="flex space-x-2">
            <Button variant="ghost" size="sm" asChild>
              <Link href={`/sellers/${row.original.id}`}>
                <Edit className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="sm">
              <Trash2 className="h-4 w-4 text-red-600" />
            </Button>
          </div>
        )
      }
    ],
    []
  )

  return <DataTable columns={columns} data={data} />
}