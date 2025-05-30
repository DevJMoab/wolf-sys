import { Card } from "@/app/components/ui/Card";
import { Button } from "@/app/components/ui/Button";
import { Download, Printer, FileText } from "lucide-react";

// 1. Tipo do orçamento
type Budget = {
  id: string;
  clientName: string;
  kit: string;
  clientCpf?: string;
  clientPhone?: string;
  modules?: string;
  inverter?: string;
  cost?: number;
  saleValue?: number;
  commission?: number;
  phases?: Array<{
    name: string;
    status: "pending" | "in_progress" | "completed";
    completionDate?: string;
  }>;
  documents?: Array<{
    name: string;
    url: string;
    type: string;
  }>;
};

interface BudgetDetailsProps {
  budget: Budget;
}

// 2. Componente auxiliar reutilizável
function InfoRow({ label, value }: { label: string; value: string | number }) {
  return (
    <p>
      <span className="text-gray-500">{label}:</span> {value}
    </p>
  );
}

// 3. Componente principal
export function BudgetDetails({ budget }: BudgetDetailsProps) {
  const formatCurrency = (value: number = 0) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);

  return (
    <div className="space-y-4">
      {/* Informações principais */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <h3 className="font-medium mb-2">Informações do Cliente</h3>
          <div className="space-y-2">
            <InfoRow label="Nome" value={budget.clientName} />
            <InfoRow label="CPF" value={budget.clientCpf ?? "Não informado"} />
            <InfoRow
              label="Telefone"
              value={budget.clientPhone ?? "Não informado"}
            />
          </div>
        </Card>

        <Card>
          <h3 className="font-medium mb-2">Detalhes do Kit</h3>
          <div className="space-y-2">
            <InfoRow label="Kit" value={budget.kit} />
            <InfoRow
              label="Módulos"
              value={budget.modules ?? "Não especificado"}
            />
            <InfoRow
              label="Inversor"
              value={budget.inverter ?? "Não especificado"}
            />
          </div>
        </Card>

        <Card>
          <h3 className="font-medium mb-2">Valores</h3>
          <div className="space-y-2">
            <InfoRow label="Custo" value={formatCurrency(budget.cost)} />
            <InfoRow label="Venda" value={formatCurrency(budget.saleValue)} />
            <InfoRow
              label="Comissão"
              value={formatCurrency(budget.commission)}
            />
          </div>
        </Card>
      </div>

      {/* Fases e documentos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <h3 className="font-medium mb-2">Fases do Projeto</h3>
          <div className="space-y-4">
            {budget.phases?.length ? (
              budget.phases.map((phase, index) => (
                <div key={index}>
                  <h4 className="font-medium">{phase.name}</h4>
                  <p className="text-sm text-gray-500">
                    {phase.completionDate
                      ? `Concluído em ${phase.completionDate}`
                      : "Em andamento"}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">Nenhuma fase registrada</p>
            )}
          </div>
        </Card>

        <Card>
          <h3 className="font-medium mb-2">Documentos</h3>
          <div className="space-y-2">
            {budget.documents?.length ? (
              budget.documents.map((doc, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => window.open(doc.url, "_blank")}
                  aria-label={`Baixar ${doc.name}`}
                >
                  <FileText className="mr-2 h-4 w-4" />
                  {doc.name}
                  <Download className="ml-auto h-4 w-4" />
                </Button>
              ))
            ) : (
              <p className="text-gray-500">Nenhum documento disponível</p>
            )}
          </div>
        </Card>
      </div>

      {/* Ações */}
      <div className="flex justify-end space-x-2">
        <Button variant="outline" aria-label="Imprimir orçamento">
          <Printer className="mr-2 h-4 w-4" />
          Imprimir
        </Button>
        <Button
          className="bg-amber-600 hover:bg-amber-700"
          aria-label="Editar orçamento"
        >
          Editar Orçamento
        </Button>
      </div>
    </div>
  );
}
