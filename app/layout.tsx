import { Nunito_Sans } from "next/font/google";
import "@/app/styles/globals.css";
import { ThemeProvider } from "@/app/providers/ThemeProvider";
import { CompanyProvider } from "@/app/providers/CompanyProvider";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${nunito.variable}`}>
      <body className="font-sans bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <ThemeProvider>
          <CompanyProvider>{children}</CompanyProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
