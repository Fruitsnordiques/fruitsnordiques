'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Roadmap — Timeline glassmorphique avec cartes flottantes
 * Chaque phase est une carte en verre positionnée le long d'une ligne verticale
 * Phase actuelle en accent soleil
 */

const phases = [
  {
    id: 0,
    number: '0',
    title: 'Fondation',
    period: '2025–2026',
    description: 'Étude de faisabilité, sélection du site, permis, design architectural, montage financier, partenariats fondateurs',
    isCurrent: true,
  },
  {
    id: 1,
    number: '1',
    title: 'Construction',
    period: '2026–2027',
    description: 'Construction de la serre (1 ha), installation des systèmes Kainon, aménagement des espaces communautaires',
    isCurrent: false,
  },
  {
    id: 2,
    number: '2',
    title: 'Lancement',
    period: '2027',
    description: 'Première saison de production, ouverture des parcelles communautaires, lancement du programme de formation',
    isCurrent: false,
  },
  {
    id: 3,
    number: '3',
    title: 'Croissance',
    period: '2028–2029',
    description: 'Rentabilité opérationnelle, expansion du programme de formation, développement de la cuisine communautaire',
    isCurrent: false,
  },
  {
    id: 4,
    number: '4',
    title: 'Réplication',
    period: '2030+',
    description: 'Exportation du modèle, licensing technologique Kainon, impact à l\'échelle provinciale',
    isCurrent: false,
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
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      className="relative flex items-start gap-6 md:gap-8"
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.1,
      }}
    >
      {/* Noeud timeline */}
      <div className="relative flex-shrink-0 z-10">
        <motion.div
          className={`w-5 h-5 rounded-full border-[3px] ${
            phase.isCurrent
              ? 'bg-fn-soleil border-fn-soleil/50 shadow-[0_0_20px_rgba(232,160,32,0.4)]'
              : 'bg-fn-vert-vif border-fn-vert-clair/30'
          }`}
          animate={
            phase.isCurrent
              ? { scale: [1, 1.2, 1], boxShadow: ['0 0 20px rgba(232,160,32,0.3)', '0 0 30px rgba(232,160,32,0.5)', '0 0 20px rgba(232,160,32,0.3)'] }
              : {}
          }
          transition={phase.isCurrent ? { duration: 2.5, repeat: Infinity, ease: 'easeInOut' } : {}}
        />
      </div>

      {/* Carte de la phase */}
      <div className={`flex-grow pb-12 last:pb-0 ${index === phases.length - 1 ? 'pb-0' : ''}`}>
        <div className={`rounded-3xl p-6 md:p-8 transition-all duration-500 hover:translate-y-[-4px] ${
          phase.isCurrent
            ? 'bg-gradient-to-br from-fn-soleil/12 to-fn-soleil/5 border border-fn-soleil/20 shadow-[0_8px_32px_rgba(232,160,32,0.1)]'
            : 'glass-card'
        }`}>
          {/* Badge période */}
          <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-accent font-semibold mb-4 ${
            phase.isCurrent
              ? 'bg-fn-soleil/20 text-fn-soleil border border-fn-soleil/25'
              : 'bg-fn-vert-vif/10 text-fn-vert-vif border border-fn-vert-vif/15'
          }`}>
            {phase.period}
          </span>

          {/* Titre */}
          <h3 className="text-xl md:text-2xl font-accent font-bold text-fn-vert-profond mb-3">
            Phase {phase.number} — {phase.title}
          </h3>

          {/* Description */}
          <p className="text-base font-corps text-fn-gris-moyen leading-relaxed">
            {phase.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Roadmap() {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, margin: '-80px' });

  return (
    <section
      id="roadmap"
      className="relative w-full py-20 md:py-28 lg:py-36 bg-fn-neige px-5 sm:px-8"
      aria-label="Feuille de route du projet"
    >
      {/* Décorations */}
      <div className="absolute top-28 right-16 w-40 h-40 rounded-full bg-fn-soleil/5 blur-2xl" aria-hidden="true" />

      <div className="max-w-4xl mx-auto">
        {/* En-tête */}
        <motion.div
          ref={titleRef}
          className="text-center mb-14 md:mb-20"
          initial={{ opacity: 0, y: 24 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-titre font-bold text-fn-vert-profond mb-6 leading-tight">
            Notre feuille
            <br />
            <span className="text-fn-vert-vif">de route</span>
          </h2>

          <p className="text-lg md:text-xl font-corps text-fn-gris-moyen max-w-2xl mx-auto leading-relaxed">
            Un plan clair, des jalons concrets, une vision à long terme.
          </p>
        </motion.div>

        {/* Timeline verticale */}
        <div className="relative pl-2 md:pl-4">
          {/* Ligne verticale */}
          <div
            className="absolute left-[9px] md:left-[11px] top-3 bottom-16 w-[2px] bg-gradient-to-b from-fn-soleil via-fn-vert-vif to-fn-vert-clair/30 rounded-full"
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
