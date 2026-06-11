import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--app-font-sans" });

export const metadata: Metadata = {
  title: "Vendés Landings — Demos de landing pages que convierten",
  description:
    "Galería de landing pages de ejemplo para distintos rubros: hospedaje, plomería, software y más. Mirá las demos en vivo.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={geist.variable}>
      <body className="min-h-dvh font-sans">{children}</body>
    </html>
  );
}
