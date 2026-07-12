export default function Seitenleiste() {
  return (
    <aside className="sidebar">
      <nav>
        <a href="/" className="active">
          Übersicht
        </a>

        <a href="/discovery">
          Discovery-Missionen
        </a>

        <a href="/chancen">
          Wertschöpfungspotenziale
        </a>

        <a href="/wissensgraph">
          Wissensgraph
        </a>

        <a href="/executive-cockpit">
          Executive-Cockpit
        </a>
      </nav>
    </aside>
  )
}