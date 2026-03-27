'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Roadmap — Timeline dashboard avec nœuds et cartes status
 * Phase actuelle en card-accent orange, reste en card-dark
 * Indicateurs de progression visuels
 */

const phases = [
  {
    id: 0,
    number: '0',
    title: 'Fondation',
    period: '2025–2026',
    description: 'Étude de faisabilité, sélection du site, permis, design architectural, montage financier, partenariats fondateurs',
    isCurrent: true,
    progress: 25,
  },
  {
    id: 1,
    number: '1',
    title: 'Construction',
    period: '2026–2027',
    description: 'Construction de la serre (1 ha), installation des systèmes Kainon, aménagement des espaces communautaires',
    isCurrent: false,
    progress: 0,
  },
  {
    id: 2,
    number: '2',
    title: 'Lancement',
    period: '2027',
    description: 'Première saison de production, ouverture des parcelles communautaires, lancement du programme de formation',
    isCurrent: false,
    progress: 0,
  },
  {
    id: 3,
    number: '3',
    title: 'Croissance',
    period: '2028–2029',
    description: 'Rentabilité opérationnelle, expansion du programme de formation, développement de la cuisine communautaire',
    isCurrent: false,
    progress: 0,
  },
  {
    id: 4,
    number: '4',
    title: 'Réplication',
    period: '2030+',
    description: 'Exportation du modèle, licensing technologique Kainon, impact à l\'échelle provinciale',
    isCurrent: false,
    progress: 0,
  },
];

function PhaseCard({
  phase,
  index,
}: {
  phase: typeof phases[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      className="relative flex items-start gap-5 md:gap-6"
      initial={{ opacity: 0, x: -16 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.08,
      }}
    >
      {/* Nœud timeline */}
      <div className="relative flex-shrink-0 z-10">
        <motion.div
          className={`w-4 h-4 rounded-full border-2 ${
            phase.isCurrent
              ? 'bg-fn-orange border-fn-orange shadow-glow-orange'
              : 'bg-fn-gris-fonce border-fn-gris-bordure'
          }`}
          animate={
            phase.isCurrent
              ? { scale: [1, 1.2, 1] }
              : {}
          }
          transition={phase.isCurrent ? { duration: 2.5, repeat: Infinity, ease: 'easeInOut' } : {}}
        />
      </div>

      {/* Carte */}
      <div className={`flex-grow pb-8 ${index === phases.length - 1 ? 'pb-0' : ''}`}>
        <div className={`rounded-2xl p-5 md:p-7 transition-all duration-400 ${
          phase.isCurrent ? 'card-accent' : 'card-dark'
        }`}>
          {/* Badge période + progression */}
          <div className="flex items-center justify-between mb-3">
            <span className={`inline-block px-3 py-1 rounded-lg text-xs font-accent font-semibold ${
              phase.isCurrent
                ? 'bg-white/20 text-white'
                : 'bg-fn-gris-bordure/50 text-fn-gris-clair'
            }`}>
              {phase.period}
            </span>
            {phase.isCurrent && (
              <span className="text-xs font-accent font-semibold text-white/80">
                {phase.progress}%
              </span>
            )}
          </div>

          {/* Titre */}
          <h3 className={`text-base md:text-lg font-accent font-bold mb-2 ${
            phase.isCurrent ? 'text-white' : 'text-fn-blanc'
          }`}>
            Phase {phase.number} — {phase.title}
          </h3>

          {/* Description */}
          <p className={`text-sm font-corps leading-relaxed ${
            phase.isCurrent ? 'text-white/85' : 'text-fn-gris'
          }`}>
            {phase.description}
          </p>

          {/* Barre de progression (phase actuelle uniquement) */}
          {phase.isCurrent && (
            <div className="mt-4 h-1 rounded-full bg-white/20 overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-white/70"
                initial={{ width: '0%' }}
                animate={isInView ? { width: `${phase.progress}%` } : {}}
                transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
              />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Roadmap() {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, margin: '-60px' });

  return (
    <section
      id="roadmap"
      className="relative w-full py-20 md:py-28 lg:py-32 px-5 sm:px-8"
      aria-label="Feuille de route du projet"
      style={{
        background: `linear-gradient(180deg,
          #0C0E14 0%,
          #14180E 12%,
          #1E3018 30%,
          #2D4A20 50%,
          #1E3018 70%,
          #14180E 88%,
          #0C0E14 100%
        )`,
      }}
    >
      <div className="max-w-4xl mx-auto">
        {/* En-tête */}
        <motion.div
          ref={titleRef}
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-1 rounded-full bg-fn-jaune" />
            <span className="font-accent text-xs font-semibold text-fn-gris tracking-wider uppercase">Roadmap</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-titre font-bold text-fn-blanc mb-5 leading-tight">
            Notre feuille
            <br />
            <span className="text-fn-orange">de route</span>
          </h2>

          <p className="text-base md:text-lg font-corps text-fn-gris max-w-2xl leading-relaxed">
            Un plan clair, des jalons concrets, une vision à long terme.
          </p>
        </motion.div>

        {/* Timeline verticale */}
        <div className="relative pl-2">
          {/* Ligne verticale */}
          <div
            className="absolute left-[7px] top-2 bottom-12 w-[2px] bg-gradient-to-b from-fn-orange via-fn-gris-bordure to-fn-gris-bordure/20 rounded-full"
            aria-hidden="true"
          />

          {/* Phases */}
          <div className="flex flex-col">
            {phases.map((phase, index) => (
              <PhaseCard key={phase.id} phase={phase} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
