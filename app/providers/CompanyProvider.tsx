"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

type Company = {
  id: string;
  name: string;
  logo: string;
};

type CompanyContextType = {
  company: Company | null;
  login: (company: Company) => void;
  logout: () => void;
  isAuthenticated: boolean;
};

const CompanyContext = createContext<CompanyContextType | undefined>(undefined);

export function CompanyProvider({ children }: { children: ReactNode }) {
  const [company, setCompany] = useState<Company | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Carrega do localStorage ao iniciar
  useEffect(() => {
    const savedCompany = localStorage.getItem("wolf-sys:company");
    if (savedCompany) {
      setCompany(JSON.parse(savedCompany));
      setIsAuthenticated(true);
    }
  }, []);

  const login = (companyData: Company) => {
    setCompany(companyData);
    setIsAuthenticated(true);
    localStorage.setItem("wolf-sys:company", JSON.stringify(companyData));
  };

  const logout = () => {
    setCompany(null);
    setIsAuthenticated(false);
    localStorage.removeItem("wolf-sys:company");
  };

  return (
    <CompanyContext.Provider
      value={{ company, login, logout, isAuthenticated }}
    >
      {children}
    </CompanyContext.Provider>
  );
}

export function useCompany() {
  const context = useContext(CompanyContext);
  if (!context) {
    throw new Error("useCompany must be used within a CompanyProvider");
  }
  return context;
}
