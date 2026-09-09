import Link from "next/link";
import { getDictionary } from "../../dictionaries";

export default async function Home({ params: { lang } }: { params: { lang: string } }) {
  const dict = await getDictionary(lang);
  const otherLang = lang === "en" ? "he" : "en";

  return (
    <div className="min-h-screen bg-slate-50 text-tech-slate flex flex-col font-sans">
      {/* Header */}
      <header className="flex items-center justify-between p-6 max-w-6xl w-full mx-auto">
        <div className="text-xl font-bold text-brand-navy hidden sm:block">
          {dict.hero.invite}
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
          {/* Tech/Brain abstract background lines could go here via pseudo-elements or absolute divs */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-cyan via-brand-navy to-black"></div>
          
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

        {/* About / Partners Section */}
        <section className="py-12 px-6 w-full bg-slate-100 flex flex-col items-center text-center border-t border-slate-200">
          <h3 className="text-2xl font-bold mb-6 text-brand-navy">{dict.about.title}</h3>
          <p className="text-xl font-semibold text-slate-600 max-w-2xl">
            {dict.about.description}
          </p>
        </section>
      </main>

      <footer className="w-full bg-tech-slate py-8 text-center text-slate-400 mt-auto">
        <p>© 2026 MS Hackathon - Shamir Medical Center.</p>
      </footer>
    </div>
  );
}
