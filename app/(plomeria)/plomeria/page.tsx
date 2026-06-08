"use client";

import { useState, useEffect, useRef, type RefObject } from "react";
import {
  Wrench, ShieldCheck, Star, Menu, X, Check,
  Phone, MessageCircle, Droplets, Clock, BadgeCheck,
  ChevronRight, ChevronDown, Zap, Flame, ShowerHead,
  Gauge, PiggyBank, MapPin, Mail, ArrowRight, Navigation,
} from "lucide-react";

/* ── Brand mark ─────────────────────────────────────────────── */
function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden>
      <rect width="32" height="32" rx="9" fill="url(#lg)" />
      <path
        d="M16 7c-2.6 3-5 5.7-5 8.6A5 5 0 0 0 16 20a5 5 0 0 0 5-4.4c0-2.9-2.4-5.6-5-8.6Z"
        fill="#fff"
      />
      <circle cx="14.4" cy="15" r="1.5" fill="#1AC0CF" opacity=".9" />
      <defs>
        <linearGradient id="lg" x1="0" y1="0" x2="32" y2="32">
          <stop stopColor="#0C8FA0" />
          <stop offset="1" stopColor="#0A1A2F" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* Technical pipe-blueprint backdrop — replaces the generic grid/blob cliché */
function Blueprint({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 640 600" fill="none" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <g stroke="rgba(26,192,207,.16)" strokeWidth="1.5" strokeLinecap="round">
        <path d="M-20 110 H210 V30" />
        <path d="M120 -20 V200 H470 V90" />
        <path d="M-20 300 H300 V470 H560" />
        <path d="M640 240 H410 V360 H210 V620" />
        <path d="M540 -20 V150 H620" />
        <path d="M40 620 V430 H300" />
      </g>
      {/* valves / joints */}
      <g fill="#0a1a2f" stroke="rgba(26,192,207,.45)" strokeWidth="1.5">
        {[[210, 110], [470, 200], [300, 470], [410, 240], [120, 200], [300, 300]].map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="5" />
        ))}
      </g>
      {/* live water flow */}
      <path className="flow" d="M-20 300 H300 V470 H560" stroke="var(--aqua)" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="2 14" opacity=".7" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

/* ── Content ────────────────────────────────────────────────── */
const NAV = ["Servicios", "Proceso", "Nosotros", "Opiniones"];

const SERVICES = [
  { Icon: Zap, title: "Urgencias 24/7", desc: "Pérdidas, inundaciones y caños rotos. Respondemos cualquier día y horario, sin recargo oculto." },
  { Icon: ShowerHead, title: "Destapes", desc: "Cloacas, pluviales y desagües con máquina rotativa e hidrojet. Sin romper, sin escombros." },
  { Icon: Flame, title: "Calefones y termotanques", desc: "Instalación, reparación y service de calefones, termotanques y calderas de todas las marcas." },
  { Icon: Droplets, title: "Detección de pérdidas", desc: "Geófono y cámara térmica para encontrar la fuga exacta sin picar paredes de más." },
  { Icon: Wrench, title: "Griferías y sanitarios", desc: "Cambio de grifos, mochilas, flexibles y bachas. Trabajo prolijo y materiales certificados." },
  { Icon: Gauge, title: "Redes de agua y gas", desc: "Renovación de cañerías, presurizadores y conexiones. Matriculados y habilitados." },
];

const STATS: { value: string; label: string; star?: boolean }[] = [
  { value: "15+", label: "Años en el oficio" },
  { value: "2.400+", label: "Clientes atendidos" },
  { value: "<60min", label: "En tu casa" },
  { value: "4.9", label: "Promedio de reseñas", star: true },
];

const PROCESS = [
  { n: "01", title: "Contactás", desc: "Llamás o nos escribís por WhatsApp. Te respondemos al toque, sin contestadores." },
  { n: "02", title: "Diagnosticamos", desc: "Vamos al lugar, revisamos y te pasamos un presupuesto claro antes de tocar nada." },
  { n: "03", title: "Resolvemos", desc: "Lo arreglamos en el día con materiales certificados y dejamos todo limpio." },
  { n: "04", title: "Garantizamos", desc: "Te entregamos garantía escrita. Si algo falla, volvemos sin cargo." },
];

const TESTIMONIALS = [
  { name: "María González", role: "Palermo, CABA", text: "Llegaron rápido, resolvieron la fuga en minutos y dejaron todo limpio. Muy recomendables.", rating: 5 },
  { name: "Carlos Fernández", role: "Admin. de consorcio", text: "Los contrato para el mantenimiento mensual del edificio. Puntuales, profesionales y honestos.", rating: 5 },
  { name: "Ana López", role: "Local gastronómico", text: "Emergencia a medianoche y respondieron al instante. Precios justos, trabajo impecable.", rating: 5 },
];

const FAQS = [
  { q: "¿Atienden urgencias de madrugada?", a: "Sí. Trabajamos las 24 horas, los 365 días del año. Para emergencias llegamos en menos de 60 minutos a la mayoría de las zonas." },
  { q: "¿El presupuesto tiene costo?", a: "No. El diagnóstico en el lugar y el presupuesto son sin cargo. Solo cobrás si aprobás el trabajo." },
  { q: "¿Son plomeros matriculados?", a: "Todos nuestros técnicos están matriculados, asegurados y habilitados para trabajos de agua y gas." },
  { q: "¿Qué garantía dan?", a: "Entregamos garantía escrita en cada servicio. Si el problema reaparece dentro del plazo, volvemos sin cargo." },
];

const WA = "https://wa.me/5491100000000";
const TEL = "tel:+5491100000000";

/* ── Scroll reveal ──────────────────────────────────────────── */
function useInView<T extends Element>(threshold = 0.12) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView] as [RefObject<T | null>, boolean];
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [faq, setFaq] = useState<number | null>(0);
  const [active, setActive] = useState("servicios");
  const [heroRef, heroIn] = useInView<HTMLDivElement>(0.05);
  const [servRef, servIn] = useInView<HTMLElement>();
  const [procRef, procIn] = useInView<HTMLElement>();
  const [aboutRef, aboutIn] = useInView<HTMLElement>();
  const [testiRef, testiIn] = useInView<HTMLElement>();
  const [faqRef, faqIn] = useInView<HTMLElement>();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // scrollspy — mark the nav link of the section in view
  useEffect(() => {
    const ids = NAV.map((l) => l.toLowerCase());
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="bg-white text-ink overflow-x-hidden selection:bg-aqua/25">
      <style>{`
        :root {
          --ink:#0A1A2F; --ink-soft:#11304f;
          --aqua:#1AC0CF; --aqua-deep:#0C8FA0;
          --copper:#D08A4E; --copper-soft:#E7B486;
          /* surface elevation scale */
          --surface-0:#08172a; --surface-1:#0f2942; --surface-2:#ffffff;
          --elev-1:0 2px 10px -4px rgba(3,12,28,.5);
          --elev-2:0 20px 44px -22px rgba(3,12,28,.55);
          --elev-3:0 44px 84px -34px rgba(3,12,28,.66);
          --focus:var(--aqua);
        }
        .ink-grad{background:radial-gradient(125% 120% at 80% 4%,#16466e 0%,#0d2742 40%,var(--surface-0) 100%)}
        /* raised shelf the card rests on — gives real elevation, not floating */
        .shelf{background:linear-gradient(158deg,var(--surface-1) 0%,#0b2036 100%);border:1px solid rgba(255,255,255,.07);box-shadow:var(--elev-2),inset 0 1px 0 rgba(255,255,255,.05)}
        /* keyboard focus — dual ring (dark inner + accent outer) clears AA 3:1 on light AND dark surfaces */
        a:focus-visible,button:focus-visible,input:focus-visible,summary:focus-visible{outline:none;box-shadow:0 0 0 2px #0b2036,0 0 0 4px var(--focus);border-radius:12px}
        .blueprint{position:absolute;inset:0;width:100%;height:100%;mask-image:radial-gradient(70% 78% at 16% 42%,#000 24%,transparent 72%);-webkit-mask-image:radial-gradient(70% 78% at 16% 42%,#000 24%,transparent 72%)}
        .route-dash{stroke-dasharray:3 8;animation:flow 1s linear infinite}
        .flow{animation:flow 1s linear infinite}
        @keyframes flow{to{stroke-dashoffset:-32}}
        .glow{position:absolute;border-radius:50%;filter:blur(100px);pointer-events:none}

        .reveal{opacity:0;transform:translateY(26px);transition:opacity .7s cubic-bezier(.22,1,.36,1),transform .7s cubic-bezier(.22,1,.36,1)}
        .reveal.in{opacity:1;transform:none}
        .d1{transition-delay:.08s}.d2{transition-delay:.18s}.d3{transition-delay:.3s}
        .d4{transition-delay:.42s}.d5{transition-delay:.54s}.d6{transition-delay:.66s}

        .eyebrow{display:inline-flex;align-items:center;gap:7px;font-size:.7rem;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--aqua-deep)}
        .eyebrow-l{color:var(--copper-soft)}

        .pill{display:inline-flex;align-items:center;gap:8px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.16);color:rgba(255,255,255,.9);font-size:.74rem;font-weight:600;letter-spacing:.04em;padding:7px 15px;border-radius:100px;backdrop-filter:blur(6px)}

        .btn-primary{background:linear-gradient(135deg,var(--aqua) 0%,var(--aqua-deep) 100%);color:#fff;box-shadow:0 8px 22px -6px rgba(12,143,160,.6);transition:transform .2s,box-shadow .2s,filter .2s}
        .btn-primary:hover{transform:translateY(-2px);box-shadow:0 14px 30px -6px rgba(12,143,160,.7);filter:saturate(1.1)}
        .btn-ghost{border:1.5px solid rgba(255,255,255,.4);color:#fff;transition:background .2s,border-color .2s}
        .btn-ghost:hover{background:rgba(255,255,255,.12);border-color:#fff}
        .btn-wa{background:#25D366;color:#fff;box-shadow:0 8px 22px -6px rgba(37,211,102,.6);transition:transform .2s,box-shadow .2s}
        .btn-wa:hover{transform:translateY(-2px);box-shadow:0 14px 30px -6px rgba(37,211,102,.7)}
        .btn-line{border:1.5px solid #e2e8f0;color:#334155;transition:border-color .2s,color .2s,background .2s}
        .btn-line:hover{border-color:var(--aqua-deep);color:var(--aqua-deep);background:#f0fbfc}

        .nav-link{position:relative}
        .nav-link::after{content:'';position:absolute;bottom:-5px;left:0;width:0;height:2px;border-radius:2px;background:var(--aqua-deep);transition:width .25s ease}
        .nav-link:hover::after{width:100%}
        .nav-link.nav-active{color:var(--aqua-deep)}
        .nav-link.nav-active::after{width:100%}

        /* resting elevation so cards lift off the surface, not sit flat on it */
        .card{box-shadow:0 1px 2px rgba(15,23,42,.04),0 6px 16px -8px rgba(15,23,42,.12);transition:transform .18s cubic-bezier(.22,1,.36,1),box-shadow .18s,border-color .18s}
        .card:hover{transform:translateY(-6px);box-shadow:0 26px 50px -22px rgba(10,26,47,.28);border-color:#cdeef1}

        .icon-tile{background:linear-gradient(135deg,#e7fbfd,#d2f1f4);color:var(--aqua-deep)}
        .glass{background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.14);backdrop-filter:blur(16px)}

        .wa-float{position:fixed;bottom:24px;right:24px;z-index:60;width:58px;height:58px;border-radius:50%;background:#25D366;display:flex;align-items:center;justify-content:center;box-shadow:0 8px 26px rgba(37,211,102,.5);transition:transform .2s}
        .wa-float:hover{transform:scale(1.08)}
        .wa-float::before{content:'';position:absolute;inset:-5px;border-radius:50%;border:2px solid rgba(37,211,102,.45);animation:ring 2.2s ease-out infinite}
        @keyframes ring{0%{transform:scale(1);opacity:.8}100%{transform:scale(1.55);opacity:0}}

        .marquee{display:flex;gap:3.5rem;animation:scroll 26s linear infinite;white-space:nowrap}
        @keyframes scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}

        .floaty{animation:floaty 3.6s ease-in-out infinite}
        .floaty-slow{animation:floaty 4.6s ease-in-out infinite;animation-delay:1.2s}
        @keyframes floaty{0%,100%{transform:translateY(0)}50%{transform:translateY(-9px)}}

        @media (prefers-reduced-motion:reduce){.reveal,.floaty,.floaty-slow,.marquee,.wa-float::before{animation:none!important;transition:none!important;opacity:1!important;transform:none!important}}
      `}</style>

      {/* WHATSAPP FLOAT */}
      <a href={WA} target="_blank" rel="noopener noreferrer" className="wa-float" aria-label="Escribinos por WhatsApp">
        <WhatsAppIcon className="w-7 h-7" />
      </a>

      {/* UTILITY BAR */}
      <div className="ink-grad text-white/80 text-[13px] hidden md:block border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-9 flex items-center justify-between">
          <div className="flex items-center gap-2"><BadgeCheck className="w-3.5 h-3.5 text-aqua" /> Plomeros matriculados y asegurados</div>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-aqua" /> Atención 24 hs, los 365 días</span>
            <a href={TEL} className="flex items-center gap-1.5 hover:text-white transition-colors"><Phone className="w-3.5 h-3.5 text-aqua" /> +54 9 11 0000-0000</a>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <header className={`fixed left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "top-0 bg-white/90 backdrop-blur-md shadow-[0_1px_0_rgba(15,23,42,.06)]" : "md:top-9 top-0 bg-transparent"}`}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5">
            <Logo />
            <span className={`font-display font-bold text-[19px] tracking-tight ${scrolled ? "text-ink" : "text-white"}`}>
              Aqua<span style={{ color: scrolled ? "#0C8FA0" : "#1AC0CF" }}>Fix</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {NAV.map(l => {
              const id = l.toLowerCase();
              const on = active === id;
              return (
                <a
                  key={l}
                  href={`#${id}`}
                  aria-current={on ? "true" : undefined}
                  className={`nav-link text-sm font-medium transition-colors ${on ? "nav-active" : ""} ${scrolled ? "text-slate-600 hover:text-ink" : "text-white/85 hover:text-white"}`}
                >
                  {l}
                </a>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href={TEL} className={`flex items-center gap-1.5 text-sm font-semibold transition-colors ${scrolled ? "text-slate-700 hover:text-aqua-deep" : "text-white/85 hover:text-white"}`}>
              <Phone className="w-4 h-4" /> Llamar
            </a>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm font-semibold px-5 py-2.5 rounded-xl flex items-center gap-2">
              Pedir plomero <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <button onClick={() => setMenuOpen(o => !o)} aria-label="Menú" className={`md:hidden p-1 ${scrolled ? "text-ink" : "text-white"}`}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-6 py-5 flex flex-col gap-4 shadow-xl">
            {NAV.map(l => {
              const id = l.toLowerCase();
              const on = active === id;
              return (
                <a
                  key={l}
                  href={`#${id}`}
                  aria-current={on ? "true" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={`font-medium ${on ? "text-aqua-deep" : "text-slate-700"}`}
                >
                  {l}
                </a>
              );
            })}
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary font-semibold px-5 py-3 rounded-xl text-center">Pedir plomero</a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative ink-grad flex items-center overflow-hidden">
        <Blueprint className="blueprint" />
        <div className="glow w-[26rem] h-[26rem]" style={{ background: "rgba(26,192,207,.16)", top: "-5rem", right: "-2rem" }} />

        <div className="max-w-6xl mx-auto px-6 pt-28 md:pt-28 pb-40 md:pb-52 w-full grid md:grid-cols-2 gap-14 items-center relative z-10" ref={heroRef}>
          {/* Copy */}
          <div>
            <div className={`reveal ${heroIn ? "in" : ""}`}>
              <span className="pill mb-6">
                <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" /><span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" /></span>
                Disponibles ahora · respuesta &lt; 60 min
              </span>
            </div>
            <h1 className={`font-display text-[clamp(2.7rem,6vw,4.3rem)] font-black text-white leading-[1.08] tracking-[-.02em] mb-6 pb-1 reveal d1 ${heroIn ? "in" : ""}`}>
              Tu plomero<br />
              de confianza,<br />
              <span className="italic inline-block pr-2 pb-1.5" style={{ color: "var(--aqua)" }}>cuando lo necesitás.</span>
            </h1>
            <p className={`text-white/70 text-lg leading-relaxed max-w-md mb-8 reveal d2 ${heroIn ? "in" : ""}`}>
              Plomeros matriculados a domicilio. Urgencias, destapes, pérdidas y calefones. Presupuesto sin cargo y garantía escrita en cada trabajo.
            </p>
            <div className={`flex flex-wrap gap-3 reveal d3 ${heroIn ? "in" : ""}`}>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-wa font-semibold px-6 py-3.5 rounded-xl text-sm flex items-center gap-2">
                <WhatsAppIcon className="w-4 h-4" /> Pedir presupuesto
              </a>
              <a href={TEL} className="btn-ghost font-semibold px-6 py-3.5 rounded-xl text-sm flex items-center gap-2">
                <Phone className="w-4 h-4" /> Llamar ahora
              </a>
            </div>

            <div className={`grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-white/12 reveal d4 ${heroIn ? "in" : ""}`}>
              {[["500+", "Trabajos por mes"], ["4.9", "Calificación"], ["15+", "Años de oficio"]].map(([v, l]) => (
                <div key={l}>
                  <div className="font-display text-2xl font-black text-white flex items-center gap-1">
                    {v}
                    {l === "Calificación" && <Star className="w-4 h-4 fill-amber-400 text-amber-400" />}
                  </div>
                  <div className="text-white/70 text-xs mt-0.5">{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual — live dispatch panel (no glass/blob cliché) */}
          <div className={`relative flex justify-center md:justify-end reveal d3 ${heroIn ? "in" : ""}`}>
            <div className="relative w-full max-w-[22rem]">
              {/* aqua bloom */}
              <div
                aria-hidden
                className="absolute -inset-10 -z-20 rounded-[3rem]"
                style={{ background: "radial-gradient(60% 55% at 55% 40%, rgba(26,192,207,.22), transparent 72%)", filter: "blur(34px)" }}
              />
              {/* raised shelf — card rests on it (surface-1 → surface-2) */}
              <div aria-hidden className="shelf absolute -z-10 -inset-x-5 top-9 -bottom-7 rounded-[2rem]" />
              <div className="relative bg-white rounded-[1.6rem] ring-1 ring-black/5 overflow-hidden" style={{ boxShadow: "var(--elev-3)" }}>
                {/* header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <Logo className="w-7 h-7" />
                    <div className="leading-none">
                      <div className="text-[10px] uppercase tracking-[.14em] text-slate-400 mb-1">Solicitud</div>
                      <div className="text-sm font-bold text-ink">#AF-2481</div>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-700 bg-emerald-50 ring-1 ring-emerald-100 px-2.5 py-1 rounded-full">
                    <span className="relative flex h-1.5 w-1.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" /><span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" /></span>
                    En camino
                  </span>
                </div>

                {/* live mini-map — shows the plumber on the way */}
                <div className="px-5 pt-4">
                  <div className="relative h-28 overflow-hidden rounded-xl ring-1 ring-slate-100" style={{ background: "linear-gradient(135deg,#eaf4f7,#dfeaf3)" }}>
                    <svg viewBox="0 0 320 120" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
                      {/* streets */}
                      <g stroke="#c7d7e1" strokeWidth="7" strokeLinecap="round" opacity=".55">
                        <path d="M-10 44 H330" />
                        <path d="M-10 90 H330" />
                        <path d="M64 -10 V130" />
                        <path d="M208 -10 V130" />
                      </g>
                      {/* route */}
                      <path id="afRoute" d="M36 98 C92 98 104 46 168 44 S252 30 292 26" fill="none" stroke="var(--aqua)" strokeWidth="3" strokeLinecap="round" className="route-dash" />
                      {/* destination — your home */}
                      <g transform="translate(292,26)">
                        <circle r="13" fill="var(--aqua-deep)" />
                        <path d="M-5 1 L0 -4 L5 1 M-3.5 0 V5 H3.5 V0" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" />
                      </g>
                      {/* moving technician */}
                      <g>
                        <circle r="8" fill="#0A1A2F" stroke="#fff" strokeWidth="2.5" />
                        <animateMotion dur="4.2s" repeatCount="indefinite" calcMode="linear">
                          <mpath href="#afRoute" />
                        </animateMotion>
                      </g>
                    </svg>
                    <span className="absolute left-2.5 top-2.5 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold text-ink ring-1 ring-black/5 backdrop-blur">
                      <span className="relative flex h-1.5 w-1.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-aqua opacity-75" /><span className="relative inline-flex h-1.5 w-1.5 rounded-full" style={{ background: "var(--aqua-deep)" }} /></span>
                      Seguimiento en vivo
                    </span>
                    <span className="absolute bottom-2.5 right-2.5 rounded-md bg-ink/85 px-2 py-1 text-[10px] font-semibold text-white backdrop-blur">Llega en 12 min</span>
                  </div>
                </div>

                {/* technician + ETA */}
                <div className="px-5 pt-5 pb-2 flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0" style={{ background: "linear-gradient(135deg,var(--aqua),var(--aqua-deep))" }}>JL</div>
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-ink text-sm leading-tight">Jorge L.</div>
                    <div className="flex items-center gap-1 text-[11px] text-slate-400"><BadgeCheck className="w-3 h-3 text-aqua-deep" /> Plomero matriculado</div>
                  </div>
                  <div className="text-right">
                    <div className="font-display font-black text-2xl text-ink leading-none">12<span className="text-sm font-bold text-slate-400 ml-0.5">min</span></div>
                    <div className="flex items-center justify-end gap-0.5 text-[10px] text-slate-400 mt-1"><Navigation className="w-2.5 h-2.5" /> a 2,4 km</div>
                  </div>
                </div>

                {/* timeline */}
                <div className="px-5 py-5">
                  <ol className="relative">
                    {[
                      ["Solicitud recibida", "Hace 6 min", true],
                      ["Plomero asignado", "Hace 4 min", true],
                      ["En camino a tu casa", "Ahora", "active"],
                      ["Trabajo resuelto", "—", false],
                    ].map(([t, time, st], i, arr) => (
                      <li key={t as string} className="flex gap-3 pb-4 last:pb-0 relative">
                        {i < arr.length - 1 && <span className="absolute left-[7px] top-4 bottom-0 w-px bg-slate-200" />}
                        <span className={`relative z-10 mt-0.5 w-3.5 h-3.5 rounded-full flex items-center justify-center shrink-0 ${st === true ? "bg-aqua-deep" : st === "active" ? "ring-4 ring-aqua/25 bg-aqua-deep" : "bg-slate-200"}`}>
                          {st === true && <Check className="w-2 h-2 text-white" strokeWidth={4} />}
                        </span>
                        <div className="flex-1 flex items-center justify-between -mt-0.5">
                          <span className={`text-[13px] ${st ? "font-semibold text-ink" : "text-slate-400"}`}>{t}</span>
                          <span className="text-[11px] text-slate-400">{time}</span>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* footer rating */}
                <div className="flex items-center justify-between px-5 py-3.5 bg-slate-50 border-t border-slate-100">
                  <div className="flex items-center gap-1.5">
                    <div className="flex gap-0.5">{[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}</div>
                    <span className="text-xs font-bold text-ink">4,9</span>
                  </div>
                  <span className="text-[11px] text-slate-400">+2.000 trabajos resueltos</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* diagonal panel-cut divider — layered surfaces + elevation shadow */}
        <div className="absolute inset-x-0 bottom-0 leading-none pointer-events-none">
          <svg
            viewBox="0 0 1440 140"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            className="block w-full h-[72px] md:h-[120px]"
          >
            <defs>
              <filter id="cutShadow" x="-5%" y="-120%" width="110%" height="320%">
                <feDropShadow dx="0" dy="-12" stdDeviation="16" floodColor="#03101f" floodOpacity="0.5" />
              </filter>
            </defs>
            {/* back slab (surface-1) — first elevation step */}
            <polygon points="0,46 1440,8 1440,140 0,140" fill="var(--surface-1)" />
            {/* front white surface, raised with shadow over the dark hero */}
            <polygon points="0,84 1440,44 1440,140 0,140" fill="#ffffff" filter="url(#cutShadow)" />
            {/* aqua accent riding the cut edge */}
            <line x1="0" y1="84" x2="1440" y2="44" stroke="var(--aqua)" strokeWidth="2.5" />
          </svg>
        </div>
      </section>

      {/* TRUST MARQUEE */}
      <div className="bg-white border-b border-slate-100 py-5 overflow-hidden">
        <div className="marquee text-slate-400">
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex gap-14 items-center text-sm font-semibold tracking-wide shrink-0">
              {[
                [BadgeCheck, "Plomeros matriculados"],
                [ShieldCheck, "Trabajo asegurado"],
                [Clock, "Urgencias 24/7"],
                [PiggyBank, "Presupuesto sin cargo"],
                [Check, "Garantía escrita"],
                [Gauge, "Materiales certificados"],
              ].map(([Ic, t]) => {
                const I = Ic as typeof BadgeCheck;
                return <span key={t as string} className="flex items-center gap-2.5 shrink-0"><I className="w-4 h-4 text-aqua-deep" /> {t as string}</span>;
              })}
            </div>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section id="servicios" className="py-24 bg-[#f3f8fb]" ref={servRef}>
        <div className="max-w-6xl mx-auto px-6">
          <div className={`max-w-2xl mb-14 reveal ${servIn ? "in" : ""}`}>
            <p className="eyebrow mb-3"><Droplets className="w-3.5 h-3.5" /> Lo que resolvemos</p>
            <h2 className="font-display text-[2.6rem] leading-[1.08] font-black text-ink tracking-tight">Todo lo de plomería,<br />en manos expertas.</h2>
            <p className="text-slate-500 mt-4 text-[15px] leading-relaxed">Desde una canilla que gotea hasta la renovación completa de cañerías. Un solo equipo para cualquier problema de agua y gas.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map(({ Icon, title, desc }, i) => (
              <div key={title} className={`card group bg-white border border-slate-100/80 ring-1 ring-slate-900/[.03] rounded-2xl p-7 reveal d${(i % 3) + 1} ${servIn ? "in" : ""}`}>
                <div className="icon-tile w-12 h-12 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-ink text-xl mb-2">{title}</h3>
                <p className="text-slate-500 text-[14.5px] leading-relaxed mb-4">{desc}</p>
                <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-semibold text-aqua-deep opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                  Pedir este servicio <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS BAND */}
      <section className="ink-grad py-16 relative overflow-hidden">
        <Blueprint className="blueprint opacity-50" />
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-5 relative z-10">
          {STATS.map(({ value, label, star }) => (
            <div key={label} className="glass rounded-2xl text-center py-7 px-4">
              <div className="font-display text-[2.4rem] font-black text-white leading-none flex items-center justify-center gap-1.5">
                {value}
                {star && <Star className="w-5 h-5 fill-amber-400 text-amber-400" />}
              </div>
              <div className="text-white/55 text-sm mt-2">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section id="proceso" className="py-24 bg-slate-50" ref={procRef}>
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center max-w-xl mx-auto mb-14 reveal ${procIn ? "in" : ""}`}>
            <p className="eyebrow mb-3 justify-center"><Zap className="w-3.5 h-3.5" /> Cómo trabajamos</p>
            <h2 className="font-display text-[2.6rem] leading-[1.08] font-black text-ink tracking-tight">Simple, rápido y sin sorpresas</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map(({ n, title, desc }, i) => (
              <div key={n} className={`relative reveal d${i + 1} ${procIn ? "in" : ""}`}>
                <div className="font-display text-5xl font-black mb-4" style={{ color: "var(--copper)" }}>{n}</div>
                <h3 className="font-display font-bold text-ink text-lg mb-2">{title}</h3>
                <p className="text-slate-500 text-[14.5px] leading-relaxed">{desc}</p>
                {i < PROCESS.length - 1 && (
                  <ChevronRight className="hidden lg:block absolute top-4 -right-3 w-5 h-5 text-slate-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="nosotros" className="py-24 bg-white" ref={aboutRef}>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className={`relative reveal ${aboutIn ? "in" : ""}`}>
            {/* aqua bloom for depth */}
            <div aria-hidden className="absolute -inset-6 -z-10 rounded-[2.6rem]" style={{ background: "radial-gradient(60% 60% at 38% 28%, rgba(26,192,207,.18), transparent 70%)", filter: "blur(28px)" }} />

            {/* credential panel */}
            <div className="relative rounded-3xl bg-white ring-1 ring-slate-100 overflow-hidden" style={{ boxShadow: "var(--elev-3)" }}>
              {/* dark header — the credential */}
              <div className="relative overflow-hidden px-6 pt-6 pb-5" style={{ background: "linear-gradient(135deg,#0e2740,#0b2036)" }}>
                <div aria-hidden className="absolute -right-10 -top-12 h-40 w-40 rounded-full" style={{ background: "radial-gradient(circle, rgba(26,192,207,.28), transparent 70%)" }} />
                <div className="relative flex items-center gap-3.5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl shrink-0" style={{ background: "linear-gradient(135deg,var(--aqua),var(--aqua-deep))", boxShadow: "0 12px 28px -8px rgba(12,143,160,.6)" }}>
                    <ShieldCheck className="h-6 w-6 text-white" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] uppercase tracking-[.16em] text-white/45">Credencial</div>
                    <div className="font-display text-lg font-bold leading-tight text-white">Plomero matriculado</div>
                    <div className="mt-0.5 flex items-center gap-1 text-[11px] text-aqua"><BadgeCheck className="h-3 w-3" /> Matrícula N° 12.345 · verificada</div>
                  </div>
                </div>
              </div>

              {/* seal grid */}
              <div className="grid grid-cols-2 gap-px bg-slate-100">
                {[
                  { Icon: ShieldCheck, t: "Garantía", s: "15 años por escrito" },
                  { Icon: Clock, t: "Disponibilidad", s: "24 hs · 365 días" },
                  { Icon: BadgeCheck, t: "Matriculados", s: "Agua y gas habilitado" },
                  { Icon: Star, t: "Reseñas", s: "4,9 / 5 promedio" },
                ].map(({ Icon, t, s }) => (
                  <div key={t} className="flex items-start gap-3 bg-white px-5 py-4">
                    <div className="icon-tile flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"><Icon className="h-4 w-4" /></div>
                    <div className="min-w-0">
                      <div className="text-[13px] font-semibold text-ink">{t}</div>
                      <div className="text-[11px] text-slate-400">{s}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* footer — seguro */}
              <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50 px-6 py-3.5">
                <span className="flex items-center gap-1.5 text-xs font-semibold text-ink"><ShieldCheck className="h-3.5 w-3.5 text-aqua-deep" /> Personal con seguro (ART)</span>
                <span className="text-[11px] text-slate-400">+2.000 trabajos</span>
              </div>
            </div>

            {/* floating copper badge */}
            <div className="floaty-slow absolute -bottom-5 -right-4 rounded-2xl px-5 py-3.5 text-white" style={{ background: "linear-gradient(135deg,var(--copper),#b9743a)", boxShadow: "0 16px 36px -10px rgba(208,138,78,.55)" }}>
              <div className="font-display text-2xl font-black leading-none">15+</div>
              <div className="mt-0.5 text-[11px] text-white/85">Años de oficio</div>
            </div>
          </div>

          <div>
            <p className={`eyebrow mb-3 reveal ${aboutIn ? "in" : ""}`}><Wrench className="w-3.5 h-3.5" /> Sobre nosotros</p>
            <h2 className={`font-display text-[2.6rem] leading-[1.08] font-black text-ink tracking-tight mb-5 reveal d1 ${aboutIn ? "in" : ""}`}>
              Plomería profesional<br />a tu alcance
            </h2>
            <p className={`text-slate-500 leading-relaxed text-[15px] mb-6 reveal d2 ${aboutIn ? "in" : ""}`}>
              Somos un equipo de técnicos matriculados con más de 15 años resolviendo problemas de plomería residencial y comercial. Materiales certificados, métodos modernos y resultados que duran.
            </p>
            <ul className={`space-y-3 mb-8 reveal d3 ${aboutIn ? "in" : ""}`}>
              {["Diagnóstico y presupuesto sin cargo", "Materiales de primera calidad", "Garantía escrita en cada trabajo", "Atención de emergencias 24/7"].map(item => (
                <li key={item} className="flex items-center gap-3 text-slate-600 text-[15px]">
                  <div className="w-5 h-5 rounded-full icon-tile flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3" strokeWidth={3} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <div className={`flex flex-wrap gap-3 reveal d4 ${aboutIn ? "in" : ""}`}>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary font-semibold px-6 py-3.5 rounded-xl text-sm flex items-center gap-2">
                <MessageCircle className="w-4 h-4" /> Pedir cotización
              </a>
              <a href={TEL} className="btn-line font-semibold px-6 py-3.5 rounded-xl text-sm flex items-center gap-2">
                <Phone className="w-4 h-4" /> Llamar ahora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="opiniones" className="py-24 bg-slate-50" ref={testiRef}>
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center max-w-xl mx-auto mb-12 reveal ${testiIn ? "in" : ""}`}>
            <p className="eyebrow mb-3 justify-center"><Star className="w-3.5 h-3.5" /> Opiniones reales</p>
            <h2 className="font-display text-[2.6rem] leading-[1.08] font-black text-ink tracking-tight">Lo que dicen nuestros clientes</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map(({ name, role, text, rating }, i) => (
              <div key={name} className={`card bg-white rounded-2xl p-7 border border-slate-100/80 ring-1 ring-slate-900/[.03] reveal d${i + 1} ${testiIn ? "in" : ""}`}>
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: rating }).map((_, j) => <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-slate-600 text-[15px] leading-relaxed mb-6">&ldquo;{text}&rdquo;</p>
                <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{ background: "linear-gradient(135deg,var(--aqua),var(--aqua-deep))" }}>
                    {name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-ink text-sm">{name}</div>
                    <div className="text-slate-400 text-xs">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white" ref={faqRef}>
        <div className="max-w-3xl mx-auto px-6">
          <div className={`text-center mb-12 reveal ${faqIn ? "in" : ""}`}>
            <p className="eyebrow mb-3 justify-center"><Droplets className="w-3.5 h-3.5" /> Preguntas frecuentes</p>
            <h2 className="font-display text-[2.6rem] leading-[1.08] font-black text-ink tracking-tight">Antes de llamarnos</h2>
          </div>
          <div className={`space-y-3 reveal d1 ${faqIn ? "in" : ""}`}>
            {FAQS.map(({ q, a }, i) => {
              const open = faq === i;
              return (
                <div key={q} className={`rounded-2xl border transition-colors ${open ? "border-aqua-deep/30 bg-slate-50" : "border-slate-100 bg-white"}`} style={open ? { borderColor: "rgba(12,143,160,.3)" } : undefined}>
                  <button onClick={() => setFaq(open ? null : i)} className="w-full flex items-center justify-between gap-4 text-left px-6 py-5">
                    <span className="font-semibold text-ink text-[15.5px]">{q}</span>
                    <ChevronDown className={`w-5 h-5 flex-shrink-0 text-aqua-deep transition-transform ${open ? "rotate-180" : ""}`} />
                  </button>
                  <div className="grid transition-[grid-template-rows] duration-300" style={{ gridTemplateRows: open ? "1fr" : "0fr" }}>
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-slate-500 text-[14.5px] leading-relaxed">{a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="ink-grad py-20 relative overflow-hidden">
        <Blueprint className="blueprint opacity-50" />
        <div className="glow w-96 h-96" style={{ background: "rgba(26,192,207,.18)", top: "-3rem", right: "10%" }} />
        <div className="max-w-2xl mx-auto px-6 text-center relative z-10">
          <p className="eyebrow eyebrow-l mb-4 justify-center"><Clock className="w-3.5 h-3.5" /> Disponibles 24 hs</p>
          <h2 className="font-display text-4xl md:text-5xl font-black text-white leading-[1.08] tracking-tight mb-4">
            ¿Tenés una pérdida<br />o un caño tapado?
          </h2>
          <p className="text-white/65 text-lg mb-8">Escribinos y un plomero matriculado va para tu casa hoy mismo.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-wa font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2">
              <WhatsAppIcon className="w-5 h-5" /> Escribir por WhatsApp
            </a>
            <a href={TEL} className="btn-ghost font-semibold px-8 py-4 rounded-xl flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" /> Llamar ahora
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink text-white pt-16 pb-28 md:pb-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2.5 mb-4">
                <Logo />
                <span className="font-display font-bold text-lg">Aqua<span style={{ color: "var(--aqua)" }}>Fix</span></span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">Plomeros matriculados a domicilio. Urgencias, destapes, pérdidas y gas, las 24 horas.</p>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-4 text-white/90">Servicios</h4>
              <ul className="space-y-2.5 text-sm text-white/50">
                {["Urgencias 24/7", "Destapes", "Calefones", "Detección de pérdidas", "Redes de gas"].map(s => (
                  <li key={s}><a href="#servicios" className="hover:text-white transition-colors">{s}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-4 text-white/90">Empresa</h4>
              <ul className="space-y-2.5 text-sm text-white/50">
                {NAV.map(l => (
                  <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-white transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-4 text-white/90">Contacto</h4>
              <ul className="space-y-2.5 text-sm text-white/50">
                <li><a href={TEL} className="flex items-center gap-2 hover:text-white transition-colors"><Phone className="w-4 h-4 text-aqua" /> +54 9 11 0000-0000</a></li>
                <li><a href={WA} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors"><WhatsAppIcon className="w-4 h-4 text-aqua" /> WhatsApp 24 hs</a></li>
                <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-aqua" /> hola@aquafix.com.ar</li>
                <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-aqua" /> CABA y GBA</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6">
            <p className="text-white/40 text-sm">© 2026 AquaFix. Todos los derechos reservados.</p>
            <p className="text-white/30 text-xs">Plomeros matriculados · Asegurados · Garantía escrita</p>
          </div>
        </div>
      </footer>

      {/* MOBILE STICKY CALL BAR */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 px-4 py-3 flex gap-3 shadow-[0_-4px_20px_rgba(15,23,42,.08)]">
        <a href={TEL} className="btn-line flex-1 font-semibold py-3 rounded-xl flex items-center justify-center gap-2 text-sm">
          <Phone className="w-4 h-4" /> Llamar
        </a>
        <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-wa flex-1 font-semibold py-3 rounded-xl flex items-center justify-center gap-2 text-sm">
          <WhatsAppIcon className="w-4 h-4" /> WhatsApp
        </a>
      </div>
    </div>
  );
}
