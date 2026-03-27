import type { Metadata } from 'next'
import Roadmap from '@/components/sections/Roadmap'
import CTA from '@/components/sections/CTA'

/* Métadonnées pour la page Roadmap */
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

/**
 * Page Roadmap — Présente la feuille de route du projet
 * Includes small hero banner, Roadmap section with timeline, and CTA
 */
export default function RoadmapPage() {
  return (
    <>
      {/* Hero Banner — Petit, distinct de la page d'accueil */}
      <section
        className="w-full py-20 bg-fn-vert-profond text-fn-neige"
        aria-label="En-tête de la page Feuille de Route"
      >
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-titre font-bold mb-4 leading-tight">
            Feuille de Route
          </h1>
          <p className="text-lg md:text-xl font-corps text-fn-bleu-glace leading-relaxed">
            Un plan ambitieux et réaliste de 2025 à 2030 et au-delà
          </p>
        </div>
      </section>

      {/* Réutilisation de la section Roadmap */}
      <Roadmap />

      {/* Section Jalons Clés et Détails */}
      <section
        className="w-full py-20 md:py-28 lg:py-32 bg-fn-neige"
        aria-label="Détails des phases et jalons importants"
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          {/* En-tête */}
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-titre font-bold text-fn-vert-profond mb-6 leading-tight">
              Jalons Critiques et Livrables
            </h2>
            <p className="text-lg md:text-xl font-corps text-fn-gris-moyen max-w-3xl mx-auto leading-relaxed">
              Pour chaque phase, nous avons défini des jalons mesurables et des livrables
              concrets qui marqueront notre progression.
            </p>
          </div>

          {/* Détail des phases */}
          <div className="space-y-8">
            {/* Phase 0: Fondation */}
            <div className="bg-gradient-to-r from-fn-soleil to-fn-soleil bg-opacity-10 rounded-lg p-8 md:p-10 border-l-4 border-fn-soleil">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-fn-soleil text-fn-gris-fonce font-titre font-bold text-lg">
                    0
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-accent font-bold text-fn-vert-profond">
                    Phase 0 — Fondation (2025–2026)
                  </h3>
                  <p className="text-lg font-corps text-fn-gris-moyen">
                    Étude, permis, financement, partnerships
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-accent font-semibold text-fn-vert-profond mb-3">Livrables :</h4>
                  <ul className="space-y-2 font-corps text-fn-gris-moyen">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-fn-soleil mr-2 mt-2 flex-shrink-0"></span>
                      <span>Étude de faisabilité complétée</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-fn-soleil mr-2 mt-2 flex-shrink-0"></span>
                      <span>Site sélectionné et acheté</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-fn-soleil mr-2 mt-2 flex-shrink-0"></span>
                      <span>Permis obtenus</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-accent font-semibold text-fn-vert-profond mb-3">Jalons :</h4>
                  <ul className="space-y-2 font-corps text-fn-gris-moyen">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-fn-soleil mr-2 mt-2 flex-shrink-0"></span>
                      <span>Financement assuré (50M$ CAD)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-fn-soleil mr-2 mt-2 flex-shrink-0"></span>
                      <span>Partenariats signés</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-fn-soleil mr-2 mt-2 flex-shrink-0"></span>
                      <span>Équipe de direction confirmée</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 1: Construction */}
            <div className="bg-gradient-to-r from-fn-vert-profond to-fn-vert-profond bg-opacity-10 rounded-lg p-8 md:p-10 border-l-4 border-fn-vert-profond">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-fn-vert-profond text-fn-neige font-titre font-bold text-lg">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-accent font-bold text-fn-vert-profond">
                    Phase 1 — Construction (2026–2027)
                  </h3>
                  <p className="text-lg font-corps text-fn-gris-moyen">
                    Érection de la serre et installation technologique
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-accent font-semibold text-fn-vert-profond mb-3">Livrables :</h4>
                  <ul className="space-y-2 font-corps text-fn-gris-moyen">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-fn-vert-profond mr-2 mt-2 flex-shrink-0"></span>
                      <span>Serre de 1 hectare construite</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-fn-vert-profond mr-2 mt-2 flex-shrink-0"></span>
                      <span>Systèmes Kainon intégrés</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-fn-vert-profond mr-2 mt-2 flex-shrink-0"></span>
                      <span>Infrastructure opérationnelle prête</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-accent font-semibold text-fn-vert-profond mb-3">Jalons :</h4>
                  <ul className="space-y-2 font-corps text-fn-gris-moyen">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-fn-vert-profond mr-2 mt-2 flex-shrink-0"></span>
                      <span>Construction terminée dans le budget</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-fn-vert-profond mr-2 mt-2 flex-shrink-0"></span>
                      <span>Staff d'exploitation embauché et formé</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-fn-vert-profond mr-2 mt-2 flex-shrink-0"></span>
                      <span>Permis d'exploitation obtenu</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 2: Lancement */}
            <div className="bg-gradient-to-r from-fn-vert-vif to-fn-vert-vif bg-opacity-10 rounded-lg p-8 md:p-10 border-l-4 border-fn-vert-vif">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-fn-vert-vif text-fn-neige font-titre font-bold text-lg">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-accent font-bold text-fn-vert-profond">
                    Phase 2 — Lancement (2027)
                  </h3>
                  <p className="text-lg font-corps text-fn-gris-moyen">
                    Première récolte et ouverture communautaire
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-accent font-semibold text-fn-vert-profond mb-3">Livrables :</h4>
                  <ul className="space-y-2 font-corps text-fn-gris-moyen">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-fn-vert-vif mr-2 mt-2 flex-shrink-0"></span>
                      <span>Première saison de production lancée</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-fn-vert-vif mr-2 mt-2 flex-shrink-0"></span>
                      <span>Parcelles communautaires ouvertes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-fn-vert-vif mr-2 mt-2 flex-shrink-0"></span>
                      <span>Programme de formation lancé</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-accent font-semibold text-fn-vert-profond mb-3">Jalons :</h4>
                  <ul className="space-y-2 font-corps text-fn-gris-moyen">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-fn-vert-vif mr-2 mt-2 flex-shrink-0"></span>
                      <span>100+ tonnes produites (H1 2027)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-fn-vert-vif mr-2 mt-2 flex-shrink-0"></span>
                      <span>100 résidents engagés en parcelles</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-fn-vert-vif mr-2 mt-2 flex-shrink-0"></span>
                      <span>50 participants formés</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 3: Croissance */}
            <div className="bg-gradient-to-r from-fn-bleu-glace to-fn-bleu-glace bg-opacity-10 rounded-lg p-8 md:p-10 border-l-4 border-fn-bleu-glace">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-fn-bleu-glace text-fn-gris-fonce font-titre font-bold text-lg">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-accent font-bold text-fn-vert-profond">
                    Phase 3 — Croissance (2028–2029)
                  </h3>
                  <p className="text-lg font-corps text-fn-gris-moyen">
                    Optimisation et expansion des services
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-accent font-semibold text-fn-vert-profond mb-3">Livrables :</h4>
                  <ul className="space-y-2 font-corps text-fn-gris-moyen">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-fn-bleu-glace mr-2 mt-2 flex-shrink-0"></span>
                      <span>Rentabilité opérationnelle atteinte</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-fn-bleu-glace mr-2 mt-2 flex-shrink-0"></span>
                      <span>Cuisine communautaire opérationnelle</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-fn-bleu-glace mr-2 mt-2 flex-shrink-0"></span>
                      <span>Programme de formation consolidé</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-accent font-semibold text-fn-vert-profond mb-3">Jalons :</h4>
                  <ul className="space-y-2 font-corps text-fn-gris-moyen">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-fn-bleu-glace mr-2 mt-2 flex-shrink-0"></span>
                      <span>500 tonnes annuelles produites</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-fn-bleu-glace mr-2 mt-2 flex-shrink-0"></span>
                      <span>50 emplois permanents confirmés</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-fn-bleu-glace mr-2 mt-2 flex-shrink-0"></span>
                      <span>150+ entreprises/ménages partenaires</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 4: Réplication */}
            <div className="bg-gradient-to-r from-fn-rouge-baie to-fn-rouge-baie bg-opacity-10 rounded-lg p-8 md:p-10 border-l-4 border-fn-rouge-baie">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-fn-rouge-baie text-fn-neige font-titre font-bold text-lg">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-accent font-bold text-fn-vert-profond">
                    Phase 4 — Réplication (2030+)
                  </h3>
                  <p className="text-lg font-corps text-fn-gris-moyen">
                    Exportation du modèle à l'échelle provinciale
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-accent font-semibold text-fn-vert-profond mb-3">Livrables :</h4>
                  <ul className="space-y-2 font-corps text-fn-gris-moyen">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-fn-rouge-baie mr-2 mt-2 flex-shrink-0"></span>
                      <span>5+ serres répliquées dans le Québec</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-fn-rouge-baie mr-2 mt-2 flex-shrink-0"></span>
                      <span>Licensing technologique Kainon</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-fn-rouge-baie mr-2 mt-2 flex-shrink-0"></span>
                      <span>Centre de formation provinciale ouvert</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-accent font-semibold text-fn-vert-profond mb-3">Jalons :</h4>
                  <ul className="space-y-2 font-corps text-fn-gris-moyen">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-fn-rouge-baie mr-2 mt-2 flex-shrink-0"></span>
                      <span>2,500+ tonnes produites (5 sites)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-fn-rouge-baie mr-2 mt-2 flex-shrink-0"></span>
                      <span>250+ emplois durables créés</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-fn-rouge-baie mr-2 mt-2 flex-shrink-0"></span>
                      <span>Impact régional mesurable confirmé</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appel à l'action */}
      <CTA />
    </>
  )
}
