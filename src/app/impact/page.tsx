import type { Metadata } from 'next'
import Impact from '@/components/sections/Impact'
import StatBlock from '@/components/ui/StatBlock'
import CTA from '@/components/sections/CTA'

export const metadata: Metadata = {
  title: 'Notre Impact',
  description:
    'Découvrez l\'impact réel et mesuré de Fruits Nordiques : impact économique, écologique et social pour le Québec.',
  openGraph: {
    title: 'Notre Impact | Fruits Nordiques',
    description:
      'Un projet conçu pour créer un impact positif sur trois dimensions : économie, écologie et société.',
    type: 'website',
  },
}

export default function ImpactPage() {
  return (
    <>
      {/* Hero Banner */}
      <section
        className="w-full pt-32 pb-20 bg-fn-noir-profond"
        aria-label="En-tête de la page Impact"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
          <span className="label-kainon text-fn-teal block mb-5">Impact</span>
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-titre font-bold text-fn-gris-clair mb-6 leading-[1.02]">
            Notre Impact
          </h1>
          <p className="text-lg md:text-xl font-corps text-fn-gris leading-relaxed max-w-2xl">
            Créer une différence mesurable et durable pour le Québec
          </p>
        </div>
      </section>

      {/* Section Impact (trois dimensions) */}
      <Impact />

      {/* Statistiques Détaillées */}
      <section
        className="w-full py-24 md:py-32 lg:py-40 bg-fn-noir"
        aria-label="Statistiques détaillées d'impact"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-16 md:mb-20">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-titre font-bold text-fn-gris-clair leading-[1.02]">
                Chiffres et
                <br />
                <span className="text-fn-teal">Projections</span>
              </h2>
            </div>
            <div className="flex items-end">
              <p className="text-base md:text-lg font-corps text-fn-gris leading-relaxed">
                Voici les impacts quantifiables attendus de Fruits Nordiques sur son site
                initial et via la réplication du modèle.
              </p>
            </div>
          </div>

          <div className="divider-kainon mb-12 md:mb-16" />

          {/* Grille de statistiques */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-16">
            <StatBlock
              value="500+"
              label="Tonnes annuelles"
              description="Fruits et légumes frais produits à l'année"
            />
            <StatBlock
              value="50"
              label="Emplois directs"
              description="Positions permanentes et formation initiale"
            />
            <StatBlock
              value="200"
              label="Tonnes CO₂ épargnées"
              description="Réduction d'émissions vs transport long-courrier"
            />
            <StatBlock
              value="5,000+"
              label="Familles desservies"
              description="Accès à des aliments locaux et frais"
            />
          </div>

          {/* Projections 2030 */}
          <div className="card-kainon-accent p-8 md:p-12">
            <h3 className="font-accent font-semibold text-lg text-fn-blanc mb-8 tracking-wide">
              Projections à 2030 — Réplication du Modèle
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <p className="font-titre text-4xl md:text-5xl font-bold text-fn-teal mb-2">
                  5+
                </p>
                <p className="label-kainon mb-2">Serres Répliquées</p>
                <p className="font-corps text-sm text-fn-gris leading-relaxed">
                  Modèle exporté vers au moins 5 régions du Québec
                </p>
              </div>
              <div>
                <p className="font-titre text-4xl md:text-5xl font-bold text-fn-teal mb-2">
                  250+
                </p>
                <p className="label-kainon mb-2">Emplois Agricoles</p>
                <p className="font-corps text-sm text-fn-gris leading-relaxed">
                  Création d'emplois directs et indirects en agriculture locale
                </p>
              </div>
              <div>
                <p className="font-titre text-4xl md:text-5xl font-bold text-fn-teal mb-2">
                  2,500+
                </p>
                <p className="label-kainon mb-2">Tonnes Annuelles</p>
                <p className="font-corps text-sm text-fn-gris leading-relaxed">
                  Production totale à l'échelle provinciale
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Méthodologie */}
      <section
        className="w-full py-24 md:py-32 lg:py-40 bg-fn-noir-profond"
        aria-label="Méthodologie de mesure d'impact"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-titre font-bold text-fn-gris-clair leading-[1.02]">
              Comment mesurons-nous
              <br />
              <span className="text-fn-teal">l'impact ?</span>
            </h2>
            <div className="flex items-end">
              <p className="text-base md:text-lg font-corps text-fn-gris leading-relaxed">
                Chez Fruits Nordiques, l'impact n'est pas une promesse vague — c'est une
                métrique transparente et mesurable.
              </p>
            </div>
          </div>

          <div className="divider-kainon mb-12 md:mb-16" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {/* Économie */}
            <div className="card-kainon p-6 md:p-8">
              <h3 className="font-accent font-semibold text-base text-fn-teal mb-6 tracking-wide">
                Économie
              </h3>
              <ul className="space-y-3 font-corps text-sm text-fn-gris-clair">
                <li className="flex items-start">
                  <span className="inline-block w-1 h-1 rounded-full bg-fn-teal/40 mr-3 mt-2 flex-shrink-0" />
                  <span>Retour sur investissement annuel</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1 h-1 rounded-full bg-fn-teal/40 mr-3 mt-2 flex-shrink-0" />
                  <span>Salaires moyens créés</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1 h-1 rounded-full bg-fn-teal/40 mr-3 mt-2 flex-shrink-0" />
                  <span>Chiffre d'affaires généré localement</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1 h-1 rounded-full bg-fn-teal/40 mr-3 mt-2 flex-shrink-0" />
                  <span>Économies pour les ménages</span>
                </li>
              </ul>
            </div>

            {/* Écologie */}
            <div className="card-kainon p-6 md:p-8">
              <h3 className="font-accent font-semibold text-base text-fn-teal mb-6 tracking-wide">
                Écologie
              </h3>
              <ul className="space-y-3 font-corps text-sm text-fn-gris-clair">
                <li className="flex items-start">
                  <span className="inline-block w-1 h-1 rounded-full bg-fn-teal/40 mr-3 mt-2 flex-shrink-0" />
                  <span>Émissions carbone évitées</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1 h-1 rounded-full bg-fn-teal/40 mr-3 mt-2 flex-shrink-0" />
                  <span>Eau utilisée vs agriculture conventionnelle</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1 h-1 rounded-full bg-fn-teal/40 mr-3 mt-2 flex-shrink-0" />
                  <span>Réduction des intrants chimiques</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1 h-1 rounded-full bg-fn-teal/40 mr-3 mt-2 flex-shrink-0" />
                  <span>Gaspillage alimentaire évité</span>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div className="card-kainon p-6 md:p-8">
              <h3 className="font-accent font-semibold text-base text-fn-teal mb-6 tracking-wide">
                Social
              </h3>
              <ul className="space-y-3 font-corps text-sm text-fn-gris-clair">
                <li className="flex items-start">
                  <span className="inline-block w-1 h-1 rounded-full bg-fn-teal/40 mr-3 mt-2 flex-shrink-0" />
                  <span>Participants aux formations</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1 h-1 rounded-full bg-fn-teal/40 mr-3 mt-2 flex-shrink-0" />
                  <span>Insertion professionnelle post-formation</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1 h-1 rounded-full bg-fn-teal/40 mr-3 mt-2 flex-shrink-0" />
                  <span>Accès au marché pour entrepreneurs locaux</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1 h-1 rounded-full bg-fn-teal/40 mr-3 mt-2 flex-shrink-0" />
                  <span>Sécurité alimentaire régionale</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
