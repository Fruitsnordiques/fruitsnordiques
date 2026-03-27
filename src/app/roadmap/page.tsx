import type { Metadata } from 'next'
import Roadmap from '@/components/sections/Roadmap'
import CTA from '@/components/sections/CTA'

export const metadata: Metadata = {
  title: 'Feuille de Route',
  description:
    'La feuille de route de Fruits Nordiques : les phases clés de développement et les jalons importants du projet.',
  openGraph: {
    title: 'Feuille de Route | Fruits Nordiques',
    description:
      'Un plan clair avec 5 phases majeures pour bâtir et développer Fruits Nordiques de 2025 à 2030+.',
    type: 'website',
  },
}

const phaseDetails = [
  {
    number: '00',
    title: 'Fondation',
    period: '2025–2026',
    livrables: ['Étude de faisabilité complétée', 'Site sélectionné et acheté', 'Permis obtenus'],
    jalons: ['Financement assuré', 'Partenariats signés', 'Équipe de direction confirmée'],
  },
  {
    number: '01',
    title: 'Construction',
    period: '2026–2027',
    livrables: ['Serre de 1 hectare construite', 'Systèmes Kainon intégrés', 'Infrastructure opérationnelle prête'],
    jalons: ['Construction terminée dans le budget', "Staff d'exploitation embauché et formé", "Permis d'exploitation obtenu"],
  },
  {
    number: '02',
    title: 'Lancement',
    period: '2027',
    livrables: ['Première saison de production lancée', 'Parcelles communautaires ouvertes', 'Programme de formation lancé'],
    jalons: ['100+ tonnes produites', '100 résidents engagés en parcelles', '50 participants formés'],
  },
  {
    number: '03',
    title: 'Croissance',
    period: '2028–2029',
    livrables: ['Rentabilité opérationnelle atteinte', 'Cuisine communautaire opérationnelle', 'Programme de formation consolidé'],
    jalons: ['500 tonnes annuelles produites', '50 emplois permanents confirmés', '150+ entreprises partenaires'],
  },
  {
    number: '04',
    title: 'Réplication',
    period: '2030+',
    livrables: ['5+ serres répliquées dans le Québec', 'Licensing technologique Kainon', 'Centre de formation provinciale ouvert'],
    jalons: ['2,500+ tonnes produites (5 sites)', '250+ emplois durables créés', 'Impact régional mesurable confirmé'],
  },
]

export default function RoadmapPage() {
  return (
    <>
      {/* Hero Banner */}
      <section
        className="w-full pt-32 pb-20 bg-fn-noir-profond"
        aria-label="En-tête de la page Feuille de Route"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
          <span className="label-kainon text-fn-teal block mb-5">Roadmap</span>
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-titre font-bold text-fn-gris-clair mb-6 leading-[1.02]">
            Feuille de Route
          </h1>
          <p className="text-lg md:text-xl font-corps text-fn-gris leading-relaxed max-w-2xl">
            Un plan ambitieux et réaliste de 2025 à 2030 et au-delà
          </p>
        </div>
      </section>

      <Roadmap />

      {/* Jalons détaillés */}
      <section
        className="w-full py-24 md:py-32 lg:py-40 bg-fn-noir"
        aria-label="Détails des phases et jalons importants"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-titre font-bold text-fn-gris-clair leading-[1.02]">
              Jalons critiques
              <br />
              <span className="text-fn-teal">et livrables</span>
            </h2>
            <div className="flex items-end">
              <p className="text-base md:text-lg font-corps text-fn-gris leading-relaxed">
                Pour chaque phase, nous avons défini des jalons mesurables et des livrables
                concrets qui marqueront notre progression.
              </p>
            </div>
          </div>

          <div className="divider-kainon mb-12 md:mb-16" />

          <div className="space-y-5">
            {phaseDetails.map((phase) => (
              <div key={phase.number} className="card-kainon p-6 md:p-10">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
                  <span className="font-titre text-4xl font-bold text-fn-teal/40">{phase.number}</span>
                  <div>
                    <h3 className="font-accent font-semibold text-lg text-fn-blanc tracking-wide">
                      Phase {phase.number} — {phase.title}
                    </h3>
                    <span className="label-kainon">{phase.period}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <span className="label-kainon text-fn-teal block mb-4">Livrables</span>
                    <ul className="space-y-2">
                      {phase.livrables.map((l, i) => (
                        <li key={i} className="flex items-start font-corps text-sm text-fn-gris-clair">
                          <span className="inline-block w-1 h-1 rounded-full bg-fn-teal/40 mr-3 mt-2 flex-shrink-0" />
                          <span>{l}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="label-kainon text-fn-teal block mb-4">Jalons</span>
                    <ul className="space-y-2">
                      {phase.jalons.map((j, i) => (
                        <li key={i} className="flex items-start font-corps text-sm text-fn-gris-clair">
                          <span className="inline-block w-1 h-1 rounded-full bg-fn-teal/40 mr-3 mt-2 flex-shrink-0" />
                          <span>{j}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
