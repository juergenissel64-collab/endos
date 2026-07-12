# PF-03A – ENDOS Developer Operations Center

## 1. Zielstruktur

Kopiere diese beiden Ordner in das Stammverzeichnis von `endos-platform`:

```text
src/features/developer-operations
tools/devops
```

Danach sieht die Struktur so aus:

```text
endos-platform
├── src
│   └── features
│       └── developer-operations
├── tools
│   └── devops
├── package.json
└── ...
```

## 2. package.json ergänzen

In Deiner vorhandenen `package.json` ergänzt Du unter `"scripts"`:

```json
"ops": "node tools/devops/server.mjs"
```

Der vollständige Abschnitt lautet dann beispielsweise:

```json
"scripts": {
  "dev": "vite",
  "build": "tsc -b && vite build",
  "lint": "oxlint",
  "preview": "vite preview",
  "ops": "node tools/devops/server.mjs"
}
```

Die Pakete `express`, `cors` und `archiver` sind laut Deinem Screenshot bereits installiert.

## 3. Seite testweise in App.tsx anzeigen

Zum ersten Test kannst Du den Inhalt von `src/App.tsx` vorübergehend so setzen:

```tsx
import { DeveloperOperationsPage } from "./features/developer-operations";

function App() {
  return <DeveloperOperationsPage />;
}

export default App;
```

Später wird die Seite sauber in Deine Navigation integriert.

## 4. Operations Service starten

Im VS-Code-Terminal:

```powershell
npm run ops
```

Der Service läuft anschließend lokal unter:

```text
http://127.0.0.1:4177
```

## 5. ENDOS starten

Öffne ein zweites Terminal und führe aus:

```powershell
npm run dev
```

Danach kannst Du die sechs Schaltflächen in ENDOS testen.

## 6. Optional: API-Adresse per .env ändern

Nur falls Port 4177 bereits belegt ist:

Datei `.env.local`:

```text
VITE_ENDOS_OPS_API_BASE=http://127.0.0.1:4178
```

Und den Service so starten:

```powershell
$env:ENDOS_OPS_PORT=4178
npm run ops
```

## Sicherheitsmodell

- Bindung ausschließlich an `127.0.0.1`
- Zugriffe nur von lokalen `localhost`-Oberflächen
- keine freie Kommandoeingabe
- nur fest definierte Aktionen
- GitHub-Synchronisierung mit Bestätigungsdialog
- Backup-Ausschlüsse für `.git`, `node_modules`, `dist`, `_backups`, `_releases`

## Architecture-Freeze-Einordnung

PF-03A ist ein Engineering-Support-Modul.

Es verändert nicht:

- Core Engines
- Core Objects
- Core Relationships
- Architecture Layers

Damit bleibt der ENDOS Architecture Freeze M1 unangetastet.
