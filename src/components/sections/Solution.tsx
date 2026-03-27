'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Solution — Bento grid avec surfaces en verre
 * 4 vocations dans un layout asymétrique organique
 * Mix de cartes claires et d'une carte en verre foncé
 */

const vocations = [
  {
    id: 'alimentation',
    emoji: '🌱',
    titre: 'Production alimentaire locale',
    description:
      'Fruits et légumes produits à l\'année, indépendamment du climat. Approvisionnement direct vers épiceries, restaurants, marchés et familles locales.',
    gridClass: 'md:col-span-2',
    variant: 'dark' as const,
  },
  {
    id: 'communautaire',
    emoji: '🤝',
    titre: 'Agriculture communautaire',
    description:
      'Parcelles de culture accessibles aux résidents. Serres communautaires pour jardinage en toute saison.',
    gridClass: 'md:col-span-1',
    variant: 'light' as const,
  },
  {
    id: 'cuisine',
    emoji: '🍳',
    titre: 'Cuisine et transformation',
    description:
      'Centre de transformation alimentaire. Équipements professionnels pour entrepreneurs alimentaires locaux. Réduction du gaspillage.',
    gridClass: 'md:col-span-1',
    variant: 'light' as const,
  },
  {
    id: 'formation',
    emoji: '🎓',
    titre: 'Formation et insertion',
    description:
      'Programme de formation en agronomie, horticulture, gestion de serre. Partenariats avec établissements d\'enseignement. Priorité aux jeunes.',
    gridClass: 'md:col-span-2',
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
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const cardStyles = {
    dark: 'glass-card-dark text-white',
    light: 'glass-card',
    accent: 'bg-gradient-to-br from-fn-soleil/10 to-fn-terre/5 backdrop-blur-xl rounded-4xl border border-fn-soleil/20',
  };

  const titleColor = {
    dark: 'text-white',
    light: 'text-fn-vert-profond',
    accent: 'text-fn-vert-profond',
  };

  const descColor = {
    dark: 'text-white/80',
    light: 'text-fn-gris-moyen',
    accent: 'text-fn-gris-moyen',
  };

  return (
    <motion.div
      ref={ref}
      className={vocation.gridClass}
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.1,
      }}
    >
      <div className={`h-full ${cardStyles[vocation.variant]} p-8 md:p-10 lg:p-12 flex flex-col hover:translate-y-[-6px] transition-all duration-500`}>
        {/* Emoji */}
        <div className="text-5xl md:text-6xl mb-6" aria-hidden="true">
          {vocation.emoji}
        </div>

        {/* Titre */}
        <h3 className={`text-xl md:text-2xl lg:text-3xl font-accent font-bold ${titleColor[vocation.variant]} mb-4`}>
          {vocation.titre}
        </h3>

        {/* Description */}
        <p className={`text-base md:text-lg font-corps ${descColor[vocation.variant]} leading-relaxed flex-grow`}>
          {vocation.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Solution() {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, margin: '-80px' });

  return (
    <section
      id="solution"
      className="relative w-full py-20 md:py-28 lg:py-36 bg-fn-neige px-5 sm:px-8"
      aria-label="Section des quatre vocations"
    >
      {/* Décorations */}
      <div className="absolute top-32 left-8 w-24 h-24 rounded-full bg-fn-vert-clair/8 blur-xl" aria-hidden="true" />
      <div className="absolute bottom-24 right-12 w-36 h-36 rounded-full bg-fn-soleil/6 blur-2xl" aria-hidden="true" />

      <div className="max-w-7xl mx-auto">
        {/* En-tête */}
        <motion.div
          ref={titleRef}
          className="text-center mb-14 md:mb-20"
          initial={{ opacity: 0, y: 24 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-titre font-bold text-fn-vert-profond mb-6 leading-tight">
            Un écosystème.
            <br />
            <span className="text-fn-vert-vif">Quatre vocations.</span>
          </h2>

          <p className="text-lg md:text-xl font-corps text-fn-gris-moyen max-w-3xl mx-auto leading-relaxed">
            Fruits Nordiques n'est pas une serre. C'est un écosystème complet au
            service de la communauté.
          </p>
        </motion.div>

        {/* Bento Grid — 3 colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
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
