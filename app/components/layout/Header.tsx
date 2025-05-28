"use client";

import { Menu, Search, Sun, Moon, Bell, Mail, ChevronDown } from "lucide-react";
import { useTheme } from "@/app/providers/ThemeProvider";
import { useCompany } from "@/app/providers/CompanyProvider";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header({
  isSidebarOpen,
  toggleSidebar,
}: {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}) {
  const { theme, toggleTheme } = useTheme();
  const { company, logout } = useCompany();
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 bg-white dark:bg-gray-800 shadow-sm">
      <div className="flex items-center justify-between h-16 px-4">
        {/* Left Section */}
        <div className="flex items-center">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <Menu className="w-5 h-5" />
          </button>

          {company && (
            <div className="flex items-center ml-4 space-x-2">
              <div className="relative w-8 h-8">
                <Image
                  src={company.logo}
                  alt={`Logo ${company.name}`}
                  fill
                  className="object-contain rounded-full border-2 border-amber-500"
                />
              </div>
              <h1 className="text-lg font-semibold">{company.name}</h1>
            </div>
          )}
        </div>

        {/* Center Section - Search */}
        <div className="hidden md:flex mx-4 flex-1 max-w-md">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Pesquisar..."
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 border-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
        </div>

        {/* Right Section - User Actions */}
        <div className="flex items-center space-x-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {theme === "light" ? (
              <Moon className="w-5 h-5" />
            ) : (
              <Sun className="w-5 h-5" />
            )}
          </button>

          <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 relative">
            <Mail className="w-5 h-5" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <div className="relative">
            <button
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                <span className="text-white font-medium">JM</span>
              </div>
              <ChevronDown className="w-4 h-4" />
            </button>

            {userMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-20">
                <Link
                  href="/profile"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Perfil
                </Link>
                <Link
                  href="/settings"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Configurações
                </Link>
                <button
                  onClick={() => {
                    logout();
                    setUserMenuOpen(false);
                  }}
                  className="w-full text-left block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Sair
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
