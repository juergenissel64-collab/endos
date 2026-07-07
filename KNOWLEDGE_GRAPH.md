{
  "meta": {
    "name": "ENDOS Knowledge Graph",
    "version": "1.0",
    "release": "RC1.1"
  },
  "nodes": [
    {
      "id": "ENDOS",
      "type": "Platform",
      "name": "ENDOS Platform",
      "status": "active",
      "maturity": "foundation",
      "description": "Enterprise Navigation & Decision Operating System."
    },
    {
      "id": "ARCH-001",
      "type": "Architecture",
      "name": "Enterprise Navigation Architecture",
      "status": "active",
      "maturity": "baseline",
      "description": "Core architecture connecting knowledge, methods, orchestration, execution and learning layers."
    },
    {
      "id": "ENG-EAE",
      "type": "Engine",
      "name": "Executive Attention Engineering",
      "status": "active",
      "maturity": "concept",
      "description": "Directs executive attention before perception, interpretation and decision-making."
    },
    {
      "id": "ENG-EESIE",
      "type": "Engine",
      "name": "External Enterprise Signal Intelligence Engine",
      "status": "active",
      "maturity": "concept",
      "description": "Combines publicly observable weak signals into enterprise context."
    },
    {
      "id": "ENG-EAWE",
      "type": "Engine",
      "name": "Executive Adaptive Workspace Engine",
      "status": "planned",
      "maturity": "module",
      "description": "Daily executive workspace with mission, priorities, risks and opportunities."
    },
    {
      "id": "ENG-EEEE",
      "type": "Engine",
      "name": "Enterprise Early Evidence Engine",
      "status": "active",
      "maturity": "concept",
      "description": "Detects early evidence of structural change."
    },
    {
      "id": "METH-GT",
      "type": "Method",
      "name": "Game Theory",
      "status": "candidate",
      "maturity": "method",
      "description": "Models stakeholder incentives and strategic moves."
    },
    {
      "id": "METH-BAYES",
      "type": "Method",
      "name": "Bayesian Updating",
      "status": "candidate",
      "maturity": "method",
      "description": "Uncertainty-aware belief revision."
    },
    {
      "id": "METH-OR",
      "type": "Method",
      "name": "Operations Research",
      "status": "candidate",
      "maturity": "method",
      "description": "Optimisation, allocation and constraint solving."
    },
    {
      "id": "PAT-001",
      "type": "Patent",
      "name": "Enterprise Navigation Platform Patent Family",
      "status": "draft",
      "maturity": "ip",
      "description": "Umbrella patent family for the connected platform architecture."
    },
    {
      "id": "RES-DBA",
      "type": "Research",
      "name": "Dashboard Usage & Functionality DBA Research",
      "status": "completed",
      "maturity": "research",
      "description": "Research foundation on performance dashboards from a manager perspective."
    },
    {
      "id": "VAL-LEONI",
      "type": "Validation",
      "name": "Leoni Historical Replay",
      "status": "planned",
      "maturity": "evidence",
      "description": "Replay validation case for structural signals."
    },
    {
      "id": "PILOT-HOSP",
      "type": "Pilot",
      "name": "Hospital Operations Pilot",
      "status": "candidate",
      "maturity": "pilot",
      "description": "Pilot context for resource allocation and process improvement."
    },
    {
      "id": "EVID-001",
      "type": "Evidence",
      "name": "Weak Signal Evidence Object",
      "status": "active",
      "maturity": "data-model",
      "description": "Evidence object for weak signals, source quality and decision relevance."
    }
  ],
  "links": [
    {
      "source": "ENDOS",
      "target": "ARCH-001",
      "relation": "implements"
    },
    {
      "source": "ENDOS",
      "target": "ENG-EAE",
      "relation": "contains"
    },
    {
      "source": "ENDOS",
      "target": "ENG-EESIE",
      "relation": "contains"
    },
    {
      "source": "ENDOS",
      "target": "ENG-EAWE",
      "relation": "contains"
    },
    {
      "source": "ENDOS",
      "target": "ENG-EEEE",
      "relation": "contains"
    },
    {
      "source": "ARCH-001",
      "target": "METH-BAYES",
      "relation": "uses"
    },
    {
      "source": "ARCH-001",
      "target": "METH-OR",
      "relation": "uses"
    },
    {
      "source": "ARCH-001",
      "target": "METH-GT",
      "relation": "uses"
    },
    {
      "source": "ENG-EAE",
      "target": "PAT-001",
      "relation": "protected by"
    },
    {
      "source": "ENG-EESIE",
      "target": "EVID-001",
      "relation": "collects"
    },
    {
      "source": "ENG-EEEE",
      "target": "EVID-001",
      "relation": "evaluates"
    },
    {
      "source": "ENG-EAWE",
      "target": "ENG-EAE",
      "relation": "applies"
    },
    {
      "source": "ENG-EESIE",
      "target": "VAL-LEONI",
      "relation": "validated by"
    },
    {
      "source": "RES-DBA",
      "target": "ENG-EAE",
      "relation": "informs"
    },
    {
      "source": "PILOT-HOSP",
      "target": "ENG-EAWE",
      "relation": "uses"
    },
    {
      "source": "METH-GT",
      "target": "ENG-EAE",
      "relation": "supports"
    },
    {
      "source": "METH-BAYES",
      "target": "ENG-EEEE",
      "relation": "supports"
    }
  ]
}