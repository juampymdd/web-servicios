"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  Code2,
  Zap,
  Palette,
  MessageCircle,
  Gauge,
  MousePointerClick,
  Check,
} from "lucide-react";

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
          <stop stopColor="#22d3ee" />
          <stop offset=".5" stopColor="#8b5cf6" />
          <stop offset="1" stopColor="#f472b6" />
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
    accent: "#f43f5e",
    status: "live",
  },
  {
    slug: "hospedaje",
    href: "/hospedaje",
    brand: "VillaGio",
    rubro: "Cabañas de madera",
    blurb:
      "Alojamiento en cabañas de madera: galería inmersiva y reserva directa.",
    accent: "#84cc16",
    status: "live",
  },
  {
    slug: "servicio-web",
    href: null,
    brand: "Software / SaaS",
    rubro: "Producto digital",
    blurb: "Landing de producto con pricing, features y prueba gratis.",
    accent: "#f59e0b",
    status: "soon",
  },
];

const liveCount = demos.filter((d) => d.status === "live").length;

const stats = [
  { value: String(liveCount), label: "Demos en vivo" },
  { value: "4", label: "Rubros" },
  { value: "100%", label: "A medida" },
];

const steps = [
  {
    icon: MousePointerClick,
    title: "Elegís el rubro",
    body: "Mirás las demos en vivo y arrancamos desde la que más se parece a lo tuyo.",
  },
  {
    icon: Palette,
    title: "La personalizamos",
    body: "Tu marca, tus colores, tu copy. Diseño a medida pensado para que te llamen.",
  },
  {
    icon: Zap,
    title: "Publicás y vendés",
    body: "La dejamos online, rápida y lista para recibir consultas por WhatsApp.",
  },
];

const features = [
  {
    icon: Gauge,
    title: "Carga al instante",
    body: "Optimizada de punta a punta. Google la quiere y tus clientes no esperan.",
  },
  {
    icon: MessageCircle,
    title: "Conversión real",
    body: "Todo empuja a una acción: llamar o escribir por WhatsApp. Sin distracciones.",
  },
  {
    icon: Palette,
    title: "Diseño a medida",
    body: "Nada de plantillas genéricas. Cada landing tiene identidad propia.",
  },
  {
    icon: Sparkles,
    title: "Animaciones prolijas",
    body: "Micro-interacciones y movimiento con criterio. Vistoso, nunca molesto.",
  },
];

const RING =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07070d]";

export default function Home() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce || !root) return; // leave everything visible, no scroll animation
    root.classList.add("anim"); // enables reveal hiding only once JS is live

    const els = root.querySelectorAll<HTMLElement>(".reveal");
    if (!els?.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={rootRef}
      className="relative min-h-dvh overflow-hidden bg-[#07070d] text-white"
    >
      <style>{styles}</style>

      <a
        href="#demos"
        className={`sr-only rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-black focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 ${RING}`}
      >
        Saltar a las demos
      </a>

      {/* ── Ambient neon field ──────────────────────────────────── */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="blob blob-a" />
        <div className="blob blob-b" />
        <div className="blob blob-c" />
        <div className="grid-mask" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* ── Top bar ───────────────────────────────────────────── */}
        <header className="flex items-center justify-between py-6">
          <a href="#top" className={`flex items-center gap-3 rounded-full ${RING}`}>
            <Logo />
            <span className="text-lg font-semibold tracking-tight">
              Vendés
              <span className="bg-gradient-to-r from-cyan-300 to-fuchsia-400 bg-clip-text text-transparent">
                .
              </span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-white/65 sm:flex">
            <a href="#demos" className={`rounded transition hover:text-white ${RING}`}>
              Demos
            </a>
            <a href="#como" className={`rounded transition hover:text-white ${RING}`}>
              Cómo funciona
            </a>
            <a
              href="mailto:juampymdd@gmail.com?subject=Quiero%20una%20landing"
              className={`rounded transition hover:text-white ${RING}`}
            >
              Contacto
            </a>
          </nav>
          <a
            href="https://github.com/juampymdd/web-servicios"
            aria-label="Código en GitHub"
            className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 transition hover:border-white/25 hover:text-white ${RING}`}
          >
            <Code2 className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">Código</span>
          </a>
        </header>

        <main id="top">
          {/* ── Hero ────────────────────────────────────────────── */}
          <section className="grid items-center gap-12 pt-10 pb-20 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-28">
            <div className="reveal">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3.5 py-1.5 text-xs font-medium text-cyan-200">
                <Sparkles className="h-3.5 w-3.5" />
                Galería de landings que convierten
              </div>

              <h1 className="mt-6 text-balance text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl">
                Convertí visitas en{" "}
                <span className="grad-text">clientes</span>.
              </h1>

              <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-white/70">
                Una demo por rubro, diseñada para que te llamen. Elegí la tuya,
                la personalizamos y la dejamos online.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="#demos" className={`btn-neon ${RING}`}>
                  Ver demos en vivo
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="mailto:juampymdd@gmail.com?subject=Quiero%20una%20landing"
                  className={`inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white/80 transition hover:border-white/35 hover:text-white active:scale-[0.98] ${RING}`}
                >
                  Quiero la mía
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              <dl className="mt-12 flex flex-wrap gap-x-10 gap-y-6">
                {stats.map((s) => (
                  <div key={s.label}>
                    <dt className="grad-text text-3xl font-bold tracking-tight tabular-nums">
                      {s.value}
                    </dt>
                    <dd className="mt-1 text-sm text-white/60">{s.label}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Floating preview stack */}
            <div className="reveal relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="float-card">
                <BrowserPreview accent="#22d3ee" brand="AquaFix" />
              </div>
              <div className="float-card-2 absolute -bottom-8 -left-2 w-2/3 sm:-left-6">
                <BrowserPreview accent="#84cc16" brand="VillaGio" compact />
              </div>
            </div>
          </section>

          {/* ── Marquee ─────────────────────────────────────────── */}
          <section aria-hidden className="reveal -mx-6 overflow-hidden border-y border-white/10 bg-white/[0.02] py-4">
            <div className="marquee flex w-max gap-10 whitespace-nowrap text-sm font-medium text-white/45">
              {Array.from({ length: 2 }).map((_, k) => (
                <span key={k} className="flex gap-10">
                  {[
                    "Plomería",
                    "Construcción",
                    "Hospedaje",
                    "Gastronomía",
                    "Estética",
                    "Software",
                    "Inmobiliaria",
                    "Fitness",
                  ].map((t) => (
                    <span key={t} className="flex items-center gap-10">
                      <span className="text-cyan-300/70">◆</span>
                      {t}
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </section>

          {/* ── Cómo funciona ───────────────────────────────────── */}
          <section id="como" className="scroll-mt-20 py-20 lg:py-28">
            <div className="reveal max-w-xl">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300/80">
                Cómo funciona
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                De idea a online en 3 pasos
              </h2>
            </div>
            <ol className="mt-12 grid gap-6 md:grid-cols-3">
              {steps.map((s, i) => (
                <li
                  key={s.title}
                  className="reveal card-glass group relative rounded-2xl p-7"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <span className="grad-text text-5xl font-black tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <s.icon
                    className="mt-4 h-7 w-7 text-cyan-300 transition group-hover:scale-110"
                    aria-hidden="true"
                  />
                  <h3 className="mt-4 text-lg font-semibold tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">
                    {s.body}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          {/* ── Demo gallery ────────────────────────────────────── */}
          <section id="demos" className="scroll-mt-20 py-20 lg:py-24">
            <div className="reveal mb-8 flex flex-wrap items-end justify-between gap-3">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300/80">
                  Galería
                </span>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Demos por rubro
                </h2>
              </div>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-white/65 tabular-nums">
                {liveCount} en vivo · {demos.length - liveCount} en camino
              </span>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {demos.map((d, i) => (
                <DemoCard key={d.slug} demo={d} delay={i * 70} />
              ))}
            </div>
          </section>

          {/* ── Beneficios ──────────────────────────────────────── */}
          <section className="py-20 lg:py-24">
            <div className="reveal max-w-xl">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300/80">
                Por qué
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Vistoso, pero pensado para vender
              </h2>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((f, i) => (
                <div
                  key={f.title}
                  className="reveal card-glass rounded-2xl p-6"
                  style={{ transitionDelay: `${i * 70}ms` }}
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300">
                    <f.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold tracking-tight">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">
                    {f.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── CTA final ───────────────────────────────────────── */}
          <section className="pb-24">
            <div className="reveal cta-band relative overflow-hidden rounded-3xl px-8 py-14 text-center sm:px-12 sm:py-20">
              <h2 className="relative mx-auto max-w-2xl text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                ¿Listo para tener la tuya online?
              </h2>
              <p className="relative mx-auto mt-4 max-w-md text-pretty text-white/75">
                Contame de qué es tu negocio y te muestro cómo quedaría tu
                landing.
              </p>
              <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="mailto:juampymdd@gmail.com?subject=Quiero%20una%20landing"
                  className={`btn-neon ${RING}`}
                >
                  Quiero la mía
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a href="#demos" className={`inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white/85 transition hover:border-white/40 active:scale-[0.98] ${RING}`}>
                  Ver demos
                </a>
              </div>
              <ul className="relative mx-auto mt-8 flex max-w-md flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/70">
                {["Sin compromiso", "Diseño a medida", "Online en días"].map(
                  (t) => (
                    <li key={t} className="flex items-center gap-1.5">
                      <Check className="h-4 w-4 text-cyan-300" aria-hidden="true" />
                      {t}
                    </li>
                  )
                )}
              </ul>
            </div>
          </section>
        </main>

        {/* ── Footer ────────────────────────────────────────────── */}
        <footer className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-sm text-white/60 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <Logo className="h-7 w-7" />
            <span>© {new Date().getFullYear()} Vendés — Landings que convierten.</span>
          </div>
          <span className="text-white/45">Next.js · Tailwind</span>
        </footer>
      </div>
    </div>
  );
}

/* ── Mini browser preview (CSS mockup, per-accent) ───────────────── */
function BrowserPreview({
  accent,
  brand,
  compact = false,
}: {
  accent: string;
  brand: string;
  compact?: boolean;
}) {
  return (
    <div
      className="overflow-hidden rounded-xl border border-white/10 bg-[#0d0d18] shadow-2xl"
      style={{ boxShadow: `0 30px 80px -30px ${accent}55` }}
      aria-hidden
    >
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.03] px-3 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="ml-2 h-3 flex-1 rounded bg-white/[0.06]" />
      </div>
      <div className="p-4" style={{ background: `radial-gradient(120% 80% at 80% 0%, ${accent}26, transparent 60%)` }}>
        <div
          className="inline-block rounded-full px-2 py-0.5 text-[9px] font-bold"
          style={{ background: `${accent}26`, color: accent }}
        >
          {brand}
        </div>
        <div className="mt-3 h-3 w-4/5 rounded bg-white/20" />
        <div className="mt-1.5 h-3 w-3/5 rounded" style={{ background: accent }} />
        {!compact && (
          <div className="mt-2 h-2 w-11/12 rounded bg-white/10" />
        )}
        <div className="mt-3 flex gap-2">
          <span
            className="h-5 w-20 rounded-full"
            style={{ background: accent }}
          />
          <span className="h-5 w-14 rounded-full border border-white/15" />
        </div>
        {!compact && (
          <div className="mt-4 grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="h-10 rounded-lg border border-white/10 bg-white/[0.04]"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Single demo card ──────────────────────────────────────────── */
function DemoCard({ demo, delay = 0 }: { demo: Demo; delay?: number }) {
  const live = demo.status === "live";

  const inner = (
    <div
      className={`group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 ${
        live
          ? "hover:-translate-y-1.5 hover:border-white/20 hover:bg-white/[0.05]"
          : "cursor-default opacity-60"
      }`}
      style={
        live
          ? ({ "--accent": demo.accent } as React.CSSProperties)
          : undefined
      }
    >
      {/* accent glow on hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full opacity-0 blur-3xl transition duration-500 group-hover:opacity-50"
        style={{ background: demo.accent }}
      />
      {/* gradient ring on hover */}
      <div
        aria-hidden
        className="card-ring pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{ boxShadow: `inset 0 0 0 1px ${demo.accent}66` }}
      />

      <div className="relative flex items-start justify-between">
        <span
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-base font-bold"
          style={{ background: `${demo.accent}26`, color: demo.accent }}
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
          <span className="rounded-full bg-white/5 px-2.5 py-1 text-xs font-medium text-white/60">
            Próximamente
          </span>
        )}
      </div>

      <h3 className="relative mt-5 text-xl font-semibold tracking-tight">
        {demo.brand}
      </h3>
      <p
        className="relative mt-0.5 text-sm font-semibold"
        style={{ color: demo.accent }}
      >
        {demo.rubro}
      </p>
      <p className="relative mt-3 text-sm leading-relaxed text-white/70">
        {demo.blurb}
      </p>

      <div className="relative mt-6 flex items-center gap-1.5 text-sm font-semibold">
        {live ? (
          <span className="flex items-center gap-1.5" style={{ color: demo.accent }}>
            Ver demo
            <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        ) : (
          <span className="text-white/60">En construcción</span>
        )}
      </div>
    </div>
  );

  const cls = "reveal block rounded-2xl";
  const style = { transitionDelay: `${delay}ms` } as React.CSSProperties;

  if (live && demo.href) {
    return (
      <Link
        href={demo.href}
        aria-label={`Ver demo ${demo.brand}`}
        className={`${cls} ${RING}`}
        style={style}
      >
        {inner}
      </Link>
    );
  }
  return (
    <div className={cls} style={style}>
      {inner}
    </div>
  );
}

/* ── Styles: neon ambience, reveals, motion (reduced-motion safe) ─ */
const styles = `
  .grad-text {
    background: linear-gradient(92deg, #22d3ee, #8b5cf6 55%, #f472b6);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  .btn-neon {
    display: inline-flex; align-items: center; gap: .5rem;
    border-radius: 9999px; padding: .75rem 1.5rem;
    font-size: .875rem; font-weight: 600; color: #04141a;
    background: linear-gradient(92deg, #22d3ee, #67e8f9);
    box-shadow: 0 8px 30px -8px rgba(34,211,238,.6);
    transition: transform .2s ease, box-shadow .2s ease, filter .2s ease;
  }
  .btn-neon:hover { box-shadow: 0 10px 38px -6px rgba(34,211,238,.8); filter: brightness(1.05); }
  .btn-neon:active { transform: scale(.98); }

  .card-glass {
    border: 1px solid rgba(255,255,255,.08);
    background: rgba(255,255,255,.03);
    transition: transform .3s ease, border-color .3s ease, background .3s ease;
  }
  .card-glass:hover {
    transform: translateY(-4px);
    border-color: rgba(34,211,238,.35);
    background: rgba(255,255,255,.05);
  }

  /* Ambient neon blobs */
  .blob {
    position: absolute; border-radius: 9999px;
    filter: blur(90px); opacity: .5;
  }
  .blob-a { top: -10rem; right: -6rem; width: 34rem; height: 34rem;
    background: radial-gradient(circle, rgba(34,211,238,.5), transparent 70%); }
  .blob-b { top: 30%; left: -10rem; width: 30rem; height: 30rem;
    background: radial-gradient(circle, rgba(139,92,246,.45), transparent 70%); }
  .blob-c { bottom: -8rem; right: 10%; width: 28rem; height: 28rem;
    background: radial-gradient(circle, rgba(244,114,182,.35), transparent 70%); }
  .grid-mask {
    position: absolute; inset: 0; opacity: .3;
    background-image:
      linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px);
    background-size: 58px 58px;
    -webkit-mask-image: radial-gradient(130% 90% at 50% 0%, #000 28%, transparent 72%);
    mask-image: radial-gradient(130% 90% at 50% 0%, #000 28%, transparent 72%);
  }

  .float-card { animation: floaty 7s ease-in-out infinite; }
  .float-card-2 { animation: floaty 7s ease-in-out infinite; animation-delay: -3.5s; }
  @keyframes floaty {
    0%,100% { transform: translateY(0); }
    50% { transform: translateY(-14px); }
  }

  .marquee { animation: scroll 28s linear infinite; }
  @keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }

  .cta-band {
    background:
      radial-gradient(60% 120% at 0% 0%, rgba(34,211,238,.22), transparent 60%),
      radial-gradient(60% 120% at 100% 100%, rgba(244,114,182,.22), transparent 60%),
      linear-gradient(180deg, rgba(139,92,246,.16), rgba(255,255,255,.02));
    border: 1px solid rgba(255,255,255,.1);
  }

  /* Reveal-on-scroll — only active when JS adds .anim; otherwise visible */
  .anim .reveal { opacity: 0; transform: translateY(22px); transition: opacity .55s ease, transform .55s cubic-bezier(.22,1,.36,1); }
  .anim .reveal.in { opacity: 1; transform: none; }

  @media (prefers-reduced-motion: reduce) {
    .float-card, .float-card-2, .marquee, .blob { animation: none !important; }
    .anim .reveal { opacity: 1 !important; transform: none !important; transition: none !important; }
  }
`;
