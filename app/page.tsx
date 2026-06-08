import Link from "next/link";
import { ArrowUpRight, Sparkles, Code2 } from "lucide-react";

/* ── Brand mark — “V” cut from a rising chart bar ───────────────── */
function Logo({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden>
      <rect width="40" height="40" rx="11" fill="url(#vg)" />
      <path
        d="M12 13 L20 28 L28 13"
        stroke="#fff"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="28" cy="13" r="2.6" fill="#fff" />
      <defs>
        <linearGradient id="vg" x1="0" y1="0" x2="40" y2="40">
          <stop stopColor="#7c6cf6" />
          <stop offset="1" stopColor="#4f46e5" />
        </linearGradient>
      </defs>
    </svg>
  );
}

type Demo = {
  slug: string;
  href: string | null;
  brand: string;
  rubro: string;
  blurb: string;
  accent: string; // hex of the landing’s own palette
  status: "live" | "soon";
};

const demos: Demo[] = [
  {
    slug: "plomeria",
    href: "/plomeria",
    brand: "AquaFix",
    rubro: "Plomería 24 h",
    blurb:
      "Guardia de urgencias, presupuesto sin sorpresas y reserva por WhatsApp.",
    accent: "#1ac0cf",
    status: "live",
  },
  {
    slug: "construccion",
    href: "/construccion",
    brand: "ReusRoof",
    rubro: "Techos & construcción",
    blurb:
      "Cubiertas metálicas, galpones y obra seca con garantía y portfolio real.",
    accent: "#dc2626",
    status: "live",
  },
  {
    slug: "hospedaje",
    href: null,
    brand: "Hospedaje",
    rubro: "Cabañas & alojamiento",
    blurb: "Reservas directas, galería inmersiva y disponibilidad en vivo.",
    accent: "#0d9488",
    status: "soon",
  },
  {
    slug: "servicio-web",
    href: null,
    brand: "Software",
    rubro: "Producto / SaaS",
    blurb: "Landing de producto con pricing, features y prueba gratis.",
    accent: "#f59e0b",
    status: "soon",
  },
];

const stats = [
  { value: "2", label: "Demos en vivo" },
  { value: "+30%", label: "Conversión objetivo" },
  { value: "<1s", label: "Carga del hero" },
];

export default function Home() {
  return (
    <main
      className="relative min-h-screen overflow-hidden text-white"
      style={{ background: "#0b0f1a" }}
    >
      {/* ── Ambient field ─────────────────────────────────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60rem 40rem at 78% -8%, rgba(124,108,246,.20), transparent 60%), radial-gradient(48rem 38rem at 8% 110%, rgba(79,70,229,.16), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(120% 80% at 50% 0%, #000 30%, transparent 75%)",
        }}
      />

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-6">
        {/* ── Top bar ─────────────────────────────────────────── */}
        <header className="flex items-center justify-between py-7">
          <div className="flex items-center gap-3">
            <Logo />
            <span className="text-lg font-semibold tracking-tight">
              Vendés<span className="text-indigo-400">.</span>
            </span>
          </div>
          <a
            href="https://github.com"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 transition hover:border-white/20 hover:text-white"
          >
            <Code2 className="h-4 w-4" />
            <span className="hidden sm:inline">Código</span>
          </a>
        </header>

        {/* ── Hero ────────────────────────────────────────────── */}
        <section className="pt-12 pb-16 sm:pt-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/25 bg-indigo-400/10 px-3.5 py-1.5 text-xs font-medium text-indigo-200">
            <Sparkles className="h-3.5 w-3.5" />
            Galería de demos
          </div>

          <h1 className="mt-6 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            Landing pages que convierten{" "}
            <span
              style={{
                background: "linear-gradient(90deg,#a5b4fc,#7c6cf6)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              visitas en clientes
            </span>
            .
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/60">
            Una demo por rubro. Diseño a medida, copy que vende y un único
            objetivo: que te llamen. Elegí una y miralá en vivo.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              href="/plomeria"
              className="group inline-flex items-center gap-2 rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:bg-indigo-400"
            >
              Ver demos en vivo
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <a
              href="#demos"
              className="rounded-full border border-white/12 px-6 py-3 text-sm font-medium text-white/75 transition hover:border-white/25 hover:text-white"
            >
              Explorar la galería
            </a>
          </div>

          <dl className="mt-14 flex flex-wrap gap-x-12 gap-y-6">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="text-3xl font-semibold tracking-tight">
                  {s.value}
                </dt>
                <dd className="mt-1 text-sm text-white/45">{s.label}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ── Demo gallery ────────────────────────────────────── */}
        <section id="demos" className="scroll-mt-8 pb-24">
          <div className="mb-7 flex items-end justify-between">
            <h2 className="text-xl font-semibold tracking-tight">
              Demos por rubro
            </h2>
            <span className="text-sm text-white/40">
              {demos.filter((d) => d.status === "live").length} en vivo ·{" "}
              {demos.filter((d) => d.status === "soon").length} en camino
            </span>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {demos.map((d) => (
              <DemoCard key={d.slug} demo={d} />
            ))}
          </div>
        </section>

        {/* ── Footer ──────────────────────────────────────────── */}
        <footer className="mt-auto flex flex-col items-center justify-between gap-3 border-t border-white/8 py-7 text-sm text-white/40 sm:flex-row">
          <span>© {new Date().getFullYear()} Vendés — Demos de landing pages.</span>
          <span>Hecho con Next.js · Tailwind</span>
        </footer>
      </div>
    </main>
  );
}

/* ── Single demo card ──────────────────────────────────────────── */
function DemoCard({ demo }: { demo: Demo }) {
  const live = demo.status === "live";

  const inner = (
    <div
      className={`group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition ${
        live
          ? "hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
          : "opacity-70"
      }`}
    >
      {/* accent wash on hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-2xl transition duration-500 group-hover:opacity-60"
        style={{ background: demo.accent }}
      />

      <div className="relative flex items-start justify-between">
        <span
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-base font-bold"
          style={{ background: `${demo.accent}1f`, color: demo.accent }}
        >
          {demo.brand.charAt(0)}
        </span>

        {live ? (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2.5 py-1 text-xs font-medium text-emerald-300">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            En vivo
          </span>
        ) : (
          <span className="rounded-full bg-white/5 px-2.5 py-1 text-xs font-medium text-white/45">
            Próximamente
          </span>
        )}
      </div>

      <h3 className="relative mt-5 text-xl font-semibold tracking-tight">
        {demo.brand}
      </h3>
      <p
        className="relative mt-0.5 text-sm font-medium"
        style={{ color: demo.accent }}
      >
        {demo.rubro}
      </p>
      <p className="relative mt-3 text-sm leading-relaxed text-white/55">
        {demo.blurb}
      </p>

      <div className="relative mt-6 flex items-center gap-1.5 text-sm font-medium text-white/70">
        {live ? (
          <>
            Ver demo
            <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </>
        ) : (
          <span className="text-white/35">En construcción</span>
        )}
      </div>
    </div>
  );

  if (live && demo.href) {
    return (
      <Link href={demo.href} aria-label={`Ver demo ${demo.brand}`}>
        {inner}
      </Link>
    );
  }
  return inner;
}
