"use client";
import { useMemo, useState } from "react";
import { type ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/app/components/ui/DataTable";
import { Button } from "@/app/components/ui/Button";
import { Edit, Trash2, FileText } from "lucide-react";
import Link from "next/link";

type Budget = {
  id: string;
  clientName: string;
  kit: string;
  phase1: string;
  phase2: string;
  phase3: string;
  saleValue: number;
  status: "pending" | "approved" | "rejected";
  createdAt: string;
};

export function BudgetTable() {
  const [data] = useState<Budget[]>([
    {
      id: "1",
      clientName: "João Silva",
      kit: "Kit Solar Premium",
      phase1: "2023-10-01",
      phase2: "2023-10-05",
      phase3: "2023-10-10",
      saleValue: 25000,
      status: "approved",
      createdAt: "2023-09-28",
    },
    {
      id: "2",
      clientName: "Maria Souza",
      kit: "Kit Solar Básico",
      phase1: "2023-10-02",
      phase2: "",
      phase3: "",
      saleValue: 18000,
      status: "pending",
      createdAt: "2023-09-30",
    },
  ]);

  const columns = useMemo<ColumnDef<Budget>[]>(
    () => [
      {
        accessorKey: "id",
        header: "ID",
        cell: ({ row }) => (
          <Link
            href={`/budgets/${row.original.id}`}
            className="text-amber-600 hover:text-amber-800 font-medium"
          >
            #{row.original.id}
          </Link>
        ),
      },
      {
        accessorKey: "clientName",
        header: "Cliente",
      },
      {
        accessorKey: "kit",
        header: "Kit",
      },
      {
        accessorKey: "saleValue",
        header: "Valor",
        cell: ({ row }) => (
          <span>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(row.original.saleValue)}
          </span>
        ),
      },
      {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
          const status = row.original.status;
          const statusMap = {
            pending: {
              label: "Pendente",
              color: "bg-yellow-100 text-yellow-800",
            },
            approved: {
              label: "Aprovado",
              color: "bg-green-100 text-green-800",
            },
            rejected: { label: "Rejeitado", color: "bg-red-100 text-red-800" },
          };
          return (
            <span
              className={`px-2 py-1 rounded-full text-xs ${statusMap[status].color}`}
            >
              {statusMap[status].label}
            </span>
          );
        },
      },
      {
        accessorKey: "createdAt",
        header: "Criado em",
        cell: ({ row }) => (
          <span>
            {new Date(row.original.createdAt).toLocaleDateString("pt-BR")}
          </span>
        ),
      },
      {
        id: "actions",
        cell: ({ row }) => (
          <div className="flex space-x-2">
            <Button variant="ghost" size="sm" asChild>
              <Link href={`/budgets/${row.original.id}`}>
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
        ),
      },
    ],
    []
  );

  return <DataTable columns={columns} data={data} />;
}
