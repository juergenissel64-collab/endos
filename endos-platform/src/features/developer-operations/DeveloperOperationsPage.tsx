import { useState } from "react";
import { executeDeveloperOperation } from "./api/developerOperationsApi";
import { OperationCard } from "./components/OperationCard";
import { OperationsConsole } from "./components/OperationsConsole";
import { developerOperations } from "./data/operations";
import type {
  DeveloperOperationDefinition,
  DeveloperOperationId,
  DeveloperOperationResult,
} from "./types";
import "./developerOperations.css";

const initialResult: DeveloperOperationResult = {
  ok: true,
  title: "System bereit",
  output: "Der ENDOS Developer Operations Service wartet auf eine Aktion.",
};

export function DeveloperOperationsPage() {
  const [activeOperation, setActiveOperation] =
    useState<DeveloperOperationId | null>(null);
  const [result, setResult] =
    useState<DeveloperOperationResult>(initialResult);

  async function execute(
    operation: DeveloperOperationDefinition,
  ): Promise<void> {
    if (
      operation.confirmationMessage &&
      !window.confirm(operation.confirmationMessage)
    ) {
      return;
    }

    setActiveOperation(operation.id);
    setResult({
      ok: true,
      title: `${operation.title} läuft`,
      output: "Bitte warten …",
    });

    try {
      setResult(await executeDeveloperOperation(operation));
    } catch (error) {
      setResult({
        ok: false,
        title: "Aktion fehlgeschlagen",
        output:
          (error instanceof Error ? error.message : "Unbekannter Fehler") +
          '\n\nPrüfe, ob „npm run ops“ läuft.',
      });
    } finally {
      setActiveOperation(null);
    }
  }

  return (
    <main className="developer-operations">
      <header className="developer-operations__header">
        <div>
          <p className="developer-operations__eyebrow">
            PF-03A · ENDOS Engineering Workspace
          </p>
          <h1>Developer Operations Center</h1>
          <p className="developer-operations__intro">
            Start, Build, Backup, GitHub, Release und Git-Status in einer
            zentralen Bedienoberfläche.
          </p>
        </div>
        <div
          className={
            result.ok
              ? "developer-operations__status developer-operations__status--ok"
              : "developer-operations__status developer-operations__status--error"
          }
        >
          {result.ok ? "System bereit" : "Prüfung erforderlich"}
        </div>
      </header>

      <section className="developer-operations__grid">
        {developerOperations.map((operation) => (
          <OperationCard
            key={operation.id}
            operation={operation}
            busy={activeOperation === operation.id}
            disabled={activeOperation !== null}
            onExecute={execute}
          />
        ))}
      </section>

      <OperationsConsole
        result={result}
        busy={activeOperation !== null}
      />

      <aside className="developer-operations__governance">
        <strong>Architecture-Freeze-konform</strong>
        <p>
          PF-03A ist ein Engineering-Support-Modul und verändert keine
          Core Engine, Core Objects, Core Relationships oder Layer.
        </p>
      </aside>
    </main>
  );
}

export default DeveloperOperationsPage;
