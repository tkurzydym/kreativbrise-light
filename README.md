# Kreativbrise Light

Schlanke, statische Kreativbrise-Website (Next.js, `output: "export"`) mit Startseite,
Impressum und Datenschutzerklärung — gehostet auf GitHub Pages.

## Entwicklung

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # statischer Export nach ./out
```

## Inhalte pflegen

- Impressum: `src/app/impressum/page.tsx`
- Datenschutz: `src/app/datenschutz/page.tsx`

Alle Platzhalter stehen in `[ eckigen Klammern ]`.

## Deployment

Jeder Push auf `main` baut die Seite und deployt sie über
`.github/workflows/deploy.yml` auf GitHub Pages.

Einmalig im Repository einrichten:

1. **Settings → Pages → Build and deployment → Source:** „GitHub Actions" wählen.
2. **Settings → Pages → Custom domain:** Domain eintragen und „Enforce HTTPS" aktivieren.
   Beim DNS-Anbieter einen `CNAME`-Eintrag (Subdomain) bzw. `A`/`AAAA`-Einträge (Apex-Domain)
   auf GitHub Pages setzen — eine `CNAME`-Datei im Repo ist bei Actions-Deployments nicht nötig.

Solange keine Custom Domain gesetzt ist, läuft die Seite unter `https://<user>.github.io/<repo>/`;
der Workflow setzt den nötigen `basePath` dann automatisch.
