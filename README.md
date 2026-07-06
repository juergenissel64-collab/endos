# ENDOS Mission Control V4.1 Fixed

Diese Version enthält zwei Startwege:

## 1. Sofort öffnen ohne Installation
Öffne per Doppelklick:

`START_HERE_OFFLINE_PREVIEW.html`

oder direkt:

`offline_preview/index.html`

Diese Offline-Preview lädt keine externen Dateien und zeigt sofort Inhalte an.

## 2. Developer-Projekt starten
Das React/TypeScript-Projekt liegt weiterhin unter `frontend/`.

```bash
cd frontend
npm install
npm run dev
```

Dann im Browser die von Vite angezeigte lokale Adresse öffnen, typischerweise `http://localhost:5173`.

## Warum V4.0 weiß blieb
React/Vite-Projekte können nicht zuverlässig direkt per Doppelklick über `file://` gestartet werden. Dafür ist ein lokaler Entwicklungsserver nötig. V4.1 ergänzt deshalb eine robuste Offline-Preview.

---

# ENDOS Mission Control V4.0

**Status:** Foundation scaffold / Einstiegspaket für Softwareentwicklung  
**Ziel:** ENDOS von statischen HTML-Prototypen in ein wartbares, versioniertes Softwareprojekt überführen.

## Leitidee
ENDOS Mission Control (EMC) ist die oberste Steuerungs- und Entwicklungsoberfläche für das ENDOS-/EMAR-Ökosystem.

Es integriert:

- Universe Explorer – Gesamtnavigation
- EMAR – Wissens- und Architekturrepository
- Patent Studio – IP-Management
- Scientific Studio – Forschung und Publikationen
- Software Studio – Architektur und Implementierung
- Business Studio – Markt, Partner und Lizenzierung
- Validation Studio – Evidenz, Simulationen und Pilotprojekte
- Mission Control – Prioritäten, Roadmap, Reifegrad und tägliche Empfehlungen

## Technologie-Stack

| Ebene | Technologie |
|---|---|
| Frontend | React + TypeScript + Vite |
| Backend | FastAPI / Python |
| Strukturierte Daten | PostgreSQL |
| Wissensgraph | Neo4j |
| Container | Docker Compose |
| Tests | pytest, Vitest vorbereitet |
| CI/CD | GitHub Actions vorbereitet |

## Schnellstart

### 1. Repository entpacken

```bash
cd ENDOS_Mission_Control_v4
```

### 2. Infrastruktur starten

```bash
docker compose up --build
```

### 3. Frontend öffnen

```text
http://localhost:5173
```

### 4. Backend API

```text
http://localhost:8000/docs
```

## Entwicklungsreleases

### R4.1 Core Platform
- Executive Dashboard
- Universe Explorer
- EMAR Object Registry
- Relationship Registry
- Digital Identity

### R4.2 Engineering Studios
- Patent Studio
- Scientific Studio
- Software Studio
- Business Studio
- Validation Studio

### R4.3 Intelligence Layer
- Repository Intelligence Engine (RIE)
- Architecture Refactoring Engine (ARE)
- Knowledge Consistency Engine (KCE)
- IP Intelligence Engine (IPIE)
- Scientific Gap Engine (SGE)
- Commercial Opportunity Engine (COE)
- Sherlock Mode

### R4.4 Generator Layer
- Patent Generator
- Journal Generator
- Software Documentation Generator
- Executive Report Generator
- Presentation Generator

## Wichtiger Hinweis
Dieses Paket ist ein technisches Foundation-Repository. Es enthält lauffähige Struktur, Seed-Daten, API-Stubs und UI-Prototypen, aber noch keine produktive Datenbanklogik oder vollständige KI-Orchestrierung.
