'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Solution v5 — Neumorphique
 * 4 vocations, cartes en relief, numérotation typographique
 */

const vocations = [
  {
    id: 'alimentation',
    number: '01',
    titre: 'Production alimentaire locale',
    description:
      "Fruits et légumes produits à l'année, indépendamment du climat. Approvisionnement direct vers épiceries, restaurants, marchés et familles locales.",
  },
  {
    id: 'communautaire',
    number: '02',
    titre: 'Agriculture communautaire',
    description:
      'Parcelles de culture accessibles aux résidents. Serres communautaires pour jardinage en toute saison.',
  },
  {
    id: 'cuisine',
    number: '03',
    titre: 'Cuisine et transformation',
    description:
      'Centre de transformation alimentaire. Équipements professionnels pour entrepreneurs alimentaires locaux. Réduction du gaspillage.',
  },
  {
    id: 'formation',
    number: '04',
    titre: 'Formation et insertion',
    description:
      "Programme de formation en agronomie, horticulture, gestion de serre. Partenariats avec établissements d'enseignement. Priorité aux jeunes.",
  },
];

function VocationCard({
  vocation,
  index,
}: {
  vocation: typeof vocations[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.1,
      }}
    >
      <div className="card-neu h-full flex flex-col">
        {/* Numéro */}
        <span className="font-titre text-4xl md:text-5xl font-bold text-fn-teal/30 mb-6">
          {vocation.number}
        </span>

        {/* Titre */}
        <h3 className="font-accent font-semibold text-base md:text-lg text-fn-texte-titre mb-3 tracking-wide">
          {vocation.titre}
        </h3>

        {/* Description */}
        <p className="font-corps text-sm text-fn-texte-muted leading-relaxed flex-grow">
          {vocation.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Solution() {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, margin: '-60px' });

  return (
    <section
      id="solution"
      className="relative w-full py-24 md:py-32 lg:py-40 px-6 sm:px-10 lg:px-14 bg-fn-fond-clair"
      aria-label="Section des quatre vocations"
    >
      <div className="max-w-7xl mx-auto">
        {/* En-tête 2 colonnes */}
        <motion.div
          ref={titleRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <span className="label-neu block mb-5">Solution</span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-titre font-bold text-fn-texte-titre leading-[1.02]">
              Un écosystème.
              <br />
              <span className="text-fn-teal">Quatre vocations.</span>
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-base md:text-lg font-corps text-fn-texte-sub leading-relaxed">
              Fruits Nordiques n'est pas une serre. C'est un écosystème
              complet au service de la communauté — production, formation,
              transformation et agriculture communautaire réunis sous un
              même toit.
            </p>
          </div>
        </motion.div>

        {/* Séparateur */}
        <div className="divider-neu mb-12 md:mb-16" />

        {/* Grille 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {vocations.map((vocation, index) => (
            <VocationCard
              key={vocation.id}
              vocation={vocation}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
