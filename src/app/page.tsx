import Link from "next/link";
import Logo from "@/components/Logo";

const LINKS = [
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
];

const INSTAGRAM_HANDLE = "kreativbrise";

function InstagramIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-10 px-6 py-16">
      <h1 className="sr-only">Kreativbrise</h1>
      <Logo
        size={280}
        priority
        className="block h-[200px] w-[200px] md:h-[280px] md:w-[280px]"
      />
      <a
        href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Kreativbrise auf Instagram (@${INSTAGRAM_HANDLE})`}
        className="text-tan transition-colors duration-150 hover:text-ink"
      >
        <InstagramIcon />
      </a>
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
