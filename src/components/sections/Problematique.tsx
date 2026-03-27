'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Problématique v4 — Style Kainon
 * Chiffres géants, cartes subtiles, layout 2 colonnes
 */

const problems = [
  {
    id: 'deserts',
    stat: '2.4M',
    title: 'Déserts alimentaires',
    description:
      'Des millions de ménages en zones rurales et périurbaines ont un accès limité à des aliments frais, locaux et abordables.',
  },
  {
    id: 'importations',
    stat: '65%',
    title: 'Dépendance aux importations',
    description:
      "Une part significative des fruits et légumes consommés au Québec provient de l'extérieur du pays.",
  },
  {
    id: 'insecurite',
    stat: '↗',
    title: 'Insécurité alimentaire',
    description:
      'Les crises révèlent la fragilité du système alimentaire industriel.',
  },
  {
    id: 'releve',
    stat: '-28%',
    title: 'Déclin de la relève',
    description:
      'Le secteur agricole peine à attirer et former la prochaine génération.',
  },
  {
    id: 'chomage',
    stat: '11.2%',
    title: 'Chômage chez les jeunes',
    description:
      "Des milliers de jeunes dans les régions manquent d'opportunités concrètes.",
  },
];

function ProblemCard({
  problem,
  index,
}: {
  problem: typeof problems[0];
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
        delay: index * 0.08,
      }}
    >
      <div className="card-kainon p-6 md:p-8 h-full flex flex-col">
        {/* Chiffre géant */}
        <span className="font-titre text-3xl md:text-4xl font-bold text-fn-teal mb-4">
          {problem.stat}
        </span>

        {/* Titre */}
        <h3 className="font-accent font-semibold text-sm text-fn-blanc mb-3 tracking-wide">
          {problem.title}
        </h3>

        {/* Description */}
        <p className="font-corps text-sm text-fn-gris leading-relaxed flex-grow">
          {problem.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Problematique() {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, margin: '-60px' });

  return (
    <section
      id="problematique"
      className="relative w-full py-24 md:py-32 lg:py-40 px-6 sm:px-10 lg:px-14"
      style={{
        background: `linear-gradient(180deg,
          #0A0B0F 0%,
          #121820 15%,
          #1A2A22 35%,
          #1E3328 50%,
          #1A2A22 65%,
          #121820 85%,
          #0A0B0F 100%
        )`,
      }}
      aria-label="Section sur le défi alimentaire du Québec"
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
            <span className="label-kainon block mb-5">Problématique</span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-titre font-bold text-fn-gris-clair leading-[1.02]">
              Le défi
              <br />
              alimentaire
              <br />
              <span className="text-fn-teal">du Québec</span>
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-base md:text-lg font-corps text-fn-gris leading-relaxed">
              Notre système alimentaire est fragile. Dépendance aux importations,
              déserts alimentaires, déclin de la relève — les signaux d'alerte
              se multiplient.
            </p>
          </div>
        </motion.div>

        {/* Séparateur */}
        <div className="divider-kainon mb-12 md:mb-16" />

        {/* Grille de problèmes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {problems.map((problem, index) => (
            <ProblemCard
              key={problem.id}
              problem={problem}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
