# SEO-Nachruestung fuer Al-Quran Al-Karim

## Zielbild
- Die App bleibt eine Vanilla-JS-SPA, bekommt aber eine statische SEO-Schicht fuer GitHub Pages.
- Startseite, 114 Suren und 30 Juz' sind ueber feste URLs direkt aufrufbar und haben jeweils eigene SEO-Metadaten.
- Laufzeitnavigation und Browser-History bleiben konsistent, damit Nutzer und Suchmaschinen nicht nur eine leere Shell sehen.

## Umsetzungsphasen
1. SEO-Datenmodell und Generator einrichten.
2. Startseite mit Canonical, Open Graph, Twitter Cards, Structured Data und statischem Intro erweitern.
3. Statische Surah- und Juz-Seiten generieren.
4. Client-Routing, `pushState`, `popstate` und Meta-Synchronisierung in der App nachruesten.
5. Sitemap, `robots.txt` und Crawlability pruefen.
6. Performance-Verbesserungen im Initial Load und bei der Suche umsetzen.

## Architektur
- `assets/js/seo-data.js` ist die gemeinsame Datenquelle fuer Surah- und Juz-Metadaten.
- `scripts/generate-seo.mjs` erzeugt daraus:
  - `assets/js/seo-data.js`
  - `surah/*/index.html`
  - `juz/*/index.html`
  - `sitemap.xml`
  - `robots.txt`
- [index.html](/d:/Meine%20Projekte/al-quran-repo/index.html) bleibt der gemeinsame App-Shell-Einstiegspunkt fuer die Startseite.
- [assets/js/app.js](/d:/Meine%20Projekte/al-quran-repo/assets/js/app.js) liest die URL, oeffnet die passende Ansicht und synchronisiert Laufzeit-Metadaten.

## Akzeptanzkriterien
- Die Startseite liefert bereits im initialen HTML eigene SEO-Tags und strukturierte Daten.
- Jede Surah-URL und jede Juz-URL liefert im initialen HTML individuelle Titel, Beschreibungen, Canonicals und sichtbaren Intro-Content.
- In-App-Navigation aktualisiert URL, Browser-History und Metadaten ohne Full Reload.
- Browser `Back` und `Forward` funktionieren zwischen Home, Surah und Juz.
- `sitemap.xml` listet Home, alle 114 Suren und alle 30 Juz'.
- `robots.txt` verweist auf die finale GitHub-Pages-Sitemap.
- Der Suchindex wird nicht mehr ungefragt beim Initial Load komplett geladen.

## Laufende Annahmen
- Die kanonische Produktions-URL ist `https://c0dewiz4rd010.github.io/al-quran-repo/`.
- Deutsch ist die primaere SEO-Sprache.
- Die bestehenden Features fuer Audio, Bookmarks, Theme und UI-Sprache bleiben erhalten.
- Der SEO-Generator darf die Quran-Metadaten einmalig ueber die AlQuran Cloud API abrufen.
