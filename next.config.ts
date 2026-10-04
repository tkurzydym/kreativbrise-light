import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Statischer Export für GitHub Pages: `next build` schreibt die Seite nach ./out
  output: "export",
  // /impressum → /impressum/index.html, damit GitHub Pages die Seiten ohne .html findet
  trailingSlash: true,
  // Mit Custom Domain leer. Ohne Domain (username.github.io/<repo>) setzt der
  // Deploy-Workflow den Pfad automatisch über actions/configure-pages.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  images: {
    // Die Next.js-Bildoptimierung braucht einen Server — beim Export nicht verfügbar.
    unoptimized: true,
  },
};

export default nextConfig;
