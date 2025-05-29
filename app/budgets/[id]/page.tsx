import { notFound } from "next/navigation";
import { BudgetDetails } from "@/app/components/features/budget/BudgetDetails";

// Interface para os dados do orçamento
interface Budget {
  id: string;
  clientName: string;
  kit: string;
  // Adicione outros campos necessários
}

// Interface compatível com o Next.js App Router
interface PageProps {
  params: { id: string };
  searchParams?: Record<string, string | string[] | undefined>;
}

export default async function BudgetDetailsPage({ params }: PageProps) {
  // Busca de dados (simulada ou real)
  const budget: Budget | null = await getBudgetData(params.id); // Substitua por sua função de fetch

  if (!budget) {
    return notFound();
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Orçamento #{budget.id}</h1>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md">
            Imprimir
          </button>
          <button className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-md">
            Converter em Venda
          </button>
        </div>
      </div>

      <BudgetDetails budget={budget} />
    </div>
  );
}

// Função simulada de busca de dados (substitua pela sua implementação real)
async function getBudgetData(id: string): Promise<Budget | null> {
  // Exemplo com fetch:
  // const res = await fetch(`/api/budgets/${id}`);
  // return res.ok ? res.json() : null;

  return {
    id,
    clientName: "João Silva",
    kit: "Kit Solar Premium",
  };
}

// Geração de metadados (opcional)
export async function generateMetadata({ params }: { params: { id: string } }) {
  return {
    title: `Orçamento #${params.id} | Wolf-Sys`,
    description: `Detalhes do orçamento ${params.id}`,
  };
}

// Geração de parâmetros estáticos (opcional)
export async function generateStaticParams() {
  // Retorne os IDs que deseja pré-renderizar
  return [{ id: "1" }, { id: "2" }];
}
