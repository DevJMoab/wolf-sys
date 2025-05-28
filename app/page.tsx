import AuthGuard from "@/app/components/auth/AuthGuard";
import Layout from "@/app/components/layout/Layout";

export default function Home() {
  return (
    <AuthGuard>
      <Layout>
        {/* Conteúdo do dashboard */}
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
          {/* Seus componentes de dashboard aqui */}
        </div>
      </Layout>
    </AuthGuard>
  );
}
