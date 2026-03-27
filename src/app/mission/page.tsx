import type { Metadata } from 'next'
import Solution from '@/components/sections/Solution'
import CTA from '@/components/sections/CTA'

/* Métadonnées pour la page Mission */
export const metadata: Metadata = {
  title: 'Notre Mission',
  description:
    'La mission de Fruits Nordiques : bâtir la résilience alimentaire du Québec à travers une serre communautaire inclusive et durable.',
  openGraph: {
    title: 'Notre Mission | Fruits Nordiques',
    description:
      'Découvrez la mission et la vision derrière Fruits Nordiques.',
    type: 'website',
  },
}

/**
 * Page Mission — Présente la mission, vision et valeurs du projet
 * Includes small hero banner, detailed prose, reuse of Solution section, and CTA
 */
export default function Mission() {
  return (
    <>
      {/* Hero Banner — Petit, distinct de la page d'accueil */}
      <section
        className="w-full py-20 bg-fn-vert-profond text-fn-neige"
        aria-label="En-tête de la page Mission"
      >
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-titre font-bold mb-4 leading-tight">
            Notre Mission
          </h1>
          <p className="text-lg md:text-xl font-corps text-fn-bleu-glace leading-relaxed">
            Nourrir le Nord. Ensemble.
          </p>
        </div>
      </section>

      {/* Section Mission détaillée */}
      <section
        className="w-full py-20 md:py-28 lg:py-32 bg-fn-neige"
        aria-label="Détails de la mission et de la vision"
      >
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          {/* Bloc Mission */}
          <div className="mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-titre font-bold text-fn-vert-profond mb-6 leading-tight">
              La Mission
            </h2>
            <p className="text-lg md:text-xl font-corps text-fn-gris-moyen leading-relaxed mb-6">
              Fruits Nordiques a pour mission de créer une infrastructure alimentaire
              résiliente, inclusive et durable au cœur du Québec. Nous visons à répondre
              aux enjeux de sécurité alimentaire, de création d'emplois et de renforcement
              de la communauté par le biais d'une serre de production de 1 hectare à
              vocations multiples.
            </p>
            <p className="text-lg md:text-xl font-corps text-fn-gris-moyen leading-relaxed">
              Notre mission n'est pas seulement de produire des aliments frais et locaux,
              mais de construire un écosystème d'apprentissage, d'engagement communautaire
              et d'entrepreneuriat agricole. Nous croyons que l'alimentation est un droit
              fondamental et que chacun devrait avoir accès à des aliments nutritifs,
              indépendamment de son revenu ou de sa localisation géographique.
            </p>
          </div>

          {/* Bloc Vision */}
          <div className="mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-titre font-bold text-fn-vert-profond mb-6 leading-tight">
              La Vision
            </h2>
            <p className="text-lg md:text-xl font-corps text-fn-gris-moyen leading-relaxed mb-6">
              Nous imaginons un Québec où chaque région dispose d'une infrastructure alimentaire
              locale, où la technologie serve l'agriculture plutôt que de la remplacer, et où
              la communauté est au cœur de la production alimentaire.
            </p>
            <p className="text-lg md:text-xl font-corps text-fn-gris-moyen leading-relaxed">
              D'ici 2030, le modèle Fruits Nordiques sera répliqué dans au moins cinq régions
              du Québec, créant une véritable filière agroalimentaire locale, durable et
              technologiquement avancée. Nous rêvons d'un avenir où la production alimentaire
              locale n'est plus une exception mais une norme, et où chaque citoyen peut contribuer
              à bâtir la résilience de sa communauté.
            </p>
          </div>

          {/* Bloc Valeurs */}
          <div className="mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-titre font-bold text-fn-vert-profond mb-6 leading-tight">
              Nos Valeurs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Inclusivité */}
              <div className="bg-white rounded-lg p-8 shadow-sm border-l-4 border-fn-vert-vif">
                <h3 className="text-2xl font-accent font-bold text-fn-vert-profond mb-3">
                  🤝 Inclusivité
                </h3>
                <p className="font-corps text-fn-gris-moyen leading-relaxed">
                  Nous créons des opportunités d'accès à la terre, aux emplois et aux connaissances
                  agricoles pour tous, indépendamment du statut socioéconomique.
                </p>
              </div>

              {/* Durabilité */}
              <div className="bg-white rounded-lg p-8 shadow-sm border-l-4 border-fn-vert-vif">
                <h3 className="text-2xl font-accent font-bold text-fn-vert-profond mb-3">
                  🌱 Durabilité
                </h3>
                <p className="font-corps text-fn-gris-moyen leading-relaxed">
                  Nos pratiques minimisent l'impact environnemental tout en maximisant la
                  productivité alimentaire pour les générations futures.
                </p>
              </div>

              {/* Innovation */}
              <div className="bg-white rounded-lg p-8 shadow-sm border-l-4 border-fn-soleil">
                <h3 className="text-2xl font-accent font-bold text-fn-vert-profond mb-3">
                  💡 Innovation
                </h3>
                <p className="font-corps text-fn-gris-moyen leading-relaxed">
                  Nous intégrons des technologies de pointe pour optimiser la production tout en
                  restant ancrés dans l'agriculture biologique et respectueuse de la nature.
                </p>
              </div>

              {/* Engagement Communautaire */}
              <div className="bg-white rounded-lg p-8 shadow-sm border-l-4 border-fn-soleil">
                <h3 className="text-2xl font-accent font-bold text-fn-vert-profond mb-3">
                  ❤️ Engagement
                </h3>
                <p className="font-corps text-fn-gris-moyen leading-relaxed">
                  Nous mettons la communauté au cœur de chaque décision, en créant des espaces
                  d'apprentissage, d'échange et de prise d'initiative.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Réutilisation de la section Solution */}
      <Solution />

      {/* Appel à l'action */}
      <CTA />
    </>
  )
}
