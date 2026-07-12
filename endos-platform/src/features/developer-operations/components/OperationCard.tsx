import type { DeveloperOperationDefinition } from "../types";

interface OperationCardProps {
  operation: DeveloperOperationDefinition;
  busy: boolean;
  disabled: boolean;
  onExecute: (operation: DeveloperOperationDefinition) => void;
}

export function OperationCard({
  operation,
  busy,
  disabled,
  onExecute,
}: OperationCardProps) {
  return (
    <button
      type="button"
      className="developer-operations__card"
      disabled={disabled}
      onClick={() => onExecute(operation)}
    >
      <span className="developer-operations__icon" aria-hidden="true">
        {operation.icon}
      </span>
      <span className="developer-operations__card-content">
        <strong>{busy ? `${operation.title} …` : operation.title}</strong>
        <small>{operation.description}</small>
      </span>
    </button>
  );
}
