'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Solution — Quatre vocations en cartes matière
 * Mix de surfaces mates claires, sombres et accent orange
 * Composition éditoriale avec légers décalages
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
    dark: 'card-matte-dark text-white',
    light: 'card-matte',
    accent: 'card-accent text-white',
  };

  const titleColor = {
    dark: 'text-white',
    light: 'text-fn-vert-profond',
    accent: 'text-white',
  };

  const descColor = {
    dark: 'text-white/80',
    light: 'text-fn-gris-chaud',
    accent: 'text-white/90',
  };

  return (
    <motion.div
      ref={ref}
      className={vocation.gridClass}
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.1,
      }}
    >
      <div className={`h-full ${cardStyles[vocation.variant]} p-8 md:p-10 lg:p-12 flex flex-col`}>
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
      className="relative w-full py-20 md:py-28 lg:py-36 bg-fn-cream-dark px-5 sm:px-8"
      aria-label="Section des quatre vocations"
    >
      {/* Props décoratifs */}
      <div className="absolute top-28 left-8 w-10 h-10 bg-fn-vert-profond/5 prop-oval" aria-hidden="true" />
      <div className="absolute bottom-20 right-12 w-14 h-8 bg-fn-orange/8 prop-capsule" style={{ borderRadius: '50%' }} aria-hidden="true" />

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
            <span className="text-fn-vert-moyen">Quatre vocations.</span>
          </h2>

          <p className="text-lg md:text-xl font-corps text-fn-gris-chaud max-w-3xl mx-auto leading-relaxed">
            Fruits Nordiques n'est pas une serre. C'est un écosystème complet au
            service de la communauté.
          </p>
        </motion.div>

        {/* Bento Grid */}
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
