import type { Metadata } from 'next'
import Solution from '@/components/sections/Solution'
import Technologie from '@/components/sections/Technologie'
import CTA from '@/components/sections/CTA'

/* Métadonnées pour la page Projet */
export const metadata: Metadata = {
  title: 'Le Projet',
  description:
    'Découvrez le projet Fruits Nordiques : une serre de production de 1 hectare à vocation sociale, éducative et alimentaire.',
  openGraph: {
    title: 'Le Projet | Fruits Nordiques',
    description:
      'Une serre révolutionnaire de 1 hectare au service de la résilience alimentaire du Québec.',
    type: 'website',
  },
}

/**
 * Page Projet — Présente le projet détaillé avec la serre de 1 hectare
 * Includes small hero banner, project details, Solution et Technologie sections, and CTA
 */
export default function Projet() {
  return (
    <>
      {/* Hero Banner — Petit, distinct de la page d'accueil */}
      <section
        className="w-full py-20 bg-fn-vert-profond text-fn-neige"
        aria-label="En-tête de la page Projet"
      >
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-titre font-bold mb-4 leading-tight">
            Le Projet
          </h1>
          <p className="text-lg md:text-xl font-corps text-fn-bleu-glace leading-relaxed">
            Une infrastructure agricole moderne et inclusive au cœur du Québec
          </p>
        </div>
      </section>

      {/* Section Présentation du Projet */}
      <section
        className="w-full py-20 md:py-28 lg:py-32 bg-fn-neige"
        aria-label="Présentation générale du projet"
      >
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          {/* Aperçu général */}
          <div className="mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-titre font-bold text-fn-vert-profond mb-6 leading-tight">
              Qu'est-ce que Fruits Nordiques ?
            </h2>
            <p className="text-lg md:text-xl font-corps text-fn-gris-moyen leading-relaxed mb-6">
              Fruits Nordiques est un projet novateur visant à créer une serre de production
              de 1 hectare entièrement climatisée, au cœur du Québec. Cette infrastructure
              révolutionnaire ne se limite pas à la simple production alimentaire : c'est un
              écosystème complet dédié à la sécurité alimentaire, l'éducation agricole, la
              transformation alimentaire et l'engagement communautaire.
            </p>
            <p className="text-lg md:text-xl font-corps text-fn-gris-moyen leading-relaxed">
              Avec une production estimée à 500+ tonnes de fruits et légumes par an, la serre
              sera capable d'approvisionner directement les épiceries locales, restaurants,
              marchés fermiers et familles de la région — indépendamment du climat québécois.
            </p>
          </div>

          {/* Infrastructure détaillée */}
          <div className="mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-titre font-bold text-fn-vert-profond mb-6 leading-tight">
              L'Infrastructure d'1 Hectare
            </h2>
            <div className="bg-gradient-to-br from-fn-vert-clair to-fn-bleu-glace bg-opacity-10 rounded-lg p-8 md:p-10 border-l-4 border-fn-vert-profond mb-8">
              <h3 className="text-2xl font-accent font-bold text-fn-vert-profond mb-4">
                📐 Dimensions et Capacité
              </h3>
              <ul className="space-y-3 font-corps text-fn-gris-moyen leading-relaxed">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-fn-vert-vif mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>Superficie :</strong> 10 000 m² (1 hectare) entièrement couverts</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-fn-vert-vif mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>Production annuelle :</strong> 500+ tonnes de fruits et légumes</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-fn-vert-vif mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>Production à l'année :</strong> Cycles continus, indépendant du climat</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-fn-vert-vif mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>Technologie :</strong> Systèmes Kainon intégrés pour l'optimisation</span>
                </li>
              </ul>
            </div>

            {/* Zones fonctionnelles */}
            <h3 className="text-2xl md:text-3xl font-accent font-bold text-fn-vert-profond mb-6">
              Zones Fonctionnelles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Zone de production */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-xl font-accent font-bold text-fn-vert-profond mb-3">
                  🌱 Zones de Production
                </h4>
                <p className="font-corps text-fn-gris-moyen leading-relaxed">
                  Cultures maraîchères et fruits sous contrôle climatique. Cultures diversifiées :
                  tomates, laitues, poivrons, épinards, fraises, etc.
                </p>
              </div>

              {/* Parcelles communautaires */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-xl font-accent font-bold text-fn-vert-profond mb-3">
                  🤝 Parcelles Communautaires
                </h4>
                <p className="font-corps text-fn-gris-moyen leading-relaxed">
                  Espaces de jardinage accessibles aux résidents locaux. Accès toute l'année,
                  formation incluse.
                </p>
              </div>

              {/* Centre de transformation */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-xl font-accent font-bold text-fn-vert-profond mb-3">
                  🍳 Centre de Transformation
                </h4>
                <p className="font-corps text-fn-gris-moyen leading-relaxed">
                  Cuisine professionnelle pour la transformation des récoltes. Mises en conserve,
                  jus, sauces et produits à valeur ajoutée.
                </p>
              </div>

              {/* Espace de formation */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-xl font-accent font-bold text-fn-vert-profond mb-3">
                  🎓 Espace de Formation
                </h4>
                <p className="font-corps text-fn-gris-moyen leading-relaxed">
                  Salle de classe intégrée pour ateliers, formations et événements communautaires.
                </p>
              </div>

              {/* Zone de distribution */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-xl font-accent font-bold text-fn-vert-profond mb-3">
                  📦 Zone de Distribution
                </h4>
                <p className="font-corps text-fn-gris-moyen leading-relaxed">
                  Logistique, entreposage climatisé et point de vente directe pour les clients locaux.
                </p>
              </div>

              {/* Espaces verts communs */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-xl font-accent font-bold text-fn-vert-profond mb-3">
                  🌿 Espaces Verts Communs
                </h4>
                <p className="font-corps text-fn-gris-moyen leading-relaxed">
                  Jardin pédagogique extérieur, espace de rassemblement pour les événements communautaires.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Réutilisation de la section Solution (Les quatre vocations) */}
      <Solution />

      {/* Réutilisation de la section Technologie */}
      <Technologie />

      {/* Appel à l'action */}
      <CTA />
    </>
  )
}
