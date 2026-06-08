import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ReusRoof — Techos metálicos duraderos | Instalación y reparación",
  description:
    "Instalación, reparación e impermeabilización de techos metálicos residenciales, comerciales e industriales. 20 años de experiencia, presupuesto sin cargo y garantía extendida.",
};

export default function ConstruccionLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="min-h-screen">{children}</div>;
}
