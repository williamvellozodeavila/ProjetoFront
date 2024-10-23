import type { Metadata } from "next";
import "./globals.css";
import { Header} from "@/components/Header";
import { Footer} from "@/components/Footer";


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
      <Header />
        {children}
      <Footer />
      </body>
    </html>
  );
}
