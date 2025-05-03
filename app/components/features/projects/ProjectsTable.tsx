"use client"
import { useMemo } from 'react'
import { type ColumnDef } from '@tanstack/react-table'
import { DataTable } from '@/app/components/ui/DataTable'
import { Button } from '@/app/components/ui/Button'
import { Edit, Trash2, FileText } from 'lucide-react'
import Link from 'next/link'

type Project = {
  id: string
  ucCode: string
  clientName: string
  city: string
  status: 'draft' | 'in_progress' | 'completed'
  createdAt: string
}

export function ProjectsTable() {
  const data: Project[] = [
    {
      id: '1',
      ucCode: 'UC123456',
      clientName: 'João Silva',
      city: 'São Paulo',
      status: 'in_progress',
      createdAt: '2023-10-01'
    },
    {
      id: '2',
      ucCode: 'UC789012',
      clientName: 'Maria Souza',
      city: 'Rio de Janeiro',
      status: 'completed',
      createdAt: '2023-09-15'
    }
  ]

  const columns = useMemo<ColumnDef<Project>[]>(
    () => [
      {
        accessorKey: 'ucCode',
        header: 'Código UC',
        cell: ({ row }) => (
          <Link 
            href={`/projects/${row.original.id}`}
            className="text-amber-600 hover:text-amber-800 font-medium"
          >
            {row.original.ucCode}
          </Link>
        )
      },
      {
        accessorKey: 'clientName',
        header: 'Cliente'
      },
      {
        accessorKey: 'city',
        header: 'Cidade'
      },
      {
        accessorKey: 'status',
        header: 'Status',
        cell: ({ row }) => {
          const status = row.original.status
          const statusMap = {
            draft: { label: 'Rascunho', color: 'bg-gray-100 text-gray-800' },
            in_progress: { label: 'Em Andamento', color: 'bg-blue-100 text-blue-800' },
            completed: { label: 'Concluído', color: 'bg-green-100 text-green-800' }
          }
          return (
            <span className={`px-2 py-1 rounded-full text-xs ${statusMap[status].color}`}>
              {statusMap[status].label}
            </span>
          )
        }
      },
      {
        accessorKey: 'createdAt',
        header: 'Criado em',
        cell: ({ row }) => (
          <span>
            {new Date(row.original.createdAt).toLocaleDateString('pt-BR')}
          </span>
        )
      },
      {
        id: 'actions',
        cell: ({ row }) => (
          <div className="flex space-x-2">
            <Button variant="ghost" size="sm" asChild>
              <Link href={`/projects/${row.original.id}`}>
                <FileText className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="sm">
              <Edit className="h-4 w-4" />
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