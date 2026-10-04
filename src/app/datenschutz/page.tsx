import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Datenschutzerklärung · Kreativbrise",
  description:
    "Datenschutzerklärung der Kreativbrise — Informationen zur Verarbeitung personenbezogener Daten.",
};

/*
 * Datenschutzerklärung aus dem eRecht24-Generator (PDF), inhaltlich unverändert
 * übernommen und nur an das Kreativbrise-Design angepasst.
 */

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-heading text-[20px] font-normal tracking-[1px] text-ink">
      {children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="pt-2 text-[13px] font-normal uppercase tracking-[2px] text-tan">
      {children}
    </h3>
  );
}

function H4({ children }: { children: React.ReactNode }) {
  return <h4 className="pt-1 font-semibold text-ink">{children}</h4>;
}

export default function Datenschutzerklaerung() {
  return (
    <LegalPage title="Datenschutz">
      <div className="flex flex-col gap-4 text-[14px] leading-[1.8] text-body hyphens-auto [&_a]:underline [&_a]:decoration-tan-light [&_a]:underline-offset-2 hover:[&_a]:text-ink [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5">
        <H2>1. Datenschutz auf einen Blick</H2>

        <H3>Allgemeine Hinweise</H3>
        <p>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was
          mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
          besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
          persönlich identifiziert werden können. Ausführliche Informationen
          zum Thema Datenschutz entnehmen Sie unserer unter diesem Text
          aufgeführten Datenschutzerklärung.
        </p>

        <H3>Datenerfassung auf dieser Website</H3>
        <H4>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</H4>
        <p>
          Die Datenverarbeitung auf dieser Website erfolgt durch den
          Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt
          „Hinweis zur verantwortlichen Stelle“ in dieser
          Datenschutzerklärung entnehmen.
        </p>
        <H4>Wie erfassen wir Ihre Daten?</H4>
        <p>
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
          mitteilen. Hierbei kann es sich z.&nbsp;B. um Daten handeln, die Sie
          uns per E-Mail schicken. Ein Kontaktformular gibt es auf dieser
          Website nicht.
        </p>
        <p>
          Andere Daten werden beim Besuch der Website automatisch durch die
          IT-Systeme unseres Hosters erfasst. Das ist vor allem Ihre
          IP-Adresse; darüber hinaus können technische Daten (z.&nbsp;B.
          Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs)
          verarbeitet werden. Die Erfassung dieser Daten erfolgt automatisch,
          sobald Sie diese Website betreten.
        </p>
        <H4>Wofür nutzen wir Ihre Daten?</H4>
        <p>
          Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung
          der Website zu gewährleisten. Andere Daten können zur Analyse Ihres
          Nutzerverhaltens verwendet werden. Sofern über die Website Verträge
          geschlossen oder angebahnt werden können, werden die übermittelten
          Daten auch für Vertragsangebote, Bestellungen oder sonstige
          Auftragsanfragen verarbeitet.
        </p>
        <H4>Welche Rechte haben Sie bezüglich Ihrer Daten?</H4>
        <p>
          Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft,
          Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu
          erhalten. Sie haben außerdem ein Recht, die Berichtigung oder
          Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur
          Datenverarbeitung erteilt haben, können Sie diese Einwilligung
          jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht,
          unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer
          personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein
          Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
        </p>
        <p>
          Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich
          jederzeit an uns wenden.
        </p>

        <H2>2. Hosting</H2>
        <p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>

        <H3>Externes Hosting</H3>
        <p>
          Diese Website wird extern gehostet. Es handelt sich um eine statische
          Website ohne Kontaktformular, Benutzerkonten oder Bestellfunktion.
          Auf den Servern des Hosters werden daher keine Daten gespeichert, die
          Sie aktiv eingeben. Beim Aufruf der Website verarbeitet der Hoster
          jedoch technisch bedingt Zugriffsdaten, insbesondere Ihre
          IP-Adresse (siehe „Server-Log-Dateien“).
        </p>
        <p>
          Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung
          gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1
          lit. b DSGVO) und im Interesse einer sicheren, schnellen und
          effizienten Bereitstellung unseres Online-Angebots durch einen
          professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine
          entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung
          ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25
          Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von Cookies
          oder den Zugriff auf Informationen im Endgerät des Nutzers (z.&nbsp;B.
          Device-Fingerprinting) im Sinne des TDDDG umfasst. Die Einwilligung
          ist jederzeit widerrufbar.
        </p>
        <p>Wir setzen folgende(n) Hoster ein:</p>
        <p>
          Github Pages von GitHub Inc
          <br />
          88 Colin P. Kelly Jr. Street
          <br />
          San Francisco, CA 94107, USA
        </p>
        <p>
          GitHub verarbeitet die beim Aufruf anfallenden Zugriffsdaten nach
          eigenen Datenschutzbestimmungen. Weitere Informationen finden Sie in
          der{" "}
          <a
            href="https://docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement"
            target="_blank"
            rel="noopener noreferrer"
          >
            Datenschutzerklärung von GitHub
          </a>
          .
        </p>

        <H3>Datenübermittlung in die USA</H3>
        <p>
          Da GitHub seinen Sitz in den USA hat und Daten auch dort verarbeitet,
          können beim Aufruf dieser Website personenbezogene Daten
          (insbesondere Ihre IP-Adresse) in die USA übermittelt werden. GitHub
          Inc. ist nach dem EU-U.S. Data Privacy Framework (DPF) zertifiziert.
          Für die USA liegt damit ein Angemessenheitsbeschluss der
          EU-Kommission vor (Art. 45 DSGVO), der die Übermittlung an
          zertifizierte Unternehmen erlaubt. Ergänzend stützt sich GitHub auf
          die Standardvertragsklauseln der EU-Kommission (Art. 46 Abs. 2 lit. c
          DSGVO).
        </p>

        <H2>3. Allgemeine Hinweise und Pflicht&shy;informationen</H2>

        <H3>Datenschutz</H3>
        <p>
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
          Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
          vertraulich und entsprechend den gesetzlichen
          Datenschutzvorschriften sowie dieser Datenschutzerklärung.
        </p>
        <p>
          Wenn Sie diese Website benutzen, werden verschiedene
          personenbezogene Daten erhoben. Personenbezogene Daten sind Daten,
          mit denen Sie persönlich identifiziert werden können. Die vorliegende
          Datenschutzerklärung erläutert, welche Daten wir erheben und wofür
          wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das
          geschieht.
        </p>
        <p>
          Wir weisen darauf hin, dass die Datenübertragung im Internet
          (z.&nbsp;B. bei der Kommunikation per E-Mail) Sicherheitslücken
          aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff
          durch Dritte ist nicht möglich.
        </p>

        <H3>Hinweis zur verantwortlichen Stelle</H3>
        <p>
          Die verantwortliche Stelle für die Datenverarbeitung auf dieser
          Website ist:
        </p>
        <p>
          Marzena de Vries
          <br />
          Kreativbrise
          <br />
          Am Tiergarten 7
          <br />
          26603 Aurich
        </p>
        <p>
          E-Mail: <a href="mailto:kreativbrise@gmail.com">kreativbrise@gmail.com</a>
        </p>
        <p>
          Verantwortliche Stelle ist die natürliche oder juristische Person,
          die allein oder gemeinsam mit anderen über die Zwecke und Mittel der
          Verarbeitung von personenbezogenen Daten (z.&nbsp;B. Namen,
          E-Mail-Adressen o.&nbsp;Ä.) entscheidet.
        </p>

        <H3>Speicherdauer</H3>
        <p>
          Soweit innerhalb dieser Datenschutzerklärung keine speziellere
          Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten
          bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie
          ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung
          zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern
          wir keine anderen rechtlich zulässigen Gründe für die Speicherung
          Ihrer personenbezogenen Daten haben (z.&nbsp;B. steuer- oder
          handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall
          erfolgt die Löschung nach Fortfall dieser Gründe.
        </p>

        <H3>
          Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf
          dieser Website
        </H3>
        <p>
          Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten
          wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit.
          a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere
          Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle
          einer ausdrücklichen Einwilligung in die Übertragung
          personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung
          außerdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in
          die Speicherung von Cookies oder in den Zugriff auf Informationen in
          Ihr Endgerät (z.&nbsp;B. via Device-Fingerprinting) eingewilligt
          haben, erfolgt die Datenverarbeitung zusätzlich auf Grundlage von §
          25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar. Sind
          Ihre Daten zur Vertragserfüllung oder zur Durchführung
          vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre Daten
          auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren
          verarbeiten wir Ihre Daten, sofern diese zur Erfüllung einer
          rechtlichen Verpflichtung erforderlich sind, auf Grundlage von Art. 6
          Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage
          unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO
          erfolgen. Über die jeweils im Einzelfall einschlägigen
          Rechtsgrundlagen wird in den folgenden Absätzen dieser
          Datenschutzerklärung informiert.
        </p>

        <H3>Empfänger von personenbezogenen Daten</H3>
        <p>
          Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen
          externen Stellen zusammen. Dabei ist teilweise auch eine Übermittlung
          von personenbezogenen Daten an diese externen Stellen erforderlich.
          Wir geben personenbezogene Daten nur dann an externe Stellen weiter,
          wenn dies im Rahmen einer Vertragserfüllung erforderlich ist, wenn
          wir gesetzlich hierzu verpflichtet sind (z.&nbsp;B. Weitergabe von
          Daten an Steuerbehörden), wenn wir ein berechtigtes Interesse nach
          Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn eine
          sonstige Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz
          von Auftragsverarbeitern geben wir personenbezogene Daten unserer
          Kunden nur auf Grundlage eines gültigen Vertrags über
          Auftragsverarbeitung weiter. Im Falle einer gemeinsamen Verarbeitung
          wird ein Vertrag über gemeinsame Verarbeitung geschlossen.
        </p>

        <H3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</H3>
        <p>
          Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
          Einwilligung möglich. Sie können eine bereits erteilte Einwilligung
          jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf
          erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
        </p>

        <H3>
          Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie
          gegen Direktwerbung (Art. 21 DSGVO)
        </H3>
        <p>
          WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER
          F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH
          AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER
          PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN
          AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE
          RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE
          DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR
          IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI
          DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG
          NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER
          DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG
          VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
        </p>
        <p>
          WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU
          BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE
          VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE
          DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING,
          SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE
          WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT
          MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21
          ABS. 2 DSGVO).
        </p>

        <H3>
          Beschwerde&shy;recht bei der zuständigen Aufsichts&shy;behörde
        </H3>
        <p>
          Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein
          Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem
          Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes
          oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht
          besteht unbeschadet anderweitiger verwaltungsrechtlicher oder
          gerichtlicher Rechtsbehelfe.
        </p>

        <H3>Recht auf Daten&shy;übertrag&shy;barkeit</H3>
        <p>
          Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung
          oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich
          oder an einen Dritten in einem gängigen, maschinenlesbaren Format
          aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten
          an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit
          es technisch machbar ist.
        </p>

        <H3>Auskunft, Berichtigung und Löschung</H3>
        <p>
          Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit
          das Recht auf unentgeltliche Auskunft über Ihre gespeicherten
          personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck
          der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder
          Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema
          personenbezogene Daten können Sie sich jederzeit an uns wenden.
        </p>

        <H3>Recht auf Einschränkung der Verarbeitung</H3>
        <p>
          Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer
          personenbezogenen Daten zu verlangen. Hierzu können Sie sich
          jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung
          besteht in folgenden Fällen:
        </p>
        <ul>
          <li>
            Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten
            personenbezogenen Daten bestreiten, benötigen wir in der Regel
            Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das
            Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen
            Daten zu verlangen.
          </li>
          <li>
            Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig
            geschah/geschieht, können Sie statt der Löschung die Einschränkung
            der Datenverarbeitung verlangen.
          </li>
          <li>
            Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie
            jedoch zur Ausübung, Verteidigung oder Geltendmachung von
            Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung
            die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
            verlangen.
          </li>
          <li>
            Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt
            haben, muss eine Abwägung zwischen Ihren und unseren Interessen
            vorgenommen werden. Solange noch nicht feststeht, wessen Interessen
            überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung
            Ihrer personenbezogenen Daten zu verlangen.
          </li>
        </ul>
        <p>
          Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt
          haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit
          Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder
          Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer
          anderen natürlichen oder juristischen Person oder aus Gründen eines
          wichtigen öffentlichen Interesses der Europäischen Union oder eines
          Mitgliedstaats verarbeitet werden.
        </p>

        <H3>SSL- bzw. TLS-Verschlüsselung</H3>
        <p>
          Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
          Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder
          Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw.
          TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie
          daran, dass die Adresszeile des Browsers von „http://“ auf „https://“
          wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
        </p>
        <p>
          Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die
          Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen
          werden.
        </p>

        <H2>4. Datenerfassung auf dieser Website</H2>

        <H3>Server-Log-Dateien</H3>
        <p>
          Beim Aufruf dieser Website protokolliert unser Hoster GitHub
          automatisch Ihre IP-Adresse und speichert sie aus Sicherheitsgründen,
          unabhängig davon, ob Sie bei GitHub angemeldet sind. Darüber hinaus
          können weitere technische Informationen verarbeitet werden, die Ihr
          Browser beim Seitenaufruf übermittelt, z.&nbsp;B.:
        </p>
        <ul>
          <li>Browsertyp und Browserversion</li>
          <li>verwendetes Betriebssystem</li>
          <li>Referrer URL</li>
          <li>Datum und Uhrzeit der Serveranfrage</li>
        </ul>
        <p>
          Wir selbst haben keinen Zugriff auf diese Server-Log-Dateien und
          führen sie nicht mit anderen Datenquellen zusammen.
        </p>
        <p>
          Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f
          DSGVO. Wir haben ein berechtigtes Interesse an einer sicheren und
          technisch fehlerfreien Bereitstellung unserer Website.
        </p>

        <H3>Anfrage per E-Mail, Telefon oder Telefax</H3>
        <p>
          Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre
          Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten
          (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns
          gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre
          Einwilligung weiter.
        </p>
        <p>
          Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
          lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags
          zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
          erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf
          unserem berechtigten Interesse an der effektiven Bearbeitung der an
          uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
          Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt
          wurde; die Einwilligung ist jederzeit widerrufbar.
        </p>
        <p>
          Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben
          bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur
          Speicherung widerrufen oder der Zweck für die Datenspeicherung
          entfällt (z.&nbsp;B. nach abgeschlossener Bearbeitung Ihres
          Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere
          gesetzliche Aufbewahrungsfristen – bleiben unberührt.
        </p>

        <p className="pt-2 text-[13px] text-muted">
          Quelle:{" "}
          <a
            href="https://www.e-recht24.de"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.e-recht24.de
          </a>
        </p>
      </div>
    </LegalPage>
  );
}
