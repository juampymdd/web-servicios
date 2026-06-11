"use client";

import { useState, useEffect, useRef, Fragment, type RefObject } from "react";
import Image from "next/image";
import {
  Menu, X, Phone, MapPin, ChevronRight,
  Truck, Tag, CreditCard, Clock,
  ArrowRight, Home, Star, ShieldCheck,
} from "lucide-react";

// TODO: datos reales
const TEL = "+5491100000000";
const TEL_HREF = `tel:${TEL}`;
const TEL_DISPLAY = "+54 9 11 0000-0000";
const WA_NUMBER = "5491100000000";
const WA_TEXT = encodeURIComponent(
  "Hola VillaGio, quiero información sobre las cabañas de madera."
);
const WA_HREF = `https://wa.me/${WA_NUMBER}?text=${WA_TEXT}`;
// TODO: redes reales
const SOCIALS: { id: string; label: string; href: string }[] = [
  { id: "fb", label: "Facebook", href: "https://facebook.com" },
  { id: "yt", label: "YouTube", href: "https://youtube.com" },
  { id: "ig", label: "Instagram", href: "https://instagram.com" },
];

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

function useInView(threshold = 0.1): [RefObject<HTMLElement | null>, boolean] {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

const CATALOG = [
  { name: "Cabañas tipo Amber", img: "/img/hospedaje/catalog-ambar.svg", desc: "Cabañas compactas, ideales para alquiler turístico." },
  { name: "Cabañas A-frame", img: "/img/hospedaje/catalog-aframe.svg", desc: "Diseño triangular icónico, perfecto para la montaña." },
  { name: "Casas de madera", img: "/img/hospedaje/catalog-lemn.svg", desc: "Viviendas de madera llave en mano para vivir todo el año." },
  { name: "Quinchos y cocheras", img: "/img/hospedaje/catalog-foisoare.svg", desc: "Galerías, quinchos y carports a medida." },
  { name: "Saunas modulares", img: "/img/hospedaje/catalog-saune.svg", desc: "Saunas de madera listas para instalar." },
  { name: "Cabañas Hi-Tech", img: "/img/hospedaje/catalog-hitech.svg", desc: "Modelos premium con terminaciones de alta gama." },
];

const STEPS = [
  { num: "01", title: "Diseño y presupuesto", desc: "Elegimos el modelo, definimos la documentación técnica y calculamos el presupuesto cerrado del proyecto. Desde ese momento contás con un asesor personal que coordina cada etapa." },
  { num: "02", title: "Firma del contrato", desc: "El contrato detalla todo: especificaciones, precio final, plazo de construcción y fecha de entrega o montaje, además de los derechos y obligaciones de cada parte." },
  { num: "03", title: "Fabricación y montaje", desc: "Construimos la cabaña en nuestra fábrica o directamente en tu terreno, siguiendo el plano técnico del modelo elegido y tus preferencias." },
  { num: "04", title: "Entrega de la obra", desc: "Entregamos la cabaña con acta de conformidad, documentación técnica, instalaciones y plano eléctrico, según el modelo elegido: en obra gris o llave en mano." },
];

const PERKS = [
  { Icon: Truck, title: "Envío sin cargo", sub: "a todo el país" },
  { Icon: Tag, title: "Mejores precios", sub: "fabricación propia" },
  { Icon: CreditCard, title: "Pago flexible", sub: "anticipo y precio fijo" },
  { Icon: Clock, title: "Entrega en plazo", sub: "cumplimos los tiempos" },
];

const STATS = [
  { value: "12", suffix: " años", label: "de experiencia" },
  { value: "350", suffix: "+", label: "cabañas entregadas" },
  { value: "10", suffix: " años", label: "de garantía escrita" },
  { value: "98", suffix: "%", label: "clientes satisfechos" },
];

const TESTIMONIALS = [
  { name: "Lucía Fernández", role: "Hospedaje en Villa La Angostura", text: "Montaron dos cabañas para mi complejo turístico. Cumplieron el plazo al día y la terminación es impecable. Las reservo todo el año." },
  { name: "Martín Gómez", role: "Vivienda en Tandil", text: "Nuestra casa de madera llave en mano superó las expectativas. Asesoramiento claro y precio cerrado, sin sorpresas." },
  { name: "Sofía Pereyra", role: "Cabaña en Bariloche", text: "El modelo A-frame quedó precioso y abrigado. El equipo respondió cada consulta por WhatsApp al instante." },
];

const NAV = [
  { label: "Inicio", href: "#inicio" },
  { label: "Modelos", href: "#catalogo" },
  { label: "Cómo trabajamos", href: "#proceso" },
  { label: "Opiniones", href: "#opiniones" },
  { label: "Contacto", href: "#contacto" },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [catRef, catIn] = useInView();
  const [statsRef, statsIn] = useInView();
  const [stepsRef, stepsIn] = useInView();
  const [testiRef, testiIn] = useInView();
  const [contactRef, contactIn] = useInView();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div lang="es" className="bg-white text-slate-800 overflow-x-hidden">
      <style>{`
        .display { font-family: var(--app-font-display), Georgia, serif; }
        .logo-villa { font-weight:800; font-size:1.25rem; letter-spacing:-.02em; color:#2f5311; }
        .logo-villa span { color:#5a8a1f; }
        .green-btn { background:#3d6b10; transition:background .2s, transform .2s; }
        .green-btn:hover { background:#345d0e; transform:translateY(-1px); }
        .green-btn:active { transform:translateY(0); background:#2f5311; }
        .outline-green { border:1.5px solid #3d6b10; color:#3d6b10; transition:background .2s; }
        .outline-green:hover { background:#f0f7e8; }
        .outline-green:active { background:#e3efce; }
        .nav-link { font-size:.82rem; color:#444; transition:color .2s; }
        .nav-link:hover { color:#3d6b10; }
        .reveal { opacity:1; transform:none; transition:opacity .55s ease, transform .55s ease; }
        .js-anim .reveal { opacity:0; transform:translateY(20px); }
        .js-anim .reveal.in { opacity:1; transform:none; }
        .reveal.d1{transition-delay:.1s} .reveal.d2{transition-delay:.2s}
        .reveal.d3{transition-delay:.3s} .reveal.d4{transition-delay:.4s}
        .reveal.d5{transition-delay:.5s} .reveal.d6{transition-delay:.6s}
        .cat-card { border-radius:10px; overflow:hidden; border:1px solid #e8f0dc; transition:box-shadow .22s, transform .22s; }
        .cat-card:hover { box-shadow:0 8px 24px rgba(61,107,16,.15); transform:translateY(-2px); }
        .cat-badge { background:#3d6b10; color:white; font-size:.65rem; font-weight:700; padding:2px 8px; border-radius:4px; position:absolute; top:8px; left:8px; z-index:1; }
        .step-dot { width:36px; height:36px; border-radius:50%; background:#5a8a1f; color:white; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:.85rem; flex-shrink:0; font-variant-numeric:tabular-nums; }
        .step-line { flex:1; height:2px; background:#c8dfa0; }
        .perk-bar { background:rgba(0,0,0,.7); backdrop-filter:blur(6px); }
        .wa-float {
          position:fixed; bottom:24px; right:24px; z-index:100;
          width:54px; height:54px; border-radius:50%;
          background:#25D366; display:flex; align-items:center; justify-content:center;
          box-shadow:0 4px 18px rgba(37,211,102,.5);
          transition:transform .2s, box-shadow .2s; text-decoration:none;
        }
        .wa-float:hover { transform:scale(1.1); box-shadow:0 8px 26px rgba(37,211,102,.65); }
        .wa-float:active { transform:scale(1.02); }
        .wa-float::before {
          content:''; position:absolute; inset:-5px; border-radius:50%;
          border:2px solid rgba(37,211,102,.35); animation:ring 2s ease-out infinite;
        }
        @keyframes ring { 0%{transform:scale(1);opacity:.8} 100%{transform:scale(1.5);opacity:0} }
        .form-input {
          width:100%; border:1px solid #d1dcc4; border-radius:6px;
          padding:11px 13px; font-size:16px; outline:none;
          transition:border-color .2s; background:white; color:#1e293b;
        }
        .form-input:focus { border-color:#3d6b10; box-shadow:0 0 0 3px rgba(61,107,16,.12); }
        .tag-green { color:#3d6b10; font-size:.78rem; font-weight:700; }
        .green-section { background:#2f5311; }
        @media (prefers-reduced-motion: reduce) {
          .reveal, .js-anim .reveal { opacity:1 !important; transform:none !important; transition:none !important; }
          .wa-float::before { animation:none; }
          .green-btn:hover, .cat-card:hover, .wa-float:hover { transform:none; }
        }
      `}</style>

      {/* skip link */}
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[120] focus:rounded-md focus:bg-[#3d6b10] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Saltar al contenido
      </a>

      {/* WA float */}
      <a href={WA_HREF} target="_blank" rel="noopener noreferrer" className="wa-float" aria-label="Escribinos por WhatsApp">
        <WhatsAppIcon className="w-6 h-6 text-white" />
      </a>

      {/* TOP BAR */}
      <div className="hidden md:flex items-center justify-between bg-white border-b border-slate-100 px-8 py-2.5 text-xs text-slate-500">
        <div className="logo-villa">VILLA<span>GIO</span></div>
        <div className="flex items-center gap-6">
          <a href={TEL_HREF} className="flex items-center gap-1.5 hover:text-green-700 transition-colors">
            <Phone className="w-3 h-3" /> {TEL_DISPLAY}
          </a>
          <div className="flex gap-1.5">
            {SOCIALS.map((s) => (
              <a
                key={s.id}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-6 h-6 rounded bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-green-100 hover:text-green-700 transition-colors"
              >
                <span className="text-[9px] font-bold uppercase">{s.id}</span>
              </a>
            ))}
          </div>
          <a href={WA_HREF} target="_blank" rel="noopener noreferrer" className="green-btn text-white text-xs font-semibold px-4 py-1.5 rounded-md">
            Solicitar un llamado
          </a>
        </div>
      </div>

      {/* NAVBAR */}
      <header className={`sticky top-0 z-50 bg-white border-b border-slate-100 transition-shadow ${scrolled ? "shadow-md" : ""}`}>
        <div className="max-w-6xl mx-auto px-6 h-12 flex items-center justify-between">
          <div className="logo-villa md:hidden">VILLA<span>GIO</span></div>
          <nav className="hidden md:flex items-center gap-5" aria-label="Principal">
            {NAV.map((l) => (
              <a key={l.label} href={l.href} className="nav-link">{l.label}</a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-2">
            <a href={WA_HREF} target="_blank" rel="noopener noreferrer" className="green-btn text-white text-xs font-semibold px-4 py-1.5 rounded-md inline-flex items-center gap-1.5">
              Pedir presupuesto <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden text-slate-700"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        {menuOpen && (
          <div id="mobile-menu" className="md:hidden bg-white border-t px-6 py-4 flex flex-col gap-3 shadow-lg">
            {NAV.map((l) => (
              <a key={l.label} href={l.href} className="text-slate-700 text-sm" onClick={() => setMenuOpen(false)}>{l.label}</a>
            ))}
            <a href={WA_HREF} target="_blank" rel="noopener noreferrer" className="green-btn text-white text-sm font-semibold px-4 py-2 rounded-md text-center mt-1">
              Pedir presupuesto
            </a>
          </div>
        )}
      </header>

      <main>
        {/* HERO */}
        <section id="inicio" className="relative min-h-[500px] md:min-h-[520px] overflow-hidden">
          <Image
            src="/img/hospedaje/hero.svg"
            alt="Cabaña de madera VillaGio rodeada de naturaleza"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "center 30%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

          <div className="relative z-10 flex flex-col justify-center px-8 md:px-16 max-w-xl pt-14 pb-32 md:pb-28 min-h-[500px] md:min-h-[520px]">
            <span className="inline-block bg-[#3d6b10] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded mb-4 w-fit">
              Cabañas y casas de madera
            </span>
            <h1 className="display text-white font-bold leading-[1.05] mb-3" style={{ fontSize: "clamp(2.4rem,6vw,3.75rem)" }}>
              Cabañas de madera<br />
              para hospedaje<br />
              <span className="text-green-300 italic">desde USD 15.000</span>
            </h1>
            <p className="text-white/85 text-sm md:text-base max-w-md mb-6 leading-relaxed">
              Alojamiento, casas para vivir y saunas de madera llave en mano. Fabricación propia, financiación y garantía escrita.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={WA_HREF} target="_blank" rel="noopener noreferrer" className="green-btn text-white text-sm font-semibold px-5 py-2.5 rounded-md inline-flex items-center gap-2">
                Solicitar presupuesto <WhatsAppIcon className="w-4 h-4" />
              </a>
              <a href="#catalogo" className="bg-white/20 border border-white/40 text-white text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-white/30 active:bg-white/25 transition-colors">
                Ver modelos
              </a>
            </div>
            <p className="mt-5 flex items-center gap-2 text-white/85 text-xs">
              <span className="w-6 h-6 rounded bg-white/15 flex items-center justify-center flex-shrink-0">
                <Home className="w-3 h-3" />
              </span>
              Puerta de entrada exterior de REGALO y otros obsequios incluidos.
            </p>
          </div>

          {/* Perks bar */}
          <div className="perk-bar absolute bottom-0 left-0 right-0 grid grid-cols-2 md:grid-cols-4">
            {PERKS.map(({ Icon, title, sub }) => (
              <div key={title} className="flex items-center gap-2.5 px-5 py-3 border-r border-white/10 last:border-r-0">
                <Icon className="w-5 h-5 text-green-300 flex-shrink-0" aria-hidden />
                <div>
                  <p className="text-white text-xs font-bold leading-tight">{title}</p>
                  <p className="text-white/80 text-[10px]">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* STATS / TRUST BAND */}
        <section className="bg-[#f0f7e8] border-y border-[#e8f0dc]" ref={statsRef as RefObject<HTMLElement>}>
          <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 js-anim">
            {STATS.map((s, i) => (
              <div key={s.label} className={`text-center reveal d${i + 1} ${statsIn ? "in" : ""}`}>
                <p className="display text-3xl md:text-4xl font-bold text-[#2f5311] tabular-nums">
                  {s.value}<span className="text-[#5a8a1f]">{s.suffix}</span>
                </p>
                <p className="text-slate-600 text-xs md:text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CATALOG */}
        <section id="catalogo" className="py-16 bg-white scroll-mt-16" ref={catRef as RefObject<HTMLElement>}>
          <div className="max-w-6xl mx-auto px-6 js-anim">
            <div className={`mb-8 reveal ${catIn ? "in" : ""}`}>
              <h2 className="display text-2xl md:text-3xl font-bold text-slate-900">
                <span className="tag-green block text-sm mb-1">Catálogo</span>
                Modelos de cabañas y casas
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {CATALOG.map(({ name, img, desc }, i) => (
                <article key={name} className={`cat-card reveal d${(i % 3) + 1} ${catIn ? "in" : ""}`}>
                  <div className="relative aspect-[4/3]">
                    <Image src={img} alt={name} fill sizes="(max-width:768px) 50vw, 33vw" className="object-cover" />
                    <span className="cat-badge">Nuevo modelo</span>
                  </div>
                  <div className="p-3">
                    <p className="font-semibold text-sm text-slate-800 mb-1">{name}</p>
                    <p className="text-slate-500 text-xs mb-3 leading-snug">{desc}</p>
                    <a href={WA_HREF} target="_blank" rel="noopener noreferrer" className="w-full green-btn text-white text-xs font-semibold py-1.5 rounded flex items-center justify-center gap-1">
                      Consultar <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <div className={`text-center mt-8 reveal d4 ${catIn ? "in" : ""}`}>
              <a href="#contacto" className="outline-green inline-block font-semibold text-sm px-8 py-2.5 rounded-md">
                Ver todo el catálogo
              </a>
            </div>
          </div>
        </section>

        {/* HOW WE WORK */}
        <section id="proceso" className="py-16 green-section scroll-mt-16" ref={stepsRef as RefObject<HTMLElement>}>
          <div className="max-w-6xl mx-auto px-6 js-anim">
            <div className={`mb-10 reveal ${stepsIn ? "in" : ""}`}>
              <h2 className="display text-2xl md:text-3xl font-bold text-white">
                <span className="text-green-300 block text-sm font-sans font-bold mb-1">Cómo trabajamos</span>
                Tu cabaña en 4 pasos
              </h2>
            </div>

            {/* Step connector */}
            <div className={`hidden md:flex items-center gap-0 mb-8 reveal d1 ${stepsIn ? "in" : ""}`}>
              {STEPS.map((s, i) => (
                <Fragment key={s.num}>
                  <div className="step-dot">{s.num}</div>
                  {i < STEPS.length - 1 && <div className="step-line" />}
                </Fragment>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {STEPS.map((s, i) => (
                <div key={s.num} className={`bg-white/10 border border-white/15 rounded-xl p-6 reveal d${i + 1} ${stepsIn ? "in" : ""}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="step-dot text-xs">{s.num}</span>
                    <h3 className="text-white font-bold">{s.title}</h3>
                  </div>
                  <p className="text-green-100/85 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className={`text-center mt-8 reveal d5 ${stepsIn ? "in" : ""}`}>
              <a href={WA_HREF} target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-green-900 font-bold text-sm px-8 py-3 rounded-md hover:bg-green-50 active:bg-green-100 transition-colors">
                Empezar mi proyecto
              </a>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="opiniones" className="py-16 bg-white scroll-mt-16" ref={testiRef as RefObject<HTMLElement>}>
          <div className="max-w-6xl mx-auto px-6 js-anim">
            <div className={`mb-8 reveal ${testiIn ? "in" : ""}`}>
              <h2 className="display text-2xl md:text-3xl font-bold text-slate-900">
                <span className="tag-green block text-sm mb-1">Opiniones</span>
                Lo que dicen nuestros clientes
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {TESTIMONIALS.map((t, i) => (
                <figure key={t.name} className={`rounded-xl border border-[#e8f0dc] bg-[#f9fcf4] p-5 reveal d${i + 1} ${testiIn ? "in" : ""}`}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex gap-0.5 text-[#5a8a1f]" aria-label="5 de 5 estrellas">
                      {[0, 1, 2, 3, 4].map((n) => (
                        <Star key={n} className="w-4 h-4 fill-current" aria-hidden />
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#3d6b10] bg-green-100 px-2 py-0.5 rounded-full">
                      <ShieldCheck className="w-3 h-3" aria-hidden /> Opinión verificada
                    </span>
                  </div>
                  <blockquote className="text-slate-700 text-sm leading-relaxed mb-4">“{t.text}”</blockquote>
                  <figcaption className="text-xs">
                    <span className="font-bold text-slate-800 block">{t.name}</span>
                    <span className="text-slate-500">{t.role}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contacto" className="py-16 bg-white border-t border-slate-100 scroll-mt-16" ref={contactRef as RefObject<HTMLElement>}>
          <div className="max-w-6xl mx-auto px-6 js-anim">
            <div className={`mb-8 reveal ${contactIn ? "in" : ""}`}>
              <h2 className="display text-2xl md:text-3xl font-bold text-slate-900">
                <span className="tag-green block text-sm mb-1">Contacto</span>
                Hablemos de tu cabaña
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {[
                { Icon: Phone, label: TEL_DISPLAY, sub: "Llamanos para empezar a coordinar tu proyecto.", href: TEL_HREF },
                { Icon: MapPin, label: "Buenos Aires, Argentina", sub: "Atención y envíos a todo el país.", href: undefined },
                { Icon: WhatsAppIcon, label: "WhatsApp directo", sub: "Te respondemos al instante, todos los días.", href: WA_HREF },
              ].map(({ Icon, label, sub, href }) => {
                const inner = (
                  <>
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 bg-green-100">
                      <Icon className="w-4 h-4 text-green-700" />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-green-700">{label}</p>
                      <p className="text-slate-500 text-xs mt-0.5 leading-snug">{sub}</p>
                    </div>
                  </>
                );
                return href ? (
                  <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="rounded-xl p-5 flex items-start gap-3 bg-slate-50 border border-slate-100 hover:border-green-200 transition-colors">
                    {inner}
                  </a>
                ) : (
                  <div key={label} className="rounded-xl p-5 flex items-start gap-3 bg-slate-50 border border-slate-100">
                    {inner}
                  </div>
                );
              })}
            </div>

            {/* Contact form */}
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <p className="text-slate-700 font-semibold mb-5 text-[15px]">
                  ¿Querés una cabaña de nuestro catálogo?<br />
                  <span className="text-slate-500 font-normal">Dejanos tus datos y te llamamos.</span>
                </p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    // TODO: handler real de envío del formulario
                  }}
                  noValidate
                >
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div>
                      <label htmlFor="nombre" className="sr-only">Nombre</label>
                      <input id="nombre" name="nombre" type="text" autoComplete="given-name" required placeholder="Nombre" className="form-input" />
                    </div>
                    <div>
                      <label htmlFor="apellido" className="sr-only">Apellido</label>
                      <input id="apellido" name="apellido" type="text" autoComplete="family-name" required placeholder="Apellido" className="form-input" />
                    </div>
                    <div>
                      <label htmlFor="telefono" className="sr-only">Teléfono de contacto</label>
                      <input id="telefono" name="telefono" type="tel" autoComplete="tel" required placeholder="Teléfono de contacto" className="form-input" />
                    </div>
                    <div>
                      <label htmlFor="email" className="sr-only">Correo electrónico</label>
                      <input id="email" name="email" type="email" autoComplete="email" placeholder="Correo electrónico" className="form-input" />
                    </div>
                  </div>
                  <label htmlFor="mensaje" className="sr-only">Mensaje</label>
                  <textarea id="mensaje" name="mensaje" rows={3} placeholder="Contanos qué modelo te interesa" className="form-input mb-3" style={{ resize: "none" }} />
                  <div className="flex items-start gap-2 mb-4">
                    <input type="checkbox" id="gdpr" name="gdpr" required className="mt-0.5 accent-green-700" />
                    <label htmlFor="gdpr" className="text-xs text-slate-500">Acepto el tratamiento de mis datos personales para ser contactado.</label>
                  </div>
                  <button type="submit" className="green-btn text-white font-semibold text-sm px-8 py-2.5 rounded-md">
                    Enviar
                  </button>
                </form>
              </div>

              <div className="rounded-2xl overflow-hidden relative aspect-[4/3] md:aspect-auto md:h-80">
                <Image
                  src="/img/hospedaje/contact-model.svg"
                  alt="Modelo de cabaña de madera VillaGio"
                  fill
                  sizes="(max-width:768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-xl font-extrabold mb-2">VILLA<span className="text-green-400">GIO</span></div>
              <p className="text-slate-400 text-xs leading-relaxed">Cabañas y casas de<br />madera a medida</p>
              <div className="flex gap-1.5 mt-3">
                {SOCIALS.map((s) => (
                  <a
                    key={s.id}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-7 h-7 rounded bg-slate-700 flex items-center justify-center text-slate-400 hover:bg-green-700 hover:text-white transition-colors"
                  >
                    <span className="text-[9px] font-bold uppercase">{s.id}</span>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="font-bold text-sm mb-3">Menú</p>
              {NAV.map((l) => (
                <a key={l.label} href={l.href} className="block text-slate-400 text-xs mb-1.5 hover:text-white transition-colors">{l.label}</a>
              ))}
            </div>
            <div>
              <p className="font-bold text-sm mb-3">Modelos</p>
              {CATALOG.map((c) => (
                <a key={c.name} href="#catalogo" className="block text-slate-400 text-xs mb-1.5 hover:text-white transition-colors">{c.name}</a>
              ))}
            </div>
            <div>
              <p className="font-bold text-sm mb-3">Contacto</p>
              <a href={TEL_HREF} className="text-slate-400 text-xs mb-2 flex items-center gap-1.5 hover:text-white transition-colors"><Phone className="w-3 h-3" />{TEL_DISPLAY}</a>
              <p className="text-slate-400 text-xs flex items-start gap-1.5"><MapPin className="w-3 h-3 mt-0.5 flex-shrink-0" />Buenos Aires, Argentina</p>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-slate-500 text-xs">© {new Date().getFullYear()} VillaGio. Todos los derechos reservados.</p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-500 text-xs hover:text-white transition-colors">Política de privacidad</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
