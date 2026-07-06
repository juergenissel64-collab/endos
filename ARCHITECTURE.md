# ENDOS – Enterprise Navigation & Decision Operating System

**ENDOS** ist eine Enterprise-Plattform für Navigation, Entscheidungsunterstützung, Evidenzbewertung, adaptive Methoden und kontinuierliches Lernen in komplexen Unternehmenssystemen.

Die Plattform zielt darauf, Führungskräften nicht nur Kennzahlen anzuzeigen, sondern Relevanz, Unsicherheit, Risiken, Chancen, Gaps und mögliche Handlungsoptionen strukturiert sichtbar zu machen.

## Mission

ENDOS soll den Übergang von klassischen Dashboards zu einem **Enterprise Navigation & Decision Operating System** ermöglichen.

Kernidee:

> Navigate uncertainty. Detect opportunities. Improve executive decisions.

## Vision

ENDOS soll langfristig eine integrierte Plattform werden für:

- Executive Mission Control
- Enterprise Architecture Explorer
- Knowledge Object Repository
- Decision Intelligence
- Patent & Research Intelligence
- Historical Replay Validation
- Pilot Evidence Management
- Enterprise Knowledge Graph

## Architecture Baseline

Die Foundation-Version folgt einer mehrschichtigen Grundarchitektur:

1. **Knowledge Layer** – Wissensobjekte, Evidenz, Quellen, Signale, Objektregister
2. **Methods Layer** – wiederverwendbare Methoden, Heuristiken, Modelle, Validierungslogiken
3. **Orchestration Layer** – adaptive Auswahl und Kombination geeigneter Methoden
4. **Execution Layer** – Handlungsvorschläge, Interventionen, Workflows, Sprintsteuerung
5. **Validation Layer** – Replay Cases, Evidence Book, Pilotvalidierung
6. **Learning Layer** – kontinuierliche Verbesserung durch Feedback, Gaps und neue Evidenz

## Repository Structure

```text
endos/
├── index.html
├── README.md
├── LICENSE
├── CHANGELOG.md
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── assets/
│   ├── css/
│   ├── js/
│   └── img/
├── docs/
│   ├── ARCHITECTURE.md
│   ├── ROADMAP.md
│   ├── RELEASE_NOTES.md
│   ├── VISION.md
│   └── FAQ.md
├── repository/
│   ├── Architecture_Decisions/
│   ├── Knowledge_Objects/
│   ├── Patent_Objects/
│   ├── Database/
│   └── Publications/
├── research/
├── patents/
├── pilots/
└── releases/
```


## Current Release

**V1.2 – Sprint 2 Mission Control** adds the first Executive Mission Control prototype as the operational entry point for ENDOS.

Open: `pages/mission-control.html`

## Current Release

**Foundation Release V1.1**

Includes:

- GitHub Pages landing page
- Professional repository structure
- README, roadmap, architecture and release documentation
- Foundation for Mission Control, Architecture Explorer and Repository Browser

## Roadmap

- **Sprint 1:** Foundation, GitHub Pages, documentation, release model
- **Sprint 2:** Executive Mission Control
- **Sprint 3:** Architecture Explorer
- **Sprint 4:** Knowledge Repository Browser
- **Sprint 5:** Validation Center and Historical Replay Cases
- **Sprint 6:** Patent Intelligence
- **Sprint 7:** Pilot Evidence Management
- **Sprint 8:** Enterprise Knowledge Graph

## GitHub Pages

The public website is served from:

```text
https://juergenissel64-collab.github.io/endos/
```

## Development Principle

ENDOS is developed sprint by sprint:

```text
Sprint → Release → GitHub → Online → Validation → Next Sprint
```

## Status

This repository is currently in **Foundation Stage**. The architecture is being consolidated, and the next implementation focus is Executive Mission Control.

## License

See `LICENSE`.


## Sprint 5 — Dynamic Knowledge Graph V1.5

This release introduces the first navigable ENDOS object graph. It connects architecture, knowledge objects, methods, orchestration, validation, patent objects, research and pilot domains.

Open: `pages/knowledge-graph.html`
