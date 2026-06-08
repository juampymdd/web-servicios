import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--app-font-sans" });

export const metadata: Metadata = {
  title: "AquaFix — Plomería 24hs en tu zona | Urgencias y destapes",
  description:
    "Plomero matriculado a domicilio. Destapes, pérdidas, calefones y urgencias 24/7. Presupuesto sin cargo. Llamá ahora.",
};

export default function PlomeriaLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className={`${inter.variable} min-h-screen bg-white font-sans text-slate-800`}
    >
      {children}
    </div>
  );
}
