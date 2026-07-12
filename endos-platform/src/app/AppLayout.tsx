import type { ReactNode } from 'react'
import Kopfzeile from '../components/Kopfzeile'
import Seitenleiste from '../components/Seitenleiste'

type AppLayoutProps = {
  children: ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="app-shell">
      <Kopfzeile />
      <Seitenleiste />

      <main className="content">
        {children}
      </main>
    </div>
  )
}