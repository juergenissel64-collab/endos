# ENDOS Data Model V2

Initial data model: JSON-based graph objects.

## Node
```json
{
  "id": "ENG-001",
  "type": "Engine",
  "name": "Executive Attention Engineering",
  "status": "active",
  "description": "..."
}
```

## Edge
```json
{
  "source": "ENG-001",
  "target": "PAT-001",
  "relation": "protected_by"
}
```
