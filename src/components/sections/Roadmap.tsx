'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Roadmap v4 — Style Kainon
 * Timeline horizontale en cartes, phase actuelle en accent teal
 */

const phases = [
  {
    id: 0,
    number: '00',
    title: 'Fondation',
    period: '2025–2026',
    description: 'Étude de faisabilité, sélection du site, permis, design architectural, montage financier, partenariats fondateurs.',
    isCurrent: true,
    progress: 25,
  },
  {
    id: 1,
    number: '01',
    title: 'Construction',
    period: '2026–2027',
    description: 'Construction de la serre (1 ha), installation des systèmes Kainon, aménagement des espaces communautaires.',
    isCurrent: false,
    progress: 0,
  },
  {
    id: 2,
    number: '02',
    title: 'Lancement',
    period: '2027',
    description: 'Première saison de production, ouverture des parcelles communautaires, lancement du programme de formation.',
    isCurrent: false,
    progress: 0,
  },
  {
    id: 3,
    number: '03',
    title: 'Croissance',
    period: '2028–2029',
    description: 'Rentabilité opérationnelle, expansion du programme de formation, développement de la cuisine communautaire.',
    isCurrent: false,
    progress: 0,
  },
  {
    id: 4,
    number: '04',
    title: 'Réplication',
    period: '2030+',
    description: "Exportation du modèle, licensing technologique Kainon, impact à l'échelle provinciale.",
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
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.08,
      }}
    >
      <div className={`h-full p-6 md:p-8 rounded-2xl flex flex-col ${
        phase.isCurrent
          ? 'bg-fn-noir-carte border border-fn-teal/20'
          : 'card-kainon'
      }`}>
        {/* Période + statut */}
        <div className="flex items-center justify-between mb-4">
          <span className="label-kainon">
            {phase.period}
          </span>
          {phase.isCurrent && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-fn-teal/10 text-fn-teal text-[11px] font-accent font-medium tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-fn-teal animate-pulse-soft" />
              En cours
            </span>
          )}
        </div>

        {/* Numéro + titre */}
        <span className={`font-titre text-3xl font-bold mb-2 ${
          phase.isCurrent ? 'text-fn-teal' : 'text-fn-teal/30'
        }`}>
          {phase.number}
        </span>
        <h3 className={`font-accent font-semibold text-base mb-3 tracking-wide ${
          phase.isCurrent ? 'text-fn-blanc' : 'text-fn-gris-clair'
        }`}>
          {phase.title}
        </h3>

        {/* Description */}
        <p className="font-corps text-sm text-fn-gris leading-relaxed flex-grow">
          {phase.description}
        </p>

        {/* Barre de progression (phase actuelle) */}
        {phase.isCurrent && (
          <div className="mt-5">
            <div className="flex justify-between mb-2">
              <span className="label-kainon">Progression</span>
              <span className="font-accent text-xs text-fn-teal">{phase.progress}%</span>
            </div>
            <div className="h-1 rounded-full bg-white/[0.06] overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-fn-teal"
                initial={{ width: '0%' }}
                animate={isInView ? { width: `${phase.progress}%` } : {}}
                transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
              />
            </div>
          </div>
        )}
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
      className="relative w-full py-24 md:py-32 lg:py-40 px-6 sm:px-10 lg:px-14 bg-fn-noir-profond"
      aria-label="Feuille de route du projet"
    >
      <div className="max-w-7xl mx-auto">
        {/* En-tête */}
        <motion.div
          ref={titleRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <span className="label-kainon block mb-5">Roadmap</span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-titre font-bold text-fn-gris-clair leading-[1.02]">
              Notre feuille
              <br />
              <span className="text-fn-teal">de route</span>
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-base md:text-lg font-corps text-fn-gris leading-relaxed">
              Un plan clair, des jalons concrets, une vision à long terme.
              Chaque phase est conçue pour construire sur les acquis de la précédente.
            </p>
          </div>
        </motion.div>

        {/* Séparateur */}
        <div className="divider-kainon mb-12 md:mb-16" />

        {/* Grille de phases */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {phases.map((phase, index) => (
            <PhaseCard key={phase.id} phase={phase} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
