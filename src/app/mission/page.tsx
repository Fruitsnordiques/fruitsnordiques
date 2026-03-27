import type { Metadata } from 'next'
import Solution from '@/components/sections/Solution'
import CTA from '@/components/sections/CTA'

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

export default function Mission() {
  return (
    <>
      {/* Hero Banner */}
      <section
        className="w-full pt-32 pb-20 bg-fn-fond"
        aria-label="En-tête de la page Mission"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
          <span className="label-neu text-fn-teal-fonce block mb-5">Mission</span>
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-titre font-bold text-fn-texte-titre mb-6 leading-[1.02]">
            Notre Mission
          </h1>
          <p className="text-lg md:text-xl font-corps text-fn-texte-sub leading-relaxed max-w-2xl">
            Nourrir le Nord. Ensemble.
          </p>
        </div>
      </section>

      {/* Mission détaillée */}
      <section
        className="w-full py-24 md:py-32 lg:py-40 bg-fn-fond-clair"
        aria-label="Détails de la mission et de la vision"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
          {/* Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-20 md:mb-28">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-titre font-bold text-fn-texte-titre leading-[1.02]">
              La <span className="text-fn-teal">Mission</span>
            </h2>
            <div className="flex flex-col gap-6">
              <p className="text-base md:text-lg font-corps text-fn-texte-sub leading-relaxed">
                Fruits Nordiques a pour mission de créer une infrastructure alimentaire
                résiliente, inclusive et durable au cœur du Québec. Nous visons à répondre
                aux enjeux de sécurité alimentaire, de création d'emplois et de renforcement
                de la communauté par le biais d'une serre de production de 1 hectare à
                vocations multiples.
              </p>
              <p className="text-base md:text-lg font-corps text-fn-texte-sub leading-relaxed">
                Notre mission n'est pas seulement de produire des aliments frais et locaux,
                mais de construire un écosystème d'apprentissage, d'engagement communautaire
                et d'entrepreneuriat agricole.
              </p>
            </div>
          </div>

          <div className="divider-neu mb-20 md:mb-28" />

          {/* Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-20 md:mb-28">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-titre font-bold text-fn-texte-titre leading-[1.02]">
              La <span className="text-fn-teal">Vision</span>
            </h2>
            <div className="flex flex-col gap-6">
              <p className="text-base md:text-lg font-corps text-fn-texte-sub leading-relaxed">
                Nous imaginons un Québec où chaque région dispose d'une infrastructure
                alimentaire locale, où la technologie serve l'agriculture plutôt que de
                la remplacer, et où la communauté est au cœur de la production alimentaire.
              </p>
              <p className="text-base md:text-lg font-corps text-fn-texte-sub leading-relaxed">
                D'ici 2030, le modèle Fruits Nordiques sera répliqué dans au moins cinq
                régions du Québec, créant une véritable filière agroalimentaire locale,
                durable et technologiquement avancée.
              </p>
            </div>
          </div>

          <div className="divider-neu mb-20 md:mb-28" />

          {/* Valeurs */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-titre font-bold text-fn-texte-titre leading-[1.02] mb-12">
              Nos <span className="text-fn-teal">Valeurs</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="card-neu">
              <span className="font-titre text-3xl font-bold text-fn-teal/30 mb-4 block">01</span>
              <h3 className="font-accent font-semibold text-base text-fn-texte-titre mb-3 tracking-wide">
                Inclusivité
              </h3>
              <p className="font-corps text-sm text-fn-texte-muted leading-relaxed">
                Nous créons des opportunités d'accès à la terre, aux emplois et aux connaissances
                agricoles pour tous, indépendamment du statut socioéconomique.
              </p>
            </div>

            <div className="card-neu">
              <span className="font-titre text-3xl font-bold text-fn-teal/30 mb-4 block">02</span>
              <h3 className="font-accent font-semibold text-base text-fn-texte-titre mb-3 tracking-wide">
                Durabilité
              </h3>
              <p className="font-corps text-sm text-fn-texte-muted leading-relaxed">
                Nos pratiques minimisent l'impact environnemental tout en maximisant la
                productivité alimentaire pour les générations futures.
              </p>
            </div>

            <div className="card-neu">
              <span className="font-titre text-3xl font-bold text-fn-teal/30 mb-4 block">03</span>
              <h3 className="font-accent font-semibold text-base text-fn-texte-titre mb-3 tracking-wide">
                Innovation
              </h3>
              <p className="font-corps text-sm text-fn-texte-muted leading-relaxed">
                Nous intégrons des technologies de pointe pour optimiser la production tout en
                restant ancrés dans l'agriculture biologique.
              </p>
            </div>

            <div className="card-neu">
              <span className="font-titre text-3xl font-bold text-fn-teal/30 mb-4 block">04</span>
              <h3 className="font-accent font-semibold text-base text-fn-texte-titre mb-3 tracking-wide">
                Engagement
              </h3>
              <p className="font-corps text-sm text-fn-texte-muted leading-relaxed">
                Nous mettons la communauté au cœur de chaque décision, en créant des espaces
                d'apprentissage, d'échange et de prise d'initiative.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Solution />
      <CTA />
    </>
  )
}
