import Link from "next/link";
import Logo from "@/components/Logo";

/** Rahmen für Impressum und Datenschutz: Logo, Überschrift, Inhalt, Zurück-Link. */
export default function LegalPage({
  title,
  stand,
  children,
}: {
  title: string;
  /** Optionales Datum „Stand: …" unter der Überschrift */
  stand?: string;
  children: React.ReactNode;
}) {
  return (
    <main className="flex-1">
      <div className="flex justify-center pb-10 pt-14">
        <Link href="/" aria-label="Zur Startseite">
          <Logo size={110} className="block h-[110px] w-[110px]" />
        </Link>
      </div>

      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-9 px-7 pb-20 md:px-12">
        <div className="flex flex-col items-center gap-2.5 text-center">
          <h1 className="font-heading text-[28px] font-normal uppercase tracking-[4px] text-ink">
            {title}
          </h1>
          <span className="h-px w-12 bg-tan-light" aria-hidden="true" />
          {stand && (
            <p className="text-[12px] uppercase tracking-[2px] text-faint">
              Stand: {stand}
            </p>
          )}
        </div>

        {children}

        <Link
          href="/"
          className="self-center border-b border-[#d9d2c2] pb-0.5 text-[13px] uppercase tracking-[2px] text-faint transition-colors duration-150 hover:text-ink"
        >
          ← Zurück zur Startseite
        </Link>
      </div>
    </main>
  );
}

/** Ein Abschnitt mit kleiner Tan-Überschrift; Absätze als <p> übergeben. */
export function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-[13px] font-normal uppercase tracking-[2px] text-tan">
        {title}
      </h2>
      <div className="flex flex-col gap-3 text-[14px] leading-[1.8] text-body [&_a]:underline [&_a]:decoration-tan-light [&_a]:underline-offset-2 hover:[&_a]:text-ink">
        {children}
      </div>
    </section>
  );
}
