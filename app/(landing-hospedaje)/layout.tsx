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
  weight: ["400", "600", "700", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "VillaGio — Cabañas de madera y hospedaje a medida | Diseño y construcción",
  description:
    "Cabañas y casas de madera llave en mano para hospedaje, alojamiento turístico o vivienda. Diseño a medida, financiación y entrega con garantía escrita.",
};

export default function HospedajeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className={`${sans.variable} ${display.variable} min-h-dvh bg-white font-sans text-slate-800 antialiased`}
    >
      {children}
    </div>
  );
}
