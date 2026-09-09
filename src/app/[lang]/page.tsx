import Link from "next/link";
import { getDictionary } from "../../dictionaries";

export default async function Home({ params: { lang } }: { params: { lang: string } }) {
  const dict = await getDictionary(lang);
  const otherLang = lang === "en" ? "he" : "en";

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <header className="flex items-center justify-between p-6 max-w-6xl w-full mx-auto">
        <div className="text-2xl font-bold text-ms-orange">MS Hackathon</div>
        <nav className="flex items-center gap-6">
          <Link href={`/${otherLang}`} className="hover:text-ms-orange transition font-semibold">
            {lang === "en" ? "עברית" : "English"}
          </Link>
          <Link 
            href={`/${lang}/apply`} 
            className="bg-health-teal hover:bg-health-teal-dark text-white px-5 py-2 rounded-full transition font-semibold"
          >
            {dict.nav.apply}
          </Link>
        </nav>
      </header>

      <main className="flex-grow flex flex-col items-center">
        {/* Hero Section */}
        <section className="w-full bg-tech-slate text-white py-24 px-6 flex flex-col items-center text-center">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
              <span className="text-ms-orange">{dict.hero.title.split('.')[0]}.</span>
              <br />
              <span className="text-health-teal">{dict.hero.title.split('.')[1]}.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto">
              {dict.hero.subtitle}
            </p>
            <Link 
              href={`/${lang}/apply`} 
              className="inline-block bg-ms-orange hover:bg-ms-orange-dark text-white px-8 py-4 rounded-full text-lg font-bold transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {dict.hero.cta}
            </Link>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-6 max-w-4xl w-full text-center">
          <h2 className="text-4xl font-bold mb-6 text-tech-slate">{dict.about.title}</h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            {dict.about.description}
          </p>
        </section>
      </main>

      <footer className="w-full bg-slate-100 py-8 text-center text-slate-500 mt-auto border-t border-slate-200">
        <p>© 2026 MS Hackathon.</p>
      </footer>
    </div>
  );
}
