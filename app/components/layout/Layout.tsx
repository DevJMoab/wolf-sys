"use client";

import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import { useCompany } from "@/app/providers/CompanyProvider";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mounted, setMounted] = useState(false);
  const { isAuthenticated } = useCompany();

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  if (!mounted) return null;

  return (
    <div className="flex h-screen overflow-hidden">
      {isAuthenticated && (
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      )}

      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {isAuthenticated && (
          <Header isSidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        )}

        <main className="flex-1 p-4 md:p-6">{children}</main>

        <Footer />
      </div>
    </div>
  );
}
