"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  FileText,
  Users,
  Settings,
  Calendar,
  BarChart2,
  Mail,
} from "lucide-react";
import { useCompany } from "@/app/providers/CompanyProvider";

type SidebarProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

export default function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
  const pathname = usePathname();
  const { isAuthenticated } = useCompany();

  const menuItems = [
    { name: "Dashboard", icon: Home, href: "/" },
    { name: "Orçamentos", icon: FileText, href: "/budgets" },
    { name: "Projetos", icon: FileText, href: "/projects" },
    { name: "Clientes", icon: Users, href: "/clients" },
    { name: "Vendedores", icon: Users, href: "/sellers" },
    { name: "Tarefas", icon: Calendar, href: "/tasks" },
    { name: "Relatórios", icon: BarChart2, href: "/reports" },
    { name: "Configurações", icon: Settings, href: "/settings" },
  ];

  const handleNavigation = (e: React.MouseEvent, href: string) => {
    if (!isAuthenticated) {
      e.preventDefault();
      // Pode adicionar um toast ou alerta aqui se quiser
      return;
    }
    // Navegação normal acontece via Link
  };

  return (
    <aside
      className={`bg-gray-800 dark:bg-gray-950 text-white transition-all duration-300 ease-in-out 
      ${isOpen ? "w-64" : "w-20"} flex flex-col h-full`}
    >
      {/* Logo */}
      <div
        className={`flex items-center justify-center p-4 border-b border-gray-700 ${
          isOpen ? "justify-start" : "justify-center"
        }`}
      >
        <div className="flex items-center">
          <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center mr-2">
            <span className="text-white font-bold">W</span>
          </div>
          {isOpen && (
            <h1 className="text-xl font-bold whitespace-nowrap">Wolf-Sys</h1>
          )}
        </div>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-2 px-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={isAuthenticated ? item.href : "/login"}
                onClick={(e) => handleNavigation(e, item.href)}
                className={`flex items-center p-3 rounded-lg transition-colors 
                  ${
                    pathname === item.href
                      ? "bg-amber-600 text-white"
                      : "hover:bg-gray-700"
                  }`}
              >
                <item.icon className="w-5 h-5" />
                {isOpen && <span className="ml-3">{item.name}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div
        className={`p-4 border-t border-gray-700 text-center text-xs ${
          !isOpen && "hidden"
        }`}
      >
        <p>© Dev Johan Moab</p>
        <p>© 2025 All Rights Reserved</p>
      </div>
    </aside>
  );
}
