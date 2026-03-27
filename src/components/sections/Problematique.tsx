'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Problématique — Dashboard data : chiffres d'urgence
 * Cartes sombres avec indicateurs colorés et bordures accent
 */

interface ProblemCard {
  id: string;
  icon: string;
  stat: string;
  statColor: string;
  title: string;
  description: string;
  gridClass: string;
}

const problems: ProblemCard[] = [
  {
    id: 'deserts-alimentaires',
    icon: '🏜️',
    stat: '2.4M',
    statColor: 'text-fn-rouge',
    title: 'Déserts alimentaires',
    description:
      'Des millions de ménages en zones rurales et périurbaines ont un accès limité à des aliments frais, locaux et abordables.',
    gridClass: 'md:col-span-2 md:row-span-2',
  },
  {
    id: 'dependance-importations',
    icon: '🌍',
    stat: '65%',
    statColor: 'text-fn-orange',
    title: 'Dépendance aux importations',
    description:
      "Une part significative des fruits et légumes consommés au Québec provient de l'extérieur du pays.",
    gridClass: 'md:col-span-1',
  },
  {
    id: 'insecurite-alimentaire',
    icon: '⚠️',
    stat: '↗',
    statColor: 'text-fn-jaune',
    title: 'Insécurité alimentaire',
    description:
      'Les crises révèlent la fragilité du système alimentaire industriel.',
    gridClass: 'md:col-span-1',
  },
  {
    id: 'declin-releve',
    icon: '👨‍🌾',
    stat: '-28%',
    statColor: 'text-fn-rouge',
    title: 'Déclin de la relève',
    description:
      'Le secteur agricole peine à attirer et former la prochaine génération.',
    gridClass: 'md:col-span-1',
  },
  {
    id: 'chomage-jeunes',
    icon: '📊',
    stat: '11.2%',
    statColor: 'text-fn-orange',
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
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      className={`${card.gridClass}`}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.08,
      }}
    >
      <div className={`h-full card-dark p-6 md:p-8 flex flex-col group ${
        index === 0 ? 'md:p-10' : ''
      }`}>
        {/* Entête : icône + stat */}
        <div className="flex items-center justify-between mb-4">
          <span className={`${index === 0 ? 'text-4xl' : 'text-2xl'}`} aria-hidden="true">
            {card.icon}
          </span>
          <span className={`font-accent font-bold ${card.statColor} ${
            index === 0 ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'
          }`}>
            {card.stat}
          </span>
        </div>

        {/* Titre */}
        <h3 className={`font-accent font-bold text-fn-blanc mb-2 ${
          index === 0 ? 'text-xl md:text-2xl' : 'text-base md:text-lg'
        }`}>
          {card.title}
        </h3>

        {/* Description */}
        <p className={`font-corps text-fn-gris leading-relaxed flex-grow ${
          index === 0 ? 'text-base' : 'text-sm'
        }`}>
          {card.description}
        </p>

        {/* Barre indicatrice en bas */}
        <div className="mt-4 h-1 rounded-full bg-fn-gris-bordure overflow-hidden">
          <motion.div
            className={`h-full rounded-full ${
              card.statColor === 'text-fn-rouge' ? 'bg-fn-rouge' :
              card.statColor === 'text-fn-orange' ? 'bg-fn-orange' :
              'bg-fn-jaune'
            }`}
            initial={{ width: '0%' }}
            animate={isInView ? { width: index === 0 ? '85%' : `${60 + index * 8}%` } : {}}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.4 + index * 0.1 }}
          />
        </div>
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
      className="relative w-full py-20 md:py-28 lg:py-32 px-5 sm:px-8"
      aria-label="Section sur le défi alimentaire du Québec"
      style={{
        background: `linear-gradient(180deg,
          #0C0E14 0%,
          #121820 15%,
          #1A2A22 35%,
          #1E3328 50%,
          #1A2A22 65%,
          #121820 85%,
          #0C0E14 100%
        )`,
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Titre */}
        <motion.div
          ref={titleRef}
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-1 rounded-full bg-fn-rouge" />
            <span className="font-accent text-xs font-semibold text-fn-gris tracking-wider uppercase">Problématique</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-titre font-bold text-fn-blanc leading-tight">
            Le défi alimentaire
            <br />
            <span className="text-fn-orange">du Québec</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 auto-rows-auto">
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
