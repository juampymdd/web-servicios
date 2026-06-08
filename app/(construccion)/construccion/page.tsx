"use client";

import { useState, useEffect, useRef, type RefObject } from "react";
import {
  Menu, X, Phone, MessageCircle, ChevronRight,
  Check, Shield, Award, HardHat, Wrench,
  Image, HelpCircle, Mail, Star, ArrowRight,
} from "lucide-react";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}

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

const SERVICES = [
  { Icon: HardHat, title: "Instalación de Techos", desc: "Montaje profesional de techos metálicos con materiales de primera calidad y acabado perfecto." },
  { Icon: Wrench, title: "Reparación y Mantenimiento", desc: "Diagnóstico, reparación y mantenimiento preventivo para extender la vida útil de tu techo." },
  { Icon: Shield, title: "Impermeabilización", desc: "Sistemas de sellado y aislación térmica para proteger tu propiedad contra humedad y filtraciones." },
  { Icon: Award, title: "Techos Industriales", desc: "Soluciones a medida para galpones, fábricas y grandes superficies con garantía extendida." },
];

const STATS = [
  { value: "20+", label: "Años de experiencia" },
  { value: "1.800+", label: "Techos instalados" },
  { value: "15 años", label: "Garantía de material" },
  { value: "100%", label: "Clientes satisfechos" },
];

const GALLERY = [
  { label: "Residencial", sub: "Techos a dos aguas en chapas acanaladas" },
  { label: "Industrial", sub: "Grandes superficies con aislación térmica" },
  { label: "Comercial", sub: "Techos planos con membrana y zinc" },
  { label: "Restauración", sub: "Reemplazo total con refuerzo estructural" },
];

const TESTIMONIALS = [
  { name: "Roberto Sánchez", role: "Propietario", text: "Excelente trabajo. Instalaron el techo completo en dos días y quedó impecable. Muy profesionales.", rating: 5 },
  { name: "Laura Martínez", role: "Gerente de edificio", text: "Resolvieron una filtración que nos venía dando problemas hace años. Totalmente recomendados.", rating: 5 },
  { name: "Diego Torres", role: "Constructor", text: "Los uso para todos mis proyectos. Puntualidad, calidad y precios justos. No busco a nadie más.", rating: 5 },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [heroRef, heroIn] = useInView<HTMLDivElement>(0.05);
  const [servRef, servIn] = useInView<HTMLElement>();
  const [aboutRef, aboutIn] = useInView<HTMLElement>();
  const [galRef, galIn] = useInView<HTMLElement>();
  const [testiRef, testiIn] = useInView<HTMLElement>();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="bg-white text-slate-900 overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Barlow+Condensed:wght@600;700;800;900&display=swap');
        .display { font-family: 'Barlow Condensed', sans-serif; letter-spacing:-0.01em; }
        .reveal { opacity:0; transform:translateY(24px); transition:opacity .6s ease, transform .6s ease; }
        .reveal.in { opacity:1; transform:none; }
        .reveal.d1{transition-delay:.1s} .reveal.d2{transition-delay:.22s}
        .reveal.d3{transition-delay:.34s} .reveal.d4{transition-delay:.46s}
        .reveal.d5{transition-delay:.58s}
        .nav-link { position:relative; }
        .nav-link::after { content:''; position:absolute; bottom:-3px; left:0; width:0; height:2px; background:#dc2626; transition:width .22s ease; }
        .nav-link:hover::after { width:100%; }
        .card-lift { transition:transform .25s ease, box-shadow .25s ease; }
        .card-lift:hover { transform:translateY(-4px); box-shadow:0 16px 36px rgba(0,0,0,.1); }
        .wa-float {
          position:fixed; bottom:28px; right:28px; z-index:100;
          width:56px; height:56px; border-radius:50%;
          background:#25D366; display:flex; align-items:center; justify-content:center;
          box-shadow:0 4px 20px rgba(37,211,102,.5);
          transition:transform .2s ease, box-shadow .2s ease;
          text-decoration:none;
        }
        .wa-float:hover { transform:scale(1.1); box-shadow:0 8px 28px rgba(37,211,102,.65); }
        .wa-float::before {
          content:''; position:absolute; inset:-5px; border-radius:50%;
          border:2px solid rgba(37,211,102,.4);
          animation:ring 2.2s ease-out infinite;
        }
        @keyframes ring { 0%{transform:scale(1);opacity:.8} 100%{transform:scale(1.5);opacity:0} }
        .red-btn {
          background:#dc2626;
          box-shadow:0 4px 16px rgba(220,38,38,.35);
          transition:background .2s, transform .2s, box-shadow .2s;
        }
        .red-btn:hover { background:#b91c1c; transform:translateY(-2px); box-shadow:0 8px 24px rgba(220,38,38,.45); }
        .ghost-white {
          border:1.5px solid rgba(255,255,255,.4);
          transition:background .2s, border-color .2s;
        }
        .ghost-white:hover { background:rgba(255,255,255,.1); border-color:white; }
        .outline-dark {
          border:1.5px solid #e2e8f0;
          transition:border-color .2s, color .2s;
        }
        .outline-dark:hover { border-color:#dc2626; color:#dc2626; }
        .hero-overlay {
          background: linear-gradient(105deg, rgba(10,10,10,.82) 0%, rgba(10,10,10,.55) 55%, rgba(10,10,10,.15) 100%);
        }
        .red-line { display:inline-block; width:48px; height:3px; background:#dc2626; border-radius:2px; vertical-align:middle; margin-right:10px; }
        .section-tag { color:#dc2626; font-size:.72rem; font-weight:700; letter-spacing:.12em; text-transform:uppercase; display:flex; align-items:center; gap:8px; }
        .section-tag::before { content:''; display:inline-block; width:28px; height:2.5px; background:#dc2626; border-radius:2px; }
        .quick-card {
          background:rgba(255,255,255,.97);
          border-radius:0;
          padding:28px 28px 24px;
          border-top:3px solid transparent;
          transition:border-color .2s;
        }
        .quick-card:hover { border-top-color:#dc2626; }
        .quick-card.accent { background:#dc2626; color:white; }
        .stat-num { font-family:'Barlow Condensed',sans-serif; font-weight:900; font-size:2.8rem; line-height:1; color:white; }
        .gallery-card {
          position:relative; overflow:hidden; border-radius:12px;
          background:#1e293b;
          transition:transform .25s ease;
          cursor:pointer;
        }
        .gallery-card:hover { transform:scale(1.02); }
        .gallery-card .overlay {
          position:absolute; inset:0;
          background:linear-gradient(180deg,transparent 50%,rgba(0,0,0,.75) 100%);
        }
        .gallery-card .label {
          position:absolute; bottom:16px; left:16px; right:16px; color:white;
        }
        .tag-pill {
          display:inline-flex; align-items:center; gap:6px;
          background:rgba(220,38,38,.15); border:1px solid rgba(220,38,38,.3);
          color:#fca5a5; font-size:.7rem; font-weight:700;
          letter-spacing:.09em; text-transform:uppercase;
          padding:5px 12px; border-radius:100px;
        }
        .about-img {
          background: linear-gradient(135deg,#1e293b,#334155);
          border-radius:20px; overflow:hidden; position:relative;
        }
      `}</style>

      {/* WA BUTTON */}
      <a href="https://wa.me/5491100000000" target="_blank" rel="noopener noreferrer" className="wa-float" aria-label="WhatsApp">
        <WhatsAppIcon className="w-6 h-6 text-white" />
      </a>

      {/* NAVBAR */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/97 backdrop-blur shadow-sm border-b border-slate-100" : "bg-transparent"}`}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded bg-red-600 flex items-center justify-center shadow-md">
              <HardHat className="w-4 h-4 text-white" />
            </div>
            <span className={`display font-extrabold text-xl tracking-tight ${scrolled ? "text-slate-900" : "text-white"}`}>ReusRoof</span>
          </a>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-8">
            {["Inicio","Servicios","Galería","Nosotros","Contacto"].map(l => (
              <a key={l} href="#" className={`nav-link text-sm font-medium transition-colors ${scrolled ? "text-slate-600 hover:text-slate-900" : "text-white/80 hover:text-white"}`}>{l}</a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+5491100000000" className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${scrolled ? "text-slate-600 hover:text-red-600" : "text-white/75 hover:text-white"}`}>
              <Phone className="w-3.5 h-3.5" /> Llamar
            </a>
            <button className="red-btn text-white text-sm font-semibold px-5 py-2.5 rounded-lg flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5" /> Consultar ahora
            </button>
          </div>

          <button onClick={() => setMenuOpen(o => !o)} className={`md:hidden p-1 ${scrolled ? "text-slate-800" : "text-white"}`}>
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-6 py-5 flex flex-col gap-4 shadow-lg">
            {["Inicio","Servicios","Galería","Nosotros","Contacto"].map(l => (
              <a key={l} href="#" className="text-slate-700 font-medium text-sm">{l}</a>
            ))}
            <button className="red-btn text-white text-sm font-semibold px-5 py-3 rounded-lg text-center mt-1">Consultar ahora</button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-end overflow-hidden" style={{ background: "#111" }}>
        {/* BG pattern simulating metal roof texture */}
        <div className="absolute inset-0" style={{
          backgroundImage: "repeating-linear-gradient(90deg, rgba(255,255,255,.03) 0px, rgba(255,255,255,.03) 2px, transparent 2px, transparent 48px)",
          backgroundSize: "48px 100%"
        }} />
        {/* Dark overlay gradient */}
        <div className="hero-overlay absolute inset-0 z-10" />

        {/* Content */}
        <div className="relative z-20 max-w-6xl mx-auto px-6 pt-28 pb-0 w-full" ref={heroRef}>
          <div className="pb-16 max-w-xl">
            <div className={`reveal ${heroIn?"in":""}`}>
              <span className="tag-pill mb-5 inline-flex">
                <Award className="w-3 h-3" /> Empresa certificada y habilitada
              </span>
            </div>
            <h1 className={`display font-black text-white leading-[.95] mb-5 reveal d1 ${heroIn?"in":""}`} style={{ fontSize:"clamp(3rem,7vw,5rem)" }}>
              Techos Metálicos<br />
              <span className="text-red-500">Duraderos.</span><br />
              Perfectamente Instalados.
            </h1>
            <p className={`text-white/60 text-base leading-relaxed mb-8 max-w-sm reveal d2 ${heroIn?"in":""}`}>
              Instalamos, reparamos e impermeabilizamos todo tipo de techos con los mejores materiales del mercado y garantía extendida.
            </p>
            <div className={`flex flex-wrap gap-3 reveal d3 ${heroIn?"in":""}`}>
              <button className="red-btn text-white font-semibold px-7 py-3.5 rounded-lg text-sm flex items-center gap-2">
                Solicitar presupuesto <ChevronRight className="w-4 h-4" />
              </button>
              <button className="ghost-white text-white font-semibold px-7 py-3.5 rounded-lg text-sm flex items-center gap-2">
                <Image className="w-4 h-4" /> Ver trabajos
              </button>
            </div>
          </div>

          {/* Quick access bar */}
          <div className={`grid grid-cols-1 md:grid-cols-3 border-t border-white/10 reveal d4 ${heroIn?"in":""}`}>
            <div className="quick-card hover:border-t-red-600">
              <div className="flex items-start gap-3">
                <Image className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="display font-bold text-slate-900 text-lg">Galería</p>
                  <p className="text-slate-500 text-sm mt-1 leading-snug">Mirá nuestros trabajos terminados en todo tipo de propiedades.</p>
                </div>
              </div>
            </div>
            <div className="quick-card hover:border-t-red-600 border-l border-r border-slate-100">
              <div className="flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="display font-bold text-slate-900 text-lg">Preguntas frecuentes</p>
                  <p className="text-slate-500 text-sm mt-1 leading-snug">Todo lo que necesitás saber antes de contratar nuestro servicio.</p>
                </div>
              </div>
            </div>
            <div className="quick-card accent">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-red-200 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="display font-bold text-white text-lg">Sección de contacto</p>
                  <p className="text-red-200 text-sm mt-1 leading-snug">Completá el formulario y te respondemos en menos de 2 horas.</p>
                  <button className="mt-3 flex items-center gap-1.5 text-white font-semibold text-sm hover:gap-2.5 transition-all">
                    Contactar ahora <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 bg-white" ref={aboutRef}>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className={`about-img h-80 flex items-center justify-center reveal ${aboutIn?"in":""}`}>
            <div className="text-center px-8">
              <div className="w-16 h-16 rounded-xl bg-red-600 shadow-lg flex items-center justify-center mx-auto mb-4">
                <HardHat className="w-8 h-8 text-white" />
              </div>
              <p className="display font-black text-white text-2xl">20 años de experiencia</p>
              <p className="text-slate-400 text-sm mt-2">en techos metálicos industriales y residenciales</p>
            </div>
          </div>
          <div>
            <p className={`section-tag mb-3 reveal ${aboutIn?"in":""}`}>Sobre la empresa</p>
            <h2 className={`display font-black text-slate-900 text-4xl md:text-5xl leading-tight mb-5 reveal d1 ${aboutIn?"in":""}`}>
              La empresa líder<br />en techos metálicos
            </h2>
            <p className={`text-slate-500 leading-relaxed text-[15px] mb-6 reveal d2 ${aboutIn?"in":""}`}>
              Somos especialistas en instalación, reparación e impermeabilización de techos metálicos para uso residencial, comercial e industrial. Trabajamos con materiales de primera línea y nuestros técnicos están certificados para garantizar cada trabajo.
            </p>
            <ul className={`space-y-3 mb-8 reveal d3 ${aboutIn?"in":""}`}>
              {["Presupuesto sin cargo en 24 horas","Materiales certificados con garantía de fabricante","Técnicos habilitados con seguro de accidentes","Servicio de urgencias disponible"].map(item=>(
                <li key={item} className="flex items-center gap-3 text-slate-600 text-[15px]">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-red-600" strokeWidth={3}/>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <div className={`flex flex-wrap gap-3 reveal d4 ${aboutIn?"in":""}`}>
              <button className="red-btn text-white font-semibold px-7 py-3.5 rounded-lg text-sm flex items-center gap-2">
                Consultar ahora <ArrowRight className="w-4 h-4" />
              </button>
              <button className="outline-dark text-slate-700 font-semibold px-7 py-3.5 rounded-lg text-sm flex items-center gap-2">
                <Phone className="w-4 h-4" /> Llamar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-slate-950" ref={servRef}>
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center mb-12 reveal ${servIn?"in":""}`}>
            <p className="section-tag justify-center mb-3 text-red-400">Nuestros servicios</p>
            <h2 className="display font-black text-white text-4xl md:text-5xl">¿En qué te podemos ayudar?</h2>
            <div className="w-12 h-1 bg-red-600 rounded mx-auto mt-4" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map(({ Icon, title, desc }, i) => (
              <div key={title} className={`card-lift bg-slate-900 border border-slate-800 rounded-xl p-6 reveal d${i+1} ${servIn?"in":""}`}>
                <div className="w-11 h-11 rounded-lg bg-red-600/15 border border-red-600/20 flex items-center justify-center text-red-500 mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="display font-bold text-white text-xl mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-14 bg-red-600">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {STATS.map(({ value, label }) => (
            <div key={label}>
              <div className="stat-num">{value}</div>
              <div className="text-red-200 text-sm mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-24 bg-slate-950" ref={galRef}>
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center mb-12 reveal ${galIn?"in":""}`}>
            <p className="section-tag justify-center mb-3 text-red-400">Portfolio</p>
            <h2 className="display font-black text-white text-4xl md:text-5xl">Nuestros trabajos</h2>
            <div className="w-12 h-1 bg-red-600 rounded mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {GALLERY.map(({ label, sub }, i) => (
              <div key={label} className={`gallery-card h-48 reveal d${i+1} ${galIn?"in":""}`}
                style={{ background: `linear-gradient(135deg, hsl(${210+i*12},30%,${18+i*3}%) 0%, hsl(${215+i*10},25%,${24+i*4}%) 100%)` }}>
                <div className="overlay" />
                <div className="label">
                  <p className="display font-bold text-base">{label}</p>
                  <p className="text-white/60 text-xs mt-0.5">{sub}</p>
                </div>
                <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </div>
              </div>
            ))}
          </div>
          <div className={`text-center mt-8 reveal d5 ${galIn?"in":""}`}>
            <button className="outline-dark text-white border-slate-700 font-semibold px-8 py-3.5 rounded-lg text-sm flex items-center gap-2 mx-auto hover:border-red-500 hover:text-red-400 transition-colors">
              <Image className="w-4 h-4" /> Ver galería completa
            </button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-white" ref={testiRef}>
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center mb-12 reveal ${testiIn?"in":""}`}>
            <p className="section-tag justify-center mb-3">Testimonios</p>
            <h2 className="display font-black text-slate-900 text-4xl md:text-5xl">Lo que dicen nuestros clientes</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-7">
            {TESTIMONIALS.map(({ name, role, text, rating }, i) => (
              <div key={name} className={`card-lift bg-slate-50 border border-slate-100 rounded-xl p-7 reveal d${i+1} ${testiIn?"in":""}`}>
                <div className="flex gap-0.5 mb-4">
                  {Array.from({length:rating}).map((_,j)=><Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400"/>)}
                </div>
                <p className="text-slate-600 text-[15px] leading-relaxed mb-6">&ldquo;{text}&rdquo;</p>
                <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center text-white font-bold text-sm">
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

      {/* CTA FINAL */}
      <section className="py-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage:"repeating-linear-gradient(90deg,white 0,white 1px,transparent 1px,transparent 40px)",
          backgroundSize:"40px 100%"
        }} />
        <div className="max-w-2xl mx-auto px-6 text-center relative z-10">
          <p className="section-tag justify-center mb-4 text-red-400">Empezá hoy</p>
          <h2 className="display font-black text-white text-4xl md:text-5xl leading-tight mb-4">
            Tu techo nuevo,<br />sin complicaciones
          </h2>
          <p className="text-slate-400 text-base mb-8">Presupuesto sin cargo, respuesta en 24 horas y ejecución garantizada.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="red-btn text-white font-bold px-8 py-4 rounded-lg flex items-center justify-center gap-2">
              <MessageCircle className="w-5 h-5" /> Solicitar presupuesto
            </button>
            <button className="ghost-white text-white font-semibold px-8 py-4 rounded-lg flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" /> Llamar ahora
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-10 border-t border-slate-900">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded bg-red-600 flex items-center justify-center">
              <HardHat className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="display font-extrabold text-lg">ReusRoof</span>
          </div>
          <div className="flex gap-7">
            {["Inicio","Servicios","Galería","Contacto"].map(l=>(
              <a key={l} href="#" className="text-white/35 hover:text-white text-sm transition-colors">{l}</a>
            ))}
          </div>
          <p className="text-white/20 text-sm">© 2026 ReusRoof. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
