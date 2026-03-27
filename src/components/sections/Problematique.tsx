'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Problématique — Bento grid asymétrique
 * Layout organique avec cartes de tailles variées
 * Glassmorphisme + accents rouge baie
 */

interface ProblemCard {
  id: string;
  emoji: string;
  title: string;
  description: string;
  /** Position dans le bento grid */
  gridClass: string;
}

const problems: ProblemCard[] = [
  {
    id: 'deserts-alimentaires',
    emoji: '🏜️',
    title: 'Déserts alimentaires',
    description:
      'Des millions de ménages en zones rurales et périurbaines ont un accès limité à des aliments frais, locaux et abordables.',
    gridClass: 'md:col-span-2 md:row-span-2',
  },
  {
    id: 'dependance-importations',
    emoji: '🌍',
    title: 'Dépendance aux importations',
    description:
      "Une part significative des fruits et légumes consommés au Québec provient de l'extérieur du pays.",
    gridClass: 'md:col-span-1',
  },
  {
    id: 'insecurite-alimentaire',
    emoji: '⚠️',
    title: 'Insécurité alimentaire',
    description:
      'Les crises révèlent la fragilité du système alimentaire industriel.',
    gridClass: 'md:col-span-1',
  },
  {
    id: 'declin-releve',
    emoji: '👨‍🌾',
    title: 'Déclin de la relève',
    description:
      'Le secteur agricole peine à attirer et former la prochaine génération.',
    gridClass: 'md:col-span-1',
  },
  {
    id: 'chomage-jeunes',
    emoji: '📊',
    title: 'Chômage chez les jeunes',
    description:
      "Des milliers de jeunes dans les régions manquent d'opportunités concrètes.",
    gridClass: 'md:col-span-2',
  },
];

function ProblemCardComponent({
  card,
  index,
}: {
  card: ProblemCard;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      className={`${card.gridClass}`}
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.08,
      }}
    >
      <div className={`h-full glass-card p-8 md:p-10 flex flex-col group cursor-default border-l-4 border-fn-rouge-baie/60 hover:border-fn-rouge-baie transition-all duration-500 ${
        index === 0 ? 'md:p-12' : ''
      }`}>
        {/* Icône emoji */}
        <div className={`mb-5 ${index === 0 ? 'text-6xl' : 'text-4xl'}`} aria-hidden="true">
          {card.emoji}
        </div>

        {/* Titre */}
        <h3 className={`font-accent font-bold text-fn-vert-profond mb-3 ${
          index === 0 ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl'
        }`}>
          {card.title}
        </h3>

        {/* Description */}
        <p className={`font-corps text-fn-gris-moyen leading-relaxed flex-grow ${
          index === 0 ? 'text-base md:text-lg' : 'text-base'
        }`}>
          {card.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Problematique() {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, margin: '-80px' });

  return (
    <section
      id="problematique"
      className="relative w-full py-20 md:py-28 lg:py-36 bg-fn-cream px-5 sm:px-8"
      aria-label="Section sur le défi alimentaire du Québec"
    >
      {/* Forme décorative flottante */}
      <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-fn-rouge-baie/5 blur-2xl" aria-hidden="true" />
      <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-fn-soleil/5 blur-2xl" aria-hidden="true" />

      <div className="max-w-7xl mx-auto">
        {/* Titre */}
        <motion.div
          ref={titleRef}
          className="mb-14 md:mb-20"
          initial={{ opacity: 0, y: 24 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-titre font-bold text-fn-vert-profond text-center leading-tight">
            Le défi alimentaire
            <br />
            <span className="text-fn-rouge-baie">du Québec</span>
          </h2>
        </motion.div>

        {/* Bento Grid — 3 colonnes, tailles variées */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 auto-rows-auto">
          {problems.map((problem, index) => (
            <ProblemCardComponent
              key={problem.id}
              card={problem}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
