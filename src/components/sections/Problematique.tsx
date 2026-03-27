'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Composant Problematique — Section du défi alimentaire
 * Affiche 5 cartes de problèmes avec animations au scroll
 * Grille responsive : 1 col mobile, 2 cols md, 3 cols lg
 */

interface ProblemCard {
  id: string;
  emoji: string;
  title: string;
  description: string;
}

const problems: ProblemCard[] = [
  {
    id: 'deserts-alimentaires',
    emoji: '🏜️',
    title: 'Déserts alimentaires',
    description:
      'Des millions de ménages en zones rurales et périurbaines ont un accès limité à des aliments frais, locaux et abordables.',
  },
  {
    id: 'dependance-importations',
    emoji: '🌍',
    title: 'Dépendance aux importations',
    description:
      "Une part significative des fruits et légumes consommés au Québec provient de l'extérieur du pays.",
  },
  {
    id: 'insecurite-alimentaire',
    emoji: '⚠️',
    title: 'Insécurité alimentaire',
    description:
      'Les crises révèlent la fragilité du système alimentaire industriel.',
  },
  {
    id: 'declin-releve',
    emoji: '👨‍🌾',
    title: 'Déclin de la relève',
    description:
      'Le secteur agricole peine à attirer et former la prochaine génération.',
  },
  {
    id: 'chomage-jeunes',
    emoji: '📊',
    title: 'Chômage chez les jeunes',
    description:
      "Des milliers de jeunes dans les régions manquent d'opportunités concrètes.",
  },
];

/**
 * Composant de carte de problème
 */
function ProblemCardComponent({
  card,
  index,
}: {
  card: ProblemCard;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="h-full"
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <div className="h-full bg-white border-l-4 border-fn-rouge-baie rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col">
        {/* Icône emoji */}
        <div className="text-4xl mb-4" aria-hidden="true">
          {card.emoji}
        </div>

        {/* Titre */}
        <h3 className="font-accent font-bold text-lg md:text-xl text-fn-gris-fonce mb-3">
          {card.title}
        </h3>

        {/* Description */}
        <p className="font-corps text-base text-fn-gris-moyen leading-relaxed flex-grow">
          {card.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Problematique() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, {
    once: true,
    margin: '-100px',
  });

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="problematique"
      ref={sectionRef}
      className="relative w-full py-16 md:py-24 lg:py-32 bg-white px-6 sm:px-8"
      aria-label="Section sur le défi alimentaire du Québec"
    >
      <div className="max-w-7xl mx-auto">
        {/* Titre de la section */}
        <motion.div
          ref={titleRef}
          className="mb-12 md:mb-16 lg:mb-20"
          variants={titleVariants}
          initial="hidden"
          animate={isTitleInView ? 'visible' : 'hidden'}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-titre font-bold text-fn-gris-fonce text-center max-w-3xl mx-auto leading-tight">
            Le défi alimentaire du Québec
          </h2>
        </motion.div>

        {/* Grille de cartes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
