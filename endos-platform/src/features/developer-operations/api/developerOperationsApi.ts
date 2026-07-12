import type {
  DeveloperOperationDefinition,
  DeveloperOperationResult,
} from "../types";

const API_BASE =
  import.meta.env.VITE_ENDOS_OPS_API_BASE ?? "http://127.0.0.1:4177";

export async function executeDeveloperOperation(
  operation: DeveloperOperationDefinition,
): Promise<DeveloperOperationResult> {
  const response = await fetch(`${API_BASE}${operation.endpoint}`, {
    method: operation.method,
    headers: { "Content-Type": "application/json" },
  });

  const result = (await response.json()) as DeveloperOperationResult;

  if (!response.ok) {
    throw new Error(result.output || result.title || "Aktion fehlgeschlagen.");
  }

  return result;
}
