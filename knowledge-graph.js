<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>ENDOS Knowledge Graph</title>
  <link rel="stylesheet" href="../assets/css/knowledge-graph.css" />
</head>
<body>
  <header class="topbar">
    <a class="brand" href="../index.html">ENDOS</a>
    <nav>
      <a href="../index.html">Home</a>
      <a href="knowledge-graph.html" class="active">Knowledge Graph</a>
      <a href="../docs/KNOWLEDGE_GRAPH.md">Docs</a>
    </nav>
  </header>

  <main class="layout">
    <section class="hero">
      <p class="eyebrow">Sprint 5.1 · Functional Core Module</p>
      <h1>Dynamic Knowledge Graph</h1>
      <p>Navigate ENDOS as a network of engines, methods, patents, research, validation cases and pilot domains.</p>
    </section>

    <section class="workspace">
      <aside class="panel controls">
        <h2>Filters</h2>
        <input id="search" type="search" placeholder="Search objects…" />
        <div id="typeFilters" class="filters"></div>
        <div class="buttons">
          <button id="resetView">Reset view</button>
          <button id="showAll">Show all</button>
        </div>
        <p class="hint">Drag nodes. Use mouse wheel or trackpad to zoom. Click a node for details.</p>
      </aside>

      <section class="graph-card">
        <svg id="graph" aria-label="ENDOS interactive knowledge graph"></svg>
      </section>

      <aside class="panel details">
        <h2>Object Details</h2>
        <div id="details">
          <p>Select a node to inspect metadata and relationships.</p>
        </div>
      </aside>
    </section>
  </main>

  <script src="../assets/js/knowledge-graph.js"></script>
</body>
</html>
