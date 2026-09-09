import Link from "next/link";
import { getDictionary } from "../../../dictionaries";
import ApplicationForm from "../../../components/ApplicationForm";

export default async function ApplyPage({ params: { lang } }: { params: { lang: string } }) {
  const dict = await getDictionary(lang);

  return (
    <div className="min-h-screen bg-slate-50 text-foreground flex flex-col font-sans py-12 px-6 items-center">
      <header className="w-full max-w-4xl mb-10">
        <Link href={`/${lang}`} className="text-ms-orange hover:underline font-semibold text-lg flex items-center gap-2">
          {lang === "he" ? "← " : "← "}
          {dict.nav.home}
        </Link>
      </header>

      <ApplicationForm dict={dict} lang={lang} />
    </div>
  );
}
