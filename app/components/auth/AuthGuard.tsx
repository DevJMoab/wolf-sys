"use client";

import { useRouter, usePathname } from "next/navigation";
import { useCompany } from "@/app/providers/CompanyProvider";
import { useEffect } from "react";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const { isAuthenticated } = useCompany();

  useEffect(() => {
    if (!isAuthenticated && pathname !== "/login") {
      // Salva a rota que o usuário tentou acessar
      sessionStorage.setItem("redirectAfterLogin", pathname);
      router.push("/login");
    }
  }, [isAuthenticated, pathname, router]);

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
      </div>
    );
  }

  return <>{children}</>;
}
