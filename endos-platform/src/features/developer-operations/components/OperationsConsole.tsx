import type { DeveloperOperationResult } from "../types";

interface OperationsConsoleProps {
  result: DeveloperOperationResult;
  busy: boolean;
}

export function OperationsConsole({
  result,
  busy,
}: OperationsConsoleProps) {
  return (
    <section className="developer-operations__console" aria-live="polite">
      <header className="developer-operations__console-header">
        <strong>{result.title}</strong>
        <span>{busy ? "Vorgang aktiv" : "Bereit"}</span>
      </header>
      <pre>{result.output}</pre>
    </section>
  );
}
