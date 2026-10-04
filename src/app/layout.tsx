import type { Metadata } from "next";
import { Cinzel, Karla } from "next/font/google";
import "./globals.css";

// next/font lädt die Schriften beim Build herunter und liefert sie lokal aus —
// im Browser findet kein Abruf von Google-Servern statt.
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cinzel",
  display: "swap",
});

const karla = Karla({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-karla",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kreativbrise — Handgemachte Lieblingsstücke",
  description: "Kreativbrise — handgemachte Papeterie aus Aurich.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de"
      className={`${cinzel.variable} ${karla.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
