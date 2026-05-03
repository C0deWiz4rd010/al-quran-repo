# Al-Quran Al-Karim

Eine statische Quran-Web-App fuer GitHub Pages mit Suren-Ansicht, Juz-Navigation, Sajda-Versen, Suche, Lesezeichen, Uebersetzungen und Audio-Rezitationen.

## Projektstruktur

- `index.html` ist der Einstiegspunkt fuer GitHub Pages.
- `assets/css/styles.css` enthaelt das Styling.
- `assets/js/app.js` enthaelt App-Logik, API-Zugriffe und UI-Events.
- `al-quran-favicon-package/` enthaelt die Favicons fuer Browser und mobile Homescreens.

## Lokal starten

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Danach im Browser oeffnen:

```text
http://127.0.0.1:4173/
```

## GitHub Pages

Das Repository kann direkt als statische GitHub Page veroeffentlicht werden. Wichtig ist, dass `index.html`, `assets/` und `al-quran-favicon-package/` zusammen hochgeladen werden.

## Datenquellen

Die Quran-Daten, Uebersetzungen, Sajda-Verse und Audio-URLs werden ueber die AlQuran Cloud API geladen:

```text
https://api.alquran.cloud/v1
```
