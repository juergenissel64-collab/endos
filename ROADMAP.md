:root {
  --bg: #061224;
  --bg-2: #091a32;
  --panel: rgba(13, 37, 68, 0.86);
  --panel-2: rgba(9, 29, 55, 0.92);
  --line: rgba(116, 185, 255, 0.26);
  --text: #eef6ff;
  --muted: #bed7f5;
  --accent: #61b5ff;
  --accent-2: #9be7ff;
  --shadow: 0 24px 80px rgba(0, 0, 0, 0.34);
}
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
  color: var(--text);
  background: radial-gradient(circle at top left, #123b72 0, var(--bg) 35%, #030a14 100%);
  min-height: 100vh;
}
a { color: inherit; }
.topbar {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 18px 6vw;
  background: rgba(3, 10, 20, 0.72);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(116, 185, 255, 0.14);
}
.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  font-weight: 800;
  letter-spacing: 0.12em;
}
.brand-mark {
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: linear-gradient(145deg, #123c72, #071a31);
  color: var(--accent-2);
}
.nav { display: flex; flex-wrap: wrap; gap: 14px; color: var(--muted); font-size: 0.94rem; }
.nav a { text-decoration: none; opacity: 0.9; }
.nav a:hover { color: var(--accent-2); }
.shell { width: min(1180px, calc(100% - 48px)); margin: 0 auto; padding: 52px 0; }
.hero {
  padding: clamp(42px, 7vw, 86px);
  border: 1px solid var(--line);
  border-radius: 30px;
  background: linear-gradient(145deg, rgba(17, 54, 100, 0.92), rgba(7, 23, 44, 0.92));
  box-shadow: var(--shadow);
}
.eyebrow { margin: 0 0 16px; color: var(--accent); font-size: 0.82rem; font-weight: 800; letter-spacing: 0.18em; text-transform: uppercase; }
h1, h2, h3 { margin-top: 0; line-height: 1.04; }
h1 { max-width: 980px; font-size: clamp(3rem, 7vw, 6.4rem); margin-bottom: 24px; letter-spacing: -0.05em; }
h2 { font-size: clamp(1.8rem, 3vw, 3rem); }
h3 { font-size: 1.22rem; }
.lead { max-width: 900px; margin: 0 0 14px; color: #dcecff; font-size: clamp(1.25rem, 2.5vw, 2rem); }
.summary, .section p, .grid p, .timeline li { color: var(--muted); line-height: 1.65; font-size: 1.05rem; }
.summary { max-width: 900px; margin-bottom: 30px; }
.actions { display: flex; flex-wrap: wrap; gap: 16px; }
.actions a, .grid a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0 20px;
  border: 1px solid var(--accent);
  border-radius: 999px;
  color: var(--text);
  text-decoration: none;
  background: rgba(3, 13, 28, 0.28);
}
.actions a.primary { background: linear-gradient(135deg, #1d75c8, #133f77); }
.metrics, .grid, .cards { display: grid; gap: 18px; }
.metrics { grid-template-columns: repeat(4, 1fr); margin: 24px 0; }
.metrics article, .grid article, .cards article, .timeline, .section.compact {
  border: 1px solid rgba(116, 185, 255, 0.22);
  border-radius: 22px;
  background: var(--panel-2);
  padding: 26px;
}
.metric { display: block; color: var(--accent-2); font-size: 2rem; font-weight: 850; letter-spacing: -0.04em; }
.metrics p { margin: 8px 0 0; color: var(--muted); }
.section { margin: 34px 0; display: grid; grid-template-columns: 0.9fr 1.4fr; gap: 24px; align-items: stretch; }
.section.compact { display: block; }
.cards { grid-template-columns: repeat(3, 1fr); }
.grid { grid-template-columns: repeat(4, 1fr); margin: 34px 0; }
.grid article { min-height: 245px; display: flex; flex-direction: column; }
.grid a { margin-top: auto; width: max-content; }
.timeline { margin: 34px 0 0; }
.timeline ol { margin: 0; padding-left: 22px; }
.timeline li { margin: 10px 0; }
.footer { display: flex; justify-content: space-between; gap: 16px; padding: 28px 6vw 46px; color: rgba(190, 215, 245, 0.78); border-top: 1px solid rgba(116, 185, 255, 0.12); }
@media (max-width: 900px) {
  .topbar { align-items: flex-start; flex-direction: column; }
  .metrics, .grid, .cards, .section { grid-template-columns: 1fr; }
  .shell { width: min(100% - 28px, 1180px); padding-top: 28px; }
  .hero { padding: 32px 24px; border-radius: 22px; }
  .footer { flex-direction: column; }
}


/* Sprint 2 – Mission Control */
.mission-hero h1 { max-width: 1060px; }
.mission-grid { display: grid; grid-template-columns: 1.2fr 1fr 1fr; gap: 18px; margin: 28px 0; }
.mission-card { border: 1px solid rgba(116,185,255,.22); border-radius: 22px; background: rgba(9,29,55,.92); padding: 26px; min-height: 220px; }
.mission-card.highlight { grid-row: span 2; background: linear-gradient(145deg, rgba(17,54,100,.96), rgba(7,23,44,.94)); }
.mission-card ol, .mission-card ul { color: var(--muted); line-height: 1.7; padding-left: 22px; }
.mission-card p { color: var(--muted); line-height: 1.65; }
@media (max-width: 900px) { .mission-grid { grid-template-columns: 1fr; } .mission-card.highlight { grid-row: auto; } }
