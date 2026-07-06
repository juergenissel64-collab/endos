(async function () {
  const fallbackData = {
    nodes: [
      { id: "ENDOS", label: "ENDOS Core", type: "Platform", status: "active", maturity: "Foundation", description: "Enterprise Navigation & Decision Operating System.", url: "../index.html" },
      { id: "EAWE", label: "Executive Workspace", type: "Engine", status: "active", maturity: "prototype", description: "Mission Control and executive attention layer." },
      { id: "EAE", label: "Executive Attention Engineering", type: "Knowledge Object", status: "active", maturity: "concept", description: "Attention as the entry point of enterprise navigation." }
    ],
    edges: [{ source: "ENDOS", target: "EAWE", relation: "contains" }, { source: "EAWE", target: "EAE", relation: "uses" }]
  };

  async function loadGraph() {
    try {
      const response = await fetch("../data/endos-graph.json", { cache: "no-store" });
      if (!response.ok) throw new Error("Graph data not available");
      return await response.json();
    } catch (error) {
      return fallbackData;
    }
  }

  const data = await loadGraph();
  const svg = document.getElementById("graphSvg");
  const detail = document.getElementById("nodeDetail");
  const search = document.getElementById("graphSearch");
  const filterBar = document.getElementById("filterBar");
  const zoomIn = document.getElementById("zoomIn");
  const zoomOut = document.getElementById("zoomOut");
  const resetGraph = document.getElementById("resetGraph");

  const width = 1100;
  const height = 720;
  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
  svg.innerHTML = "";

  const typeOrder = ["Platform", "Engine", "Knowledge Object", "Method", "Patent", "Publication", "Validation Case", "Pilot", "Repository"];
  const types = Array.from(new Set(data.nodes.map(n => n.type))).sort((a, b) => typeOrder.indexOf(a) - typeOrder.indexOf(b));
  let activeTypes = new Set(types);
  let selectedId = "ENDOS";
  let scale = 1;
  let offset = { x: 0, y: 0 };
  let dragNode = null;
  let panStart = null;

  const positions = {};
  const center = { x: width / 2, y: height / 2 };
  data.nodes.forEach((node, index) => {
    const angle = (index / data.nodes.length) * Math.PI * 2 - Math.PI / 2;
    const radius = node.id === "ENDOS" ? 0 : 250 + (index % 3) * 48;
    positions[node.id] = {
      x: center.x + Math.cos(angle) * radius,
      y: center.y + Math.sin(angle) * radius
    };
  });

  const viewport = document.createElementNS("http://www.w3.org/2000/svg", "g");
  const edgeLayer = document.createElementNS("http://www.w3.org/2000/svg", "g");
  const nodeLayer = document.createElementNS("http://www.w3.org/2000/svg", "g");
  viewport.append(edgeLayer, nodeLayer);
  svg.appendChild(viewport);

  function updateTransform() {
    viewport.setAttribute("transform", `translate(${offset.x} ${offset.y}) scale(${scale})`);
  }

  function visibleNode(node) {
    const q = (search.value || "").trim().toLowerCase();
    const searchable = `${node.id} ${node.label} ${node.type} ${node.status} ${node.maturity} ${node.description}`.toLowerCase();
    return activeTypes.has(node.type) && (!q || searchable.includes(q));
  }

  function renderFilters() {
    filterBar.innerHTML = "";
    types.forEach(type => {
      const btn = document.createElement("button");
      btn.className = "filter-chip active";
      btn.textContent = type;
      btn.onclick = () => {
        if (activeTypes.has(type)) activeTypes.delete(type); else activeTypes.add(type);
        btn.classList.toggle("active", activeTypes.has(type));
        render();
      };
      filterBar.appendChild(btn);
    });
  }

  function render() {
    edgeLayer.innerHTML = "";
    nodeLayer.innerHTML = "";
    const visibleIds = new Set(data.nodes.filter(visibleNode).map(n => n.id));

    data.edges.forEach(edge => {
      if (!visibleIds.has(edge.source) || !visibleIds.has(edge.target)) return;
      const a = positions[edge.source];
      const b = positions[edge.target];
      const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line.setAttribute("x1", a.x);
      line.setAttribute("y1", a.y);
      line.setAttribute("x2", b.x);
      line.setAttribute("y2", b.y);
      line.setAttribute("class", "kg-edge");
      edgeLayer.appendChild(line);

      const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
      label.setAttribute("x", (a.x + b.x) / 2);
      label.setAttribute("y", (a.y + b.y) / 2 - 6);
      label.setAttribute("class", "kg-edge-label");
      label.textContent = edge.relation;
      edgeLayer.appendChild(label);
    });

    data.nodes.forEach(node => {
      if (!visibleNode(node)) return;
      const p = positions[node.id];
      const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
      group.setAttribute("class", `kg-node ${node.id === selectedId ? "selected" : ""}`);
      group.setAttribute("transform", `translate(${p.x} ${p.y})`);
      group.setAttribute("tabindex", "0");
      group.setAttribute("role", "button");
      group.setAttribute("aria-label", node.label);

      const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      circle.setAttribute("r", node.id === "ENDOS" ? 52 : 42);
      circle.setAttribute("class", `type-${node.type.replace(/\s+/g, "-").toLowerCase()}`);

      const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
      label.setAttribute("class", "kg-node-label");
      label.setAttribute("y", -4);
      label.textContent = node.label.length > 24 ? node.label.slice(0, 22) + "…" : node.label;

      const type = document.createElementNS("http://www.w3.org/2000/svg", "text");
      type.setAttribute("class", "kg-node-type");
      type.setAttribute("y", 16);
      type.textContent = node.type;

      group.append(circle, label, type);
      group.addEventListener("mousedown", evt => { dragNode = { id: node.id, startX: evt.clientX, startY: evt.clientY, x: p.x, y: p.y }; evt.stopPropagation(); });
      group.addEventListener("click", () => selectNode(node.id));
      group.addEventListener("keydown", evt => { if (evt.key === "Enter") selectNode(node.id); });
      nodeLayer.appendChild(group);
    });
  }

  function selectNode(id) {
    selectedId = id;
    const node = data.nodes.find(n => n.id === id);
    const related = data.edges.filter(e => e.source === id || e.target === id);
    const relatedHtml = related.map(e => {
      const otherId = e.source === id ? e.target : e.source;
      const other = data.nodes.find(n => n.id === otherId);
      return `<button class="relation-btn" data-node="${otherId}">${e.relation}: ${other ? other.label : otherId}</button>`;
    }).join("") || "<p>No relations yet.</p>";

    detail.innerHTML = `
      <p class="eyebrow">${node.id} · ${node.type}</p>
      <h2>${node.label}</h2>
      <p>${node.description}</p>
      <ul class="detail-list">
        <li><strong>Status:</strong> ${node.status || "open"}</li>
        <li><strong>Maturity:</strong> ${node.maturity || "not classified"}</li>
        <li><strong>Relations:</strong> ${related.length}</li>
      </ul>
      <h3>Connected objects</h3>
      <div class="relation-list">${relatedHtml}</div>
      ${node.url ? `<a class="detail-link" href="${node.url}">Open linked ENDOS page</a>` : ""}
    `;
    detail.querySelectorAll(".relation-btn").forEach(btn => btn.addEventListener("click", () => selectNode(btn.dataset.node)));
    render();
  }

  svg.addEventListener("mousedown", evt => { panStart = { x: evt.clientX, y: evt.clientY, ox: offset.x, oy: offset.y }; });
  window.addEventListener("mousemove", evt => {
    if (dragNode) {
      positions[dragNode.id].x = dragNode.x + (evt.clientX - dragNode.startX) / scale;
      positions[dragNode.id].y = dragNode.y + (evt.clientY - dragNode.startY) / scale;
      render();
    } else if (panStart) {
      offset.x = panStart.ox + evt.clientX - panStart.x;
      offset.y = panStart.oy + evt.clientY - panStart.y;
      updateTransform();
    }
  });
  window.addEventListener("mouseup", () => { dragNode = null; panStart = null; });
  svg.addEventListener("wheel", evt => {
    evt.preventDefault();
    scale = Math.min(2.2, Math.max(0.55, scale + (evt.deltaY < 0 ? 0.08 : -0.08)));
    updateTransform();
  }, { passive: false });

  search.addEventListener("input", render);
  zoomIn.addEventListener("click", () => { scale = Math.min(2.2, scale + 0.15); updateTransform(); });
  zoomOut.addEventListener("click", () => { scale = Math.max(0.55, scale - 0.15); updateTransform(); });
  resetGraph.addEventListener("click", () => { scale = 1; offset = { x: 0, y: 0 }; search.value = ""; activeTypes = new Set(types); renderFilters(); updateTransform(); render(); selectNode("ENDOS"); });

  renderFilters();
  updateTransform();
  selectNode("ENDOS");
})();
