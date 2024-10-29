import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Gestao Studio",
  description: "Gestão para o seu negocio",
  keywords: ['gestão', 'salão de beleza', 'barbearia', 'tatoo', 'esteticista']
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      
        {children}
  
      </body>
    </html>
  );
}
