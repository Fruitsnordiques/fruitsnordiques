'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Solution — Quatre vocations, style dashboard cards
 * Mix de card-dark et card-accent avec indicateurs colorés
 */

const vocations = [
  {
    id: 'alimentation',
    icon: '🌱',
    titre: 'Production alimentaire locale',
    description:
      'Fruits et légumes produits à l\'année, indépendamment du climat. Approvisionnement direct vers épiceries, restaurants, marchés et familles locales.',
    gridClass: 'md:col-span-2',
    accent: 'bg-fn-vert-vif',
    variant: 'elevated' as const,
  },
  {
    id: 'communautaire',
    icon: '🤝',
    titre: 'Agriculture communautaire',
    description:
      'Parcelles de culture accessibles aux résidents. Serres communautaires pour jardinage en toute saison.',
    gridClass: 'md:col-span-1',
    accent: 'bg-fn-orange',
    variant: 'dark' as const,
  },
  {
    id: 'cuisine',
    icon: '🍳',
    titre: 'Cuisine et transformation',
    description:
      'Centre de transformation alimentaire. Équipements professionnels pour entrepreneurs alimentaires locaux. Réduction du gaspillage.',
    gridClass: 'md:col-span-1',
    accent: 'bg-fn-jaune',
    variant: 'dark' as const,
  },
  {
    id: 'formation',
    icon: '🎓',
    titre: 'Formation et insertion',
    description:
      'Programme de formation en agronomie, horticulture, gestion de serre. Partenariats avec établissements d\'enseignement. Priorité aux jeunes.',
    gridClass: 'md:col-span-2',
    accent: 'bg-fn-bleu',
    variant: 'accent' as const,
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

  const cardClass = {
    dark: 'card-dark',
    elevated: 'card-elevated',
    accent: 'card-accent',
  };

  const textColor = vocation.variant === 'accent' ? 'text-white' : 'text-fn-blanc';
  const descColor = vocation.variant === 'accent' ? 'text-white/85' : 'text-fn-gris';

  return (
    <motion.div
      ref={ref}
      className={vocation.gridClass}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.1,
      }}
    >
      <div className={`h-full ${cardClass[vocation.variant]} p-6 md:p-8 lg:p-10 flex flex-col`}>
        {/* Barre accent + icône */}
        <div className="flex items-center gap-4 mb-5">
          <div className={`w-8 h-1 rounded-full ${vocation.accent}`} />
          <span className="text-2xl md:text-3xl" aria-hidden="true">{vocation.icon}</span>
        </div>

        {/* Titre */}
        <h3 className={`text-lg md:text-xl lg:text-2xl font-accent font-bold ${textColor} mb-3`}>
          {vocation.titre}
        </h3>

        {/* Description */}
        <p className={`text-sm md:text-base font-corps ${descColor} leading-relaxed flex-grow`}>
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
      className="relative w-full py-20 md:py-28 lg:py-32 bg-fn-noir-profond px-5 sm:px-8"
      aria-label="Section des quatre vocations"
    >
      <div className="max-w-7xl mx-auto">
        {/* En-tête */}
        <motion.div
          ref={titleRef}
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-1 rounded-full bg-fn-vert-vif" />
            <span className="font-accent text-xs font-semibold text-fn-gris tracking-wider uppercase">Solution</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-titre font-bold text-fn-blanc mb-5 leading-tight">
            Un écosystème.
            <br />
            <span className="text-fn-vert-vif">Quatre vocations.</span>
          </h2>

          <p className="text-base md:text-lg font-corps text-fn-gris max-w-3xl leading-relaxed">
            Fruits Nordiques n'est pas une serre. C'est un écosystème complet au
            service de la communauté.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
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
