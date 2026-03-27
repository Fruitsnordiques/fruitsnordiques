/* Page d'accueil — Séquence narrative type pitch deck interactif */
import Hero from '@/components/sections/Hero'
import Problematique from '@/components/sections/Problematique'
import Solution from '@/components/sections/Solution'
import Technologie from '@/components/sections/Technologie'
import Impact from '@/components/sections/Impact'
import Communaute from '@/components/sections/Communaute'
import Formation from '@/components/sections/Formation'
import Roadmap from '@/components/sections/Roadmap'
import CTA from '@/components/sections/CTA'

export default function Accueil() {
  return (
    <>
      {/* 1. Accroche — première impression */}
      <Hero />

      {/* 2. Le problème — créer l'empathie et l'urgence */}
      <Problematique />

      {/* 3. La solution — l'écosystème Fruits Nordiques */}
      <Solution />

      {/* 4. La technologie — crédibilité technique (Kainon) */}
      <Technologie />

      {/* 5. L'impact — convaincre sur trois dimensions */}
      <Impact />

      {/* 6. La communauté — humaniser le projet */}
      <Communaute />

      {/* 7. La formation — élargir la portée */}
      <Formation />

      {/* 8. La feuille de route — donner confiance */}
      <Roadmap />

      {/* 9. Appel à l'action — convertir */}
      <CTA />
    </>
  )
}
