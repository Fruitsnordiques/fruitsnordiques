'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Composant Impact — Section des trois dimensions d'impact
 * Affiche 3 colonnes d'impact (économique, écologique, social)
 * avec animations au scroll et accents de couleur distincts
 * Grille responsive : 1 col mobile, 3 cols desktop
 */

interface ImpactCategory {
  id: string;
  title: string;
  emoji: string;
  accentColor: string;
  bulletPoints: string[];
}

const impactCategories: ImpactCategory[] = [
  {
    id: 'economic',
    title: 'Impact économique',
    emoji: '💰',
    accentColor: 'border-fn-soleil',
    bulletPoints: [
      "Création d'emplois directs permanents",
      "Stimulation de l'économie locale",
      'Filière de transformation à valeur ajoutée',
      'Modèle reproductible exportable',
    ],
  },
  {
    id: 'ecological',
    title: 'Impact écologique',
    emoji: '🌍',
    accentColor: 'border-fn-vert-vif',
    bulletPoints: [
      'Réduction des émissions de transport',
      'Bilan carbone maîtrisé (technologies Kainon)',
      "Gestion optimisée de l'eau",
      'Réduction du gaspillage alimentaire',
    ],
  },
  {
    id: 'social',
    title: 'Impact social',
    emoji: '❤️',
    accentColor: 'border-fn-rouge-baie',
    bulletPoints: [
      'Sécurité alimentaire régionale renforcée',
      "Espace d'appartenance communautaire",
      'Formation et insertion professionnelle',
      'Accès aux aliments frais pour revenus modestes',
    ],
  },
];

/**
 * Composant de carte d'impact individuelle
 */
function ImpactCardComponent({
  category,
  index,
}: {
  category: ImpactCategory;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        delay: index * 0.15,
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
      <div className={`h-full bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-8 flex flex-col border-t-4 ${category.accentColor}`}>
        {/* Icône */}
        <div className="text-5xl mb-4" aria-hidden="true">
          {category.emoji}
        </div>

        {/* Titre */}
        <h3 className="font-accent font-bold text-xl md:text-2xl text-fn-gris-fonce mb-6">
          {category.title}
        </h3>

        {/* Points à puces */}
        <ul className="space-y-3 flex-grow">
          {category.bulletPoints.map((point, idx) => (
            <li
              key={idx}
              className="flex items-start font-corps text-base text-fn-gris-moyen"
            >
              <span className="inline-block w-2 h-2 rounded-full bg-fn-gris-moyen mr-3 mt-2 flex-shrink-0"></span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Impact() {
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
      id="impact"
      ref={sectionRef}
      className="relative w-full py-16 md:py-24 lg:py-32 bg-fn-neige px-6 sm:px-8"
      aria-label="Section sur les trois dimensions d'impact"
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
            Un impact à trois dimensions
          </h2>
        </motion.div>

        {/* Grille de cartes d'impact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {impactCategories.map((category, index) => (
            <ImpactCardComponent
              key={category.id}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
