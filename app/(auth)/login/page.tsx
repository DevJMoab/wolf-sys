"use client";

import { useRouter } from "next/navigation";
import { useCompany } from "@/app/providers/CompanyProvider";
import { Lock, User } from "lucide-react";
import { Button } from "@/app/components/ui/Button";
import { Input } from "@/app/components/ui/Input";
import { Select } from "@/app/components/ui/Select";
import { useState, useEffect } from "react";
import Link from "next/link";

const COMPANY_OPTIONS = [
  {
    id: "1",
    name: "Âmbar SE",
    logo: "/logos/empresa-a.png",
  },
  {
    id: "2",
    name: "Biowatt SS",
    logo: "/logos/empresa-b.png",
  },
];

export default function LoginPage() {
  const router = useRouter();
  const { login } = useCompany();
  const [formData, setFormData] = useState({
    companyId: "",
    username: "",
    password: "",
    remember: false,
  });
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validações
    if (!formData.companyId) {
      setError("Selecione uma empresa");
      return;
    }

    if (!formData.username || !formData.password) {
      setError("Preencha todos os campos");
      return;
    }

    // Credenciais fixas (substituir por chamada API depois)
    if (formData.username !== "jmoabjc" || formData.password !== "123") {
      setError("Credenciais inválidas");
      return;
    }

    // Faz login
    const selectedCompany = COMPANY_OPTIONS.find(
      (c) => c.id === formData.companyId
    );
    if (selectedCompany) {
      login(selectedCompany);

      if (formData.remember) {
        localStorage.setItem("wolf-sys:remember", "true");
      } else {
        localStorage.removeItem("wolf-sys:remember");
      }

      // Redireciona para o dashboard
      router.push("/");
      router.refresh(); // Força atualização do contexto
    }
  };

  // Preenche automaticamente se tiver "lembrar"
  useEffect(() => {
    if (localStorage.getItem("wolf-sys:remember") === "true") {
      setFormData((prev) => ({
        ...prev,
        remember: true,
      }));
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="p-8">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center">
              <span className="text-white text-2xl font-bold">W</span>
            </div>
          </div>

          <h1 className="text-2xl font-bold text-center mb-6">
            Acesse o Wolf-Sys
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="p-3 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-100 rounded-md">
                {error}
              </div>
            )}

            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium mb-1"
              >
                Empresa
              </label>
              <Select
                id="company"
                options={[
                  { value: "", label: "Selecione uma empresa" },
                  ...COMPANY_OPTIONS.map((c) => ({
                    value: c.id,
                    label: c.name,
                  })),
                ]}
                value={formData.companyId}
                onChange={(e) =>
                  setFormData({ ...formData, companyId: e.target.value })
                }
                required
              />
            </div>

            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium mb-1"
              >
                Usuário
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  id="username"
                  type="text"
                  placeholder="Digite seu usuário"
                  className="pl-10 w-full"
                  value={formData.username}
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-1"
              >
                Senha
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="Digite sua senha"
                  className="pl-10 w-full"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  checked={formData.remember}
                  onChange={(e) =>
                    setFormData({ ...formData, remember: e.target.checked })
                  }
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm">
                  Lembrar-me
                </label>
              </div>

              <div className="text-sm">
                <Link
                  href="/forgot-password"
                  className="font-medium text-amber-600 hover:text-amber-500"
                >
                  Esqueceu a senha?
                </Link>
              </div>
            </div>

            <div>
              <Button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white"
              >
                Entrar
              </Button>
            </div>
          </form>
        </div>

        <div className="px-8 py-4 bg-gray-50 dark:bg-gray-700 text-center text-sm">
          <p>
            Precisa de ajuda?{" "}
            <Link
              href="/support"
              className="font-medium text-amber-600 hover:text-amber-500"
            >
              Contate o suporte
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
