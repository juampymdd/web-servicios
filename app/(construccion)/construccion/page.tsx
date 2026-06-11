"use client";

import { useState, useEffect, useRef, type RefObject } from "react";
import {
  Menu, X, Phone, MessageCircle, ChevronRight, ChevronDown, ArrowRight, ArrowUpRight,
  Check, Shield, Award, HardHat, Wrench,
  Image as ImageIcon, HelpCircle, Mail, Star, Thermometer, Factory, Home,
} from "lucide-react";

// TODO: reemplazar por datos reales
const TEL = "tel:+5491100000000";
const WA = "https://wa.me/5491100000000?text=Hola%2C%20quiero%20un%20presupuesto%20para%20mi%20techo";

/* ── Brand mark — metal roof ridge ──────────────────────────── */
function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 36 36" fill="none" aria-hidden>
      <rect width="36" height="36" rx="5" fill="#dc2626" />
      <path d="M7 22 L18 11 L29 22" stroke="#fff" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M11 26 L18 19.5 L25 26" stroke="rgba(255,255,255,.55)" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
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

/* Faint roof-truss line work behind the dark hero — domain texture */
function Truss({ className = "" }: { className?: string }) {
  const bays = [0, 1, 2, 3, 4, 5, 6, 7];
  const W = 150, base = 210, apex = 70;
  return (
    <svg className={className} viewBox="0 0 1200 240" fill="none" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <g stroke="rgba(220,38,38,.18)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d={`M0 ${base} H1200`} />
        <path d={`M0 ${base} ${bays.map((b) => `L${(b + 0.5) * W} ${apex} L${(b + 1) * W} ${base}`).join(" ")}`} />
        {bays.map((b) => <path key={b} d={`M${(b + 0.5) * W} ${apex} V${base}`} />)}
        {bays.map((b) => <path key={`d${b}`} d={`M${b * W} ${base} L${(b + 0.5) * W} ${apex} M${(b + 0.5) * W} ${apex} L${(b + 1) * W} ${base}`} opacity=".5" />)}
      </g>
      <g fill="#0E1116" stroke="rgba(220,38,38,.5)" strokeWidth="1.5">
        {bays.map((b) => <circle key={`j${b}`} cx={(b + 0.5) * W} cy={apex} r="4" />)}
      </g>
    </svg>
  );
}

/* Architectural illustration — building with a standing-seam metal gable roof.
   Hand-built so the dark surfaces read as a real subject, not an empty placeholder. */
function RoofArt({ className = "" }: { className?: string }) {
  const seams: [number, number][] = [];
  for (let x = 172; x <= 410; x += 11) {
    const y = x <= 290 ? 168 - 0.72 * (x - 165) : 78 + 0.72 * (x - 290);
    seams.push([x, y]);
  }
  return (
    <svg className={className} viewBox="0 0 480 320" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden>
      <defs>
        <linearGradient id="roof" x1="0" y1="78" x2="0" y2="168" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2a323d" /><stop offset="1" stopColor="#1a212b" />
        </linearGradient>
        <linearGradient id="sun" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#dc2626" stopOpacity=".5" /><stop offset="1" stopColor="#dc2626" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* warm halo behind ridge */}
      <circle cx="290" cy="70" r="120" fill="url(#sun)" />
      {/* secondary unit (depth) */}
      <rect x="44" y="206" width="118" height="94" fill="#10151c" stroke="rgba(255,255,255,.06)" />
      <path d="M36 210 L103 160 L170 210 Z" fill="#171e27" stroke="rgba(255,255,255,.07)" />
      <path d="M36 210 L103 160 L170 210" stroke="#dc2626" strokeWidth="2" opacity=".8" />
      {/* main building body */}
      <rect x="180" y="168" width="220" height="132" fill="#141a22" stroke="rgba(255,255,255,.06)" />
      {/* gable metal roof */}
      <path d="M165 168 L290 78 L415 168 Z" fill="url(#roof)" stroke="rgba(255,255,255,.1)" />
      <g stroke="rgba(255,255,255,.09)" strokeWidth="1">
        {seams.map(([x, y]) => <line key={x} x1={x} y1="168" x2={x} y2={y} />)}
      </g>
      {/* red ridge cap + eave */}
      <path d="M165 168 L290 78 L415 168" stroke="#dc2626" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
      <line x1="160" y1="168" x2="420" y2="168" stroke="rgba(255,255,255,.18)" strokeWidth="1.5" />
      <circle cx="290" cy="78" r="4.5" fill="#dc2626" />
      {/* lit windows */}
      <g fill="#f59e0b" opacity=".85">
        {[210, 250, 330, 370].map((x) => <rect key={x} x={x} y="200" width="18" height="26" rx="1.5" />)}
      </g>
      <g fill="#1f2730">
        {[210, 250, 330, 370].map((x) => <rect key={x} x={x} y="248" width="18" height="26" rx="1.5" />)}
      </g>
      {/* door */}
      <rect x="282" y="248" width="36" height="52" rx="2" fill="#0e1116" stroke="rgba(220,38,38,.6)" strokeWidth="1.5" />
      {/* ground */}
      <line x1="0" y1="300" x2="480" y2="300" stroke="rgba(255,255,255,.14)" strokeWidth="1.5" />
    </svg>
  );
}

/* Compact roof thumbnail for gallery cards */
function RoofGlyph({ className = "" }: { className?: string }) {
  const seams: number[] = [];
  for (let x = 46; x <= 154; x += 9) seams.push(x);
  const slopeY = (x: number) => (x <= 100 ? 96 - 1.03 * (x - 40) : 34 + 1.03 * (x - 100));
  return (
    <svg className={className} viewBox="0 0 200 150" fill="none" preserveAspectRatio="xMidYMax meet" aria-hidden>
      <rect x="52" y="96" width="96" height="54" fill="rgba(0,0,0,.32)" />
      <path d="M40 96 L100 34 L160 96 Z" fill="rgba(255,255,255,.06)" stroke="rgba(255,255,255,.14)" />
      <g stroke="rgba(255,255,255,.12)" strokeWidth="1">
        {seams.map((x) => <line key={x} x1={x} y1="96" x2={x} y2={slopeY(x)} />)}
      </g>
      <path d="M40 96 L100 34 L160 96" stroke="#dc2626" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
      <circle cx="100" cy="34" r="3.5" fill="#dc2626" />
      <g fill="#f59e0b" opacity=".75">
        <rect x="66" y="112" width="13" height="20" rx="1" /><rect x="121" y="112" width="13" height="20" rx="1" />
      </g>
      <rect x="91" y="116" width="18" height="34" rx="1.5" fill="rgba(220,38,38,.25)" stroke="rgba(220,38,38,.5)" />
    </svg>
  );
}

/* ── Content ────────────────────────────────────────────────── */
const NAV: { label: string; id: string }[] = [
  { label: "Inicio", id: "inicio" },
  { label: "Servicios", id: "servicios" },
  { label: "Galería", id: "galeria" },
  { label: "Nosotros", id: "nosotros" },
  { label: "FAQ", id: "faq" },
  { label: "Contacto", id: "contacto" },
];

const SERVICES = [
  { Icon: Home, title: "Instalación de Techos", desc: "Montaje profesional de techos metálicos con materiales de primera calidad y acabado perfecto." },
  { Icon: Wrench, title: "Reparación y Mantenimiento", desc: "Diagnóstico, reparación y mantenimiento preventivo para extender la vida útil de tu techo." },
  { Icon: Thermometer, title: "Impermeabilización", desc: "Sistemas de sellado y aislación térmica para proteger tu propiedad contra humedad y filtraciones." },
  { Icon: Factory, title: "Techos Industriales", desc: "Soluciones a medida para galpones, fábricas y grandes superficies con garantía extendida." },
];

const STATS = [
  { value: "20+", label: "Años de experiencia" },
  { value: "1.800+", label: "Techos instalados" },
  { value: "15 años", label: "Garantía de material" },
  { value: "100%", label: "Clientes satisfechos" },
];

const GALLERY = [
  { label: "Residencial", sub: "Techos a dos aguas en chapas acanaladas", hue: 212 },
  { label: "Industrial", sub: "Grandes superficies con aislación térmica", hue: 215 },
  { label: "Comercial", sub: "Techos planos con membrana y zinc", hue: 220 },
  { label: "Restauración", sub: "Reemplazo total con refuerzo estructural", hue: 218 },
];

const TESTIMONIALS = [
  { name: "Roberto Sánchez", role: "Propietario", text: "Excelente trabajo. Instalaron el techo completo en dos días y quedó impecable. Muy profesionales.", rating: 5 },
  { name: "Laura Martínez", role: "Gerente de edificio", text: "Resolvieron una filtración que nos venía dando problemas hace años. Totalmente recomendados.", rating: 5 },
  { name: "Diego Torres", role: "Constructor", text: "Los uso para todos mis proyectos. Puntualidad, calidad y precios justos. No busco a nadie más.", rating: 5 },
];

const FAQS = [
  { q: "¿Qué garantía ofrecen sobre el techo?", a: "Entregamos garantía escrita de hasta 15 años sobre el material y la instalación. Si aparece una filtración cubierta dentro del plazo, volvemos sin cargo." },
  { q: "¿Cuánto tarda la instalación de un techo?", a: "Un techo residencial estándar se instala en 2 a 4 días según la superficie y la complejidad. Te damos un cronograma claro antes de empezar." },
  { q: "¿Con qué materiales trabajan?", a: "Usamos chapa acanalada y standing-seam de primera línea, aislación térmica y membranas certificadas por el fabricante. Nada de materiales genéricos." },
  { q: "¿El presupuesto tiene costo?", a: "No. La visita técnica y el presupuesto son sin cargo y sin compromiso. Solo cobrás si aprobás el trabajo." },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [faq, setFaq] = useState<number | null>(0);
  const [active, setActive] = useState("inicio");
  const [heroRef, heroIn] = useInView<HTMLDivElement>(0.05);
  const [servRef, servIn] = useInView<HTMLElement>();
  const [aboutRef, aboutIn] = useInView<HTMLElement>();
  const [galRef, galIn] = useInView<HTMLElement>();
  const [testiRef, testiIn] = useInView<HTMLElement>();
  const [faqRef, faqIn] = useInView<HTMLElement>();
  const [contactRef, contactIn] = useInView<HTMLElement>();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // close mobile menu on Escape
  useEffect(() => {
    if (!menuOpen) return;
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [menuOpen]);

  // scrollspy — highlight the nav link of the section in view
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    NAV.forEach(({ id }) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="bg-white text-slate-900 overflow-x-hidden">
      <style>{`
        .display{font-family:var(--app-font-display),"Arial Narrow",sans-serif;letter-spacing:-.01em}
        /* keyboard focus — dual ring (dark inner + red outer) clears AA 3:1 on light AND dark surfaces */
        a:focus-visible,button:focus-visible,input:focus-visible,textarea:focus-visible,summary:focus-visible{outline:none;box-shadow:0 0 0 2px #0b0e13,0 0 0 4px #dc2626;border-radius:10px}
        .sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}
        .skip-link{position:fixed;top:0;left:50%;transform:translate(-50%,-120%);z-index:200;background:#b91c1c;color:#fff;padding:10px 18px;border-radius:0 0 10px 10px;font-size:.85rem;font-weight:600;transition:transform .2s}
        .skip-link:focus{transform:translate(-50%,0)}
        /* elevated shelf: quick-access bar lifts off the dark hero */
        .shelf{box-shadow:0 -1px 0 rgba(255,255,255,.06),0 30px 60px -28px rgba(0,0,0,.75);border-radius:0 0 14px 14px;overflow:hidden}
        .reveal{opacity:0;transform:translateY(24px);transition:opacity .45s ease,transform .45s ease}
        .reveal.in{opacity:1;transform:none}
        .reveal.d1{transition-delay:.06s}.reveal.d2{transition-delay:.12s}
        .reveal.d3{transition-delay:.18s}.reveal.d4{transition-delay:.24s}.reveal.d5{transition-delay:.3s}
        .nav-link{position:relative}
        .nav-link::after{content:"";position:absolute;bottom:-3px;left:0;width:0;height:2px;background:#dc2626;transition:width .22s ease}
        .nav-link:hover::after{width:100%}
        .nav-link.nav-active::after{width:100%}
        .card-lift{transition:transform .25s ease,box-shadow .25s ease}
        .card-lift:hover{transform:translateY(-4px);box-shadow:0 16px 36px rgba(0,0,0,.1)}
        .wa-float{position:fixed;bottom:28px;right:28px;z-index:100;width:56px;height:56px;border-radius:50%;background:#25D366;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 20px rgba(37,211,102,.5);transition:transform .2s ease,box-shadow .2s ease;text-decoration:none}
        .wa-float:hover{transform:scale(1.1);box-shadow:0 8px 28px rgba(37,211,102,.65)}
        .wa-float::before{content:"";position:absolute;inset:-5px;border-radius:50%;border:2px solid rgba(37,211,102,.4);animation:ring 2.2s ease-out infinite}
        @keyframes ring{0%{transform:scale(1);opacity:.8}100%{transform:scale(1.5);opacity:0}}
        .red-btn{background:#b91c1c;box-shadow:0 4px 16px rgba(185,28,28,.35);transition:background .2s,transform .2s,box-shadow .2s}
        .red-btn:hover{background:#991b1b;transform:translateY(-2px);box-shadow:0 8px 24px rgba(185,28,28,.45)}
        .red-btn:active{transform:translateY(0);box-shadow:0 2px 10px rgba(185,28,28,.4)}
        .ghost-white{border:1.5px solid rgba(255,255,255,.4);transition:background .2s,border-color .2s}
        .ghost-white:hover{background:rgba(255,255,255,.1);border-color:white}
        .ghost-white:active{background:rgba(255,255,255,.18)}
        .outline-dark{border:1.5px solid #e2e8f0;transition:border-color .2s,color .2s,background .2s}
        .outline-dark:hover{border-color:#dc2626;color:#dc2626}
        .outline-dark:active{background:rgba(220,38,38,.06)}
        .hero-overlay{background:linear-gradient(105deg,rgba(8,9,12,.92) 0%,rgba(8,9,12,.6) 52%,rgba(8,9,12,.2) 100%)}
        .corrugated{background-image:repeating-linear-gradient(90deg,rgba(255,255,255,.04) 0 1px,transparent 1px,transparent 48px);background-size:48px 100%}
        .section-tag{color:#dc2626;font-size:.72rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;display:flex;align-items:center;gap:8px}
        .section-tag::before{content:"";display:inline-block;width:28px;height:2.5px;background:#dc2626;border-radius:2px}
        .quick-card{background:rgba(255,255,255,.97);padding:28px 28px 24px;border-top:3px solid transparent;transition:border-color .2s,background .2s}
        .quick-card:hover{border-top-color:#dc2626}
        .quick-card.accent{background:#b91c1c;color:white}
        .stat-num{font-family:var(--app-font-display),sans-serif;font-weight:900;font-size:3rem;line-height:1;color:white;font-variant-numeric:tabular-nums}
        .tag-pill{display:inline-flex;align-items:center;gap:6px;background:rgba(220,38,38,.9);border:1px solid rgba(255,255,255,.18);color:#fff;font-size:.7rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;padding:5px 12px;border-radius:100px}
        .gal{position:relative;overflow:hidden;border-radius:12px;cursor:pointer}
        .gal .fill{transition:transform .4s cubic-bezier(.22,1,.36,1)}
        .gal:hover .fill{transform:scale(1.05)}
        .field{width:100%;background:#0f141b;border:1.5px solid #283241;color:#fff;border-radius:10px;padding:11px 14px;font-size:.9rem;transition:border-color .2s}
        .field::placeholder{color:#64748b}
        .field:hover{border-color:#3a4658}
        .faq-item{border:1px solid #e2e8f0;border-radius:14px;background:#fff;transition:border-color .2s,background .2s}
        .faq-item.open{border-color:rgba(185,28,28,.35);background:#fafafa}
        @media (prefers-reduced-motion:reduce){.reveal,.wa-float::before,.gal .fill{animation:none!important;transition:none!important;opacity:1!important;transform:none!important}}
      `}</style>

      {/* SKIP LINK */}
      <a href="#servicios" className="skip-link">Saltar al contenido</a>

      {/* WA BUTTON */}
      <a href={WA} target="_blank" rel="noopener noreferrer" className="wa-float" aria-label="Escribinos por WhatsApp">
        <WhatsAppIcon className="w-6 h-6 text-white" />
      </a>

      {/* NAVBAR */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/97 backdrop-blur shadow-sm border-b border-slate-100" : "bg-transparent"}`}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-2.5">
            <Logo className="w-8 h-8" />
            <span className={`display font-extrabold text-2xl tracking-tight ${scrolled ? "text-slate-900" : "text-white"}`}>ReusRoof</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {NAV.map(({ label, id }) => (
              <a
                key={id}
                href={`#${id}`}
                aria-current={active === id ? "true" : undefined}
                className={`nav-link text-sm font-medium transition-colors ${active === id ? "nav-active" : ""} ${scrolled ? "text-slate-600 hover:text-slate-900" : "text-white/80 hover:text-white"}`}
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href={TEL} className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${scrolled ? "text-slate-600 hover:text-red-600" : "text-white/75 hover:text-white"}`}>
              <Phone className="w-3.5 h-3.5" /> Llamar
            </a>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="red-btn text-white text-sm font-semibold px-5 py-2.5 rounded-lg flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5" /> Consultar ahora
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className={`md:hidden p-1 ${scrolled ? "text-slate-800" : "text-white"}`}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {menuOpen && (
          <div id="mobile-menu" className="md:hidden bg-white border-t border-slate-100 px-6 py-5 flex flex-col gap-4 shadow-lg">
            {NAV.map(({ label, id }) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} className="text-slate-700 font-medium text-sm">{label}</a>
            ))}
            <a href={WA} target="_blank" rel="noopener noreferrer" className="red-btn text-white text-sm font-semibold px-5 py-3 rounded-lg text-center mt-1">Consultar ahora</a>
          </div>
        )}
      </header>

      <main>
      {/* HERO — full-bleed, content bottom-left + quick-access bar */}
      <section id="inicio" className="relative min-h-dvh flex items-end overflow-hidden bg-[#08090c]">
        <div className="corrugated absolute inset-0" />
        <Truss className="absolute inset-0 w-full h-full opacity-50" />
        <RoofArt className="hidden lg:block absolute right-[-2%] top-[16%] w-[58%] max-w-3xl pointer-events-none [mask-image:linear-gradient(90deg,transparent,#000_28%)]" />
        <div className="hero-overlay absolute inset-0 z-10" />

        <div className="relative z-20 max-w-6xl mx-auto px-6 pt-28 pb-0 w-full" ref={heroRef}>
          <div className="pb-16 max-w-xl">
            <div className={`reveal ${heroIn ? "in" : ""}`}>
              <span className="tag-pill mb-5 inline-flex"><Award className="w-3 h-3" /> Empresa certificada y habilitada</span>
            </div>
            <h1 className={`display font-black text-white uppercase leading-[.9] mb-5 reveal d1 ${heroIn ? "in" : ""}`} style={{ fontSize: "clamp(3rem,7.5vw,5.4rem)" }}>
              Techos Metálicos<br />
              <span className="text-red-500">Duraderos.</span><br />
              Perfectamente Instalados.
            </h1>
            <p className={`text-white/60 text-base leading-relaxed mb-8 max-w-sm reveal d2 ${heroIn ? "in" : ""}`}>
              Instalamos, reparamos e impermeabilizamos todo tipo de techos con los mejores materiales del mercado y garantía extendida.
            </p>
            <div className={`flex flex-wrap gap-3 reveal d3 ${heroIn ? "in" : ""}`}>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="red-btn text-white font-semibold px-7 py-3.5 rounded-lg text-sm flex items-center gap-2">
                Solicitar presupuesto <ChevronRight className="w-4 h-4" />
              </a>
              <a href="#galeria" className="ghost-white text-white font-semibold px-7 py-3.5 rounded-lg text-sm flex items-center gap-2">
                <ImageIcon className="w-4 h-4" /> Ver trabajos
              </a>
            </div>
          </div>

          {/* Quick access bar — elevated shelf */}
          <div className={`shelf grid grid-cols-1 md:grid-cols-3 reveal d4 ${heroIn ? "in" : ""}`}>
            <a href="#galeria" className="quick-card block">
              <div className="flex items-start gap-3">
                <ImageIcon className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="display font-bold text-slate-900 text-xl">Galería</p>
                  <p className="text-slate-500 text-sm mt-1 leading-snug">Mirá nuestros trabajos terminados en todo tipo de propiedades.</p>
                </div>
              </div>
            </a>
            <a href="#faq" className="quick-card block border-l border-r border-slate-100">
              <div className="flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="display font-bold text-slate-900 text-xl">Preguntas frecuentes</p>
                  <p className="text-slate-500 text-sm mt-1 leading-snug">Todo lo que necesitás saber antes de contratar nuestro servicio.</p>
                </div>
              </div>
            </a>
            <a href="#contacto" className="quick-card accent block">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-white/90 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="display font-bold text-white text-xl">Sección de contacto</p>
                  <p className="text-white/85 text-sm mt-1 leading-snug">Completá el formulario y te respondemos en menos de 2 horas.</p>
                  <span className="mt-3 flex items-center gap-1.5 text-white font-semibold text-sm">
                    Contactar ahora <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="nosotros" className="py-24 bg-white" ref={aboutRef}>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className={`relative reveal ${aboutIn ? "in" : ""}`}>
            <div className="relative rounded-2xl h-[26rem] overflow-hidden ring-1 ring-black/5" style={{ background: "radial-gradient(120% 90% at 70% 0%,#1b232e 0%,#0e1116 60%)", boxShadow: "var(--shadow-e3)" }}>
              <div className="corrugated absolute inset-0 opacity-40" />
              <RoofArt className="absolute inset-x-0 bottom-0 w-full" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,rgba(14,17,22,.1) 0%,transparent 35%,rgba(14,17,22,.85) 100%)" }} />
              {/* caption */}
              <div className="absolute top-6 left-6 right-6">
                <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-red-300 bg-red-600/15 ring-1 ring-red-500/30 px-3 py-1.5 rounded-full">
                  <HardHat className="w-3.5 h-3.5" /> 20 años de oficio
                </span>
                <p className="display text-white text-3xl uppercase font-black mt-3 leading-[.95]">Techos que<br />resisten décadas</p>
              </div>
            </div>
            {/* elevated metric chips — depth (Direction A) */}
            <div className="absolute -bottom-5 left-5 bg-white rounded-xl px-4 py-3 flex items-center gap-2.5" style={{ boxShadow: "var(--shadow-e3)" }}>
              <span className="w-9 h-9 rounded-lg bg-red-50 flex items-center justify-center"><Shield className="w-4 h-4 text-red-600" /></span>
              <div className="leading-tight">
                <div className="display font-black text-slate-900 text-xl">15 años</div>
                <div className="text-slate-400 text-[11px]">de garantía</div>
              </div>
            </div>
            <div className="absolute -top-5 right-5 bg-white rounded-xl px-4 py-3 flex items-center gap-2.5" style={{ boxShadow: "var(--shadow-e3)" }}>
              <span className="w-9 h-9 rounded-lg bg-red-50 flex items-center justify-center"><Check className="w-4 h-4 text-red-600" strokeWidth={3} /></span>
              <div className="leading-tight">
                <div className="display font-black text-slate-900 text-xl">+1.800</div>
                <div className="text-slate-400 text-[11px]">techos instalados</div>
              </div>
            </div>
          </div>
          <div>
            <p className={`section-tag mb-3 reveal ${aboutIn ? "in" : ""}`}>Sobre la empresa</p>
            <h2 className={`display font-black text-slate-900 text-4xl md:text-5xl uppercase leading-[.95] mb-5 reveal d1 ${aboutIn ? "in" : ""}`}>
              La empresa líder<br />en techos metálicos
            </h2>
            <p className={`text-slate-500 leading-relaxed text-[15px] mb-6 reveal d2 ${aboutIn ? "in" : ""}`}>
              Somos especialistas en instalación, reparación e impermeabilización de techos metálicos para uso residencial, comercial e industrial. Trabajamos con materiales de primera línea y nuestros técnicos están certificados para garantizar cada trabajo.
            </p>
            <ul className={`space-y-3 mb-8 reveal d3 ${aboutIn ? "in" : ""}`}>
              {["Presupuesto sin cargo en 24 horas", "Materiales certificados con garantía de fabricante", "Técnicos habilitados con seguro de accidentes", "Servicio de urgencias disponible"].map(item => (
                <li key={item} className="flex items-center gap-3 text-slate-600 text-[15px]">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-red-600" strokeWidth={3} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <div className={`flex flex-wrap gap-3 reveal d4 ${aboutIn ? "in" : ""}`}>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="red-btn text-white font-semibold px-7 py-3.5 rounded-lg text-sm flex items-center gap-2">
                Consultar ahora <ArrowRight className="w-4 h-4" />
              </a>
              <a href={TEL} className="outline-dark text-slate-700 font-semibold px-7 py-3.5 rounded-lg text-sm flex items-center gap-2">
                <Phone className="w-4 h-4" /> Llamar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicios" className="py-20 bg-slate-950 relative overflow-hidden" ref={servRef}>
        <div className="corrugated absolute inset-0 opacity-40" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className={`text-center mb-12 reveal ${servIn ? "in" : ""}`}>
            <p className="section-tag justify-center mb-3 text-red-400">Nuestros servicios</p>
            <h2 className="display font-black text-white text-4xl md:text-5xl uppercase">¿En qué te podemos ayudar?</h2>
            <div className="w-12 h-1 bg-red-600 rounded mx-auto mt-4" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map(({ Icon, title, desc }, i) => (
              <div key={title} className={`card-lift bg-slate-900 border border-slate-800 rounded-xl p-6 reveal d${i + 1} ${servIn ? "in" : ""}`}>
                <div className="w-11 h-11 rounded-lg bg-red-600/15 border border-red-600/25 flex items-center justify-center text-red-500 mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="display font-bold text-white text-2xl mb-2 leading-tight">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-14 bg-[#b91c1c]">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {STATS.map(({ value, label }) => (
            <div key={label}>
              <div className="stat-num">{value}</div>
              <div className="text-white text-sm mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section id="galeria" className="py-24 bg-slate-950 relative overflow-hidden" ref={galRef}>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className={`text-center mb-12 reveal ${galIn ? "in" : ""}`}>
            <p className="section-tag justify-center mb-3 text-red-400">Portfolio</p>
            <h2 className="display font-black text-white text-4xl md:text-5xl uppercase">Nuestros trabajos</h2>
            <div className="w-12 h-1 bg-red-600 rounded mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {GALLERY.map(({ label, sub, hue }, i) => (
              <div key={label} className={`gal group h-64 ring-1 ring-white/5 reveal d${i + 1} ${galIn ? "in" : ""}`}>
                <div className="fill absolute inset-0" style={{ background: `linear-gradient(160deg, hsl(${hue},24%,${22 + i * 2}%), hsl(${hue},20%,10%))` }} />
                <div className="absolute inset-0 corrugated opacity-30" />
                <RoofGlyph className="fill absolute inset-x-0 bottom-8 mx-auto w-3/4 opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 ring-1 ring-white/15 backdrop-blur flex items-center justify-center transition-transform group-hover:rotate-12">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-red-400 mb-1 bg-red-600/15 ring-1 ring-red-500/25 px-2 py-0.5 rounded">{label}</span>
                  <p className="display font-bold text-white text-lg leading-tight mt-1.5">{sub}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={`text-center mt-8 reveal d5 ${galIn ? "in" : ""}`}>
            <a href="#galeria" className="outline-dark text-white border-slate-700 font-semibold px-8 py-3.5 rounded-lg text-sm inline-flex items-center gap-2 mx-auto hover:border-red-500 hover:text-red-400 transition-colors">
              <ImageIcon className="w-4 h-4" /> Ver galería completa
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-slate-50" ref={testiRef}>
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center mb-12 reveal ${testiIn ? "in" : ""}`}>
            <p className="section-tag justify-center mb-3">Testimonios</p>
            <h2 className="display font-black text-slate-900 text-4xl md:text-5xl uppercase">Lo que dicen nuestros clientes</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map(({ name, role, text, rating }, i) => (
              <div key={name} className={`card-lift bg-white border border-slate-100 ring-1 ring-slate-900/[.03] shadow-e2 rounded-xl p-7 reveal d${i + 1} ${testiIn ? "in" : ""}`}>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-0.5">
                    {Array.from({ length: rating }).map((_, j) => <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-400"><Check className="w-3 h-3 text-emerald-500" strokeWidth={3} /> Opinión verificada · Google</span>
                </div>
                <p className="text-slate-600 text-[15px] leading-relaxed mb-6">&ldquo;{text}&rdquo;</p>
                <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center text-white font-bold text-sm">
                    {name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800 text-sm">{name}</div>
                    <div className="text-slate-400 text-xs">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-white" ref={faqRef}>
        <div className="max-w-3xl mx-auto px-6">
          <div className={`text-center mb-12 reveal ${faqIn ? "in" : ""}`}>
            <p className="section-tag justify-center mb-3">Preguntas frecuentes</p>
            <h2 className="display font-black text-slate-900 text-4xl md:text-5xl uppercase">Antes de contratarnos</h2>
            <div className="w-12 h-1 bg-red-600 rounded mx-auto mt-4" />
          </div>
          <div className={`space-y-3 reveal d1 ${faqIn ? "in" : ""}`}>
            {FAQS.map(({ q, a }, i) => {
              const open = faq === i;
              return (
                <div key={q} className={`faq-item ${open ? "open" : ""}`}>
                  <h3>
                    <button
                      id={`faq-btn-${i}`}
                      aria-expanded={open}
                      aria-controls={`faq-panel-${i}`}
                      onClick={() => setFaq(open ? null : i)}
                      className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
                    >
                      <span className="font-semibold text-slate-900 text-[15.5px]">{q}</span>
                      <ChevronDown className={`w-5 h-5 flex-shrink-0 text-red-600 transition-transform ${open ? "rotate-180" : ""}`} />
                    </button>
                  </h3>
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-btn-${i}`}
                    hidden={!open}
                    className="grid transition-[grid-template-rows] duration-300"
                    style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                  >
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

      {/* CONTACTO */}
      <section id="contacto" className="py-24 bg-slate-950 relative overflow-hidden" ref={contactRef}>
        <div className="corrugated absolute inset-0 opacity-40" />
        <Truss className="absolute inset-0 w-full h-full opacity-25" />
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <div className={`text-center mb-10 reveal ${contactIn ? "in" : ""}`}>
            <p className="section-tag justify-center mb-3 text-red-400">Contacto</p>
            <h2 className="display font-black text-white text-4xl md:text-5xl uppercase">Pedí tu presupuesto</h2>
            <p className="text-slate-400 text-base mt-4">Completá el formulario y te respondemos en menos de 2 horas.</p>
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); /* TODO: conectar handler */ }}
            className={`bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 reveal d1 ${contactIn ? "in" : ""}`}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="c-nombre" className="sr-only">Nombre</label>
                <input id="c-nombre" name="nombre" type="text" autoComplete="name" required placeholder="Nombre" className="field" />
              </div>
              <div>
                <label htmlFor="c-tel" className="sr-only">Teléfono</label>
                <input id="c-tel" name="telefono" type="tel" autoComplete="tel" required placeholder="Teléfono" className="field" />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="c-tipo" className="sr-only">Tipo de techo</label>
              <select id="c-tipo" name="tipo_techo" defaultValue="" required className="field">
                <option value="" disabled>Tipo de techo</option>
                <option value="residencial">Residencial</option>
                <option value="comercial">Comercial</option>
                <option value="industrial">Industrial</option>
                <option value="reparacion">Reparación / restauración</option>
              </select>
            </div>
            <div className="mt-4">
              <label htmlFor="c-msg" className="sr-only">Mensaje</label>
              <textarea id="c-msg" name="mensaje" rows={4} placeholder="Contanos sobre tu proyecto" className="field resize-none" />
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mt-5">
              <button type="submit" className="red-btn text-white font-bold px-7 py-3.5 rounded-lg text-sm flex items-center justify-center gap-2 flex-1">
                <Mail className="w-4 h-4" /> Enviar consulta
              </button>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="ghost-white text-white font-semibold px-7 py-3.5 rounded-lg text-sm flex items-center justify-center gap-2">
                <WhatsAppIcon className="w-4 h-4" /> WhatsApp
              </a>
              <a href={TEL} className="ghost-white text-white font-semibold px-7 py-3.5 rounded-lg text-sm flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" /> Llamar
              </a>
            </div>
          </form>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-slate-950 relative overflow-hidden border-t border-slate-900">
        <div className="corrugated absolute inset-0 opacity-40" />
        <Truss className="absolute inset-0 w-full h-full opacity-30" />
        <div className="max-w-2xl mx-auto px-6 text-center relative z-10">
          <p className="section-tag justify-center mb-4 text-red-400">Empezá hoy</p>
          <h2 className="display font-black text-white text-4xl md:text-5xl uppercase leading-[.95] mb-4">
            Tu techo nuevo,<br />sin complicaciones
          </h2>
          <p className="text-slate-400 text-base mb-8">Presupuesto sin cargo, respuesta en 24 horas y ejecución garantizada.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="red-btn text-white font-bold px-8 py-4 rounded-lg flex items-center justify-center gap-2">
              <MessageCircle className="w-5 h-5" /> Solicitar presupuesto
            </a>
            <a href={TEL} className="ghost-white text-white font-semibold px-8 py-4 rounded-lg flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" /> Llamar ahora
            </a>
          </div>
        </div>
      </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-black text-white py-10 border-t border-slate-900">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-2.5">
            <Logo className="w-7 h-7" />
            <span className="display font-extrabold text-xl">ReusRoof</span>
          </div>
          <div className="flex gap-7">
            {[
              { label: "Inicio", id: "inicio" },
              { label: "Servicios", id: "servicios" },
              { label: "Galería", id: "galeria" },
              { label: "Contacto", id: "contacto" },
            ].map(({ label, id }) => (
              <a key={id} href={`#${id}`} className="text-white/55 hover:text-white text-sm transition-colors">{label}</a>
            ))}
          </div>
          <p className="text-white/55 text-sm">© 2026 ReusRoof. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

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
