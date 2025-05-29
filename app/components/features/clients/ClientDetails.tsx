import { Card } from "@/app/components/ui/Card";
import { Button } from "@/app/components/ui/Button";
import { Edit, Plus } from "lucide-react";
import Link from "next/link";

type ClientDetailsProps = {
  client: {
    id: string;
    name: string;
    cpf: string;
    email: string;
    phone: string;
    // ... outros campos do cliente
  };
};

export function ClientDetails({ client }: ClientDetailsProps) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="md:col-span-2">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-xl font-medium">
                  {client.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <div>
                <h2 className="text-xl font-bold">{client.name}</h2>
                <p className="text-gray-500">
                  Cliente desde{" "}
                  {new Date("2023-01-15").toLocaleDateString("pt-BR")}
                </p>
              </div>
            </div>
            <Button variant="outline">
              <Edit className="mr-2 h-4 w-4" />
              Editar
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium mb-2">Informações Pessoais</h3>
              <div className="space-y-2">
                <p>
                  <span className="text-gray-500">CPF:</span> {client.cpf}
                </p>
                <p>
                  <span className="text-gray-500">Data Nasc.:</span> 15/05/1985
                </p>
                <p>
                  <span className="text-gray-500">Sexo:</span> Masculino
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">Contato</h3>
              <div className="space-y-2">
                <p>
                  <span className="text-gray-500">E-mail:</span> {client.email}
                </p>
                <p>
                  <span className="text-gray-500">Telefone:</span>{" "}
                  {client.phone}
                </p>
                <p>
                  <span className="text-gray-500">Celular:</span> (11)
                  99999-9999
                </p>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h3 className="font-medium mb-2">Endereço</h3>
          <div className="space-y-2">
            <p>Rua das Flores, 123</p>
            <p>Jardim das Acácias</p>
            <p>São Paulo - SP</p>
            <p>CEP: 01234-567</p>
          </div>
        </Card>
      </div>

      <Card>
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-medium">Histórico de Orçamentos</h3>
          <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
            <Plus className="mr-2 h-4 w-4" />
            Novo Orçamento
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Data
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Kit
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Valor
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-2 whitespace-nowrap">
                  <Link
                    href="/budgets/1"
                    className="text-amber-600 hover:text-amber-800"
                  >
                    #1
                  </Link>
                </td>
                <td className="px-4 py-2 whitespace-nowrap">05/10/2023</td>
                <td className="px-4 py-2 whitespace-nowrap">
                  Kit Solar Premium
                </td>
                <td className="px-4 py-2 whitespace-nowrap">R$ 25.000,00</td>
                <td className="px-4 py-2 whitespace-nowrap">
                  <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs">
                    Aprovado
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 whitespace-nowrap">
                  <Link
                    href="/budgets/2"
                    className="text-amber-600 hover:text-amber-800"
                  >
                    #2
                  </Link>
                </td>
                <td className="px-4 py-2 whitespace-nowrap">15/09/2023</td>
                <td className="px-4 py-2 whitespace-nowrap">
                  Kit Solar Básico
                </td>
                <td className="px-4 py-2 whitespace-nowrap">R$ 18.000,00</td>
                <td className="px-4 py-2 whitespace-nowrap">
                  <span className="px-2 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs">
                    Pendente
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
