import type { Metadata } from 'next'
import Solution from '@/components/sections/Solution'
import Technologie from '@/components/sections/Technologie'
import CTA from '@/components/sections/CTA'

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

const zones = [
  { number: '01', title: 'Zones de Production', description: 'Cultures maraîchères et fruits sous contrôle climatique. Cultures diversifiées : tomates, laitues, poivrons, épinards, fraises.' },
  { number: '02', title: 'Parcelles Communautaires', description: "Espaces de jardinage accessibles aux résidents locaux. Accès toute l'année, formation incluse." },
  { number: '03', title: 'Centre de Transformation', description: 'Cuisine professionnelle pour la transformation des récoltes. Mises en conserve, jus, sauces et produits à valeur ajoutée.' },
  { number: '04', title: 'Espace de Formation', description: "Salle de classe intégrée pour ateliers, formations et événements communautaires." },
  { number: '05', title: 'Zone de Distribution', description: 'Logistique, entreposage climatisé et point de vente directe pour les clients locaux.' },
  { number: '06', title: 'Espaces Verts Communs', description: "Jardin pédagogique extérieur, espace de rassemblement pour les événements communautaires." },
]

export default function Projet() {
  return (
    <>
      {/* Hero Banner */}
      <section
        className="w-full pt-32 pb-20 bg-fn-noir-profond"
        aria-label="En-tête de la page Projet"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
          <span className="label-kainon text-fn-teal block mb-5">Le Projet</span>
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-titre font-bold text-fn-gris-clair mb-6 leading-[1.02]">
            Le Projet
          </h1>
          <p className="text-lg md:text-xl font-corps text-fn-gris leading-relaxed max-w-2xl">
            Une infrastructure agricole moderne et inclusive au cœur du Québec
          </p>
        </div>
      </section>

      {/* Présentation du Projet */}
      <section
        className="w-full py-24 md:py-32 lg:py-40 bg-fn-noir"
        aria-label="Présentation générale du projet"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
          {/* Aperçu */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-20 md:mb-28">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-titre font-bold text-fn-gris-clair leading-[1.02]">
              Qu'est-ce que
              <br />
              <span className="text-fn-teal">Fruits Nordiques ?</span>
            </h2>
            <div className="flex flex-col gap-6 justify-end">
              <p className="text-base md:text-lg font-corps text-fn-gris leading-relaxed">
                Fruits Nordiques est un projet novateur visant à créer une serre de production
                de 1 hectare entièrement climatisée, au cœur du Québec. Cette infrastructure
                ne se limite pas à la production alimentaire : c'est un écosystème complet.
              </p>
              <p className="text-base md:text-lg font-corps text-fn-gris leading-relaxed">
                Avec une production estimée à 500+ tonnes de fruits et légumes par an, la serre
                sera capable d'approvisionner directement les épiceries locales, restaurants,
                marchés fermiers et familles de la région.
              </p>
            </div>
          </div>

          <div className="divider-kainon mb-20 md:mb-28" />

          {/* Infrastructure */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-titre font-bold text-fn-gris-clair leading-[1.02] mb-5">
              L'infrastructure
              <br />
              <span className="text-fn-teal">d'1 hectare</span>
            </h2>
          </div>

          {/* Stats infrastructure */}
          <div className="card-kainon-accent p-8 md:p-10 mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <span className="font-titre text-3xl md:text-4xl font-bold text-fn-teal block mb-1">10 000</span>
                <span className="label-kainon">m² couverts</span>
              </div>
              <div>
                <span className="font-titre text-3xl md:text-4xl font-bold text-fn-teal block mb-1">500+</span>
                <span className="label-kainon">tonnes/an</span>
              </div>
              <div>
                <span className="font-titre text-3xl md:text-4xl font-bold text-fn-teal block mb-1">12</span>
                <span className="label-kainon">mois/an</span>
              </div>
              <div>
                <span className="font-titre text-3xl md:text-4xl font-bold text-fn-teal block mb-1">Kainon</span>
                <span className="label-kainon">technologie</span>
              </div>
            </div>
          </div>

          {/* Zones fonctionnelles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {zones.map((zone) => (
              <div key={zone.number} className="card-kainon p-6 md:p-8">
                <span className="font-titre text-3xl font-bold text-fn-teal/30 mb-4 block">{zone.number}</span>
                <h4 className="font-accent font-semibold text-sm text-fn-blanc mb-2 tracking-wide">
                  {zone.title}
                </h4>
                <p className="font-corps text-sm text-fn-gris leading-relaxed">
                  {zone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Solution />
      <Technologie />
      <CTA />
    </>
  )
}
