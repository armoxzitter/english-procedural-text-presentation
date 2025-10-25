'use client'

import { Navigation } from '@/components/ui/Navigation'
import { HeroSection } from '@/components/sections/HeroSection'
import { OverviewSection } from '@/components/sections/OverviewSection'
import { DataVisualizationSection } from '@/components/sections/DataVisualizationSection'
import { FindingsSection } from '@/components/sections/FindingsSection'
import { ConclusionSection } from '@/components/sections/ConclusionSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <div id="overview">
        <OverviewSection />
      </div>
      <div id="data">
        <DataVisualizationSection />
      </div>
      <div id="findings">
        <FindingsSection />
      </div>
      <div id="conclusion">
        <ConclusionSection />
      </div>
    </main>
  )
}
