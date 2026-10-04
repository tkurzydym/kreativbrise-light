import type { Metadata } from "next";
import LegalPage, { Section } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Impressum · Kreativbrise",
  description: "Impressum der Kreativbrise — Anbieterkennzeichnung gemäß § 5 DDG.",
};

export default function Impressum() {
  return (
    <LegalPage title="Impressum">
      <Section title="Angaben gemäß § 5 DDG">
        <p>
          Marzena de Vries
          <br />
          Kreativbrise
          <br />
          Am Tiergarten 7
          <br />
          26603 Aurich
        </p>
      </Section>

      <Section title="Kontakt">
        <p>
          E-Mail: <a href="mailto:kreativbrise@gmail.com">kreativbrise@gmail.com</a>
        </p>
      </Section>

      <Section title="Wirtschafts-Identifikationsnummer">
        <p>
          Wirtschafts-Identifikationsnummer gemäß § 139c AO:
          <br/>
          DE464038872-00001
        </p>
      </Section>

      <Section title="Verbraucherstreitbeilegung / Universalschlichtungsstelle">
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </Section>
    </LegalPage>
  );
}
