import Link from "next/link";
import { getDictionary } from "../../dictionaries";
import { BrainCircuit } from "lucide-react";

export default async function Home({ params: { lang } }: { params: { lang: string } }) {
  const dict = await getDictionary(lang);
  const otherLang = lang === "en" ? "he" : "en";

  return (
    <div className="min-h-screen bg-slate-50 text-tech-slate flex flex-col font-sans">
      {/* Header */}
      <header className="flex items-center justify-between p-6 max-w-6xl w-full mx-auto relative z-20">
        <div className="flex items-center gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/shamir-logo.png" alt="Shamir Medical Center" className="h-12 md:h-14 w-auto object-contain" />
        </div>
        <nav className="flex items-center gap-6 ms-auto">
          <Link href={`/${otherLang}`} className="hover:text-brand-cyan transition font-semibold text-lg">
            {lang === "en" ? "עברית" : "English"}
          </Link>
          <Link 
            href={`/${lang}/apply`} 
            className="bg-brand-cyan hover:bg-brand-cyan-light text-white px-6 py-2 rounded-full transition font-semibold shadow-md"
          >
            {dict.nav.apply}
          </Link>
        </nav>
      </header>

      <main className="flex-grow flex flex-col items-center w-full">
        {/* Hero Section */}
        <section className="w-full bg-brand-navy text-white py-20 px-6 flex flex-col items-center text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-cyan via-brand-navy to-black"></div>
          
          <BrainCircuit className="absolute -left-20 top-10 text-brand-cyan opacity-20 w-96 h-96 animate-pulse" strokeWidth={0.5} />
          <BrainCircuit className="absolute -right-20 bottom-10 text-brand-cyan opacity-20 w-96 h-96" strokeWidth={0.5} />

          <div className="max-w-4xl relative z-10 flex flex-col items-center">
            <h2 className="text-xl md:text-2xl text-brand-cyan-light mb-4 font-semibold tracking-wide">
              {dict.hero.invite}
            </h2>
            <h1 className="text-6xl md:text-8xl font-extrabold mb-6 tracking-tight text-white drop-shadow-lg">
              {dict.hero.title}
            </h1>
            <h3 className="text-2xl md:text-4xl font-bold text-brand-cyan mb-8">
              {dict.hero.subtitle}
            </h3>
            <p className="text-lg md:text-xl text-slate-200 mb-12 max-w-3xl leading-relaxed">
              {dict.hero.description}
            </p>
            <Link 
              href={`/${lang}/apply`} 
              className="inline-block bg-brand-cyan hover:bg-brand-cyan-light text-brand-navy px-10 py-4 rounded-full text-xl font-bold transition shadow-xl transform hover:-translate-y-1"
            >
              {dict.hero.cta}
            </Link>
          </div>
        </section>

        {/* Details Section (Card) */}
        <section className="px-6 w-full flex justify-center -mt-10 relative z-20 mb-20">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-4xl w-full border-t-4 border-brand-cyan text-center flex flex-col items-center gap-6">
            
            <div className="mb-4">
              <h4 className="text-xl font-semibold text-slate-500 mb-2">{dict.details.topicTitle}</h4>
              <h2 className="text-2xl md:text-3xl font-bold text-brand-navy">{dict.details.topicDesc}</h2>
            </div>
            
            <div className="flex flex-col gap-4 text-lg text-slate-700 font-medium">
              <div className="flex items-center justify-center gap-3">
                <span className="text-brand-cyan text-2xl">📅</span>
                <span>{dict.details.date}</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <span className="text-brand-cyan text-2xl">📍</span>
                <span>{dict.details.location}</span>
              </div>
              <div className="flex items-center justify-center gap-3 mt-4 bg-slate-100 py-3 px-6 rounded-lg">
                <span className="text-brand-cyan text-2xl">📝</span>
                <span className="text-brand-navy font-bold">{dict.details.cost}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Partners & Footer Logos Section */}
        <section className="py-10 px-6 w-full bg-[#001738] border-t border-slate-700/60 flex justify-center">
          <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-8">
            {/* 1. FA Code (Typed text) */}
            <div className="text-slate-400 font-mono text-sm tracking-widest font-semibold order-3 md:order-1">
              FA-11764229
            </div>

            {/* 2. Novartis with typed 'בשיתוף עם:' */}
            <div className="flex flex-col sm:flex-row items-center gap-3 order-2">
              <span className="text-white text-base md:text-lg font-medium">
                {lang === "he" ? "בשיתוף עם:" : "In collaboration with:"}
              </span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo-novartis-white.svg"
                alt="Novartis"
                className="h-9 md:h-11 w-auto object-contain"
              />
            </div>

            {/* 3. The official logo for הבית לחולי טרשת נפוצה */}
            <div className="flex items-center order-1 md:order-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo-mshome-white.png"
                alt="הבית לחולי טרשת נפוצה"
                className="h-14 md:h-16 w-auto object-contain"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full bg-[#000f24] py-6 text-center text-slate-500 text-sm border-t border-slate-800">
        <p>© 2026 MS Hackathon - Shamir Medical Center.</p>
      </footer>
    </div>
  );
}
