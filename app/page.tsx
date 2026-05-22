"use client";
import { Noto_Naskh_Arabic, Karla, Caveat } from "next/font/google";
import content from "../data/content.json";

const display = Noto_Naskh_Arabic({ subsets: ["latin", "arabic"], weight: ["400", "500", "600", "700"], variable: "--font-display" });
const body = Karla({ subsets: ["latin"], weight: ["300", "400", "500", "700"], variable: "--font-body" });
const accent = Caveat({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-accent" });

const OLIVE = "#3F6212";
const OLIVE_DEEP = "#1A2E05";
const PAPRIKA = "#9F1239";
const SAFFRON = "#D97706";
const CREAM = "#FEF7E6";
const SAND = "#F5E6C8";
const INK = "#1F2937";
const MUTED = "#6B7280";

const HERO_PHOTO = "https://images.unsplash.com/photo-1561651823-34feb02250e4?w=1800&q=80&auto=format&fit=crop";

export default function Page() {
  const c = content as any;
  return (
    <main className={`${display.variable} ${body.variable} ${accent.variable} min-h-screen`} style={{ backgroundColor: CREAM, color: INK, fontFamily: "var(--font-body)" }}>
      <style jsx global>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes wave { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
        .fade-up { animation: fadeUp 1s ease-out both; }
        .display-text { font-family: var(--font-display); }
        .accent-text { font-family: var(--font-accent); }
        .body-text { font-family: var(--font-body); }
        .arch-shape { clip-path: path('M 0 100 Q 0 0, 50 0 Q 100 0, 100 100 Z'); }
      `}</style>

      <header style={{ backgroundColor: CREAM }}>
        <div className="text-center py-2 text-[11px] uppercase tracking-[0.4em]" style={{ backgroundColor: OLIVE_DEEP, color: SAND, fontWeight: 700 }}>
          ✦ GLENDALE · GLENOAKS BLVD · SHAWARMA · OPEN DAILY ✦
        </div>
        <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center" style={{ backgroundColor: OLIVE, borderRadius: "50% 50% 50% 0", transform: "rotate(45deg)" }}>
              <span className="display-text text-2xl font-bold" style={{ color: SAFFRON, transform: "rotate(-45deg)" }}>G</span>
            </div>
            <div>
              <div className="display-text text-2xl leading-none" style={{ color: OLIVE_DEEP, fontWeight: 700 }}>Glendale Shawarma</div>
              <div className="accent-text text-base leading-tight" style={{ color: PAPRIKA }}>spit-grilled · daily</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.25em] font-bold" style={{ color: OLIVE_DEEP }}>
            <a href="#about">About</a>
            <a href="#menu">Menu</a>
            <a href="#reviews">Reviews</a>
            <a href="#visit">Visit</a>
          </div>
          <a href={c.hero.ctaLink} className="px-6 py-3 text-sm font-bold tracking-wider uppercase" style={{ backgroundColor: PAPRIKA, color: CREAM, borderRadius: 999 }}>Call →</a>
        </nav>
      </header>

      <section className="py-20 md:py-28 relative" style={{ backgroundColor: CREAM }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 fade-up">
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.5em] mb-6 font-bold" style={{ color: SAFFRON }}>
              <span style={{ width: 24, height: 2, backgroundColor: SAFFRON, display: "inline-block" }} />
              {c.hero.eyebrow}
            </div>
            <h1 className="display-text text-6xl md:text-8xl leading-[0.95] mb-3 tracking-tight" style={{ color: OLIVE_DEEP, fontWeight: 700 }}>
              {c.hero.heading}
            </h1>
            <div className="accent-text text-3xl md:text-4xl mb-7" style={{ color: PAPRIKA }}>charcoal · spices · sumac.</div>
            <p className="text-lg leading-[1.85] max-w-xl mb-10" style={{ color: INK, fontWeight: 400 }}>{c.hero.subheading}</p>
            <div className="flex flex-wrap items-center gap-6">
              <a href={c.hero.ctaLink} className="display-text px-8 py-4 text-base font-bold tracking-wider inline-flex items-center gap-3" style={{ backgroundColor: OLIVE, color: CREAM, borderRadius: 999 }}>{c.hero.ctaText} ↗</a>
              <div>
                <div className="display-text text-3xl font-bold" style={{ color: SAFFRON }}>★ 4.6 · 184</div>
                <div className="text-[10px] uppercase tracking-widest font-bold mt-1" style={{ color: MUTED }}>reviews · glenoaks blvd</div>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 fade-up">
            <div className="relative">
              <div className="overflow-hidden" style={{ aspectRatio: "3/4", borderTopLeftRadius: "50% 30%", borderTopRightRadius: "50% 30%", border: `4px solid ${OLIVE_DEEP}` }}>
                <div className="w-full h-full" style={{ backgroundImage: `url("${HERO_PHOTO}")`, backgroundSize: "cover", backgroundPosition: "center" }} />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 flex items-center justify-center" style={{ backgroundColor: SAFFRON, borderRadius: "50%" }}>
                <div className="text-center">
                  <div className="display-text text-2xl font-bold leading-none" style={{ color: OLIVE_DEEP }}>4.6</div>
                  <div className="text-[8px] uppercase tracking-widest font-bold mt-1" style={{ color: OLIVE_DEEP }}>★ rated</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24" style={{ backgroundColor: SAND }}>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="text-[10px] uppercase tracking-[0.5em] mb-4 font-bold flex items-center gap-2" style={{ color: PAPRIKA }}>✦ {c.about.label}</div>
            <h2 className="display-text text-5xl md:text-7xl leading-[1.0] tracking-tight" style={{ color: OLIVE_DEEP, fontWeight: 700 }}>{c.about.heading}</h2>
            <div className="accent-text text-3xl mt-5" style={{ color: PAPRIKA }}>fresh pita, every order.</div>
          </div>
          <div className="md:col-span-7">
            <div className="space-y-6 text-lg leading-[1.85]" style={{ color: INK }}>
              {c.about.paragraphs.map((p: string, i: number) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="py-24" style={{ backgroundColor: CREAM }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-[10px] uppercase tracking-[0.5em] mb-3 font-bold" style={{ color: PAPRIKA }}>✦ THE MENU ✦</div>
            <h2 className="display-text text-5xl md:text-7xl leading-tight tracking-tight" style={{ color: OLIVE_DEEP, fontWeight: 700 }}>From the spit.</h2>
            <div className="accent-text text-2xl mt-3" style={{ color: SAFFRON }}>house pita, sumac, fresh.</div>
          </div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-2">
            {c.services.map((s: any, i: number) => (
              <article key={i} className="py-7 flex gap-5 items-start" style={{ borderBottom: `2px dotted ${OLIVE}40` }}>
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center display-text text-lg font-bold" style={{ backgroundColor: OLIVE, color: SAFFRON, borderRadius: 999 }}>{String(i + 1).padStart(2, "0")}</div>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-4 mb-2">
                    <div className="display-text text-2xl leading-tight" style={{ color: OLIVE_DEEP, fontWeight: 700 }}>{s.title}</div>
                    <div className="display-text text-2xl font-bold whitespace-nowrap" style={{ color: PAPRIKA }}>{s.price}</div>
                  </div>
                  <p className="text-sm leading-[1.7]" style={{ color: MUTED }}>{s.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-24" style={{ backgroundColor: OLIVE_DEEP }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-[10px] uppercase tracking-[0.5em] mb-3 font-bold" style={{ color: SAFFRON }}>✦ 184 reviews ✦</div>
            <h2 className="display-text text-5xl md:text-7xl leading-tight tracking-tight" style={{ color: CREAM, fontWeight: 700 }}>What guests say.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {c.reviews.map((r: any, i: number) => (
              <figure key={i} className="p-8" style={{ backgroundColor: CREAM, borderRadius: 16 }}>
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: r.rating }).map((_, j) => <span key={j} style={{ color: SAFFRON, fontSize: 20 }}>★</span>)}
                </div>
                <blockquote className="text-base leading-[1.8] mb-6" style={{ color: INK }}>"{r.text}"</blockquote>
                <figcaption className="flex items-center gap-3 pt-5" style={{ borderTop: `2px dotted ${OLIVE}30` }}>
                  <div className="w-11 h-11 display-text text-base font-bold flex items-center justify-center" style={{ backgroundColor: PAPRIKA, color: CREAM, borderRadius: 999 }}>{r.name.charAt(0)}</div>
                  <div>
                    <div className="display-text text-lg leading-tight" style={{ color: OLIVE_DEEP, fontWeight: 700 }}>{r.name}</div>
                    <div className="text-[10px] uppercase tracking-widest font-bold mt-0.5" style={{ color: MUTED }}>{r.context}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="visit" className="py-24" style={{ backgroundColor: SAFFRON }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="text-[10px] uppercase tracking-[0.5em] mb-4 font-bold" style={{ color: OLIVE_DEEP }}>✦ FIND US ✦</div>
            <h2 className="display-text text-5xl md:text-7xl leading-[0.95] mb-3 tracking-tight" style={{ color: OLIVE_DEEP, fontWeight: 700 }}>Come hungry.</h2>
            <div className="accent-text text-3xl mb-10" style={{ color: PAPRIKA }}>glenoaks · suite a.</div>
            <dl className="space-y-6 mb-10">
              <div>
                <dt className="text-[10px] uppercase tracking-[0.4em] mb-2 font-bold" style={{ color: OLIVE_DEEP, opacity: 0.7 }}>Address</dt>
                <dd className="text-xl font-bold" style={{ color: OLIVE_DEEP }}>{c.contact.address}</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.4em] mb-2 font-bold" style={{ color: OLIVE_DEEP, opacity: 0.7 }}>Call</dt>
                <dd className="display-text text-4xl font-bold"><a href={`tel:${c.contact.phone.replace(/\D/g, "")}`} style={{ color: OLIVE_DEEP }}>{c.contact.phone}</a></dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.4em] mb-2 font-bold" style={{ color: OLIVE_DEEP, opacity: 0.7 }}>Hours</dt>
                <dd>
                  <table className="text-sm" style={{ color: OLIVE_DEEP }}>
                    <tbody>
                      {Object.entries(c.contact.hours).map(([day, hours]) => (
                        <tr key={day}>
                          <td className="pr-8 py-1.5 font-bold uppercase tracking-wider text-xs">{day}</td>
                          <td className="py-1.5">{String(hours)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </dd>
              </div>
            </dl>
          </div>
          <div className="overflow-hidden" style={{ border: `4px solid ${OLIVE_DEEP}`, borderRadius: 16, minHeight: 460 }}>
            <iframe src={`https://maps.google.com/maps?output=embed&q=${encodeURIComponent(c.contact.mapEmbedQuery || c.contact.address)}`} width="100%" height="540" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>

      <footer className="py-14 text-center" style={{ backgroundColor: OLIVE_DEEP }}>
        <div className="display-text text-4xl mb-2" style={{ color: SAFFRON, fontWeight: 700 }}>Glendale Shawarma</div>
        <div className="accent-text text-2xl" style={{ color: CREAM }}>· charcoal · spices · sumac · glendale ·</div>
        <div className="text-[10px] uppercase tracking-[0.5em] mt-5 font-bold opacity-60" style={{ color: SAND }}>© {new Date().getFullYear()} glendale shawarma · glenoaks blvd</div>
      </footer>
    </main>
  );
}
