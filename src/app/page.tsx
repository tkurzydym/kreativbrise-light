import Link from "next/link";
import Logo from "@/components/Logo";

const LINKS = [
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
];

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-10 px-6 py-16">
      <h1 className="sr-only">Kreativbrise</h1>
      <Logo
        size={280}
        priority
        className="block h-[200px] w-[200px] md:h-[280px] md:w-[280px]"
      />
      <nav className="flex items-center gap-8">
        {LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-[13px] uppercase tracking-[2px] text-muted transition-colors duration-150 hover:text-ink"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </main>
  );
}
