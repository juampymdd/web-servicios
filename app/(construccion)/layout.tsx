import type { Metadata } from "next";
import { Barlow_Condensed, Plus_Jakarta_Sans } from "next/font/google";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--app-font-sans",
  display: "swap",
});

const display = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--app-font-display",
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ReusRoof — Techos metálicos que duran décadas | Instalación y reparación",
  description:
    "Instalación, reparación e impermeabilización de techos metálicos residenciales, comerciales e industriales. 20 años de experiencia, presupuesto sin cargo en 24 hs y garantía de 15 años.",
};

export default function ConstruccionLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`${sans.variable} ${display.variable} min-h-screen bg-white font-sans text-slate-800 antialiased`}>
      {children}
    </div>
  );
}
