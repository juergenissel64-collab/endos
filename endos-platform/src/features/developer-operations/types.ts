export type DeveloperOperationId =
  | "start"
  | "build"
  | "backup"
  | "sync"
  | "release"
  | "status";

export interface DeveloperOperationDefinition {
  id: DeveloperOperationId;
  icon: string;
  title: string;
  description: string;
  method: "GET" | "POST";
  endpoint: string;
  confirmationMessage?: string;
}

export interface DeveloperOperationResult {
  ok: boolean;
  title: string;
  output: string;
  timestamp?: string;
}
