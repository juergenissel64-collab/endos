import type { DeveloperOperationDefinition } from "../types";

export const developerOperations: DeveloperOperationDefinition[] = [
  {
    id: "start",
    icon: "▶️",
    title: "ENDOS starten",
    description: "Startet den lokalen Vite-Entwicklungsserver.",
    method: "POST",
    endpoint: "/api/start",
  },
  {
    id: "build",
    icon: "🧪",
    title: "Build testen",
    description: "Prüft TypeScript und erstellt den Produktions-Build.",
    method: "POST",
    endpoint: "/api/build",
  },
  {
    id: "backup",
    icon: "💾",
    title: "Backup erstellen",
    description: "Erstellt ein ZIP-Backup des ENDOS-Projekts.",
    method: "POST",
    endpoint: "/api/backup",
  },
  {
    id: "sync",
    icon: "⬆️",
    title: "GitHub synchronisieren",
    description: "Commit, Pull --rebase und Push in einer Aktion.",
    method: "POST",
    endpoint: "/api/sync",
    confirmationMessage:
      "Lokale Änderungen werden committed und mit GitHub synchronisiert. Fortfahren?",
  },
  {
    id: "release",
    icon: "📦",
    title: "Release erstellen",
    description: "Erstellt nach erfolgreichem Build ein Release-ZIP.",
    method: "POST",
    endpoint: "/api/release",
  },
  {
    id: "status",
    icon: "📋",
    title: "Git-Status anzeigen",
    description: "Zeigt Branch, Änderungen und Git-Remotes.",
    method: "GET",
    endpoint: "/api/status",
  },
];
