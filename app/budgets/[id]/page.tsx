import { notFound } from "next/navigation";
import { BudgetDetails } from "@/app/components/features/budget/BudgetDetails";
import { Metadata } from "next";

// 1. Interface para os props do componente
interface PageProps {
  params: {
    id: string;
  };
  searchParams?: Record<string, string | string[]>;
}

// 2. Tipo para os dados do orçamento
type Budget = {
  id: string;
  clientName: string;
  kit: string;
  status: "Rascunho" | "Enviado" | "Aprovado" | "Rejeitado";
  value: number;
  createdAt: string;
};

// 3. Busca de dados simulada
function getBudgetData(id: string): Budget | null {
  // Dados mockados - substitua por chamada real à API
  return {
    id,
    clientName: "João Silva",
    kit: "Kit Solar Premium 5kW",
    status: "Aprovado",
    value: 12500.0,
    createdAt: new Date().toISOString(),
  };
}

// 4. Geração de metadados
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const budget = getBudgetData(params.id);

  if (!budget) {
    return {
      title: "Orçamento não encontrado",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `Orçamento ${budget.id} | ${budget.clientName}`,
    description: `Proposta comercial no valor de R$ ${budget.value.toLocaleString(
      "pt-BR"
    )}`,
    openGraph: {
      type: "website",
      title: `Orçamento ${budget.id}`,
      description: `Proposta para ${budget.clientName}`,
      url: `https://seusite.com/budgets/${budget.id}`,
      siteName: "Wolf-Sys",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

// 5. Componente principal
export default async function BudgetPage({ params }: PageProps) {
  const budget = getBudgetData(params.id);

  if (!budget) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <header className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Orçamento #{budget.id}
          </h1>
          <div className="flex gap-2 mt-2">
            <span className="px-2 py-1 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-100 text-xs rounded-full">
              {budget.status}
            </span>
            <span className="text-gray-600 dark:text-gray-400">
              {budget.clientName}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 self-start">
          <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md transition-colors">
            Imprimir
          </button>
          <button className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-md transition-colors">
            Converter em Venda
          </button>
        </div>
      </header>

      <section className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <BudgetDetails budget={budget} />
      </section>
    </div>
  );
}
