"use client";

import { useState, useEffect, useRef, type RefObject } from "react";
import {
  Wrench, CheckCircle, Star, Menu, X, Check,
  Phone, MessageCircle, Info, Droplets, Users,
  ChevronRight, Shield, Zap, Award
} from "lucide-react";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}

const SERVICES = [
  { Icon: Zap, title: "Respuesta Inmediata", desc: "Llegamos en menos de 60 minutos ante cualquier emergencia, los 365 días del año." },
  { Icon: Award, title: "Calidad Garantizada", desc: "Trabajamos solo con materiales certificados y ofrecemos garantía escrita en cada servicio." },
  { Icon: Shield, title: "Técnicos Certificados", desc: "Todo nuestro personal está habilitado, asegurado y con más de 10 años de experiencia." },
];

const STATS = [
  { value: "15+", label: "Años en el mercado" },
  { value: "2.400+", label: "Clientes satisfechos" },
  { value: "60 min", label: "Tiempo de respuesta" },
  { value: "100%", label: "Garantía de trabajo" },
];

const TESTIMONIALS = [
  { name: "María González", role: "Propietaria", text: "Llegaron rápido, resolvieron la fuga en minutos y dejaron todo limpio. Muy recomendables.", rating: 5 },
  { name: "Carlos Fernández", role: "Administrador", text: "Los contrato para mantenimiento mensual del edificio. Puntuales, profesionales y honestos.", rating: 5 },
  { name: "Ana López", role: "Dueña de negocio", text: "Emergencia a medianoche y respondieron al instante. Precios justos, trabajo impecable.", rating: 5 },
];

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
  const [heroRef, heroIn] = useInView<HTMLDivElement>(0.05);
  const [servRef, servIn] = useInView<HTMLElement>();
  const [aboutRef, aboutIn] = useInView<HTMLElement>();
  const [testiRef, testiIn] = useInView<HTMLElement>();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="bg-white text-slate-900 overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,700;0,9..144,900;1,9..144,300&display=swap');
        .display { font-family: 'Fraunces', serif; }
        .reveal { opacity:0; transform:translateY(28px); transition: opacity .65s ease, transform .65s ease; }
        .reveal.in { opacity:1; transform:none; }
        .reveal.d1 { transition-delay:.1s }
        .reveal.d2 { transition-delay:.22s }
        .reveal.d3 { transition-delay:.36s }
        .reveal.d4 { transition-delay:.5s }
        .reveal.d5 { transition-delay:.62s }
        .nav-link { position:relative; }
        .nav-link::after { content:''; position:absolute; bottom:-2px; left:0; width:0; height:2px; background:#2563eb; transition:width .25s ease; border-radius:2px; }
        .nav-link:hover::after { width:100%; }
        .card-lift { transition: transform .28s cubic-bezier(.4,0,.2,1), box-shadow .28s ease; }
        .card-lift:hover { transform:translateY(-5px); box-shadow:0 18px 40px rgba(37,99,235,.11); }
        .wa-float {
          position:fixed; bottom:28px; right:28px; z-index:100;
          width:56px; height:56px; border-radius:50%;
          background:#25D366;
          display:flex; align-items:center; justify-content:center;
          box-shadow: 0 4px 20px rgba(37,211,102,.5);
          transition: transform .2s ease, box-shadow .2s ease;
          cursor:pointer; border:none;
        }
        .wa-float:hover { transform:scale(1.1); box-shadow:0 8px 28px rgba(37,211,102,.65); }
        .wa-float::before {
          content:''; position:absolute; inset:-5px; border-radius:50%;
          border:2px solid rgba(37,211,102,.4);
          animation: ring 2.2s ease-out infinite;
        }
        @keyframes ring {
          0%   { transform:scale(1);   opacity:.8; }
          100% { transform:scale(1.5); opacity:0; }
        }
        .hero-grid {
          background-image:
            linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px);
          background-size: 48px 48px;
        }
        .blob {
          position:absolute; border-radius:50%; filter:blur(80px); pointer-events:none;
        }
        .tag-pill {
          display:inline-flex; align-items:center; gap:6px;
          background:rgba(255,255,255,.13); border:1px solid rgba(255,255,255,.2);
          color:rgba(255,255,255,.85); font-size:.72rem; font-weight:600;
          letter-spacing:.08em; text-transform:uppercase;
          padding:6px 14px; border-radius:100px;
        }
        .stat-card {
          background:rgba(255,255,255,.07);
          border:1px solid rgba(255,255,255,.12);
          border-radius:16px; padding:20px 24px;
          backdrop-filter:blur(8px);
        }
        .badge {
          background:white; border-radius:14px;
          box-shadow:0 8px 32px rgba(0,0,0,.12);
          padding:12px 16px;
        }
        .cta-btn {
          background:#2563eb;
          transition:background .2s, transform .2s, box-shadow .2s;
          box-shadow:0 4px 16px rgba(37,99,235,.35);
        }
        .cta-btn:hover { background:#1d4ed8; transform:translateY(-2px); box-shadow:0 8px 24px rgba(37,99,235,.45); }
        .ghost-btn {
          border:1.5px solid rgba(255,255,255,.45);
          transition:background .2s, border-color .2s;
        }
        .ghost-btn:hover { background:rgba(255,255,255,.12); border-color:white; }
        .dark-btn {
          border:1.5px solid #e2e8f0;
          transition:border-color .2s, color .2s;
        }
        .dark-btn:hover { border-color:#2563eb; color:#2563eb; }
        .section-tag { color:#2563eb; font-size:.72rem; font-weight:700; letter-spacing:.1em; text-transform:uppercase; }
        .float-anim { animation: floatY 3.2s ease-in-out infinite; }
        .float-anim-slow { animation: floatY 4s ease-in-out infinite; animation-delay:1.5s; }
        @keyframes floatY { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
      `}</style>

      {/* WA FLOATING BUTTON */}
      <a href="https://wa.me/5491100000000" target="_blank" rel="noopener noreferrer" className="wa-float" aria-label="WhatsApp">
        <WhatsAppIcon className="w-6 h-6 text-white" />
      </a>

      {/* NAVBAR */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100" : "bg-transparent"}`}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-md shadow-blue-200">
              <Droplets className="w-4 h-4 text-white" />
            </div>
            <span className={`font-bold text-[17px] tracking-tight ${scrolled ? "text-slate-900" : "text-white"}`}>AquaFix</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {["Nosotros","Servicios","Proyectos","Contacto"].map(l => (
              <a key={l} href="#" className={`nav-link text-sm font-medium transition-colors ${scrolled ? "text-slate-600 hover:text-slate-900" : "text-white/80 hover:text-white"}`}>{l}</a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+5491100000000" className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${scrolled ? "text-slate-600 hover:text-blue-600" : "text-white/80 hover:text-white"}`}>
              <Phone className="w-3.5 h-3.5" /> Llamar
            </a>
            <button className="cta-btn text-white text-sm font-semibold px-5 py-2.5 rounded-xl">
              Solicitar servicio
            </button>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMenuOpen(o => !o)} className={`md:hidden p-1 ${scrolled ? "text-slate-800" : "text-white"}`}>
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-6 py-5 flex flex-col gap-4 shadow-lg">
            {["Nosotros","Servicios","Proyectos","Contacto"].map(l => (
              <a key={l} href="#" className="text-slate-700 font-medium text-sm">{l}</a>
            ))}
            <button className="cta-btn text-white text-sm font-semibold px-5 py-3 rounded-xl text-center mt-1">
              Solicitar servicio
            </button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "linear-gradient(135deg,#0f2851 0%,#1a4fa0 45%,#1e7fd4 100%)" }}>
        <div className="hero-grid absolute inset-0" />
        <div className="blob w-96 h-96 bg-blue-400/20 top-10 right-10" />
        <div className="blob w-72 h-72 bg-sky-300/15 bottom-20 left-20" />

        <div className="max-w-6xl mx-auto px-6 pt-24 pb-20 w-full grid md:grid-cols-2 gap-16 items-center relative z-10" ref={heroRef}>
          {/* Left */}
          <div>
            <div className={`reveal ${heroIn?"in":""}`}>
              <span className="tag-pill mb-6 inline-flex">
                <CheckCircle className="w-3 h-3" /> Servicio profesional garantizado
              </span>
            </div>
            <h1 className={`display text-[clamp(2.8rem,6vw,4.2rem)] font-black text-white leading-[1.0] mb-6 reveal d1 ${heroIn?"in":""}`}>
              Reparaciones<br />
              <em className="not-italic text-sky-300">Plomería</em><br />
              Experta
            </h1>
            <p className={`text-white/65 text-lg leading-relaxed max-w-md mb-8 reveal d2 ${heroIn?"in":""}`}>
              Técnicos certificados para cualquier problema de plomería. Rápido, confiable y con garantía total en cada trabajo.
            </p>
            <div className={`flex flex-wrap gap-3 reveal d3 ${heroIn?"in":""}`}>
              <button className="cta-btn text-white font-semibold px-7 py-3.5 rounded-xl text-sm flex items-center gap-2">
                Ver servicios <ChevronRight className="w-4 h-4" />
              </button>
              <button className="ghost-btn text-white font-semibold px-7 py-3.5 rounded-xl text-sm flex items-center gap-2">
                <Info className="w-4 h-4" /> Más información
              </button>
            </div>

            {/* Mini stats */}
            <div className={`grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-white/15 reveal d4 ${heroIn?"in":""}`}>
              {[["500+","Trabajos/mes"],["4.9","Calificación"],["<60min","Respuesta"]].map(([v,l])=>(
                <div key={l}>
                  <div className="display text-2xl font-black text-white">{v}</div>
                  <div className="text-white/45 text-xs mt-0.5">{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — glassmorphism card */}
          <div className={`relative flex justify-center reveal d2 ${heroIn?"in":""}`}>
            <div className="float-anim relative w-72">
              <div style={{ background:"rgba(255,255,255,.08)", border:"1px solid rgba(255,255,255,.15)", backdropFilter:"blur(16px)", borderRadius:"24px" }} className="p-8 flex flex-col items-center gap-5">
                <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ background:"rgba(255,255,255,.15)" }}>
                  <Users className="w-10 h-10 text-sky-200" />
                </div>
                <div className="text-center">
                  <p className="display font-bold text-white text-lg">Tu Técnico Experto</p>
                  <p className="text-white/55 text-sm mt-1">Certificado y asegurado</p>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {["Tuberías","Grifos","Calefacción"].map(t=>(
                    <span key={t} style={{ background:"rgba(255,255,255,.12)", border:"1px solid rgba(255,255,255,.18)" }} className="text-white/80 text-xs px-3 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </div>

              {/* Badge disponible */}
              <div className="badge float-anim-slow absolute -top-5 -right-8 flex items-center gap-2.5 min-w-max">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 text-emerald-600" strokeWidth={3} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800 leading-tight">Disponible ahora</div>
                  <div className="text-[11px] text-slate-400 leading-tight">Respuesta en 30 min</div>
                </div>
              </div>

              {/* Badge rating */}
              <div className="absolute -bottom-5 -left-8 px-4 py-3 rounded-2xl text-white" style={{ background:"#2563eb", boxShadow:"0 8px 24px rgba(37,99,235,.4)" }}>
                <div className="display font-black text-2xl leading-none">4.9</div>
                <div className="flex gap-0.5 mt-1">
                  {[1,2,3,4,5].map(i=><Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400"/>)}
                </div>
                <div className="text-blue-200 text-[11px] mt-1">+2,000 reseñas</div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 72" xmlns="http://www.w3.org/2000/svg" style={{display:"block"}}>
            <path d="M0,36 C360,72 1080,0 1440,36 L1440,72 L0,72 Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-white" ref={servRef}>
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center mb-14 reveal ${servIn?"in":""}`}>
            <p className="section-tag mb-3">Lo que ofrecemos</p>
            <h2 className="display text-4xl font-black text-slate-900">Por qué elegirnos</h2>
            <p className="text-slate-500 mt-3 max-w-md mx-auto text-[15px]">Experiencia, rapidez y materiales de calidad para resolver cualquier problema de plomería.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-7">
            {SERVICES.map(({ Icon, title, desc }, i) => (
              <div key={title} className={`card-lift bg-slate-50 border border-slate-100 rounded-2xl p-8 reveal d${i+1} ${servIn?"in":""}`}>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="display font-bold text-slate-900 text-xl mb-2">{title}</h3>
                <p className="text-slate-500 text-[15px] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS BAND */}
      <section style={{ background:"linear-gradient(135deg,#0f2851 0%,#1a4fa0 50%,#1e7fd4 100%)" }} className="py-16">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map(({ value, label }) => (
            <div key={label} className="stat-card text-center">
              <div className="display text-4xl font-black text-white">{value}</div>
              <div className="text-white/55 text-sm mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 bg-white" ref={aboutRef}>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className={`relative reveal ${aboutIn?"in":""}`}>
            <div className="rounded-3xl overflow-hidden h-80 flex items-center justify-center relative" style={{ background:"linear-gradient(135deg,#dbeafe,#e0f2fe)" }}>
              <div className="absolute left-4 top-4 w-2 h-48 rounded-full" style={{ background:"linear-gradient(180deg,#3b82f6,#0ea5e9)" }} />
              <div className="absolute right-10 top-8 w-2 h-32 rounded-full opacity-40" style={{ background:"linear-gradient(180deg,#3b82f6,#0ea5e9)" }} />
              <div className="text-center px-8">
                <div className="w-16 h-16 rounded-2xl bg-blue-600 shadow-lg shadow-blue-200 flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-8 h-8 text-white" />
                </div>
                <p className="display font-bold text-slate-800 text-xl">Reparaciones Profesionales</p>
                <p className="text-slate-500 text-sm mt-1">Garantía total en cada trabajo</p>
              </div>
            </div>
            <div className="absolute -bottom-5 -right-5 rounded-2xl text-white px-6 py-4" style={{ background:"#2563eb", boxShadow:"0 8px 24px rgba(37,99,235,.4)" }}>
              <div className="display font-black text-2xl">15+</div>
              <div className="text-blue-200 text-xs mt-0.5">Años de servicio</div>
            </div>
          </div>

          <div>
            <p className={`section-tag mb-3 reveal ${aboutIn?"in":""}`}>Sobre nosotros</p>
            <h2 className={`display text-4xl font-black text-slate-900 leading-tight mb-5 reveal d1 ${aboutIn?"in":""}`}>
              Plomería profesional<br />a tu alcance
            </h2>
            <p className={`text-slate-500 leading-relaxed text-[15px] mb-6 reveal d2 ${aboutIn?"in":""}`}>
              Somos un equipo de técnicos especializados con más de 15 años resolviendo problemas de plomería residencial y comercial. Materiales certificados, métodos modernos y resultados duraderos.
            </p>
            <ul className={`space-y-3 mb-8 reveal d3 ${aboutIn?"in":""}`}>
              {["Diagnóstico gratuito en el lugar","Materiales de primera calidad","Garantía escrita en cada trabajo","Atención de emergencias 24/7"].map(item=>(
                <li key={item} className="flex items-center gap-3 text-slate-600 text-[15px]">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-blue-600" strokeWidth={3}/>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <div className={`flex flex-wrap gap-3 reveal d4 ${aboutIn?"in":""}`}>
              <button className="cta-btn text-white font-semibold px-7 py-3.5 rounded-xl text-sm flex items-center gap-2">
                <MessageCircle className="w-4 h-4" /> Pedir cotización
              </button>
              <button className="dark-btn text-slate-700 font-semibold px-7 py-3.5 rounded-xl text-sm flex items-center gap-2">
                <Phone className="w-4 h-4" /> Llamar ahora
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-slate-50" ref={testiRef}>
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center mb-12 reveal ${testiIn?"in":""}`}>
            <p className="section-tag mb-3">Testimonios</p>
            <h2 className="display text-4xl font-black text-slate-900">Lo que dicen nuestros clientes</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-7">
            {TESTIMONIALS.map(({ name, role, text, rating }, i) => (
              <div key={name} className={`card-lift bg-white rounded-2xl p-7 border border-slate-100 reveal d${i+1} ${testiIn?"in":""}`}>
                <div className="flex gap-0.5 mb-4">
                  {Array.from({length:rating}).map((_,j)=><Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400"/>)}
                </div>
                <p className="text-slate-600 text-[15px] leading-relaxed mb-6">&ldquo;{text}&rdquo;</p>
                <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-sky-400 flex items-center justify-center text-white font-bold text-sm">
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

      {/* BOTTOM CTA */}
      <section style={{ background:"linear-gradient(135deg,#0f2851 0%,#1a4fa0 50%,#1e7fd4 100%)" }} className="py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="display text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            ¿Tenés un problema<br />de plomería?
          </h2>
          <p className="text-white/60 text-lg mb-8">Contactanos ahora y te damos solución hoy mismo.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-700 font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors shadow-xl">
              <Phone className="w-5 h-5" /> Llamar ahora
            </button>
            <button className="ghost-btn text-white font-semibold px-8 py-4 rounded-xl flex items-center justify-center gap-2">
              <MessageCircle className="w-5 h-5" /> Cotización online
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-white py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center">
              <Droplets className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-bold text-base">AquaFix</span>
          </div>
          <div className="flex gap-7">
            {["Nosotros","Servicios","Proyectos","Contacto"].map(l=>(
              <a key={l} href="#" className="text-white/40 hover:text-white text-sm transition-colors">{l}</a>
            ))}
          </div>
          <p className="text-white/25 text-sm">© 2026 AquaFix. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
