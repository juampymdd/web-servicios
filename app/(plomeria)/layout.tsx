import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Fraunces } from "next/font/google";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--app-font-sans",
  display: "swap",
});

const display = Fraunces({
  subsets: ["latin"],
  variable: "--app-font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "AquaFix — Plomería matriculada 24hs | Urgencias, destapes y pérdidas",
  description:
    "Plomeros matriculados a domicilio en tu zona. Destapes, pérdidas, calefones y urgencias 24/7. Llegamos en menos de 60 minutos. Presupuesto sin cargo y garantía escrita.",
};

export default function PlomeriaLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className={`${sans.variable} ${display.variable} min-h-screen bg-white font-sans text-slate-800 antialiased`}
    >
      {children}
    </div>
  );
}
