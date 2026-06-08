"use client";

import { useState, useEffect, useRef, Fragment, type RefObject } from "react";
import {
  Menu, X, Phone, MapPin, ChevronRight,
  Video, Truck, Tag, CreditCard, Clock,
  ArrowRight, Home,
} from "lucide-react";

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
  { name: "Case Tip Ambar", img: "/img/hospedaje/catalog-ambar.svg" },
  { name: "Case Tip A-frame", img: "/img/hospedaje/catalog-aframe.svg" },
  { name: "Case din Lemn", img: "/img/hospedaje/catalog-lemn.svg" },
  { name: "Foisoare si Carport-uri", img: "/img/hospedaje/catalog-foisoare.svg" },
  { name: "Saune modulare", img: "/img/hospedaje/catalog-saune.svg" },
  { name: "Case Hi-tech", img: "/img/hospedaje/catalog-hitech.svg" },
];

const STEPS = [
  { num: "01", title: "Prima etapă", desc: "Alegem proiectul, avem documentația tehnică și calculăm devizul pe toți proiectul. Din acest moment aveți un manager personal care se ocupă de toate procesele necesare execuției proiectului." },
  { num: "02", title: "Semnarea contractului", desc: "În contractul pe care îl avem cu clienții noștri avem toate detaliile constructive, pret, termen de constructie și datele de livrare/montare, la fel obligatiile și drepturile fiecărei parți semnate." },
  { num: "03", title: "Executarea lucrărilor", desc: "Construim toate ordinele de producție ale casei în fabrică sau pe terenul Dv, în baza planului tehnic al proiectului ales, care corespunde tuturor cerințelor și preferințelor dumneavoastră." },
  { num: "04", title: "Predarea constructiei", desc: "Construcția se predare în baze proces verbal probe, documentația tehnică, ben instalaților și plan electric în dependența de proiectul ales - la nou sau la cheie." },
];

const PERKS = [
  { Icon: Truck, title: "Livrare GRATUITA", sub: "oriunde in Romania" },
  { Icon: Tag, title: "Preturi mai MICI", sub: "deoarece producem proprii" },
  { Icon: CreditCard, title: "Achitare FLEXIBILA", sub: "avem minim si pret fix" },
  { Icon: Clock, title: "Livrare in TERMEN", sub: "respectam termenele" },
];

const NAV = ["Acasa", "Catalog proiecte", "Servicii", "Finantare", "Case executate", "Despre Noi", "Blog", "Contact"];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [catRef, catIn] = useInView();
  const [stepsRef, stepsIn] = useInView();
  const [contactRef, contactIn] = useInView();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }} className="bg-white text-slate-800 overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        .logo-villa { font-weight:800; font-size:1.25rem; letter-spacing:-.02em; color:#2d5016; }
        .logo-villa span { color:#6b9e2d; }
        .green-btn { background:#5a8a1f; transition:background .2s, transform .2s; }
        .green-btn:hover { background:#4a7518; transform:translateY(-1px); }
        .outline-green { border:1.5px solid #5a8a1f; color:#5a8a1f; transition:background .2s; }
        .outline-green:hover { background:#f0f7e8; }
        .nav-link { font-size:.82rem; color:#444; transition:color .2s; }
        .nav-link:hover { color:#5a8a1f; }
        .reveal { opacity:0; transform:translateY(20px); transition:opacity .55s ease, transform .55s ease; }
        .reveal.in { opacity:1; transform:none; }
        .reveal.d1{transition-delay:.1s} .reveal.d2{transition-delay:.2s}
        .reveal.d3{transition-delay:.3s} .reveal.d4{transition-delay:.4s}
        .reveal.d5{transition-delay:.5s} .reveal.d6{transition-delay:.6s}
        .cat-card { border-radius:10px; overflow:hidden; border:1px solid #e8f0dc; transition:box-shadow .22s; }
        .cat-card:hover { box-shadow:0 8px 24px rgba(90,138,31,.15); }
        .cat-card img { width:100%; height:160px; object-fit:cover; display:block; }
        .cat-badge { background:#5a8a1f; color:white; font-size:.65rem; font-weight:700; padding:2px 8px; border-radius:4px; position:absolute; top:8px; left:8px; }
        .step-dot { width:36px; height:36px; border-radius:50%; background:#5a8a1f; color:white; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:.85rem; flex-shrink:0; }
        .step-line { flex:1; height:2px; background:#c8dfa0; }
        .perk-bar { background:rgba(0,0,0,.55); backdrop-filter:blur(6px); }
        .wa-float {
          position:fixed; bottom:24px; right:24px; z-index:100;
          width:54px; height:54px; border-radius:50%;
          background:#25D366; display:flex; align-items:center; justify-content:center;
          box-shadow:0 4px 18px rgba(37,211,102,.5);
          transition:transform .2s, box-shadow .2s; text-decoration:none;
        }
        .wa-float:hover { transform:scale(1.1); box-shadow:0 8px 26px rgba(37,211,102,.65); }
        .wa-float::before {
          content:''; position:absolute; inset:-5px; border-radius:50%;
          border:2px solid rgba(37,211,102,.35); animation:ring 2s ease-out infinite;
        }
        @keyframes ring { 0%{transform:scale(1);opacity:.8} 100%{transform:scale(1.5);opacity:0} }
        .form-input {
          width:100%; border:1px solid #d1dcc4; border-radius:6px;
          padding:9px 13px; font-size:.85rem; outline:none;
          transition:border-color .2s;
          font-family:'Plus Jakarta Sans',sans-serif;
        }
        .form-input:focus { border-color:#5a8a1f; }
        .tag-green { color:#5a8a1f; font-size:.78rem; font-weight:700; }
        .green-section { background:#3d6b10; }
        .hero-img { width:100%; height:100%; object-fit:cover; position:absolute; inset:0; }
      `}</style>

      {/* WA */}
      <a href="https://wa.me/40742665665" target="_blank" rel="noopener noreferrer" className="wa-float" aria-label="WhatsApp">
        <WhatsAppIcon className="w-6 h-6 text-white" />
      </a>

      {/* TOP BAR */}
      <div className="hidden md:flex items-center justify-between bg-white border-b border-slate-100 px-8 py-2.5 text-xs text-slate-500">
        <div className="logo-villa">VILLA<span>GIO</span></div>
        <div className="flex items-center gap-6">
          <a href="tel:+40742665665" className="flex items-center gap-1.5 hover:text-green-700 transition-colors">
            <Phone className="w-3 h-3" /> +40 742 665 665
          </a>
          <div className="flex gap-1.5">
            {["fb", "yt", "ig"].map((s) => (
              <div key={s} className="w-6 h-6 rounded bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-green-100 hover:text-green-700 cursor-pointer transition-colors">
                <span className="text-[9px] font-bold uppercase">{s}</span>
              </div>
            ))}
          </div>
          <button className="green-btn text-white text-xs font-semibold px-4 py-1.5 rounded-md">Solicitați un apel</button>
        </div>
      </div>

      {/* NAVBAR */}
      <header className={`sticky top-0 z-50 bg-white border-b border-slate-100 transition-shadow ${scrolled ? "shadow-md" : ""}`}>
        <div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-between">
          <div className="logo-villa md:hidden">VILLA<span>GIO</span></div>
          <nav className="hidden md:flex items-center gap-5">
            {NAV.map((l) => (
              <a key={l} href="#" className="nav-link">{l}</a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-2">
            {[ArrowRight, Phone, ChevronRight].map((Icon, i) => (
              <button key={i} className="w-7 h-7 rounded border border-slate-200 flex items-center justify-center text-slate-400 hover:border-green-400 hover:text-green-600 transition-colors">
                <Icon className="w-3.5 h-3.5" />
              </button>
            ))}
          </div>
          <button onClick={() => setMenuOpen((o) => !o)} className="md:hidden text-slate-700">
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white border-t px-6 py-4 flex flex-col gap-3 shadow-lg">
            {NAV.map((l) => <a key={l} href="#" className="text-slate-700 text-sm">{l}</a>)}
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative h-[500px] md:h-[520px] overflow-hidden">
        <img
          src="/img/hospedaje/hero.svg"
          alt="Casa din lemn"
          className="hero-img"
          style={{ objectPosition: "center 30%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

        <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 max-w-lg">
          <span className="inline-block bg-green-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded mb-3 w-fit">
            Case din lemn
          </span>
          <h1 className="text-white font-extrabold leading-tight mb-2" style={{ fontSize: "clamp(2rem,5vw,2.8rem)" }}>
            CASE DIN LEMN<br />
            <span className="text-green-400">de la 15 000 EURO</span> (TVA inclus)
          </h1>
          <div className="flex gap-3 mt-4">
            <button className="green-btn text-white text-sm font-semibold px-5 py-2.5 rounded-md">Solicitați o consultație</button>
            <button className="bg-white/20 border border-white/40 text-white text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-white/30 transition-colors">Prima disponibilă</button>
          </div>
          <div className="mt-5 flex items-center gap-2 text-white/80 text-xs">
            <div className="w-6 h-6 rounded bg-white/15 flex items-center justify-center">
              <Home className="w-3 h-3" />
            </div>
            Usa intrarea exterior CADOU<br />cu sistem Armonieze si alte cadouri
          </div>
        </div>

        {/* Perks bar */}
        <div className="perk-bar absolute bottom-0 left-0 right-0 grid grid-cols-2 md:grid-cols-4">
          {PERKS.map(({ Icon, title, sub }) => (
            <div key={title} className="flex items-center gap-2.5 px-5 py-3 border-r border-white/10 last:border-r-0">
              <Icon className="w-5 h-5 text-green-400 flex-shrink-0" />
              <div>
                <p className="text-white text-xs font-bold leading-tight">{title}</p>
                <p className="text-white/55 text-[10px]">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CATALOG */}
      <section className="py-16 bg-white" ref={catRef as RefObject<HTMLElement>}>
        <div className="max-w-6xl mx-auto px-6">
          <div className={`mb-8 reveal ${catIn ? "in" : ""}`}>
            <h2 className="text-2xl font-bold">
              <span className="tag-green">Catalog </span>proiecte
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {CATALOG.map(({ name, img }, i) => (
              <div key={name} className={`cat-card reveal d${(i % 3) + 1} ${catIn ? "in" : ""}`}>
                <div className="relative">
                  <img src={img} alt={name} />
                  <span className="cat-badge">Proiecte noi</span>
                </div>
                <div className="p-3">
                  <p className="font-semibold text-sm text-slate-800 mb-2">{name}</p>
                  <button className="w-full green-btn text-white text-xs font-semibold py-1.5 rounded flex items-center justify-center gap-1">
                    Proiecte <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className={`text-center mt-8 reveal d4 ${catIn ? "in" : ""}`}>
            <button className="outline-green font-semibold text-sm px-8 py-2.5 rounded-md">
              Vezi tot catalogul de case
            </button>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-16 green-section" ref={stepsRef as RefObject<HTMLElement>}>
        <div className="max-w-6xl mx-auto px-6">
          <div className={`mb-10 reveal ${stepsIn ? "in" : ""}`}>
            <h2 className="text-2xl font-bold text-white">
              Cum <span className="text-green-300">noi lucram?</span>
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
                <p className="text-green-100/80 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className={`text-center mt-8 reveal d5 ${stepsIn ? "in" : ""}`}>
            <button className="bg-white text-green-800 font-bold text-sm px-8 py-3 rounded-md hover:bg-green-50 transition-colors">
              Incepe tu contractul
            </button>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-16 bg-white" ref={contactRef as RefObject<HTMLElement>}>
        <div className="max-w-6xl mx-auto px-6">
          <div className={`mb-8 reveal ${contactIn ? "in" : ""}`}>
            <h2 className="text-2xl font-bold">
              <span className="tag-green">Contacte</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { Icon: Phone, label: "+40 742 665 665", sub: "Ca să începem o colaborare, suna pe numărul de telefon", accent: false },
              { Icon: MapPin, label: "România", sub: "Jud. Brașov, Municipiul Codlea, str. Avicola 46A", accent: false },
              { Icon: Video, label: "Video-prezentare", sub: "Video-prezentare cu proiectele executate. Merge", accent: true },
            ].map(({ Icon, label, sub, accent }) => (
              <div key={label} className={`rounded-xl p-5 flex items-start gap-3 ${accent ? "bg-blue-50 border border-blue-100" : "bg-slate-50 border border-slate-100"}`}>
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${accent ? "bg-blue-500" : "bg-green-100"}`}>
                  <Icon className={`w-4 h-4 ${accent ? "text-white" : "text-green-700"}`} />
                </div>
                <div>
                  <p className={`font-bold text-sm ${accent ? "text-blue-700" : "text-green-700"}`}>{label}</p>
                  <p className="text-slate-500 text-xs mt-0.5 leading-snug">{sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact form */}
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-slate-700 font-semibold mb-5 text-[15px]">
                Îți doresti o casă din catalogul nostru?<br />
                <span className="text-slate-500 font-normal">Lasă-ne contactele și te apelăm!</span>
              </p>
              <div className="grid grid-cols-2 gap-3 mb-3">
                <input className="form-input" placeholder="Nume" />
                <input className="form-input" placeholder="Prenume" />
                <input className="form-input" placeholder="Telefon de contact" />
                <input className="form-input" placeholder="Posta electronica" />
              </div>
              <textarea className="form-input mb-3" rows={3} placeholder="Mesaj" style={{ resize: "none" }} />
              <div className="flex items-start gap-2 mb-4">
                <input type="checkbox" id="gdpr" className="mt-0.5 accent-green-600" />
                <label htmlFor="gdpr" className="text-xs text-slate-500">Prin trimitre va dati acordul pentru prelucrarea datelor cu caracter personal</label>
              </div>
              <button className="green-btn text-white font-semibold text-sm px-8 py-2.5 rounded-md">Trimite</button>
            </div>

            <div className="rounded-2xl overflow-hidden h-64 md:h-80 relative">
              <img
                src="/img/hospedaje/contact-model.svg"
                alt="Casa model"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-xl font-extrabold mb-2">VILLA<span className="text-green-400">GIO</span></div>
              <p className="text-slate-400 text-xs leading-relaxed">Case din lemn<br />la comandă</p>
              <div className="flex gap-1.5 mt-3">
                {["fb", "yt", "ig"].map((s) => (
                  <div key={s} className="w-7 h-7 rounded bg-slate-700 flex items-center justify-center text-slate-400 hover:bg-green-700 hover:text-white cursor-pointer transition-colors">
                    <span className="text-[9px] font-bold uppercase">{s}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="font-bold text-sm mb-3">Meniu</p>
              {["Acasa", "Catalog proiecte", "Servicii", "Finantare", "Case executate", "Despre Noi", "Contact"].map((l) => (
                <a key={l} href="#" className="block text-slate-400 text-xs mb-1.5 hover:text-white transition-colors">{l}</a>
              ))}
            </div>
            <div>
              <p className="font-bold text-sm mb-3">Servicii</p>
              {["Case Tip Ambar", "Case Tip A-frame", "Case din Lemn", "Foisoare si Carport-uri", "Saune modulare", "Case Hi-tech"].map((l) => (
                <a key={l} href="#" className="block text-slate-400 text-xs mb-1.5 hover:text-white transition-colors">{l}</a>
              ))}
            </div>
            <div>
              <p className="font-bold text-sm mb-3">Contact</p>
              <p className="text-slate-400 text-xs mb-2 flex items-center gap-1.5"><Phone className="w-3 h-3" />+40 742 665 665</p>
              <p className="text-slate-400 text-xs flex items-start gap-1.5"><MapPin className="w-3 h-3 mt-0.5 flex-shrink-0" />Jud. Brașov, Municipiul Codlea, str. Avicola 46A</p>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-slate-500 text-xs">© MontaVilla Estoria SRL. Toate drepturile Rezervate.</p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-500 text-xs hover:text-white transition-colors">Politica de confidentialitate</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
