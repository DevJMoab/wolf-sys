"use client";
import { useMemo, useState } from "react";
import { type ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/app/components/ui/DataTable";
import { Button } from "@/app/components/ui/Button";
import { Edit, Trash2, User } from "lucide-react";
import Link from "next/link";

type Client = {
  id: string;
  name: string;
  cpf: string;
  email: string;
  phone: string;
  createdAt: string;
  lastPurchase?: string;
};

export function ClientsTable() {
  const [data] = useState<Client[]>([
    {
      id: "1",
      name: "João Silva",
      cpf: "123.456.789-00",
      email: "joao@example.com",
      phone: "(11) 99999-9999",
      createdAt: "2023-01-15",
      lastPurchase: "2023-10-05",
    },
    {
      id: "2",
      name: "Maria Souza",
      cpf: "987.654.321-00",
      email: "maria@example.com",
      phone: "(11) 98888-8888",
      createdAt: "2023-02-20",
      lastPurchase: "2023-09-15",
    },
  ]);

  const columns = useMemo<ColumnDef<Client>[]>(
    () => [
      {
        accessorKey: "name",
        header: "Nome",
        cell: ({ row }) => (
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-2">
              <User className="h-4 w-4 text-gray-500" />
            </div>
            <Link
              href={`/clients/${row.original.id}`}
              className="text-amber-600 hover:text-amber-800"
            >
              {row.original.name}
            </Link>
          </div>
        ),
      },
      {
        accessorKey: "cpf",
        header: "CPF",
      },
      {
        accessorKey: "email",
        header: "E-mail",
      },
      {
        accessorKey: "phone",
        header: "Telefone",
      },
      {
        accessorKey: "lastPurchase",
        header: "Última Compra",
        cell: ({ row }) => (
          <span>
            {row.original.lastPurchase
              ? new Date(row.original.lastPurchase).toLocaleDateString("pt-BR")
              : "Nenhuma"}
          </span>
        ),
      },
      {
        id: "actions",
        cell: ({ row }) => (
          <div className="flex space-x-2">
            <Button variant="ghost" size="sm" asChild>
              <Link href={`/clients/${row.original.id}`}>
                <Edit className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="sm">
              <Trash2 className="h-4 w-4 text-red-600" />
            </Button>
          </div>
        ),
      },
    ],
    []
  );

  return <DataTable columns={columns} data={data} />;
}
