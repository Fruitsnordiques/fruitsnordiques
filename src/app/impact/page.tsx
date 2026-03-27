import type { Metadata } from 'next'
import Impact from '@/components/sections/Impact'
import StatBlock from '@/components/ui/StatBlock'
import CTA from '@/components/sections/CTA'

/* Métadonnées pour la page Impact */
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

/**
 * Page Impact — Présente l'impact mesuré du projet avec statistiques détaillées
 * Includes small hero banner, Impact section, additional stats with StatBlock, and CTA
 */
export default function ImpactPage() {
  return (
    <>
      {/* Hero Banner — Petit, distinct de la page d'accueil */}
      <section
        className="w-full py-20 bg-fn-vert-profond text-fn-neige"
        aria-label="En-tête de la page Impact"
      >
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-titre font-bold mb-4 leading-tight">
            Notre Impact
          </h1>
          <p className="text-lg md:text-xl font-corps text-fn-bleu-glace leading-relaxed">
            Créer une différence mesurable et durable pour le Québec
          </p>
        </div>
      </section>

      {/* Réutilisation de la section Impact (trois dimensions) */}
      <Impact />

      {/* Section Statistiques Détaillées */}
      <section
        className="w-full py-20 md:py-28 lg:py-32 bg-fn-vert-clair bg-opacity-5"
        aria-label="Statistiques détaillées d'impact"
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          {/* En-tête de la section */}
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-titre font-bold text-fn-vert-profond mb-6 leading-tight">
              Chiffres et Projections
            </h2>
            <p className="text-lg md:text-xl font-corps text-fn-gris-moyen max-w-3xl mx-auto leading-relaxed">
              Voici les impacts quantifiables attendus de Fruits Nordiques sur son site
              initial et via la réplication du modèle.
            </p>
          </div>

          {/* Grille de statistiques */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {/* Stat 1: Production annuelle */}
            <StatBlock
              value="500+"
              label="Tonnes Annuelles"
              description="Fruits et légumes frais produits à l'année"
              icon="🌱"
              className="bg-white rounded-lg p-8 shadow-sm"
            />

            {/* Stat 2: Emplois créés */}
            <StatBlock
              value="50"
              label="Emplois Directs"
              description="Positions permanentes et formation initiale"
              icon="💼"
              className="bg-white rounded-lg p-8 shadow-sm"
            />

            {/* Stat 3: CO2 sauvé */}
            <StatBlock
              value="200"
              label="Tonnes CO₂ Épargnées"
              description="Réduction d'émissions vs transport long-courrier"
              icon="🌍"
              className="bg-white rounded-lg p-8 shadow-sm"
            />

            {/* Stat 4: Familles desservies */}
            <StatBlock
              value="5,000+"
              label="Familles Desservies"
              description="Accès à des aliments locaux et frais"
              icon="❤️"
              className="bg-white rounded-lg p-8 shadow-sm"
            />
          </div>

          {/* Bloc supplémentaire : Impact à long terme */}
          <div className="bg-white rounded-lg p-8 md:p-10 shadow-md border-l-4 border-fn-soleil">
            <h3 className="text-2xl md:text-3xl font-accent font-bold text-fn-vert-profond mb-6">
              Projections à 2030 : Réplication du Modèle
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <p className="text-4xl md:text-5xl font-titre font-bold text-fn-soleil mb-2">
                  5+
                </p>
                <p className="font-accent font-semibold text-fn-vert-profond mb-2">
                  Serres Répliquées
                </p>
                <p className="font-corps text-fn-gris-moyen">
                  Modèle exporté vers au moins 5 régions du Québec
                </p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-titre font-bold text-fn-soleil mb-2">
                  250+
                </p>
                <p className="font-accent font-semibold text-fn-vert-profond mb-2">
                  Emplois Agricoles
                </p>
                <p className="font-corps text-fn-gris-moyen">
                  Création d'emplois directs et indirects en agriculture locale
                </p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-titre font-bold text-fn-soleil mb-2">
                  2,500+
                </p>
                <p className="font-accent font-semibold text-fn-vert-profond mb-2">
                  Tonnes Annuelles
                </p>
                <p className="font-corps text-fn-gris-moyen">
                  Production totale à l'échelle provinciale
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section : Méthodologie de Mesure */}
      <section
        className="w-full py-20 md:py-28 lg:py-32 bg-fn-neige"
        aria-label="Méthodologie de mesure d'impact"
      >
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-titre font-bold text-fn-vert-profond mb-6 leading-tight">
            Comment Mesurons-nous l'Impact ?
          </h2>
          <p className="text-lg md:text-xl font-corps text-fn-gris-moyen leading-relaxed mb-10">
            Chez Fruits Nordiques, l'impact n'est pas une promesse vague — c'est une
            métrique transparente et mesurable. Nous utilisons une combinaison d'indicateurs
            scientifiques, économiques et sociaux pour suivre notre progrès.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Impact Économique */}
            <div className="bg-white rounded-lg p-8 shadow-sm border-t-4 border-fn-soleil">
              <h3 className="text-2xl font-accent font-bold text-fn-vert-profond mb-4">
                📊 Économie
              </h3>
              <ul className="space-y-3 font-corps text-fn-gris-moyen">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-fn-soleil mr-3 mt-2 flex-shrink-0"></span>
                  <span>Retour sur investissement (ROI) annuel</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-fn-soleil mr-3 mt-2 flex-shrink-0"></span>
                  <span>Salaires moyens créés (emplois</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-fn-soleil mr-3 mt-2 flex-shrink-0"></span>
                  <span>Chiffre d'affaires généré localement</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-fn-soleil mr-3 mt-2 flex-shrink-0"></span>
                  <span>Économies de coûts alimentaires pour les ménages</span>
                </li>
              </ul>
            </div>

            {/* Impact Écologique */}
            <div className="bg-white rounded-lg p-8 shadow-sm border-t-4 border-fn-vert-vif">
              <h3 className="text-2xl font-accent font-bold text-fn-vert-profond mb-4">
                🌍 Écologie
              </h3>
              <ul className="space-y-3 font-corps text-fn-gris-moyen">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-fn-vert-vif mr-3 mt-2 flex-shrink-0"></span>
                  <span>Émissions carbone évitées (kg CO₂ par tonne)</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-fn-vert-vif mr-3 mt-2 flex-shrink-0"></span>
                  <span>Eau utilisée vs agriculture conventionnelle</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-fn-vert-vif mr-3 mt-2 flex-shrink-0"></span>
                  <span>Réduction des intrants chimiques (100% bio)</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-fn-vert-vif mr-3 mt-2 flex-shrink-0"></span>
                  <span>Gaspillage alimentaire évité</span>
                </li>
              </ul>
            </div>

            {/* Impact Social */}
            <div className="bg-white rounded-lg p-8 shadow-sm border-t-4 border-fn-rouge-baie md:col-span-2">
              <h3 className="text-2xl font-accent font-bold text-fn-vert-profond mb-4">
                ❤️ Social
              </h3>
              <ul className="space-y-3 font-corps text-fn-gris-moyen grid grid-cols-1 md:grid-cols-2 gap-6">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-fn-rouge-baie mr-3 mt-2 flex-shrink-0"></span>
                  <span>Nombre de participants aux formations</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-fn-rouge-baie mr-3 mt-2 flex-shrink-0"></span>
                  <span>Insertion professionnelle (% embauché après formation)</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-fn-rouge-baie mr-3 mt-2 flex-shrink-0"></span>
                  <span>Accès au marché pour les entrepreneurs locaux</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-fn-rouge-baie mr-3 mt-2 flex-shrink-0"></span>
                  <span>Indice de sécurité alimentaire régionale</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Appel à l'action */}
      <CTA />
    </>
  )
}
